export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      orders: {
        Row: Order;
        Insert: OrderInsert;
        Update: OrderUpdate;
      };
      profiles: {
        Row: Profile;
        Insert: ProfileInsert;
        Update: ProfileUpdate;
      };
      subscriptions: {
        Row: Subscription;
        Insert: SubscriptionInsert;
        Update: SubscriptionUpdate;
      };
      todos: {
        Row: Todo;
        Insert: TodoInsert;
        Update: TodoUpdate;
      };
      vouches: {
        Row: Vouch;
        Insert: VouchInsert;
        Update: VouchUpdate;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export interface Order {
  id: string;
  user_id: string;
  status: string;
  amount: number;
  created_at: string;
}

export interface OrderInsert {
  id?: string;
  user_id: string;
  status: string;
  amount: number;
  created_at?: string;
}

export interface OrderUpdate {
  id?: string;
  user_id?: string;
  status?: string;
  amount?: number;
  created_at?: string;
}

export interface Profile {
  id: string;
  updated_at: string | null;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
}

export interface ProfileInsert {
  id: string;
  updated_at?: string | null;
  username?: string | null;
  full_name?: string | null;
  avatar_url?: string | null;
  website?: string | null;
}

export interface ProfileUpdate {
  id?: string;
  updated_at?: string | null;
  username?: string | null;
  full_name?: string | null;
  avatar_url?: string | null;
  website?: string | null;
}

export interface Subscription {
  id: string;
  user_id: string;
  status: string;
  current_period_end: string | null;
  created_at: string;
}

export interface SubscriptionInsert {
  id?: string;
  user_id: string;
  status: string;
  current_period_end?: string | null;
  created_at?: string;
}

export interface SubscriptionUpdate {
  id?: string;
  user_id?: string;
  status?: string;
  current_period_end?: string | null;
  created_at?: string;
}

export interface Todo {
  id: number;
  user_id: string;
  task: string | null;
  is_complete: boolean | null;
  inserted_at: string;
}

export interface TodoInsert {
  id?: number;
  user_id: string;
  task?: string | null;
  is_complete?: boolean | null;
  inserted_at?: string;
}

export interface TodoUpdate {
  id?: number;
  user_id?: string;
  task?: string | null;
  is_complete?: boolean | null;
  inserted_at?: string;
}

export interface Vouch {
  id: string;
  user_id: string;
  content: string;
  rating: number;
  created_at: string;
}

export interface VouchInsert {
  id?: string;
  user_id: string;
  content: string;
  rating: number;
  created_at?: string;
}

export interface VouchUpdate {
  id?: string;
  user_id?: string;
  content?: string;
  rating?: number;
  created_at?: string;
}