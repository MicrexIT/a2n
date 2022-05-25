<script lang="ts">
	import supabase from '$lib/supabase'
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import { user } from '../stores/authStore'
	import Footer from '../lib/components/Footer.svelte'

	user.set(supabase.auth.user())

	$: supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user || null)
	})
</script>

<main class="container mx-auto min-h-screen">
	<Navbar />
	<slot />
</main>
<Footer />
