<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	
	let stats = $state([
		{ number: 100, label: 'Data Stories Created', suffix: '+' },
		{ number: 9, label: 'Years Experience', suffix: '+' },
		{ number: 50, label: 'Staff Trained', suffix: '+' },
		{ number: 15, label: 'Countries Served', suffix: '+' }
	]);

	let experience = $state([
		{
			id: 1,
			year: "2021-2025",
			title: "Information Management Officer (Data Visualization)",
			organization: "UNHCR HQ, Geneva (remote)",
			description: "Created innovative data visualization products (Data stories, dashboards, infographics) to highlight humanitarian crises and enhance global awareness. Led development of UNHCR's Data Visualization Platform and trained staff globally on data storytelling best practices.",
			tools: ["Illustrator", "QGIS", "Mapbox", "HTML/CSS/JS", "Svelte", "Python", "PowerBI", "Datawrapper", "Figma"],
			isOpen: false
		},
		{
			id: 2,
			year: "2019-2020",
			title: "Information Management Officer (WASH & ESNFI)",
			organization: "IOM Ethiopia, Addis Ababa",
			description: "Designed centralized data systems for emergency response programs. Developed interactive dashboards and maps to monitor humanitarian needs and program impact across 10+ field operations.",
			tools: ["Kobo Toolbox", "Arcgis", "Excel/Power BI", "Illustrator", "Python"],
			isOpen: false
		},
		{
			id: 3,
			year: "2018",
			title: "Associate Information Management Officer (Data Visualization)",
			organization: "UNHCR Bangladesh, Cox's Bazar",
			description: "Standardized data products and produced key visualizations for Rohingya refugee response. Managed health/nutrition data and delivered data visualization training to improve reporting efficiency.",
			tools: ["Illustrator", "Power BI", "Arcgis", "Excel"],
			isOpen: false
		},
		{
			id: 4,
			year: "2016-2017",
			title: "Information Management Associate (Data Visualization & GIS)",
			organization: "UNHCR HQ, Geneva",
			description: "Analyzed and visualized complex humanitarian datasets to guide strategic decisions. Designed infographics and interactive web maps for crises in Syria, South Sudan, and Yemen.",
			tools: ["ArcGIS", "Illustrator", "Excel", "InDesign"],
			isOpen: false
		},
		{
			id: 5,
			year: "2015-2016",
			title: "CCCM Associate (Graphic Design & Information Management)",
			organization: "UNHCR HQ, Geneva",
			description: "Developed tools for field data harvesting and created communication templates for the Global CCCM Cluster. Maintained and updated cluster website resources.",
			tools: ["InDesign", "Illustrator", "WordPress", "Excel", "Kobo Toolbox"],
			isOpen: false
		}
	]);

	function toggleAccordion(id: number) {
		experience.forEach(item => {
			if (item.id === id) {
				item.isOpen = !item.isOpen;
			} else {
				item.isOpen = false;
			}
		});
	}
</script>

<section id="about" class="py-20 bg-gray-900 light:bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-4">
			<h2 class="text-3xl sm:text-4xl font-bold text-white light:text-gray-900 mb-8">About Me</h2>
			<p class="text-gray-400 light:text-gray-700">
				I’m a data visualization specialist with 9+ years of experience transforming complex datasets into clear, actionable visual stories. My career has spanned global organizations like UNHCR and IOM, where I’ve helped turn humanitarian data into tools that inform decisions, mobilize resources, and raise awareness.
			</p>
		</div>

		<div class="space-y-12">
			<!-- Content Section -->
			<div>
				<h3 class="text-2xl font-semibold text-gray-300 light:text-gray-800 mb-6">My Humanitarian & Data Visualization Journey</h3>
				
				<div class="space-y-4 text-gray-400 light:text-gray-600">
					<p>
						Starting out, I focused on creating maps, dashboards, and infographics to support field operations. Over time, my role evolved into shaping visualization strategies at the global level. I’ve led the development of UNHCR’s Data Visualization Platform, designed visual products for flagship reports, and built interactive stories that brought urgent crises into focus for policymakers, donors, and the public.
					</p>
					
					<p>
						Through this journey, I’ve seen how the right visualization can bridge the gap between raw data and human understanding. For me, effective visualization is about clarity, empathy, and usability — distilling complexity without oversimplifying, and designing with both the data and the audience in mind.
					</p>
				</div>
			</div>

			<!-- My Approach Section -->
			<div>
				<h3 class="text-2xl font-semibold text-gray-300 light:text-gray-800 mb-6">My Approach</h3>
				
				<div class="space-y-4 text-gray-400 light:text-gray-600">
					<p>
						My practice combines three pillars:
					</p>
					<ul class="list-disc list-inside space-y-2 pl-5">
						<li><strong>Design Thinking for Data</strong> — approaching every project by first understanding the audience, their needs, and the decisions they need to make; then choosing the right form, level of detail, and visual encodings to guide them.</li>
						<li><strong>Humanitarian Insight</strong> — working closely with field teams, analysts, and decision-makers has taught me to design for messy, incomplete, and time-sensitive data without losing sight of the people behind the numbers.</li>
						<li><strong>Technical Craft</strong> — from prototyping to building the final product, I bring hands-on skills that allow me to move seamlessly from concept to execution, ensuring design intent is preserved through implementation.</li>
					</ul>
				</div>
			</div>

			<!-- Experience Accordion Section -->
			<div>
				<h3 class="text-2xl font-semibold text-gray-300 light:text-gray-800 mb-6">Professional Experience</h3>
				
				<div class="space-y-0">
					{#each experience as item}
						<div class="bg-gray-800 light:bg-gray-100 border-b border-gray-700 light:border-gray-200 last:border-b-0">
							<!-- Accordion Header -->
							<button
								class="w-full p-4 text-left flex items-center justify-between hover:bg-gray-700 light:hover:bg-gray-50 transition-colors duration-200"
								onclick={() => toggleAccordion(item.id)}
							>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg text-gray-300 light:text-gray-900">{item.title}</h4>
									<p class="text-sm text-gray-500 light:text-gray-400">{item.organization}</p>
								</div>
								<div class="flex items-center space-x-4">
									<div class="text-sm text-primary-400 light:text-primary-600">{item.year}</div>
									<div class="flex-shrink-0 transform transition-transform duration-400 ease-out {item.isOpen ? 'rotate-180' : ''}">
										<svg class="w-5 h-5 text-gray-300 light:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
										</svg>
									</div>
								</div>
							</button>

							<!-- Accordion Content -->
							{#if item.isOpen}
								<div class="p-4 pt-0" transition:slide={{ duration: 400, easing: cubicOut }}>
									<p class="text-gray-400 light:text-gray-700 text-sm mb-3">{item.description}</p>
									<div class="flex flex-wrap gap-2">
										{#each item.tools as tool}
											<span class="pr-5 py-1 text-primary-400 light:text-primary-600 text-xs rounded-md">
												{tool}
											</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
		<!-- CV Download Link -->
			<div class="pt-10">
				<a
					href="download/cv_LeiChen.pdf"
					target="_blank"
					class="inline-flex items-center text-primary-400 light:text-primary-600 hover:text-primary-300 light:hover:text-primary-600 font-light transition-colors duration-200"
				>
					<span>View Full CV</span>
					<svg class="w-5 h-5 ml-2 animate-arrow-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
	</div>
</section>

<style>
	.skill-item {
		transition: transform 0.2s ease;
	}

	.skill-item:hover {
		transform: translateX(4px);
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
