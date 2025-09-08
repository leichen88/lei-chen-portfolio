<script lang="ts">
	const { activeSection = '' } = $props<{ activeSection?: string }>();

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' }
	];

	let isMenuOpen = $state(false);
	let isDarkMode = $state(true);
	let isNavVisible = $state(true);
	let lastScrollY = $state(0);

	function scrollToSection(href: string) {
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false;
		}
	}

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.classList.remove('light');
		} else {
			document.documentElement.classList.add('light');
		}
	}

	$effect(() => {
		// Set dark mode as default on component mount
		document.documentElement.classList.remove('light');
		isDarkMode = true;

		// Scroll event listener for dynamic navigation
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
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav class="fixed top-0 w-full bg-gray-900/10 light:bg-white/80 backdrop-blur-md light:border-gray-700/50 z-50 transition-transform duration-300 ease-in-out" class:nav-hidden={!isNavVisible}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a
					href="#home"
					onclick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
					class="flex items-center text-gray-200 light:text-gray-800"
				>
					<img src={isDarkMode ? '/logo-white.svg' : '/logo-black.svg'} alt="Logo" class="logo-svg" />
				</a>
			</div>

			

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-4">
				<div class="flex items-baseline space-x-4">
					{#each navItems as item}
						<a
							href={item.href}
							onclick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
							class={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
								activeSection === item.href.slice(1)
									? 'text-primary-400 light:text-primary-600 bg-primary-900/30 light:bg-primary-50'
									: 'text-white light:text-gray-800 hover:text-primary-400 light:hover:text-primary-600'
							}`}
						>
							{item.name}
						</a>
					{/each}
				</div>
				<!-- Theme Toggle -->
				<button
					onclick={toggleDarkMode}
					class="p-2 rounded-md text-white light:text-gray-800 hover:text-primary-400 light:hover:text-primary-600 transition-colors duration-200"
					aria-label="Toggle dark mode"
				>
					{#if isDarkMode}
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					{:else}
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
					{/if}
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={() => isMenuOpen = !isMenuOpen}
					class="inline-flex items-center justify-center p-2 rounded-md text-white light:text-gray-800 hover:text-primary-400 light:hover:text-primary-600 hover:bg-gray-700 light:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 light:bg-white border-t border-gray-700 light:border-gray-200">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
						class={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
							activeSection === item.href.slice(1)
							? 'text-primary-400 light:text-primary-600 bg-primary-900/30 light:bg-primary-50'
							: 'text-white light:text-gray-800 hover:text-primary-400 light:hover:text-primary-600'
						}`}
					>
						{item.name}
					</a>
				{/each}
				<!-- Theme Toggle for Mobile -->
				<button
					onclick={toggleDarkMode}
					class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white light:text-gray-800 hover:text-primary-400 light:hover:text-primary-600 transition-colors duration-200"
					aria-label="Toggle dark mode"
				>
					<div class="flex items-center">
						{#if isDarkMode}
							<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
							Light Mode
						{:else}
							<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							</svg>
							Dark Mode
						{/if}
					</div>
				</button>
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
