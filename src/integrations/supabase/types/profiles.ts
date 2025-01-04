export interface ProfilesTable {
  Row: {
    id: string;
    avatar_url: string | null;
    username: string | null;
    full_name: string | null;
    website: string | null;
    updated_at: string | null;
  };
  Insert: {
    id: string;
    avatar_url?: string | null;
    username?: string | null;
    full_name?: string | null;
    website?: string | null;
    updated_at?: string | null;
  };
  Update: {
    id?: string;
    avatar_url?: string | null;
    username?: string | null;
    full_name?: string | null;
    website?: string | null;
    updated_at?: string | null;
  };
  Relationships: [
    {
      foreignKeyName: "profiles_id_fkey"
      columns: ["id"]
      referencedRelation: "users"
      referencedColumns: ["id"]
    }
  ];
}

export type Profile = ProfilesTable['Row'];