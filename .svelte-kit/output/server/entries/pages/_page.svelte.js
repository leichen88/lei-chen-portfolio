import "clsx";
import { y as escape_html, v as pop, t as push, z as ensure_array_like, F as attr_class, G as attr_style, J as attr } from "../../chunks/index.js";
import "d3";
function Hero($$payload, $$props) {
  push();
  let animatedText = "";
  $$payload.out.push(`<section class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"><div class="text-center max-w-4xl mx-auto"><div class="mb-8"><div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-accent-500 p-1"><div class="w-full h-full rounded-full bg-white flex items-center justify-center"><svg class="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div></div></div> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Hi, I'm  <span class="gradient-text svelte-1vxx4lx">Your Name</span></h1> <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8 min-h-[2.5rem]">${escape_html(animatedText)} <span class="animate-pulse">|</span></h2> <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">Transforming complex data into compelling visual stories through 
			interactive dashboards, beautiful charts, and insightful analytics.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"><a href="#projects" class="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">View My Work</a> <a href="#contact" class="px-8 py-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200">Get In Touch</a></div> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2"><div class="animate-bounce"><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></div></div></section>`);
  pop();
}
function About($$payload) {
  let stats = [
    { number: 50, label: "Projects Completed", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Data Visualizations", suffix: "+" },
    { number: 25, label: "Happy Clients", suffix: "+" }
  ];
  const each_array = ensure_array_like(stats);
  $$payload.out.push(`<section id="about" class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2> <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div> <p class="text-xl text-gray-600 max-w-3xl mx-auto">Passionate about turning raw data into meaningful insights through beautiful, interactive visualizations</p></div> <div class="grid lg:grid-cols-2 gap-16 items-center"><div><h3 class="text-2xl font-semibold text-gray-900 mb-6">My Journey in Data Visualization</h3> <div class="space-y-4 text-gray-700"><p>With over 5 years of experience in data visualization, I specialize in creating 
						compelling visual stories that make complex data accessible and engaging. My 
						expertise spans across various industries including finance, healthcare, and 
						technology.</p> <p>I believe that great data visualization is more than just pretty charts – it's 
						about creating intuitive interfaces that empower users to discover insights 
						and make data-driven decisions.</p> <p>My approach combines technical expertise with design sensibility, ensuring that 
						every visualization is not only accurate but also aesthetically pleasing and 
						user-friendly.</p></div> <div class="grid grid-cols-2 gap-8 mt-12"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$payload.out.push(`<div class="text-center"><div class="text-3xl font-bold text-primary-600 mb-2">${escape_html(stat.number)}${escape_html(stat.suffix)}</div> <div class="text-sm text-gray-600 font-medium">${escape_html(stat.label)}</div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div> <div class="relative"><div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 shadow-lg"><h4 class="text-xl font-semibold text-gray-900 mb-6 text-center">Technical Expertise</h4> <div class="space-y-4"><div class="skill-item svelte-dt6x5g"><div class="flex justify-between mb-2"><span class="text-sm font-medium text-gray-700">D3.js</span> <span class="text-sm text-gray-600">95%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style="width: 95%"></div></div></div> <div class="skill-item svelte-dt6x5g"><div class="flex justify-between mb-2"><span class="text-sm font-medium text-gray-700">React/Next.js</span> <span class="text-sm text-gray-600">90%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style="width: 90%"></div></div></div> <div class="skill-item svelte-dt6x5g"><div class="flex justify-between mb-2"><span class="text-sm font-medium text-gray-700">Python (Plotly/Matplotlib)</span> <span class="text-sm text-gray-600">88%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style="width: 88%"></div></div></div> <div class="skill-item svelte-dt6x5g"><div class="flex justify-between mb-2"><span class="text-sm font-medium text-gray-700">Tableau/Power BI</span> <span class="text-sm text-gray-600">85%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style="width: 85%"></div></div></div> <div class="skill-item svelte-dt6x5g"><div class="flex justify-between mb-2"><span class="text-sm font-medium text-gray-700">SQL/Data Analysis</span> <span class="text-sm text-gray-600">92%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style="width: 92%"></div></div></div></div></div> <div class="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 rounded-full opacity-50"></div> <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-100 rounded-full opacity-50"></div></div></div></div></section>`);
}
function Skills($$payload, $$props) {
  push();
  const skills = [
    { skill: "D3.js", level: 95, category: "Data Visualization" },
    {
      skill: "JavaScript/TypeScript",
      level: 90,
      category: "Programming"
    },
    { skill: "React", level: 85, category: "Frontend" },
    { skill: "Svelte/SvelteKit", level: 88, category: "Frontend" },
    { skill: "Python", level: 80, category: "Programming" },
    { skill: "SQL", level: 85, category: "Database" },
    { skill: "CSS/Tailwind", level: 92, category: "Styling" },
    { skill: "Git", level: 90, category: "Tools" },
    { skill: "Data Analysis", level: 87, category: "Analytics" },
    { skill: "UI/UX Design", level: 82, category: "Design" }
  ];
  const categories = [...new Set(skills.map((s) => s.category))];
  let selectedCategory = "all";
  let filteredSkills = skills;
  const each_array = ensure_array_like(categories);
  const each_array_1 = ensure_array_like(filteredSkills);
  const each_array_3 = ensure_array_like([
    "D3.js",
    "React",
    "Svelte",
    "TypeScript",
    "Python",
    "SQL",
    "Tailwind CSS",
    "Git",
    "Figma",
    "Tableau",
    "Power BI",
    "PostgreSQL",
    "MongoDB",
    "Node.js",
    "Express",
    "Jest",
    "Cypress",
    "Webpack"
  ]);
  $$payload.out.push(`<section id="skills" class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2> <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div> <p class="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive expertise in data visualization, frontend development, and analytical tools</p></div> <div class="mb-16"><div class="bg-gray-50 rounded-2xl p-8 shadow-lg"><h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">Skill Proficiency Overview</h3> <div id="radar-chart" class="flex justify-center"></div></div></div> <div class="flex flex-wrap justify-center gap-4 mb-12"><button${attr_class(
    `px-6 py-2 rounded-full font-medium transition-all duration-200 ${"bg-primary-500 text-white shadow-lg"}`,
    "svelte-79l78l"
  )}>All Skills</button> <!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out.push(`<button${attr_class(
      `px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category ? "bg-primary-500 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200"}`,
      "svelte-79l78l"
    )}>${escape_html(category)}</button>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let skill = each_array_1[$$index_2];
    const each_array_2 = ensure_array_like([1, 2, 3, 4, 5]);
    $$payload.out.push(`<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold text-gray-900">${escape_html(skill.skill)}</h3> <span class="px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">${escape_html(skill.category)}</span></div> <div class="mb-3"><div class="flex justify-between text-sm text-gray-600 mb-1"><span>Proficiency</span> <span>${escape_html(skill.level)}%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000"${attr_style(`width: ${skill.level}%`)}></div></div></div> <div class="flex items-center text-xs text-gray-500"><!--[-->`);
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let star = each_array_2[$$index_1];
      $$payload.out.push(`<svg${attr_class(`w-4 h-4 ${star <= Math.ceil(skill.level / 20) ? "text-yellow-400" : "text-gray-300"}`, "svelte-79l78l")} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$payload.out.push(`<!--]--></div></div>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="mt-16 text-center"><h3 class="text-2xl font-semibold text-gray-900 mb-8">Tools &amp; Technologies</h3> <div class="flex flex-wrap justify-center gap-4"><!--[-->`);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let tool = each_array_3[$$index_3];
    $$payload.out.push(`<span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200">${escape_html(tool)}</span>`);
  }
  $$payload.out.push(`<!--]--></div></div></div></section>`);
  pop();
}
function Projects($$payload, $$props) {
  push();
  let projects = [
    {
      id: 1,
      title: "Financial Dashboard",
      description: "Interactive dashboard showing real-time stock market trends and portfolio performance with D3.js visualizations",
      technologies: ["D3.js", "React", "TypeScript", "WebSocket"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 2,
      title: "Healthcare Analytics",
      description: "Data visualization platform for patient outcomes analysis with interactive charts and predictive analytics",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      category: "Analytics"
    },
    {
      id: 3,
      title: "E-commerce Insights",
      description: "Sales performance dashboard with customer behavior analysis and revenue forecasting visualizations",
      technologies: ["D3.js", "Next.js", "MongoDB", "Chart.js"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      category: "Business Intelligence"
    },
    {
      id: 4,
      title: "Climate Data Explorer",
      description: "Interactive map and timeline showing global climate change patterns with animated D3 visualizations",
      technologies: ["D3.js", "Leaflet", "Vue.js", "GeoJSON"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      category: "Geospatial"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Real-time social media sentiment analysis with network graphs and engagement metrics visualization",
      technologies: ["D3.js", "Node.js", "Redis", "WebGL"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      category: "Social Analytics"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      description: "Logistics and supply chain visualization with route optimization and inventory management dashboards",
      technologies: ["D3.js", "Angular", "Java", "MySQL"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      category: "Logistics"
    }
  ];
  let selectedCategory = "all";
  let filteredProjects = projects;
  const each_array = ensure_array_like([
    "Dashboard",
    "Analytics",
    "Business Intelligence",
    "Geospatial",
    "Social Analytics",
    "Logistics"
  ]);
  const each_array_1 = ensure_array_like(filteredProjects);
  $$payload.out.push(`<section id="projects" class="py-20 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2> <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div> <p class="text-xl text-gray-600 max-w-3xl mx-auto">Explore my portfolio of data visualization projects that demonstrate technical expertise and creative problem-solving</p></div> <div class="flex flex-wrap justify-center gap-4 mb-12"><button${attr_class(
    `px-6 py-2 rounded-full font-medium transition-all duration-200 ${"bg-primary-500 text-white shadow-lg"}`,
    "svelte-79l78l"
  )}>All Projects</button> <!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out.push(`<button${attr_class(
      `px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category ? "bg-primary-500 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200"}`,
      "svelte-79l78l"
    )}>${escape_html(category)}</button>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="mb-16"><div class="bg-white rounded-2xl p-8 shadow-lg"><h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">Project Distribution by Category</h3> <div id="category-chart" class="flex justify-center"></div></div></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let project = each_array_1[$$index_2];
    const each_array_2 = ensure_array_like(project.technologies);
    $$payload.out.push(`<div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"><div class="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center"><svg class="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div> <div class="p-6"><div class="flex items-center mb-3"><span class="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">${escape_html(project.category)}</span></div> <h3 class="text-xl font-semibold text-gray-900 mb-3">${escape_html(project.title)}</h3> <p class="text-gray-600 mb-4 text-sm leading-relaxed">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let tech = each_array_2[$$index_1];
      $$payload.out.push(`<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">${escape_html(tech)}</span>`);
    }
    $$payload.out.push(`<!--]--></div> <div class="flex gap-3"><a${attr("href", project.liveUrl)} class="flex-1 bg-primary-500 text-white text-center py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm font-medium">Live Demo</a> <a${attr("href", project.githubUrl)} class="flex-1 border border-gray-300 text-gray-600 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">GitHub</a></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></section>`);
  pop();
}
function Contact($$payload, $$props) {
  push();
  let name = "";
  let email = "";
  let message = "";
  let isSubmitting = false;
  $$payload.out.push(`<section id="contact" class="py-20 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2> <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div> <p class="text-xl text-gray-600 max-w-3xl mx-auto">Ready to collaborate on your next data visualization project? Let's create something amazing together.</p></div> <div class="grid lg:grid-cols-2 gap-12"><div class="bg-white rounded-2xl p-8 shadow-lg"><h3 class="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3> <form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label> <input type="text" id="name"${attr("value", name)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" placeholder="Your full name"/></div> <div><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" id="email"${attr("value", email)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" placeholder="your.email@example.com"/></div> <div><label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label> <textarea id="message" required${attr("rows", 5)} class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Tell me about your project...">`);
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></div> <button type="submit"${attr("disabled", isSubmitting, true)} class="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 px-6 rounded-lg font-medium hover:from-primary-600 hover:to-accent-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Send Message`);
  }
  $$payload.out.push(`<!--]--></button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></form></div> <div class="space-y-8"><div class="bg-white rounded-2xl p-8 shadow-lg"><h3 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3> <div class="space-y-4"><div class="flex items-center"><div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4"><svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <div><p class="text-sm text-gray-600">Email</p> <a href="mailto:your.email@example.com" class="text-primary-600 hover:text-primary-700 font-medium">your.email@example.com</a></div></div> <div class="flex items-center"><div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"><svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 极 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></div> <div><p class="text-sm text-gray-600">LinkedIn</p> <a href="https://linkedin.com/in/yourprofile" target="_blank" class="text-primary-600 hover:text-primary-700 font-medium">/in/yourprofile</a></div></div> <div class="flex items-center"><div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4"><svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 极-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 极.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 极c0-5.523-4.477-10-10-10z"></path></svg></div> <div><p class="text-sm text-gray-600">GitHub</p> <a href="https://github.com/yourusername" target="_blank" class="text-primary-600 hover:text-primary-700 font-medium">/yourusername</a></div></div></div></div> <div class="bg-white rounded-2xl p-8 shadow-lg"><h3 class="text-2xl font-semibold text-gray-900 mb-6">Availability</h3> <div class="space-y-3"><div class="flex items-center"><div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div> <span class="text-gray-700">Available for freelance projects</span></div> <div class="flex items-center"><div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div> <span class="text-gray-700">Open to full-time opportunities</span></div> <div class="flex items-center"><div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div> <span class="text-gray-700">Response time: within 24 hours</span></div></div></div></div></div></div></section>`);
  pop();
}
function _page($$payload) {
  $$payload.out.push(`<main class="min-h-screen">`);
  Hero($$payload);
  $$payload.out.push(`<!----> `);
  About($$payload);
  $$payload.out.push(`<!----> `);
  Skills($$payload);
  $$payload.out.push(`<!----> `);
  Projects($$payload);
  $$payload.out.push(`<!----> `);
  Contact($$payload);
  $$payload.out.push(`<!----></main>`);
}
export {
  _page as default
};
