<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(() => {
		if (browser) {
			// Handle hash navigation when page loads
			const handleHashNavigation = () => {
				const hash = window.location.hash;
				if (hash) {
					const target = document.querySelector(hash);
					if (target) {
						setTimeout(() => {
							target.scrollIntoView({ behavior: 'smooth' });
						}, 100);
					}
				}
			};

			// Initial check
			handleHashNavigation();

			// Also handle when hash changes after page load
			window.addEventListener('hashchange', handleHashNavigation);
			
			return () => {
				window.removeEventListener('hashchange', handleHashNavigation);
			};
		}
	});
</script>

<main class="min-h-screen">
	<Navigation />
	<Hero />
	<Projects />
	<Contact />
</main>
