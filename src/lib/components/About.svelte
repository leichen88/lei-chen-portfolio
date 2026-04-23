<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	
	let experience = $state([
		{
			id: 1,
			year: "2021-2025",
			title: "Information Management Officer (Data Visualization)",
			organization: "UNHCR HQ, Geneva (remote)",
			description: "Created innovative data visualization products (Data stories, dashboards, infographics) to highlight humanitarian crises and enhance global awareness. Led development of UNHCR's Data Visualization Platform and trained staff globally on data storytelling best practices.",
			tools: ["Illustrator", "InDesign", "QGIS", "Mapbox", "HTML/CSS/JS", "Svelte", "Python", "PowerBI", "Datawrapper", "Figma"],
			isOpen: false
		},
		{
			id: 2,
			year: "2019-2020",
			title: "Information Management Officer (WASH & ESNFI)",
			organization: "IOM Ethiopia, Addis Ababa",
			description: "Designed centralized data systems for emergency response programs. Developed interactive dashboards and maps to monitor humanitarian needs and program impact across 10+ field operations.",
			tools: ["Kobo Toolbox", "Arcgis", "Excel/Power BI", "Illustrator", "InDesign", "Python"],
			isOpen: false
		},
		{
			id: 3,
			year: "2018",
			title: "Associate Information Management Officer (Data Visualization)",
			organization: "UNHCR Bangladesh, Cox's Bazar",
			description: "Standardized data products and produced key visualizations for Rohingya refugee response. Managed health/nutrition data and delivered data visualization training to improve reporting efficiency.",
			tools: ["Illustrator", "InDesign", "Power BI", "Arcgis", "Excel"],
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

<section id="about" class="py-20 bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="pt-10">
		    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-8">About Me</h2>
		    <p class="text-gray-400">
			I design data products and visualizations that turn complex datasets into clear, actionable insights.
            With 9+ years of experience, including work with the United Nations High Commissioner for Refugees and the International Organization for Migration, I specialize in dashboards, data visualization, and UI/UX for data-heavy applications.
            I’ve designed data platforms, dashboards, and analytical products used by global teams, working end-to-end from user research and prototyping to final implementation.
            My focus is on creating intuitive, user-centered tools that help people understand data and make better decisions.
		    </p>
		</div>
		<!-- Content Section -->
		<div class="pt-10">
			<h3 class="text-2xl font-semibold text-gray-300 mb-6">Experience & Focus</h3>
			
			<div class="space-y-4 text-gray-400">
				<p>
					My work spans both product design and data visualization:
				</p>
				<ul class="list-disc list-inside space-y-2 pl-5">
					<li>Designing dashboards and data-driven interfaces (Power BI, web-based tools)</li>
                    <li>Structuring and visualizing complex datasets for decision-making</li>
                    <li>Creating reports, infographics, and communication assets</li>
                    <li>Developing design systems, templates, and visualization standards</li>
                    <li>Collaborating with analysts, developers, and stakeholders across teams</li>
				</ul>
			</div>
		</div>
		<!-- My Approach Section -->
		<div class="pt-10">
			<h3 class="text-2xl font-semibold text-gray-300 mb-6">Approach</h3>
			<div class="space-y-4 text-gray-400">
				<p>
					My approach combines analytical thinking with user-centered design:
				</p>
				<ul class="list-disc list-inside space-y-2 pl-5">
					<li><strong>User-driven design</strong> — Understanding user needs, workflows, and decisions to shape clear and effective interfaces.</li>
					<li><strong>Clarity over complexity</strong> — Simplifying messy, real-world data into intuitive visual structures without losing meaning.</li>
					<li><strong>End-to-end execution</strong> — From research and concept to high-fidelity design and implementation, ensuring consistency across the entire product lifecycle.</li>
				</ul>
			</div>
		</div>
		<!-- Experience Accordion Section -->
		<!-- <div class="pt-10">
			<h3 class="text-2xl font-semibold text-gray-300 mb-6">Professional Experience</h3>
			
			<div class="space-y-0">
				{#each experience as item}
					<div class="bg-gray-800 border-b border-gray-700 last:border-b-0">
						<button
							class="w-full p-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
							onclick={() => toggleAccordion(item.id)}
						>
							<div class="flex-1 min-w-0">
								<h4 class="text-lg text-gray-300">{item.title}</h4>
								<p class="text-sm text-gray-500">{item.organization}</p>
							</div>
							<div class="flex items-center space-x-4">
								<div class="text-sm text-primary-400">{item.year}</div>
								<div class="flex-shrink-0 transform transition-transform duration-400 ease-out {item.isOpen ? 'rotate-180' : ''}">
									<svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
									</svg>
								</div>
							</div>
						</button>
						{#if item.isOpen}
							<div class="p-4 pt-0" transition:slide={{ duration: 400, easing: cubicOut }}>
								<p class="text-gray-400 text-sm mb-3">{item.description}</p>
								<div class="flex flex-wrap gap-2">
									{#each item.tools as tool}
										<span class="pr-5 py-1 text-primary-400 text-xs rounded-md">
											{tool}
										</span>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div> -->
		<!-- CV Download Link -->
		<div class="pt-10">
			<a
				href="download/cv_LeiChen.pdf"
				target="_blank"
				class="inline-flex items-center text-primary-400 hover:text-primary-300 font-light transition-colors duration-200"
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
