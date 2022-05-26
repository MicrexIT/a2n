<script lang="ts">
	import ProjectDetail from '$views/projects/ProjectDetail.svelte'
	import { projects } from '$stores/projectsStore'
	import Title from '$lib/components/Title.svelte'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	})

	function startTimer(node: any) {
		setInterval(() => {
			if (project) {
				progress.set(1)
				return
			}
			progress.set($progress + 0.3)

			if ($progress === 1) {
				progress.set(0.0)
			}
		}, 10)
	}

	export let id: number
	$: project = $projects.find((p) => p.id === id)
</script>

{#if project}
	<Title>Project</Title>
	<ProjectDetail {project} />
{:else}
	<div class="grid items-center content-center w-screen h-screen">
		<div class="flex flex-row justify-center items-center w-full">
			<div
				use:startTimer
				class="radial-progress text-primary-focus"
				style={`--value:${$progress * 100}; --size:12rem; --thickness: 1rem;`}
			/>
		</div>
	</div>
{/if}
