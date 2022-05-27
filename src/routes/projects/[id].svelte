<script lang="ts">
	import ProjectDetail from '$views/projects/ProjectDetail.svelte'
	import { projects } from '$stores/projectsStore'
	import Title from '$lib/components/Title.svelte'
	import { Circle } from 'svelte-loading-spinners'
	export let id: number
	$: project = $projects.find((p) => p.id === id)
</script>

{#if project}
	<Title>Project</Title>
	<ProjectDetail {project} />
{:else}
	<Circle size="240" color="#027b91" unit="px" duration="10s" />
{/if}
