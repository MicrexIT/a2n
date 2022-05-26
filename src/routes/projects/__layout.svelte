<script lang="ts">
	import { browser } from '$app/env'

	import { goto } from '$app/navigation'
	import { user } from '$stores/authStore'
	import { onMount } from 'svelte'
	import { loadProjects } from '$stores/projectsStore'

	$: if (browser && !$user) {
		goto('/auth')
	}
	onMount(() => {
		loadProjects()
	})
</script>

<slot />
