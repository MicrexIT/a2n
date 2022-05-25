<script lang="ts">
	export let title: string
	export let value: string
	export let index: number
	export let options: string[]
</script>

<div class="form-control w-full">
	<label for={title} class="label capitalize">
		<span class="label-text">{title}</span>
	</label>
	<select
		tabindex={index}
		class="select select-bordered select-primary capitalize"
		bind:value
		id={title}
	>
		<option disabled selected>Pick one</option>
		{#each options as optionValue}
			<option value={optionValue}>
				{optionValue}
			</option>
		{/each}
	</select>
</div>
