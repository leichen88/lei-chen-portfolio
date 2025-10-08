<script lang="ts">
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';

	let projects = [
		{
			id: 1,
			title: 'Sudan Crisis',
			description: 'Data story on two years of war, unprecedented displacement, and waning global attention.',
			technologies: ['D3.js', 'Svelte', 'Mapbox', 'Datawrapper'],
			image: 'projects/thumbnail-sudan-two_.jpg',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2025/04/sudan-crisis-deepens-but-attention-wanes-after-two-years-of-war/',
			githubUrl: '#',
			category: ['Data story']
		},
		{
			id: 2,
			title: 'The Learning Divide',
			description: 'Data story on education challenges in displacement contexts across Mexico and Mauritania.',
			technologies: ['D3.js', 'Svelte', 'Datawrapper'],
			image: 'projects/thumbnail-education.jpg',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2025/04/the-learning-divide/',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 3,
			title: 'No Escape',
			description: 'Data story on how climate change compounds the challenges of global displacement.',
			technologies: ['D3.js', 'Mapbox'],
			image: 'projects/thumbnail-climate.jpg',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2024/11/no-escape/',
			githubUrl: '#',
			category: 'Data story'
		},
		
		{
			id: 4,
			title: 'Haiti: A Multi-Dimensional Crisis',
			description: 'Data story exploring displacement, violence, and humanitarian challenges in Haiti.',
			technologies: ['D3.js', 'Mapbox', 'Datawrapper'],
			image: 'projects/thumbnail-haiti.jpg',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2024/10/haiti-a-multi-dimensional-crisis-leading-to-continued-displacement/',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 5,
			title: 'Seeking Asylum During COVID-19',
			description: 'Data story on the challenges faced by asylum seekers during the pandemic.',
			technologies: ['D3.js', 'Datawrapper'],
			image: 'projects/thumbnail-covid.jpg',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2024/04/seeking-asylum-during-covid-19-and-what-it-means-today/',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 6,
			title: 'Sudan Crisis',
			description: 'Data story on one year of escalating conflict and growing displacement in Sudan.',
			technologies: ['D3.js', 'Illustrator', 'Mapbox', 'QGIS'],
			image: 'projects/thumbnail-sudan-one.gif',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2024/04/sudan-one-year-of-spiralling-conflict-and-displacement/',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 7,
			title: 'Refugee Registration Interactive Dashboard',
			description: 'Prototype visualizing global refugee registration data.',
			technologies: ['D3.js', 'Svelte', ' ThreeJS', 'WebGL'],
			image: 'projects/thumbnail-globe.jpg',
			liveUrl: 'https://leichen88.github.io/globe-data-viz/',
			githubUrl: '#',
			category: ['Dashboard']
		},
		{
			id: 8,
			title: 'Sudan Crisis',
			description: 'Data story on mass displacement 6 months after the crisis started',
			technologies: ['D3.js', 'ai2html', 'Arcgis', 'QGIS', 'Flourish'],
			image: 'projects/thumbnail-sudan-six-months.gif',
			liveUrl: 'https://storymaps.arcgis.com/stories/e02f1a1878ad4bed9ccdb6eab429da75',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 9,
			title: 'Death in the Desert',
			description: 'Data story on the dangers facing refugees and migrants en route to Africa’s Mediterranean coast.',
			technologies: ['Arcgis', 'QGIS', 'D3.js', 'Datawrapper'],
			image: 'projects/thumbnail-centralMed.gif',
			liveUrl: 'https://storymaps.arcgis.com/stories/da9df715ef4d40b1bbe257b13bee4ae4',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 10,
			title: 'Data Visualization Guidelines',
			description: 'Guidelines helping to produce effective, impactful, and standardized UNHCR data visualizations.',
			technologies: ['Illustrator', 'InDesign'],
			image: 'projects/thumbnail-dataviz-guidelines.jpg',
			liveUrl: 'https://dataviz.unhcr.org/guidance/',
			githubUrl: '#',
			category: 'Style Guide'
		},
		{
			id: 11,
			title: 'No Escape',
			description: 'Report showing interconnection of climate change, conflict, and forced displacement.',
			technologies: ['Illustrator', 'QGIS'],
			image: 'projects/thumbnail-climate-report.jpg',
			liveUrl: 'https://www.unhcr.org/media/no-escape-frontlines-climate-change-conflict-and-forced-displacement',
			githubUrl: '#',
			category: 'Infographic'
		},
		{
			id: 12,
			title: 'Returns to Afghanistan',
			description: 'Data story on Afghans returning home amid uncertainty and ongoing challenges.',
			technologies: ['D3.js', 'Datawrapper', 'Mapbox'],
			image: 'projects/thumbnail-afg-returns.gif',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2024/05/returns-to-afghanistan/',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 13,
			title: 'Protecting People Displaced in Their Own Country',
			description: 'Data story highlighting the role of law and policy in protecting internally displaced people.',
			technologies: ['D3.js', 'Datawrapper'],
			image: 'projects/thumbnail-idp-number.gif',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2024/07/protecting-people-displaced-in-their-own-country-through-law-and-policy/',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 14,
			title: 'Out of the Spotlight',
			description: 'Data story highlighting millions of displaced people overlooked by global attention.',
			technologies: ['D3.js', 'Angular', 'Java', 'MySQL'],
			image: 'projects/thumbnail-oos-story.jpg',
			liveUrl: 'https://storymaps.arcgis.com/stories/8ca0005f48fc4f29b4dfd519824def54',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 15,
			title: 'Mapping Guidelines',
			description: 'Guidelines ensuring clarity, consistency, and impact in UNHCR’s mapping products.',
			technologies: ['QGIS', 'Illustrator', 'InDesign'],
			image: 'projects/thumbnail-mapping-guidelines.jpg',
			liveUrl: 'https://dataviz.unhcr.org/download/UNHCR_Mapping_Guidelines_2024.pdf',
			githubUrl: '#',
			category: 'Style Guide'
		},
		{
			id: 16,
			title: 'Monitoring Movements Through the Darien Jungle',
			description: 'Data story on migration flows through Central America and the challenges of protection.',
			technologies: ['D3.js', 'ai2html', 'datawrapper'],
			image: 'projects/thumbnail-darien-gap.jpg',
			liveUrl: 'https://dataviz.unhcr.org/product-gallery/2023/07/monitoring-movements-through-the-darien-jungle-in-panama/',
			githubUrl: '#',
			category: 'Data story'
		},
		{
			id: 17,
			title: 'Global Trends Report',
			description: 'Report capturing global displacement figures and statistical trends.',
			technologies: ['Arcgis', 'Illustrator'],
			image: 'projects/thumbnail-gt-2017.jpg',
			liveUrl: 'https://www.unhcr.org/media/unhcr-global-trends-2017',
			githubUrl: '#',
			category: 'Infographic'
		},
		{
			id: 18,
			title: 'Sudan Emergency Response',
			description: 'Dashboard tracking the latest developments and humanitarian situation in South Sudan.',
			technologies: ['Illustrator', 'QGIS'],
			image: 'projects/thumbnail-core-ssd.jpg',
			liveUrl: 'https://data.unhcr.org/en/documents/details/100795',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 19,
			title: 'Uganda Emergency Response',
			description: 'Dashboard showing the latest data on Sudanese arrivals and settlements in Uganda.',
			technologies: ['Illustrator', 'QGIS'],
			image: 'projects/thumbnail-core-uga.jpg',
			liveUrl: 'https://data.unhcr.org/en/documents/details/112285',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 20,
			title: 'DRC Emergency Response',
			description: 'Dashboard showing the latest data on arrivals and movements from eastern DRC.',
			technologies: ['Illustrator', 'QGIS'],
			image: 'projects/thumbnail-core-bdi.jpg',
			liveUrl: 'https://data.unhcr.org/en/documents/details/116060',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 21,
			title: 'Pakistan-Afghanistan Emergency Response',
			description: 'Data dashboard summarizing current Afghan return movements and trends.',
			technologies: ['Illustrator', 'QGIS'],
			image: 'projects/thumbnail-core-afg.jpg',
			liveUrl: 'https://data.unhcr.org/en/documents/details/104656',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 22,
			title: 'Sudan Situation: One Year On',
			description: 'Dashboard with data and insights on conflict, displacement, and humanitarian needs.',
			technologies: ['Illustrator', 'QGIS'],
			image: 'projects/thumbnail-ssd-one-twopager.jpg',
			liveUrl: 'https://data.unhcr.org/en/documents/details/107844',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 23,
			title: 'Emergency Need Assessment Dashboard',
			description: 'Dashboard showing results of humanitarian needs assessments across Ethiopia.',
			technologies: ['QGIS', 'Illustrator'],
			image: 'projects/thumbnail-assessment-eth.jpg',
			liveUrl: '#',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 24,
			title: 'Ethiopia: Needs Overview Dashboard',
			description: 'Dashboard analyzing trends and gaps in WASH support across Ethiopia',
			technologies: ['QGIS', 'Illustrator'],
			image: 'projects/thumbnail-wash-eth.jpg',
			liveUrl: '#',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 25,
			title: 'Ethiopia: Needs Overview Dashboard',
			description: 'Dashboard analyzing trends and gaps in shelter and essential non-food itemsin Ethiopia',
			technologies: ['QGIS', 'Illustrator'],
			image: 'projects/thumbnail-shelter-eth.jpg',
			liveUrl: '#',
			githubUrl: '#',
			category: 'Dashboard'
		},
		{
			id: 26,
			title: 'Ethiopia: Activity Tracking Dashboard',
			description: 'Dashboard tracking humanitarian activities and program implementation across Ethiopia.',
			technologies: ['QGIS', 'Illustrator'],
			image: 'projects/thumbnail-needs-eth.jpg',
			liveUrl: '#',
			githubUrl: '#',
			category: 'Dashboard'
		}	
	];

	let selectedCategory = $state('all');
	let filteredProjects = $state(projects);
	let visibleCount = $state(12);
	let showLoadMore = $state(true);

	// Get all unique categories from projects
	function getUniqueCategories(projects: any[]) {
		const categories = new Set<string>();
		projects.forEach(project => {
			if (Array.isArray(project.category)) {
				project.category.forEach((cat: string) => categories.add(cat));
			} else {
				categories.add(project.category);
			}
		});
		return Array.from(categories).sort();
	}

	let uniqueCategories = $state(getUniqueCategories(projects));

	function filterProjects(category: string) {
		selectedCategory = category;
		if (category === 'all') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter(project => {
				if (Array.isArray(project.category)) {
					return project.category.includes(category);
				} else {
					return project.category === category;
				}
			});
		}
		// Reset visible count when category changes
		visibleCount = 12;
		showLoadMore = filteredProjects.length > 12;
	}

	function loadMore() {
		visibleCount += 6;
		if (visibleCount >= filteredProjects.length) {
			showLoadMore = false;
		}
	}


</script>

<section id="projects" class="py-20 bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-8">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-8">Featured Projects</h2>
			<p class="text-gray-400">
				Explore my portfolio of data visualization projects that demonstrate technical expertise and creative problem-solving
			</p>
		</div>

		<!-- Category Filter - Simplified -->
		<div class="flex flex-wrap gap-3 mb-8">
			<button
				onclick={() => filterProjects('all')}
				class={`pr-4 py-2 font-regular transition-colors duration-200 ${
					selectedCategory === 'all'
						? 'text-primary-400 font-semibold'
						: 'text-gray-300 hover:text-primary-400'
				}`}
			>
				All
			</button>
			{#each uniqueCategories as category}
				<button
					onclick={() => filterProjects(category)}
					class={`pr-4 py-0 font-regulartransition-colors duration-200 ${
						selectedCategory === category
							? 'text-primary-400 font-semibold'
							: 'text-gray-300 hover:text-primary-400'
					}`}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredProjects.slice(0, visibleCount) as project, index (project.id)}
				<div
					class="bg-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative z-0 hover:z-10"
					in:fade={{ duration: 300 }}
				>
					<!-- Project Image - Standard 4:3 ratio with proper cropping -->
					<a href={project.liveUrl} class="block bg-gray-700 overflow-hidden">
						<div class="relative pt-[75%]"> <!-- 4:3 ratio -->
							{#if project.image && project.image !== '/api/placeholder/400/250'}
								<img
									src={base ? `${base}/${project.image}` : project.image}
									alt={project.title}
									class="absolute top-0 left-0 w-full h-full object-cover"
								/>
							{:else}
								<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
									<svg class="w-10 h-10 text-primary-400 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
									</svg>
								</div>
							{/if}
						</div>
					</a>

					<!-- Project Content -->
					<div class="p-6">
						<a href={project.liveUrl} class="text-xl font-semibold text-gray-200 mb-0 hover:text-primary-600">
							{project.title}
						</a>
						<p class="text-gray-400 mb-2 text-sm">{project.description}</p>

						<!-- Technologies - Simplified -->
						<div class="flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span class="pr-1 text-primary-400 text-xs">
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Load More Link - Moved to end of section -->
		{#if showLoadMore}
			<div class="pt-10">
				<a
					href="#"
					onclick={(e) => { e.preventDefault(); loadMore(); }}
					class="inline-flex items-center text-primary-400 hover:text-primary-300 font-light transition-colors duration-200"
				>
					<span>Load More Projects</span>
					<svg class="w-5 h-5 ml-2 animate-arrow-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
		{/if}
	</div>
</section>

<style>
	.tooltip {
		pointer-events: none;
		z-index: 1000;
	}

	@keyframes arrowRight {
		0%, 100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(4px);
		}
	}

	.animate-arrow-right {
		animation: arrowRight 1.5s ease-in-out infinite;
	}
</style>
