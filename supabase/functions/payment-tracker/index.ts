import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { address } = await req.json()
    
    // In a real implementation, you would:
    // 1. Connect to crypto node or service to check transaction status
    // 2. Verify payment amount
    // 3. Update payment status in database
    
    const { data: payment, error: fetchError } = await supabase
      .from('payments')
      .select('*')
      .eq('address', address)
      .single()

    if (fetchError) {
      throw fetchError
    }

    // Simulate checking blockchain for transaction
    const confirmations = Math.floor(Math.random() * 6)
    const status = confirmations > 3 ? 'completed' : 'confirming'

    const { error: updateError } = await supabase
      .from('payments')
      .update({ status })
      .eq('address', address)

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ status, confirmations }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})