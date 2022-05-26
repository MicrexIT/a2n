import { writable } from 'svelte/store'
import supabase from '$lib/supabase'
import type { IProject } from "../types"

export const projects = writable<IProject[]>([])

export const loadProjects = async () => {
  const { data, error } = await supabase.from('projects')
  if (error) {
    return console.error(error)
  }
  projects.set(data)
}

