<script lang="ts">
	import { loadProjects, projects } from '$stores/projectsStore'
	import { onMount } from 'svelte'
	import type { IProject } from '../../../types'
	import ProjectCard from './ProjectCard.svelte'
	import Grid from '$components/Grid.svelte'

	let allProjects: IProject[]

	projects.subscribe((value) => {
		allProjects = value
	})

	onMount(() => {
		loadProjects()
	})
</script>

<Grid>
	{#each allProjects as project}
		<div class="col-span-1">
			<ProjectCard {project}>
				<a href={`/projects/${project.id}`} class="btn btn-primary">View More</a>
			</ProjectCard>
		</div>
	{/each}
</Grid>
