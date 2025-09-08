<script lang="ts">
	import { onMount } from 'svelte';
	import ThreeBackground from './ThreeBackground.svelte';

	let animatedText = $state('');
	const fullText = 'I design and build Data Visualization';
	let textIndex = 0;
	let showContent = $state(false);

	onMount(() => {
		showContent = true;
		
		const typeWriter = () => {
			if (textIndex < fullText.length) {
				animatedText += fullText.charAt(textIndex);
				textIndex++;
				setTimeout(typeWriter, 100);
			}
		};

		setTimeout(typeWriter, 500);
	});
</script>

<section id="home" class="h-screen bg-gray-900 light:bg-white relative overflow-hidden">
	<!-- 3D Background with Threlte -->
	<ThreeBackground />
	
	<!-- Animated background elements -->
	<!-- <div class="absolute inset-0 bg-grid-pattern opacity-5 light:opacity-15"></div> -->
	<!-- <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 light:bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
	<div class="absolute top-3/4 left w-96 h-96 bg-primary-400/10 light:bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow"></div> -->
	<div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 light:bg-accent-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
		<div class="w-full">

			<!-- Main Content -->
			 <p class="text-xl text-primary-400 light:text-primary-600 max-w-2xl leading-relaxed font-light">
				Hi, my name is
			 </p>
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white light:text-gray-900 mb-6 leading-tight">
				<span class="text-white light:text-gray-800">
					Lei Chen
				</span>
			</h1>
			
			<h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 light:text-gray-800 mb-8 min-h-[2.5rem] tracking-wide">
				{animatedText}
				<span class="animate-pulse text-primary-400 light:text-primary-500">|</span>
			</h2>

			<p class="text-xl text-gray-400 light:text-gray-700 mb-12 max-w-2xl leading-relaxed font-light">
			    I enjoy transforming complex data into compelling visual stories through 
				interactive dashboards, beautiful charts, and insightful analytics.
			</p>

			<!-- CTA Buttons with modern styling -->
			<!-- <div class="flex flex-col sm:flex-row gap-6">
				<a
					href="#projects"
					class="text-gray-400 font-light transform hover:scale-105 transition-all duration-300 dark:text-white"
				>
					View My Work →
				</a>
			</div> -->
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
		<svg class="w-6 h-6 text-primary-400 light:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</section>

<style>
	.gradient-text {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.bg-grid-pattern {
		background-image:
			linear-gradient(to right, gray 1px, transparent 1px),
			linear-gradient(to bottom, gray 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.light .bg-grid-pattern {
		background-image:
			linear-gradient(to right, #4b5563 1px, transparent 1px),
			linear-gradient(to bottom, #4b5563 1px, transparent 1px);
	}

</style>
