import { Json } from './json';

export interface ProfilesTable {
  Row: {
    id: string
    avatar_url: string | null
    discord_id: string | null
    is_creator: boolean | null
    username: string | null
    created_at: string
  }
  Insert: {
    id: string
    avatar_url?: string | null
    discord_id?: string | null
    is_creator?: boolean | null
    username?: string | null
    created_at?: string
  }
  Update: {
    id?: string
    avatar_url?: string | null
    discord_id?: string | null
    is_creator?: boolean | null
    username?: string | null
    created_at?: string
  }
  Relationships: []
}