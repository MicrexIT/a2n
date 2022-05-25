<script lang="ts">
	import ProjectForm from '../../../lib/components/projects/ProjectForm.svelte'

	export let id: number
	console.log('admin project id')
	console.log(id)
</script>

<ProjectForm {id} />
