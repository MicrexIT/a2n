<script lang="ts">
	export let title: string
	export let value: string
	export let index: number
</script>

<div class="form-control w-full">
	<label for={title} class="label capitalize">
		<span class="label-text">{title}</span>
	</label>
	<textarea
		tabindex={index}
		id={title}
		type="text"
		bind:value
		placeholder={title}
		class="textarea textarea-bordered textarea-primary h-24 w-full"
	/>
</div>
