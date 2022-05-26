<script lang="ts">
	import ProjectDetail from '$views/projects/ProjectDetail.svelte'
	import { projects } from '$stores/projectsStore'

	export let id: number
	const project = $projects.find((p) => p.id === id)
</script>

{#if project}
	<ProjectDetail {project} />
{:else}
	<div>An error occured, no projects with id {id}</div>
{/if}
