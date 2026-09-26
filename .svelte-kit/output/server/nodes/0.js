

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": true
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D0JgLAIr.js","_app/immutable/chunks/BA2zqBCj.js","_app/immutable/chunks/kYjyFZ6B.js","_app/immutable/chunks/BqWdvmci.js","_app/immutable/chunks/DkMui_aC.js"];
export const stylesheets = ["_app/immutable/assets/0.uqFSysNi.css"];
export const fonts = [];
