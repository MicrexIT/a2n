<script lang="ts">
	import { browser } from '$app/env'

	import { goto } from '$app/navigation'
	import { user } from '../../stores/authStore'

	$: if (browser && !$user) {
		goto('/auth')
	}
</script>

<slot />
