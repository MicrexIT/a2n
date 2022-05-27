<script>
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'
	import Auth from '$views/Auth.svelte'
	import { user } from '$stores/authStore'

	let show = false
	$: if (browser && $user) {
		goto('/projects')
	} else {
		show = true
	}
</script>

{#if show}
	<Auth />
{/if}
