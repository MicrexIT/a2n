<script lang="ts">
	interface IError {
		message: string
	}
	export let error: IError
</script>

{#if error}
	<strong class="text-red-600">{error.message}</strong>
{/if}
