

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.49bdUgTI.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B22cmo3q.js","_app/immutable/chunks/BTcAPlcy.js"];
export const stylesheets = ["_app/immutable/assets/0.BVtuIb47.css"];
export const fonts = [];
