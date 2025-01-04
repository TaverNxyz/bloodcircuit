import { Json } from './json';

export interface OrdersTable {
  Row: {
    id: string
    user_id: string
    product_id: string
    status: string
    billgang_order_id: string | null
    amount: number
    created_at: string
    updated_at: string
  }
  Insert: {
    id?: string
    user_id: string
    product_id: string
    status: string
    billgang_order_id?: string | null
    amount: number
    created_at?: string
    updated_at?: string
  }
  Update: {
    id?: string
    user_id?: string
    product_id?: string
    status?: string
    billgang_order_id?: string | null
    amount?: number
    created_at?: string
    updated_at?: string
  }
  Relationships: [
    {
      foreignKeyName: "orders_user_id_fkey"
      columns: ["user_id"]
      isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    }
  ]
}