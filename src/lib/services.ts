import { user } from "../stores/authStore"
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

  const supabaseUser = supabase.auth.user()
  if (error || !supabaseUser) {
    return { ok: false, error }
  }

  const { data, error: profileError, status } = await supabase
    .from('profiles')
    .select(`profile_type`)
    .eq('id', supabaseUser.id)
    .single()


  if (profileError && status !== 406) {
    console.error(profileError)
    return { ok: true, error }
  }

  user.set({
    ...supabaseUser, user_metadata: {
      profileType: data.profile_type ?? "viewer"
    }
  })

  return { ok: true, error }
}

export async function signOut(): Promise<AuthResponse> {
  const { error } = await supabase.auth.signOut()
  user.set(null)
  return { ok: !error, error }
}
