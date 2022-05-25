<script lang="ts">
	export let title: string
	export let value: string
	export let index: number
</script>

<div class="form-control w-full">
	<label for={title} class="label capitalize">
		<span class="label-text">{title}</span>
	</label>
	<input
		id={title}
		tabindex={index}
		type="text"
		bind:value
		placeholder={title}
		class="input input-bordered input-primary w-full"
	/>
</div>
