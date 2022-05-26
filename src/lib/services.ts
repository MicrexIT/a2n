import supabase from "./supabase"
// import 

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

const redirectTo = import.meta.env.PROD ? "https://a2n.vercel.app/auth" : "http://localhost:3000/auth"

export async function signIn({ email }: SignInProps): Promise<AuthResponse> {
  const { error } = await supabase.auth.signIn({ email }, {
    redirectTo
  })
  return { ok: !error, error }
}

export async function signOut(): Promise<AuthResponse> {
  const { error } = await supabase.auth.signOut()
  return { ok: !error, error }
}
