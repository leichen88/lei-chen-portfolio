<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	
	let activeSection = $state('');

	const navItems = [
		{ name: 'Home', href: '/', type: 'page' },
		{ name: 'About', href: '/about', type: 'page' },
		{ name: 'Projects', href: '#projects', type: 'section' },
		{ name: 'Contact', href: '#contact', type: 'section' }
	];

	let isMenuOpen = $state(false);
	let isNavVisible = $state(true);
	let lastScrollY = $state(0);

	async function handleNavigation(href: string, type: string) {
		isMenuOpen = false;
		
		if (type === 'page') {
			// Handle page navigation
			await goto(href);
		} else if (type === 'section') {
			// Handle section navigation (scroll to section)
			if ($page.url.pathname !== '/') {
				// If not on home page, navigate to home page first
				await goto('/');
				// Wait a bit for the page to load then scroll
				setTimeout(() => {
					const target = document.querySelector(href);
					if (target) {
						target.scrollIntoView({ behavior: 'smooth' });
						activeSection = href.slice(1); // Set active section
					}
				}, 100);
			} else {
				// Already on home page, just scroll
				const target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({ behavior: 'smooth' });
					activeSection = href.slice(1); // Set active section
				}
			}
		}
	}

	function updateActiveSection() {
		if ($page.url.pathname !== '/') return;
		
		const sections = ['projects', 'contact'];
		const scrollPosition = window.scrollY + 100; // Offset for fixed nav
		
		// Reset activeSection if we're at the top (Hero section)
		if (scrollPosition < 100) {
			activeSection = '';
			return;
		}
		
		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) {
				const offsetTop = element.offsetTop;
				const offsetBottom = offsetTop + element.offsetHeight;
				
				if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
					activeSection = section;
					break;
				}
			}
		}
	}

	function isActiveLink(href: string, type: string): boolean {
		if (type === 'page') {
			if (href === '/') {
				// Home is active when on home page and no section is active
				return $page.url.pathname === '/' && activeSection === '';
			}
			return $page.url.pathname === href;
		} else if (type === 'section') {
			return activeSection === href.slice(1);
		}
		return false;
	}

	$effect(() => {
		// Scroll event listener for dynamic navigation and section tracking
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			
			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				// Scrolling down and past threshold - hide nav
				isNavVisible = false;
			} else if (currentScrollY < lastScrollY) {
				// Scrolling up - show nav
				isNavVisible = true;
			}
			
			lastScrollY = currentScrollY;
			
			// Update active section based on scroll position
			updateActiveSection();
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Initial section check
		updateActiveSection();
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav class="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 transition-transform duration-300 ease-in-out" class:nav-hidden={!isNavVisible}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a
					href="/"
					onclick={(e) => { e.preventDefault(); handleNavigation('/', 'page'); }}
					class="flex items-center text-gray-200 hover:text-primary-400 transition-colors duration-200"
				>
					<img src={base ? `${base}/logo-white.svg` : 'logo-white.svg'} alt="Logo" class="logo-svg" />
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-4">
				<div class="flex items-baseline space-x-4">
					{#each navItems as item}
						<a
							href={item.href}
							onclick={(e) => { e.preventDefault(); handleNavigation(item.href, item.type); }}
							class={`px-3 py-2 text-sm transition-colors duration-200 ${
								isActiveLink(item.href, item.type)
									? 'text-primary-400'
									: 'text-white hover:text-primary-400'
							}`}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={() => isMenuOpen = !isMenuOpen}
					class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
				>
					<span class="sr-only">Open main menu</span>
					{#if isMenuOpen}
						<!-- Close icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<!-- Menu icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-700">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={(e) => { e.preventDefault(); handleNavigation(item.href, item.type); }}
						class={`block px-3 py-2 rounded-md text-base transition-colors duration-200 ${
							isActiveLink(item.href, item.type)
							? 'text-primary-400 bg-primary-900/30'
							: 'text-white hover:text-primary-400'
						}`}
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	.logo-svg {
		display: block;
		width: 45px;
		height: 45px;
	}

	.nav-hidden {
		transform: translateY(-100%);
	}
</style>
