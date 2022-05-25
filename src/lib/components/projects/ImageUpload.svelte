<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import supabase from '../../supabase'
	export let src: string

	let uploading = false
	let files: FileList

	const dispatch = createEventDispatcher()

	async function getImageUrl(): Promise<SvelteActionReturnType> {
		try {
			const { data, error } = await supabase.storage.from('projects-images').getPublicUrl(path)
			if (error) throw error
			if (!data) throw 'no image uploaded'

			// src = URL.createObjectURL(data)
			src = data.publicURL
			console.log(src)
		} catch (error) {
			console.error('Error downloading image: ')
			console.error(error)
		}
	}

	async function uploadImage() {
		try {
			uploading = true

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.')
			}

			const file = files[0]
			const fileExt = file.name.split('.').pop()
			const fileName = `${Math.random()}.${fileExt}`
			const filePath = `${fileName}`
			// const { data, error: errorbucket } = await supabase.storage.getBucket('projects-images')
			// if (errorbucket) {
			// 	console.error(errorbucket)
			// 	return
			// }
			// console.log('received bucket')
			// console.log(data)

			let { error: uploadError } = await supabase.storage
				.from('projects-images')
				.upload(filePath, file)

			if (uploadError) throw uploadError

			const { data, error: urlError } = await supabase.storage
				.from('projects-images')
				.getPublicUrl(filePath)
			if (urlError) throw urlError
			if (!data) throw `no url found`

			// src = URL.createObjectURL(data)
			src = data.publicURL
			console.log(src)
			dispatch('upload')
		} catch (error) {
			alert((error as any).message)
		} finally {
			uploading = false
		}
	}
</script>

<div class="form-control w-full flex flex-row gap-4 mt-4 justify-center">
	{#if src}
		<div class="w-full mx-w-lg">
			<img {src} alt="ProjectImage" class="object-contain" />
		</div>
	{/if}

	<div
		class="relative max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
	>
		<div class="space-y-1 text-center">
			<svg
				class="mx-auto h-12 w-12 text-gray-400"
				stroke="currentColor"
				fill="none"
				viewBox="0 0 48 48"
				aria-hidden="true"
			>
				<path
					d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<div class="relative flex text-sm text-gray-600">
				<input
					class=""
					type="file"
					id="single"
					accept="image/*"
					bind:files
					on:change={uploadImage}
					disabled={uploading}
				/>
			</div>
			<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
		</div>
	</div>
</div>
