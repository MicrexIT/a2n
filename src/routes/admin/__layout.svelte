<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { user } from '../../stores/authStore'

	let hidden = true
	onMount(async () => {
		try {
			if (!$user) {
				goto('/')
				return
			}
			if ($user.user_metadata.profileType !== 'admin') {
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
