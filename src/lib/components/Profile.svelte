<script lang="ts">
	import supabase from '../supabase'
	import { user } from '../../stores/authStore'
	import type { PostgrestError } from '@supabase/supabase-js'

	let loading = true
	let username: string
	let website: string
	let avatar_url: string

	$: async () => {
		try {
			loading = true
			const user = supabase.auth.user()

			let { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user?.id)
				.single()

			if (error && status !== 406) throw error

			if (data) {
				username = data.username
				website = data.website
				avatar_url = data.avatar_url
			}
		} catch (error) {
			alert((error as PostgrestError).message)
		} finally {
			loading = false
		}
	}

	async function updateProfile() {
		try {
			loading = true
			const user = supabase.auth.user()
			if (!user) {
				throw { message: 'user not logged in' }
			}

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url,
				updated_at: new Date()
			}

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			})

			if (error) throw error
		} catch (error) {
			alert((error as PostgrestError).message)
		} finally {
			loading = false
		}
	}

	async function signOut() {
		try {
			loading = true
			let { error } = await supabase.auth.signOut()
			if (error) throw error
		} catch (error) {
			alert((error as PostgrestError).message)
		} finally {
			loading = false
		}
	}
</script>

<form class="form-widget" on:submit|preventDefault={updateProfile}>
	<div>
		<label for="email">Email</label>
		<input id="email" type="text" value={$user?.email || ''} disabled />
	</div>
	<div>
		<label for="username">Name</label>
		<input id="username" type="text" bind:value={username} />
	</div>
	<div>
		<label for="website">Website</label>
		<input id="website" type="website" bind:value={website} />
	</div>

	<div>
		<input
			type="submit"
			class="button block primary"
			value={loading ? 'Loading ...' : 'Update'}
			disabled={loading}
		/>
	</div>

	<div>
		<button class="button block" on:click={signOut} disabled={loading}> Sign Out </button>
	</div>
</form>
