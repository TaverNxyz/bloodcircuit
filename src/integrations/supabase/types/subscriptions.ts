export interface SubscriptionsTable {
  Row: {
    id: string;
    user_id: string;
    product_id: string;
    status: string;
    billgang_subscription_id: string | null;
    current_period_end: string | null;
    created_at: string;
    updated_at: string;
  };
  Insert: {
    id?: string;
    user_id: string;
    product_id: string;
    status: string;
    billgang_subscription_id?: string | null;
    current_period_end?: string | null;
    created_at?: string;
    updated_at?: string;
  };
  Update: {
    id?: string;
    user_id?: string;
    product_id?: string;
    status?: string;
    billgang_subscription_id?: string | null;
    current_period_end?: string | null;
    created_at?: string;
    updated_at?: string;
  };
  Relationships: [
    {
      foreignKeyName: "subscriptions_user_id_fkey";
      columns: ["user_id"];
      isOneToOne: false;
      referencedRelation: "profiles";
      referencedColumns: ["id"];
    }
  ];
}

export type Subscription = SubscriptionsTable['Row'];