<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';

	let time = $state(0);
	let scaleFactor = $state(1);
	let positionFactor = $state(1);
	
	onMount(() => {
		console.log('ThreeBackground mounted');
		
		const animate = () => {
			time += 0.005;
			requestAnimationFrame(animate);
		};
		animate();
	});
</script>

<div class="absolute inset-0 z-0">
	<Canvas>
		<T.PerspectiveCamera position={[0, 0, 15]} lookAt={[0, 0, 0]} fov={45} makeDefault></T.PerspectiveCamera>
		
		<!-- Enhanced lighting -->
		<ambientLight intensity={0.6} color="#404060"></ambientLight>
		<directionalLight position={[5, 8, 10]} intensity={1.2} color="#ffffff" target={[0, 0, 0]}></directionalLight>
		<pointLight position={[3, 3, 3]} intensity={0.8} color="#8b5cf6" distance={15}></pointLight>
		
		<!-- Icosahedron -->
		<T.Mesh
			position={[3, 0, 0]}
			rotation={[time * 0.2, time * 0.2, time * 0.2]}
			scale={2.5}
		>
			<T.IcosahedronGeometry args={[1, 0]}></T.IcosahedronGeometry>
			<T.MeshBasicMaterial
				color="#8b5cf6"
				wireframe={true}
				wireframeLinewidth={2}
				transparent={true}
				opacity={0.7}
			></T.MeshBasicMaterial>
		</T.Mesh>
        
		<!-- Dodecahedron -->
		<T.Mesh
			position={[0, -5, -5]}
			rotation={[time * 0.4, time * 0.3, time * 0.5]}
			scale={1.2}
		>
			<T.DodecahedronGeometry args={[0.8, 0]}></T.DodecahedronGeometry>
			<T.MeshBasicMaterial
				color="#ec4899"
				wireframe={true}
				wireframeLinewidth={1.5}
				transparent={true}
				opacity={0.6}
			></T.MeshBasicMaterial>
		</T.Mesh>

		<!-- Octahedron -->
		<T.Mesh
			position={[-1, 1, 7]}
			rotation={[time * 0.6, time * 0.2, time * 0.4]}
			scale={0.5}
		>
			<T.OctahedronGeometry args={[1.2, 0]}></T.OctahedronGeometry>
			<T.MeshBasicMaterial
				color="#10b981"
				wireframe={true}
				wireframeLinewidth={2}
				transparent={true}
				opacity={0.5}
			></T.MeshBasicMaterial>
		</T.Mesh>

		<!-- Star shapes -->
		{#each Array(15) as _, i}
			<T.Mesh
				position={[
					Math.sin(time * 0.1 + i * 0.5) * 20,
					Math.cos(time * 0.15 + i * 0.6) * 15,
					Math.sin(time * 0.08 + i * 0.4) * 18
				]}
				rotation={[time * 0.2 + i * 0.3, time * 0.25 + i * 0.4, time * 0.1 + i * 0.2]}
				scale={0.2 + Math.sin(time * 2 + i * 0.5) * 0.15}
			>
				<T.TetrahedronGeometry args={[0.4, 0]}></T.TetrahedronGeometry>
				<T.MeshBasicMaterial
					color={i % 6 === 0 ? '#06b6d4' : i % 6 === 1 ? '#84cc16' : i % 6 === 2 ? '#f97316' : i % 6 === 3 ? '#a855f7' : i % 6 === 4 ? '#ef4444' : '#3b82f6'}
					transparent={true}
					opacity={0.5 + Math.sin(time * 1.5 + i * 0.3) * 0.2}
					wireframe={true}
					wireframeLinewidth={1}
				></T.MeshBasicMaterial>
			</T.Mesh>
		{/each}

		<!-- Extremely dense bubble field with many more particles - slowed movement -->
		{#each Array(200) as _, i}
			<T.Mesh
				position={[
					20 * positionFactor + Math.sin(time * (0.03 + i * 0.008) + i * 0.15) * (12 + i % 8) * positionFactor,
					Math.cos(time * (0.05 + i * 0.012) + i * 0.22) * (9 + i % 5) * positionFactor,
					Math.sin(time * (0.025 + i * 0.015) + i * 0.1) * (10 + i % 9) * positionFactor
				]}
				rotation={[time * 0.02 + i * 0.1, time * 0.04 + i * 0.15, time * 0.01 + i * 0.05]}
				scale={(0.1 + Math.sin(time * 1.2 + i * 0.3) * 0.06) * scaleFactor}
			>
				<T.SphereGeometry args={[0.05 + (i % 6) * 0.025, 8, 8]}></T.SphereGeometry>
				<T.MeshBasicMaterial
					color={i % 12 === 0 ? '#ef4444' : i % 12 === 1 ? '#3b82f6' : i % 12 === 2 ? '#10b981' : i % 12 === 3 ? '#f59e0b' : i % 12 === 4 ? '#8b5cf6' : i % 12 === 5 ? '#ec4899' : i % 12 === 6 ? '#06b6d4' : i % 12 === 7 ? '#84cc16' : i % 12 === 8 ? '#f97316' : i % 12 === 9 ? '#a855f7' : i % 12 === 10 ? '#22d3ee' : '#facc15'}
					transparent={true}
					opacity={0.35 + Math.sin(time * 0.9 + i * 0.2) * 0.2}
				></T.MeshBasicMaterial>
			</T.Mesh>
		{/each}


	</Canvas>
</div>

<style>
	:global(canvas) {
		display: block;
		width: 100% !important;
		height: 100% !important;
		position: absolute;
		top: 0;
		left: 0;
		background: transparent !important;
		z-index: 0 !important;
	}
</style>