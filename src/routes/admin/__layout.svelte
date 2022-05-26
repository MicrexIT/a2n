<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import supabase from '$lib/supabase'

	let hidden = true
	onMount(async () => {
		try {
			const user = supabase.auth.user()
			if (!user) {
				goto('/')
				return
			}
			let { data, error, status } = await supabase
				.from('profiles')
				.select(`profile_type`)
				.eq('id', user.id)
				.single()

			if (error && status !== 406) {
				console.error(error)
				goto('/')
				return
			}

			if (data.profile_type !== 'admin') {
				goto('/')
				return
			}
			hidden = false
		} catch (error) {
			console.error((error as any).message)
			goto('/')
		}
	})
</script>

{#if !hidden}
	<slot />
{/if}
