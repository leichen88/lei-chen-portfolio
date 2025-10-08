import { E as getContext, z as push, I as ensure_array_like, K as attr_class, J as attr, F as escape_html, B as pop, R as store_get, S as unsubscribe_stores } from "./index2.js";
import { b as base } from "./paths.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "./state.svelte.js";
import "clsx";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let activeSection = "";
  const navItems = [
    { name: "Home", href: "/", type: "page" },
    { name: "About", href: "/about", type: "page" },
    { name: "Projects", href: "#projects", type: "section" },
    { name: "Contact", href: "#contact", type: "section" }
  ];
  function isActiveLink(href, type) {
    if (type === "page") {
      if (href === "/") {
        return store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" && activeSection === "";
      }
      return store_get($$store_subs ??= {}, "$page", page).url.pathname === href;
    } else if (type === "section") {
      return activeSection === href.slice(1);
    }
    return false;
  }
  const each_array = ensure_array_like(
    // Scroll event listener for dynamic navigation and section tracking
    // Scrolling down and past threshold - hide nav
    // Scrolling up - show nav
    // Update active section based on scroll position
    // Initial section check
    navItems
  );
  $$payload.out.push(`<nav${attr_class("fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 transition-transform duration-300 ease-in-out svelte-e9mb7a", void 0, { "nav-hidden": false })}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"><div class="flex-shrink-0"><a href="/" class="flex items-center text-gray-200 hover:text-primary-400 transition-colors duration-200"><img${attr("src", base ? `${base}/logo-white.svg` : "logo-white.svg")} alt="Logo" class="logo-svg svelte-e9mb7a"/></a></div> <div class="hidden md:flex items-center space-x-4"><div class="flex items-baseline space-x-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<a${attr("href", item.href)}${attr_class(
      `px-3 py-2 text-sm transition-colors duration-200 ${isActiveLink(item.href, item.type) ? "text-primary-400" : "text-white hover:text-primary-400"}`,
      "svelte-e9mb7a"
    )}>${escape_html(item.name)}</a>`);
  }
  $$payload.out.push(`<!--]--></div></div> <div class="md:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"><span class="sr-only">Open main menu</span> `);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
  }
  $$payload.out.push(`<!--]--></button></div></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></nav>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  Navigation as N
};
