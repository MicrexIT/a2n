import supabase from "./supabase"

export function getUser() {
  return supabase.auth.user()
}

interface SignInProps {
  email: string
}

interface AuthResponse {
  ok: boolean
  error: SupabaseError | null
}

export interface SupabaseError {
  message: string
  status: number
}

export async function signIn({email}: SignInProps): Promise<AuthResponse> {
  const {error} = await supabase.auth.signIn({email})
  return {ok: !error, error}
}

export async function signOut(): Promise<AuthResponse> {
  const {error} = await supabase.auth.signOut()
  return {ok: !error, error}
}
