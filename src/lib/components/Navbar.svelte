<script lang="ts">
	import { user } from '../../stores/authStore'
	import { signOut } from '../services'
	import supabase from '../supabase'

	$: isAdmin = async () => {
		if (!$user) {
			return false
		}
		let { data, error, status } = await supabase
			.from('profiles')
			.select(`profile_type`)
			.eq('id', $user.id)
			.single()

		console.log(data)

		if (error && status !== 406) {
			console.error(error)
			return false
		}

		if (data.profile_type !== 'admin') {
			return false
		}
		return true
	}
</script>

<div class="navbar sticky top-0 left-0 right-0 bg-base-100 z-10">
	<div class="navbar-start">
		<a href="/">
			<img src="/arslane_dark.svg" class="h-8 w-auto sm:h-10" alt="Arslane2Narnia" />
		</a>
	</div>

	<div class="navbar-end flex flex-row items-center justify-end gap-1 lg:gap-2">
		{#if !!$user}
			<div><span>{$user.email?.split('@')[0] || 'narnietto'}</span></div>
		{/if}
		<div class="dropdown dropdown-end">
			<div tabindex="0" class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>

			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#if isAdmin}
					<li><a href="/admin/projects">Edit Projects</a></li>
				{/if}

				<li><a href="/">Homepage</a></li>
				<li><a href="/about">About us</a></li>
				{#if !!$user}
					<li><a href="/projects">Projects</a></li>
					<li><button on:click={signOut}>Log out</button></li>
				{:else}
					<li><a href="/auth">Log in</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>
