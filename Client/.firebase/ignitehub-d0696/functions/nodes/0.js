

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a1a438a8.js","_app/immutable/chunks/scheduler.92391968.js","_app/immutable/chunks/index.0ef68b7d.js"];
export const stylesheets = ["_app/immutable/assets/0.6719d10d.css"];
export const fonts = [];