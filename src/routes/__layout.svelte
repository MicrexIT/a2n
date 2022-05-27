<script lang="ts">
	import supabase from '$lib/supabase'
	import { Circle } from 'svelte-loading-spinners'
	import Footer from '$components/Footer.svelte'
	import Navbar from '$components/Navbar.svelte'
	import { setUser } from '$stores/authStore'
	import '../app.css'
	import { fade } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { onMount } from 'svelte'
	import Overlay from '../lib/components/Overlay.svelte'

	$: loading = false
	onMount(async () => {
		await setUser()
		loading = false
	})

	$: supabase.auth.onAuthStateChange(async (_, session) => {
		loading = true
		await setUser()
		loading = false
	})
</script>

<main class="container relative mx-auto min-h-screen">
	<Navbar />
	<div class="h-full" transition:fade={{ duration: 400, delay: 50, easing: cubicInOut }}>
		{#if !loading}
			<slot />
		{:else}
			<Overlay>
				<Circle size="60" color="#027b91" unit="px" duration="1s" />
			</Overlay>
		{/if}
	</div>
</main>
<Footer />
