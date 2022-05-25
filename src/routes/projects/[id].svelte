<script lang="ts">
	import ProjectDetail from '../../lib/components/projects/ProjectDetail.svelte'

	import ProjectForm from '../../lib/components/projects/ProjectForm.svelte'
	import { projects } from '../../stores/projectsStore'

	export let id: number
	console.log(id)

	const project = $projects.find((p) => p.id === id)
</script>

{#if project}
	<ProjectDetail {project} />
{:else}
	<div>An error occured, no projects with id {id}</div>
{/if}
