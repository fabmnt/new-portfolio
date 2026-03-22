import { c as createComponent } from './astro-component_DgJH_tfk.mjs';
import { P as renderTemplate } from './sequence_BuFzwd2R.mjs';
import { r as renderComponent } from './entrypoint_RTj3b3nT.mjs';
import { $ as $$NewLayout, M as MainContent } from './MainContent_CCR3QCah.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$NewLayout, { "locale": "es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainContent", MainContent, { "locale": "es", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MainContent", "client:component-export": "MainContent" })} ` })}`;
}, "C:/Users/fabia/Dev/Me/new-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/fabia/Dev/Me/new-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
