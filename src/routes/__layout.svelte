<script lang="ts">
	import supabase from '$lib/supabase'
	import Footer from '$components/Footer.svelte'
	import Navbar from '$components/Navbar.svelte'
	import { user } from '$stores/authStore'
	import '../app.css'

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
