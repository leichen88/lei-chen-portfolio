
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/download/cv_LeiChen.pdf" | "/favicon.svg" | "/favicon_2.svg" | "/logo-black.svg" | "/logo-white.svg" | "/projects/.DS_Store" | "/projects/thumbnail-afg-returns.gif" | "/projects/thumbnail-assessment-eth.jpg" | "/projects/thumbnail-centralMed.gif" | "/projects/thumbnail-climate-report.jpg" | "/projects/thumbnail-climate.jpg" | "/projects/thumbnail-core-afg.jpg" | "/projects/thumbnail-core-bdi.jpg" | "/projects/thumbnail-core-ssd.jpg" | "/projects/thumbnail-core-uga.jpg" | "/projects/thumbnail-covid.jpg" | "/projects/thumbnail-darien-gap.jpg" | "/projects/thumbnail-dataviz-guidelines.jpg" | "/projects/thumbnail-education.jpg" | "/projects/thumbnail-globe.jpg" | "/projects/thumbnail-gt-2017.jpg" | "/projects/thumbnail-haiti.jpg" | "/projects/thumbnail-idp-number.gif" | "/projects/thumbnail-mapping-guidelines.jpg" | "/projects/thumbnail-needs-eth.jpg" | "/projects/thumbnail-oos-story.jpg" | "/projects/thumbnail-shelter-eth.jpg" | "/projects/thumbnail-ssd-one-twopager.jpg" | "/projects/thumbnail-sudan-one.gif" | "/projects/thumbnail-sudan-six-months.gif" | "/projects/thumbnail-sudan-two.jpg" | "/projects/thumbnail-sudan-two_.jpg" | "/projects/thumbnail-wash-eth.jpg" | string & {};
	}
}