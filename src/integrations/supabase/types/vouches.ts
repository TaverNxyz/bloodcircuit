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
  Relationships: [
    {
      foreignKeyName: "vouches_user_id_fkey";
      columns: ["user_id"];
      isOneToOne: false;
      referencedRelation: "users";
      referencedColumns: ["id"];
    }
  ];
}

export type Vouch = VouchesTable['Row'];