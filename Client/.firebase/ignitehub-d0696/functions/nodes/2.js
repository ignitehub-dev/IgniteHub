

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9bfaaff0.js","_app/immutable/chunks/scheduler.92391968.js","_app/immutable/chunks/index.0ef68b7d.js","_app/immutable/chunks/stores.534559b7.js","_app/immutable/chunks/singletons.08f57f52.js","_app/immutable/chunks/index.7c43458a.js"];
export const stylesheets = [];
export const fonts = [];
