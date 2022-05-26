<script>
	import Youtube from '$components/Youtube.svelte'

	const options = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1
		}
	}
</script>

<div class="min-h-screen content-center flex flex-col justify-center w-full p-2">
	<!-- <div class="hero-content p-1 md:p-3 lg:p-4 flex-col lg:flex-row-reverse"> -->
	<div
		class="grid items-center grid-cols-1 lg:grid-cols-9 xl:grid-cols-12 p-1 md:p-3 lg:p-4 gap-6 md:gap-8 max-w-7xl"
	>
		<div class="col-span-1 md:col-span-5 lg:col-span-6 xl:col-span-9">
			<Youtube videoId="CvzUi_mUnks" {options} />
		</div>
		<div class="col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-1">
			<h1 class="text-5xl font-bold">Welcome to <span class="text-primary">Narnia</span></h1>
			<p class="py-6">A place to do good for good</p>
			<a href="/auth" class="btn btn-primary">Get Started</a>
		</div>
	</div>
</div>
