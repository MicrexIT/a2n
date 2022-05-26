<script lang="ts">
	import supabase from '$lib/supabase'
	import Footer from '$components/Footer.svelte'
	import Navbar from '$components/Navbar.svelte'
	import { user } from '$stores/authStore'
	import '../app.css'
	import { fade } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'

	user.set(supabase.auth.user())

	$: supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user || null)
	})
</script>

<main class="container relative mx-auto min-h-screen">
	<Navbar />
	<div class="h-full" transition:fade={{ duration: 400, delay: 50, easing: cubicInOut }}>
		<slot />
	</div>
</main>
<Footer />
