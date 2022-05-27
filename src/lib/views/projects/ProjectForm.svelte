<script lang="ts">
	import type { PostgrestError } from '@supabase/supabase-js'
	import supabase from '../../supabase'
	import { ProjectType, Status, type IProjectEdit } from '../../../types'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import TextField from '$components/form/TextField.svelte'
	import TextareaField from '$components/form/TextareaField.svelte'
	import SelectField from '$components/form/SelectField.svelte'
	import ImageUpload from '$components/form/ImageUpload.svelte'

	let loading = true
	let description: ''
	let picture = ''
	let status = Status.DRAFT
	let title = 'new project'
	let type = ProjectType.RECURRING
	let where = ''
	export let id: number = 0

	const statusOptions = [
		Status.DRAFT,
		Status.PLANNED,
		Status.COMPLETED,
		Status.CANCELED,
		Status.ONGOING
	]

	const typeOptions = [ProjectType.ONEOFF, ProjectType.RECURRING]

	onMount(async () => {
		try {
			loading = true
			const user = supabase.auth.user()
			if (!id) {
				loading = false
				return
			}

			let { data, error, status } = await supabase
				.from('projects')
				.select(`*`)
				.eq('id', id)
				.single()

			if (error && status !== 406) throw error

			if (data) {
				description = data.description
				picture = data.picture
				status = data.status
				title = data.title
				where = data.where
				type = data.type
			}
		} catch (error) {
			alert((error as PostgrestError).message)
		} finally {
			loading = false
		}
	})

	async function updateProject() {
		try {
			loading = true
			const user = supabase.auth.user()
			if (!user) {
				throw { message: 'user not logged in' }
			}

			const updates: IProjectEdit = {
				description,
				picture,
				status,
				title,
				where,
				type
			}
			if (id) {
				updates.id = id
			}

			let { error } = await supabase.from('projects').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			})

			if (error) throw error
			goto('/admin/projects')
		} catch (error) {
			alert((error as PostgrestError).message)
		} finally {
			loading = false
		}
	}

	async function deleteProject() {
		try {
			loading = true
			const user = supabase.auth.user()
			if (!user) {
				throw { message: 'user not logged in' }
			}
			if (!id) {
				throw { message: 'no project id' }
			}

			let { error } = await supabase.from('projects').delete().match({ id })
			if (error) throw error
			goto('/admin/projects')
		} catch (error) {
			alert((error as PostgrestError).message)
		} finally {
			loading = false
		}
	}
</script>

<div class="w-full flex flex-col items-center justify-center">
	<div>
		<h3 class="text-lg text-center font-bold">{id ? 'Edit Project' : 'New Project'}</h3>
	</div>
	<form class="w-full max-w-xl" on:submit|preventDefault={updateProject}>
		<TextField title="title" bind:value={title} index={1} />
		<TextareaField title="description" bind:value={description} index={2} />
		<TextField title="where" bind:value={where} index={3} />
		<SelectField title="type" bind:value={type} options={typeOptions} index={4} />

		<SelectField title="status" bind:value={status} options={statusOptions} index={5} />

		<ImageUpload bind:src={picture} />
		<!-- <ImageUpload bind:path={picture} on:upload={updateProfile} /> -->

		<div class="mt-4 md:mt-8 lg:mt-16 flex flex-col md:flex-row-reverse gap-2 lg:gap-4">
			<button tabindex={6} type="submit" class="btn btn-primary btn-wide" disabled={loading}>
				Save
			</button>
			{#if id}
				<button type="button" class="btn btn-error" on:click={deleteProject} disabled={loading}>
					Delete
				</button>
			{/if}
			<a tabindex={7} href="/admin/projects" class="btn btn-link">Back</a>
		</div>
	</form>
</div>
