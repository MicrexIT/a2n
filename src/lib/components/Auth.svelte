<script lang="ts">
	import { signIn, type SupabaseError } from '../services'
import Title from './Title.svelte';

	let loading = false
	let email: string
	const handleLogin = async () => {
		try {
			loading = true
			console.log(email)
			const { error } = await signIn({ email })

			if (error) throw error
			alert('Check your email for the login link!')
		} catch (error: any) {
			console.error(error)
			alert(error.message || error.error_description)
		} finally {
			loading = false
		}
	}
</script>

<div class="flex justify-center">
	<div class="flex flex-col gap-6 lg:gap-12 mt-12 lg:mt-24">
		<div class="pt-4 md:pt-6">
			<Title>Log In</Title>
			<p class="text-center mt-4 md:mt-6">Log in via magic link with your email</p>
		</div>
		<form on:submit|preventDefault={handleLogin} class="w-full ">
			<div class="form-controll max-w-sm flex flex-col">
				<label class="label" for="email"><span class="label-text">Email</span></label>
				<input
					class="input input-lg input-primary"
					name="email"
					type="email"
					placeholder="Your email"
					bind:value={email}
				/>
				<button type="submit" class="btn btn-primary mt-2" disabled={loading}> Submit </button>
			</div>
		</form>
	</div>
</div>
