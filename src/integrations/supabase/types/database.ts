import { ProfilesTable } from './profiles';
import { AssetsTable } from './assets';
import { OrdersTable } from './orders';
import { SubscriptionsTable } from './subscriptions';

export interface Database {
  public: {
    Tables: {
      profiles: ProfilesTable;
      assets: AssetsTable;
      orders: OrdersTable;
      subscriptions: SubscriptionsTable;
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