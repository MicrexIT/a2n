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

<div class="hero min-h-screen">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<Youtube videoId="CvzUi_mUnks" {options} class="w-full" />
		<div>
			<h1 class="text-5xl font-bold">Welcome to <span class="text-primary">Narnia</span></h1>
			<p class="py-6">A place to do good for good</p>
			<a href="/auth" class="btn btn-primary   ">Get Started</a>
		</div>
	</div>
</div>
