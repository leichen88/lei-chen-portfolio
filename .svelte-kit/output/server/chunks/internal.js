import{H as w,C as R,a as j,b as A,L as Y,r as F,p as q,s as B,c as G}from"./index2.js";import{g as M,s as E,a as D,b as S,c as W,i as x,d as J,h as K,e as Q,f as X,j as Z,k as $,p as tt,l as et,m as nt,n as at,o as T,q as rt,r as st}from"./runtime.js";import{d as P,i as it,a as ot}from"./utils2.js";import"clsx";import"./environment.js";let lt={};function Rt(t){}function Et(t){lt=t}function I(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function y(t){C=t}let p;function k(t){if(t===null)throw I(),w;return p=t}function ct(){return k(M(p))}const ut=["touchstart","touchmove"];function dt(t){return ut.includes(t)}const ht=new Set,N=new Set;let z=null;function b(t){var e=this,r=e.ownerDocument,i=t.type,s=t.composedPath?.()||[],n=s[0]||t.target;z=t;var a=0,o=z===t&&t.__root;if(o){var d=s.indexOf(o);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var h=s.indexOf(e);if(h===-1)return;d<=h&&(a=d)}if(n=s[a]||t.target,n!==e){P(t,"currentTarget",{configurable:!0,get(){return n||r}});var f=W,c=S;E(null),D(null);try{for(var l,u=[];n!==null;){var _=n.assignedSlot||n.parentNode||n.host||null;try{var m=n["__"+i];if(m!=null&&(!n.disabled||t.target===n))if(it(m)){var[U,...V]=m;U.apply(n,[t,...V])}else m.call(n,t)}catch(v){l?u.push(v):l=v}if(t.cancelBubble||_===e||_===null)break;n=_}if(l){for(let v of u)queueMicrotask(()=>{throw v});throw l}}finally{t.__root=e,delete t.currentTarget,E(f),D(c)}}}function ft(t,e){var r=S;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function L(t,e){return H(t,e)}function mt(t,e){x(),e.intro=e.intro??!1;const r=e.target,i=C,s=p;try{for(var n=J(r);n&&(n.nodeType!==R||n.data!==j);)n=M(n);if(!n)throw w;y(!0),k(n),ct();const a=H(t,{...e,anchor:n});if(p===null||p.nodeType!==R||p.data!==A)throw I(),w;return y(!1),a}catch(a){if(a instanceof Error&&a.message.split(`
`).some(o=>o.startsWith("https://svelte.dev/e/")))throw a;return a!==w&&console.warn("Failed to hydrate: ",a),e.recover===!1&&K(),x(),Q(r),y(!1),L(t,e)}finally{y(i),k(s)}}const g=new Map;function H(t,{target:e,anchor:r,props:i={},events:s,context:n,intro:a=!0}){x();var o=new Set,d=c=>{for(var l=0;l<c.length;l++){var u=c[l];if(!o.has(u)){o.add(u);var _=dt(u);e.addEventListener(u,b,{passive:_});var m=g.get(u);m===void 0?(document.addEventListener(u,b,{passive:_}),g.set(u,1)):g.set(u,m+1)}}};d(ot(ht)),N.add(d);var h=void 0,f=X(()=>{var c=r??e.appendChild(Z());return $(()=>{if(n){tt({});var l=et;l.c=n}s&&(i.$$events=s),C&&ft(c,null),h=t(c,i)||{},C&&(S.nodes_end=p),n&&nt()}),()=>{for(var l of o){e.removeEventListener(l,b);var u=g.get(l);--u===0?(document.removeEventListener(l,b),g.delete(l)):g.set(l,u)}N.delete(d),c!==r&&c.parentNode?.removeChild(c)}});return O.set(h,f),h}let O=new WeakMap;function pt(t,e){const r=O.get(t);return r?(O.delete(t),r(e)):Promise.resolve()}function _t(t){return class extends gt{constructor(e){super({component:t,...e})}}}class gt{#e;#t;constructor(e){var r=new Map,i=(n,a)=>{var o=st(a,!1,!1);return r.set(n,o),o};const s=new Proxy({...e.props||{},$$events:{}},{get(n,a){return T(r.get(a)??i(a,Reflect.get(n,a)))},has(n,a){return a===Y?!0:(T(r.get(a)??i(a,Reflect.get(n,a))),Reflect.has(n,a))},set(n,a,o){return at(r.get(a)??i(a,o),o),Reflect.set(n,a,o)}});this.#t=(e.hydrate?mt:L)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&rt(),this.#e=s.$$events;for(const n of Object.keys(this.#t))n==="$set"||n==="$destroy"||n==="$on"||P(this,n,{get(){return this.#t[n]},set(a){this.#t[n]=a},enumerable:!0});this.#t.$set=n=>{Object.assign(s,n)},this.#t.$destroy=()=>{pt(this.#t)}}$set(e){this.#t.$set(e)}$on(e,r){this.#e[e]=this.#e[e]||[];const i=(...s)=>r.call(this,...s);return this.#e[e].push(i),()=>{this.#e[e]=this.#e[e].filter(s=>s!==i)}}$destroy(){this.#t.$destroy()}}let vt=null;function Dt(t){vt=t}function Tt(t){}function yt(t){const e=_t(t),r=(i,{context:s}={})=>{const n=F(t,{props:i,context:s});return{css:{code:"",map:null},head:n.head,html:n.body}};return e.render=r,e}function bt(t,e){q();let{stores:r,page:i,constructors:s,components:n=[],form:a,data_0:o=null,data_1:d=null}=e;B("__svelte__",r),r.page.set(i);const h=s[1];if(s[1]){t.out.push("<!--[-->");const f=s[0];t.out.push("<!---->"),f(t,{data:o,form:a,params:i.params,children:c=>{c.out.push("<!---->"),h(c,{data:d,form:a,params:i.params}),c.out.push("<!---->")},$$slots:{default:!0}}),t.out.push("<!---->")}else{t.out.push("<!--[!-->");const f=s[0];t.out.push("<!---->"),f(t,{data:o,form:a,params:i.params}),t.out.push("<!---->")}t.out.push("<!--]--> "),t.out.push("<!--[!-->"),t.out.push("<!--]-->"),G()}const wt=yt(bt),Nt={app_template_contains_nonce:!1,csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,csrf_trusted_origins:[],embedded:!1,env_public_prefix:"PUBLIC_",env_private_prefix:"",hash_routing:!1,hooks:null,preload_strategy:"modulepreload",root:wt,service_worker:!1,service_worker_options:void 0,templates:{app:({head:t,body:e,assets:r,nonce:i,env:s})=>`<!DOCTYPE html>
<html lang="en" class="dark">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="favicon_2.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		<!-- Primary Meta Tags -->
		<title>Lei Chen - Data Visualization Specialist | UNHCR, IOM, Humanitarian Data</title>
		<meta name="title" content="Lei Chen - Data Visualization Specialist">
		<meta name="description" content="Data visualization specialist with 9+ years transforming complex datasets into clear, actionable visual stories for UNHCR, IOM, and global organizations.">
		<meta name="keywords" content="data visualization, humanitarian, UNHCR, IOM, data stories, dashboards, infographics, D3.js, Svelte, mapping, GIS">
		<meta name="author" content="Lei Chen">
		<meta name="robots" content="index, follow">
		
		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website">
		<meta property="og:url" content="https://leichen.dev/">
		<meta property="og:title" content="Lei Chen - Data Visualization Specialist">
		<meta property="og:description" content="Data visualization specialist with 9+ years transforming complex datasets into clear, actionable visual stories for UNHCR, IOM, and global organizations.">
		<meta property="og:image" content="/social-preview.jpg">
		
		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="https://leichen.dev/">
		<meta property="twitter:title" content="Lei Chen - Data Visualization Specialist">
		<meta property="twitter:description" content="Data visualization specialist with 9+ years transforming complex datasets into clear, actionable visual stories for UNHCR, IOM, and global organizations.">
		<meta property="twitter:image" content="/social-preview.jpg">
				
		<!-- Theme Color -->
		<meta name="theme-color" content="#0f172a">
		<meta name="msapplication-TileColor" content="#0f172a">
		
		<!-- Preload critical resources -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		
		`+t+`
	</head>
	<body data-sveltekit-preload-data="hover">
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<div style="display: contents">`+e+`</div>
	</body>
</html>
`,error:({status:t,message:e})=>`<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+e+`</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+t+`</span>
			<div class="message">
				<h1>`+e+`</h1>
			</div>
		</div>
	</body>
</html>
`},version_hash:"f85d1x"};async function zt(){return{handle:void 0,handleFetch:void 0,handleError:void 0,handleValidationError:void 0,init:void 0,reroute:void 0,transport:void 0}}export{Et as a,Dt as b,Tt as c,zt as g,Nt as o,lt as p,vt as r,Rt as s};
