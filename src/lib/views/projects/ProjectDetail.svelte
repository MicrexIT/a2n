<script lang="ts">
	import type { IProject } from '../../../types'
	import SubTitle from '$components/SubTitle.svelte'

	export let project: IProject
</script>

<div class="grid h-full my-6 md:my-12 lg:my-20 mx-auto">
	<div class="card min-h-max lg:card-side bg-base-100 shadow-xl">
		<figure class="lg:w-1/2">
			<img class="object-cover w-full h-full" src={project.picture} alt={project.title} />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{project.title}</h2>
			<p>{project.type}</p>
			{#if project.where}
				<p>{project.where}</p>
			{/if}
			<p>{project.status}</p>
			<p>{project.description}</p>
			<div class="card-actions justify-end">
				<a tabindex={7} href="/projects" class="btn btn-link">Back</a>
				<button class="btn btn-primary" disabled>Vote</button>
			</div>
		</div>
	</div>
</div>
