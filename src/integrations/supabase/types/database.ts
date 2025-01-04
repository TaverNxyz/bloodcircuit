export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          stock_quantity: number
          category_id: string | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          stock_quantity?: number
          category_id?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          stock_quantity?: number
          category_id?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          parent_category_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          parent_category_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          parent_category_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      addresses: {
        Row: {
          id: string
          user_id: string
          street_address: string
          city: string
          state: string
          postal_code: string
          country: string
          is_default: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          street_address: string
          city: string
          state: string
          postal_code: string
          country: string
          is_default?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          street_address?: string
          city?: string
          state?: string
          postal_code?: string
          country?: string
          is_default?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      // ... Additional table types will be added in subsequent updates
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}