<script lang="ts">
	import type { IProject } from '../../../types'

	export let project: IProject
	console.log(project.picture)
</script>

<div class="card h-full bg-base-100 shadow-xl">
	<figure class="h-1/2">
		<img class="object-cover w-full h-full" src={project.picture} alt={project.title} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{project.title}</h2>
		<p>{project.description}</p>
		<div class="card-actions justify-end">
			<slot />
		</div>
	</div>
</div>
