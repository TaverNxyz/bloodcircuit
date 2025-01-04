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
  Relationships: [
    {
      foreignKeyName: "orders_user_id_fkey";
      columns: ["user_id"];
      isOneToOne: false;
      referencedRelation: "users";
      referencedColumns: ["id"];
    }
  ];
}

export type Order = OrdersTable['Row'];