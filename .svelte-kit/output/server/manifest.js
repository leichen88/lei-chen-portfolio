export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "lei-chen/_app",
	assets: new Set([".DS_Store",".nojekyll","download/cv_LeiChen.pdf","favicon.svg","favicon_2.svg","logo-black.svg","logo-white.svg","projects/.DS_Store","projects/thumbnail-afg-returns.gif","projects/thumbnail-assessment-eth.jpg","projects/thumbnail-centralMed.gif","projects/thumbnail-climate-report.jpg","projects/thumbnail-climate.jpg","projects/thumbnail-core-afg.jpg","projects/thumbnail-core-bdi.jpg","projects/thumbnail-core-ssd.jpg","projects/thumbnail-core-uga.jpg","projects/thumbnail-covid.jpg","projects/thumbnail-darien-gap.jpg","projects/thumbnail-dataviz-guidelines.jpg","projects/thumbnail-education.jpg","projects/thumbnail-globe.jpg","projects/thumbnail-gt-2017.jpg","projects/thumbnail-haiti.jpg","projects/thumbnail-idp-number.gif","projects/thumbnail-mapping-guidelines.jpg","projects/thumbnail-needs-eth.jpg","projects/thumbnail-oos-story.jpg","projects/thumbnail-shelter-eth.jpg","projects/thumbnail-ssd-one-twopager.jpg","projects/thumbnail-sudan-one.gif","projects/thumbnail-sudan-six-months.gif","projects/thumbnail-sudan-two.jpg","projects/thumbnail-sudan-two_.jpg","projects/thumbnail-wash-eth.jpg"]),
	mimeTypes: {".pdf":"application/pdf",".svg":"image/svg+xml",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BJIrQHZW.js",app:"_app/immutable/entry/app.eHOS_pQg.js",imports:["_app/immutable/entry/start.BJIrQHZW.js","_app/immutable/chunks/iGXKFF6N.js","_app/immutable/chunks/qOaUXbzf.js","_app/immutable/chunks/pzzwaGwV.js","_app/immutable/entry/app.eHOS_pQg.js","_app/immutable/chunks/pzzwaGwV.js","_app/immutable/chunks/qOaUXbzf.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DZ0_ZE2q.js","_app/immutable/chunks/abXnYSgP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
