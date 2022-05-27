import type { User } from '@supabase/supabase-js'
import { writable } from 'svelte/store'
import supabase from '../lib/supabase'

export const user = writable<User | null>(null)

export async function setUser() {
    const supabaseUser = supabase.auth.user()
    if (!supabaseUser) {
        user.set(null)
        return
    }

    const {
        data,
        error: profileError,
        status
    } = await supabase.from('profiles').select(`profile_type`).eq('id', supabaseUser.id).single()

    if (profileError && status !== 406) {
        console.error(profileError)
        user.set(supabaseUser)
        return
    }

    user.set({
        ...supabaseUser,
        user_metadata: {
            profileType: data.profile_type ?? 'viewer'
        }
    })
}

