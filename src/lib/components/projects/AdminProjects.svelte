<script lang="ts">
	import { loadProjects, projects } from '../../../stores/projectsStore'
	import { onMount } from 'svelte'
	import type { IProject } from '../../../types'
	import ProjectCard from '../../../lib/components/projects/ProjectCard.svelte'
	import EmptyProjectsState from './EmptyProjectsState.svelte'
	import Grid from '../Grid.svelte'

	let allProjects: IProject[]

	projects.subscribe((value) => {
		allProjects = value
	})

	onMount(() => {
		loadProjects()
	})
</script>

{#if allProjects.length}
	<div class="absolute top-0 right-0">
		<a class="btn btn-primary" href="/admin/projects/new">New Project</a>
	</div>
{/if}
<Grid>
	{#each allProjects as project}
		<div class="col-span-1">
			<ProjectCard {project}>
				<a href={`/admin/projects/${project.id}`} class="btn btn-primary">Edit</a>
			</ProjectCard>
		</div>
	{/each}
</Grid>

{#if !allProjects.length}
	<EmptyProjectsState />
{/if}
