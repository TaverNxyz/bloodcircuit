import { Json } from './json';

export interface AssetsTable {
  Row: {
    id: string
    creator_id: string
    title: string
    description: string | null
    price: number
    category_id: string
    file_path: string | null
    preview_path: string | null
    status: string
    downloads: number | null
    created_at: string
    updated_at: string
  }
  Insert: {
    id?: string
    creator_id: string
    title: string
    description?: string | null
    price: number
    category_id: string
    file_path?: string | null
    preview_path?: string | null
    status?: string
    downloads?: number | null
    created_at?: string
    updated_at?: string
  }
  Update: {
    id?: string
    creator_id?: string
    title?: string
    description?: string | null
    price?: number
    category_id?: string
    file_path?: string | null
    preview_path?: string | null
    status?: string
    downloads?: number | null
    created_at?: string
    updated_at?: string
  }
  Relationships: [
    {
      foreignKeyName: "assets_creator_id_fkey"
      columns: ["creator_id"]
      isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    }
  ]
}