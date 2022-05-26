<script lang="ts">
	import type { IProject } from '../../../types'

	export let project: IProject
	console.log(project.picture)
</script>

<div class="card lg:card-side bg-base-100 shadow-xl">
	<figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
	<div class="card-body">
		<h2 class="card-title">{project.title}</h2>
		<p>{project.description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary" disabled>Vote</button>
		</div>
	</div>
</div>
