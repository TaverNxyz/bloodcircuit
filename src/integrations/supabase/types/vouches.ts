export interface VouchesTable {
  Row: {
    id: string;
    user_id: string;
    content: string;
    rating: number;
    created_at: string;
  };
  Insert: {
    id?: string;
    user_id: string;
    content: string;
    rating: number;
    created_at?: string;
  };
  Update: {
    id?: string;
    user_id?: string;
    content?: string;
    rating?: number;
    created_at?: string;
  };
  Relationships: [];
}

export type Vouch = VouchesTable['Row'];

export interface VouchWithProfile extends Vouch {
  profiles: {
    username: string;
    avatar_url: string;
  };
}