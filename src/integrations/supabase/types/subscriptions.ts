export interface SubscriptionsTable {
  Row: {
    id: string;
    user_id: string;
    status: string;
    current_period_end: string | null;
    created_at: string;
  };
  Insert: {
    id?: string;
    user_id: string;
    status: string;
    current_period_end?: string | null;
    created_at?: string;
  };
  Update: {
    id?: string;
    user_id?: string;
    status?: string;
    current_period_end?: string | null;
    created_at?: string;
  };
  Relationships: [
    {
      foreignKeyName: "subscriptions_user_id_fkey"
      columns: ["user_id"]
      referencedRelation: "users"
      referencedColumns: ["id"]
    }
  ];
}

export type Subscription = SubscriptionsTable['Row'];