import type { Profile, Vouch } from './database.types';

export interface VouchWithProfile extends Vouch {
  profiles?: Profile | null;
}