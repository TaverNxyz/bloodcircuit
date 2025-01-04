export interface OrdersTable {
  Row: {
    id: string;
    user_id: string;
    status: string;
    amount: number;
    created_at: string;
  };
  Insert: {
    id?: string;
    user_id: string;
    status: string;
    amount: number;
    created_at?: string;
  };
  Update: {
    id?: string;
    user_id?: string;
    status?: string;
    amount?: number;
    created_at?: string;
  };
  Relationships: [];
}

export type Order = OrdersTable['Row'];