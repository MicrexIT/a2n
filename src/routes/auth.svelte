<script>
	import { browser } from '$app/env'
	import { goto } from '$app/navigation'
	import Auth from '$views/Auth.svelte'
	import { user } from '$stores/authStore'

	$: if (browser && $user) {
		goto('/projects')
	}
</script>

<Auth />
