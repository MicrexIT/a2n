import { writable } from 'svelte/store'
import type { IProject } from "../types"
import supabase from '../lib/supabase'

export const projects = writable<IProject[]>([])

export const loadProjects = async () => {
  const { data, error } = await supabase.from('projects')
  if (error) {
    return console.error(error)
  }
  projects.set(data)
}

