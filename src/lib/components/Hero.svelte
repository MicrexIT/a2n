<script>
	import { browser } from '$app/env'

	import Youtube from './Youtube.svelte'

	const options = {
		height: '390',
		width: '640',
		//  see https://developers.google.com/youtube/player_parameters
		playerVars: {
			autoplay: 1
		}
	}
	$: if (browser) {
		console.log(window.screen)
		console.log(window.screen.height)
		console.log(window.screen.width)
	}
	// function onReady(event) {
	// access to player in all event handlers via event.target
	// console.log(event)
	// event.target.pauseVideo();
	// event.target.playVideo()
	// event.target.play()
	// }
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
