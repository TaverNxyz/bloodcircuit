import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { productId, plan } = await req.json()
    const billgangApiKey = Deno.env.get('BILLGANG_API_KEY')
    
    if (!billgangApiKey) {
      throw new Error('Billgang API key not configured')
    }

    // Create payment session with Billgang
    const response = await fetch('https://api.billgang.com/v1/payment-sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${billgangApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId,
        plan,
        successUrl: `${req.headers.get('origin')}/payment/success`,
        cancelUrl: `${req.headers.get('origin')}/payment/cancel`,
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create payment session')
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        } 
      }
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})