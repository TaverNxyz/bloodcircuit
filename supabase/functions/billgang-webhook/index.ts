import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const billgangApiKey = Deno.env.get('BILLGANG_API_KEY')
    if (!billgangApiKey) {
      throw new Error('Billgang API key not configured')
    }

    const signature = req.headers.get('billgang-signature')
    if (!signature) {
      throw new Error('No signature found in webhook request')
    }

    const event = await req.json()
    console.log('Received webhook event:', event.type)

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Handle different webhook events
    switch (event.type) {
      case 'payment.succeeded':
        await supabase
          .from('orders')
          .update({ status: 'completed' })
          .eq('billgang_order_id', event.data.id)
        break

      case 'subscription.created':
      case 'subscription.updated':
        await supabase
          .from('subscriptions')
          .upsert({
            billgang_subscription_id: event.data.id,
            status: event.data.status,
            current_period_end: event.data.current_period_end,
            updated_at: new Date().toISOString()
          })
          .eq('billgang_subscription_id', event.data.id)
        break

      case 'subscription.deleted':
        await supabase
          .from('subscriptions')
          .update({ status: 'cancelled' })
          .eq('billgang_subscription_id', event.data.id)
        break

      default:
        console.log(`Unhandled webhook event type: ${event.type}`)
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Webhook error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})