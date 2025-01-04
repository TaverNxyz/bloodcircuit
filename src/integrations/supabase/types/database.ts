import { ProfilesTable } from './profiles';
import { OrdersTable } from './orders';
import { SubscriptionsTable } from './subscriptions';
import { VouchesTable } from './vouches';

export interface Database {
  public: {
    Tables: {
      profiles: ProfilesTable;
      orders: OrdersTable;
      subscriptions: SubscriptionsTable;
      vouches: VouchesTable;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}