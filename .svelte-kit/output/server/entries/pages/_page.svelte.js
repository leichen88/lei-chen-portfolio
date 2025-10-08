import "clsx";
import { N as Navigation } from "../../chunks/Navigation.js";
import { E as getContext, A as setContext, G as bind_props, B as pop, z as push, I as ensure_array_like, J as attr, F as escape_html, K as attr_class } from "../../chunks/index2.js";
import { g as get, w as writable, d as derived } from "../../chunks/index.js";
import * as THREE from "three";
import { REVISION } from "three";
import "mitt";
import { b as base } from "../../chunks/paths.js";
function fromStore(store) {
  if ("set" in store) {
    return {
      get current() {
        return get(store);
      },
      set current(v) {
        store.set(v);
      }
    };
  }
  return {
    get current() {
      return get(store);
    }
  };
}
const signal = Symbol();
const isStore = (dep) => {
  return typeof dep?.subscribe === "function";
};
const runObserve = (dependencies, callback, pre) => {
  const stores = dependencies().map((d) => {
    if (isStore(d)) {
      return fromStore(d);
    }
    return signal;
  });
  dependencies().map((d, i) => {
    if (stores[i] === signal) return d;
    return stores[i].current;
  });
};
const observePost = (dependencies, callback) => {
  return runObserve(dependencies);
};
const observePre = (dependencies, callback) => {
  return runObserve(dependencies);
};
Object.assign(observePost, { pre: observePre });
REVISION.replace("dev", "");
const currentWritable = (value) => {
  const store = writable(value);
  const extendedWritable = {
    set: (value2) => {
      extendedWritable.current = value2;
      store.set(value2);
    },
    subscribe: store.subscribe,
    update: (fn) => {
      const newValue = fn(extendedWritable.current);
      extendedWritable.current = newValue;
      store.set(newValue);
    },
    current: value
  };
  return extendedWritable;
};
const resolvePropertyPath = (target, propertyPath) => {
  if (propertyPath.includes(".")) {
    const path = propertyPath.split(".");
    const key = path.pop();
    for (let i = 0; i < path.length; i += 1) {
      target = target[path[i]];
    }
    return {
      target,
      key
    };
  } else {
    return {
      target,
      key: propertyPath
    };
  }
};
const useDOM = () => {
  const context = getContext("threlte-dom-context");
  if (!context) {
    throw new Error("useDOM can only be used in a child component to <Canvas>.");
  }
  return context;
};
const useScheduler = () => {
  const context = getContext("threlte-scheduler-context");
  if (!context) {
    throw new Error("useScheduler can only be used in a child component to <Canvas>.");
  }
  return context;
};
const useCamera = () => {
  const context = getContext("threlte-camera-context");
  if (!context) {
    throw new Error("useCamera can only be used in a child component to <Canvas>.");
  }
  return context;
};
const parentContextKey = Symbol("threlte-parent-context");
const createParentContext = (parent) => {
  const ctx = currentWritable(parent);
  setContext(parentContextKey, ctx);
  return ctx;
};
const useParent = () => {
  const parent = getContext(parentContextKey);
  return parent;
};
const parentObject3DContextKey = Symbol("threlte-parent-object3d-context");
const createParentObject3DContext = (object) => {
  const parentObject3D = getContext(parentObject3DContextKey);
  const object3D = writable(object);
  const ctx = derived([object3D, parentObject3D], ([object3D2, parentObject3D2]) => {
    return object3D2 ?? parentObject3D2;
  });
  setContext(parentObject3DContextKey, ctx);
  return object3D;
};
const useParentObject3D = () => {
  return getContext(parentObject3DContextKey);
};
const useScene = () => {
  const context = getContext("threlte-scene-context");
  if (!context) {
    throw new Error("useScene can only be used in a child component to <Canvas>.");
  }
  return context;
};
const useRenderer = () => {
  const context = getContext("threlte-renderer-context");
  if (!context) {
    throw new Error("useRenderer can only be used in a child component to <Canvas>.");
  }
  return context;
};
function Canvas($$payload, $$props) {
  let { children, $$slots, $$events, ...rest } = $$props;
  $$payload.out.push(`<div class="svelte-1osucwe"><canvas class="svelte-1osucwe">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></canvas></div>`);
}
const useThrelte = () => {
  const schedulerCtx = useScheduler();
  const rendererCtx = useRenderer();
  const cameraCtx = useCamera();
  const sceneCtx = useScene();
  const domCtx = useDOM();
  const context = {
    advance: schedulerCtx.advance,
    autoRender: schedulerCtx.autoRender,
    autoRenderTask: rendererCtx.autoRenderTask,
    camera: cameraCtx.camera,
    colorManagementEnabled: rendererCtx.colorManagementEnabled,
    colorSpace: rendererCtx.colorSpace,
    dpr: rendererCtx.dpr,
    invalidate: schedulerCtx.invalidate,
    mainStage: schedulerCtx.mainStage,
    renderer: rendererCtx.renderer,
    renderMode: schedulerCtx.renderMode,
    renderStage: schedulerCtx.renderStage,
    scheduler: schedulerCtx.scheduler,
    shadows: rendererCtx.shadows,
    shouldRender: schedulerCtx.shouldRender,
    dom: domCtx.dom,
    canvas: domCtx.canvas,
    size: domCtx.size,
    toneMapping: rendererCtx.toneMapping,
    get scene() {
      return sceneCtx.scene;
    },
    set scene(scene) {
      sceneCtx.scene = scene;
    }
  };
  return context;
};
const useAttach = (getRef, getAttach) => {
  const { invalidate } = useThrelte();
  fromStore(useParent());
  fromStore(useParentObject3D());
  createParentContext();
  createParentObject3DContext();
};
const contextName = Symbol("threlte-disposable-object-context");
const useSetDispose = (getDispose) => {
  const parentDispose = getContext(contextName);
  const mergedDispose = getDispose() ?? parentDispose?.() ?? true;
  setContext(contextName, () => mergedDispose);
};
const useEvents = (getRef, propKeys, props) => {
  for (const key of propKeys) {
    props[key];
    if (key.startsWith("on")) ;
  }
};
let currentIs;
const setIs = (is) => {
  currentIs = is;
};
const useIs = () => {
  const is = currentIs;
  currentIs = void 0;
  return is;
};
const pluginContextKey = "threlte-plugin-context";
const usePlugins = (args) => {
  const plugins = getContext(pluginContextKey);
  if (!plugins)
    return;
  const pluginsProps = [];
  const pluginsArray = Object.values(plugins);
  if (pluginsArray.length > 0) {
    const pluginArgs = args();
    for (let i = 0; i < pluginsArray.length; i++) {
      const plugin = pluginsArray[i];
      const p = plugin(pluginArgs);
      if (p && p.pluginProps) {
        pluginsProps.push(...p.pluginProps);
      }
    }
  }
  return {
    pluginsProps
  };
};
const ignoredProps = /* @__PURE__ */ new Set(["$$scope", "$$slots", "type", "args", "attach", "instance"]);
const updateProjectionMatrixKeys = /* @__PURE__ */ new Set([
  "fov",
  "aspect",
  "near",
  "far",
  "left",
  "right",
  "top",
  "bottom",
  "zoom"
]);
const memoizeProp = (value) => {
  if (typeof value === "string")
    return true;
  if (typeof value === "number")
    return true;
  if (typeof value === "boolean")
    return true;
  if (typeof value === "undefined")
    return true;
  if (value === null)
    return true;
  return false;
};
const createSetter = (target, key, value) => {
  if (!Array.isArray(value) && typeof value === "number" && typeof target[key] === "object" && target[key] !== null && typeof target[key]?.setScalar === "function" && // colors do have a setScalar function, but we don't want to use it, because
  // the hex notation (i.e. 0xff0000) is very popular and matches the number
  // type. So we exclude colors here.
  !target[key]?.isColor) {
    return (target2, key2, value2) => {
      target2[key2].setScalar(value2);
    };
  } else {
    if (typeof target[key]?.set === "function" && typeof target === "object" && target !== null) {
      if (Array.isArray(value)) {
        return (target2, key2, value2) => {
          target2[key2].set(...value2);
        };
      } else {
        return (target2, key2, value2) => {
          target2[key2].set(value2);
        };
      }
    } else {
      return (target2, key2, value2) => {
        target2[key2] = value2;
      };
    }
  }
};
const useProps = () => {
  const { invalidate } = useThrelte();
  const memoizedProps = /* @__PURE__ */ new Map();
  const memoizedSetters = /* @__PURE__ */ new Map();
  const setProp = (instance, propertyPath, value, manualCamera) => {
    if (memoizeProp(value)) {
      const memoizedProp = memoizedProps.get(propertyPath);
      if (memoizedProp && memoizedProp.instance === instance && memoizedProp.value === value) {
        return;
      }
      memoizedProps.set(propertyPath, {
        instance,
        value
      });
    }
    const { key, target } = resolvePropertyPath(instance, propertyPath);
    if (value !== void 0 && value !== null) {
      const memoizedSetter = memoizedSetters.get(propertyPath);
      if (memoizedSetter) {
        memoizedSetter(target, key, value);
      } else {
        const setter = createSetter(target, key, value);
        memoizedSetters.set(propertyPath, setter);
        setter(target, key, value);
      }
    } else {
      createSetter(target, key, value)(target, key, value);
    }
    if (manualCamera)
      return;
    if (updateProjectionMatrixKeys.has(key) && (target.isPerspectiveCamera || target.isOrthographicCamera)) {
      target.updateProjectionMatrix();
    }
  };
  const updateProp = (instance, key, value, pluginsProps, manualCamera) => {
    if (!ignoredProps.has(key) && !pluginsProps?.includes(key)) {
      setProp(instance, key, value, manualCamera);
    }
    invalidate();
  };
  return {
    updateProp
  };
};
const isClass = (input) => {
  return typeof input === "function" && Function.prototype.toString.call(input).startsWith("class ");
};
const determineRef = (is, args) => {
  if (isClass(is)) {
    if (Array.isArray(args)) {
      return new is(...args);
    } else {
      return new is();
    }
  }
  return is;
};
function T$1($$payload, $$props) {
  push();
  let {
    is = useIs(),
    args,
    attach,
    manual = false,
    makeDefault = false,
    dispose,
    ref = void 0,
    oncreate,
    children,
    $$slots,
    $$events,
    ...props
  } = $$props;
  const internalRef = determineRef(is, args);
  usePlugins(() => ({
    get ref() {
      return internalRef;
    },
    get args() {
      return args;
    },
    get attach() {
      return attach;
    },
    get manual() {
      return manual;
    },
    get makeDefault() {
      return makeDefault;
    },
    get dispose() {
      return dispose;
    },
    get props() {
      return props;
    }
  }));
  const propKeys = Object.keys(props);
  useProps();
  propKeys.forEach((key) => {
    props[key];
  });
  useAttach();
  useSetDispose(() => dispose);
  useEvents(() => internalRef, propKeys, props);
  children?.($$payload, { ref: internalRef });
  $$payload.out.push(`<!---->`);
  bind_props($$props, { ref });
  pop();
}
const catalogue = {};
const T = new Proxy(T$1, {
  get(_target, is) {
    if (typeof is !== "string") {
      return T$1;
    }
    const module = catalogue[is] || THREE[is];
    if (module === void 0) {
      throw new Error(`No Three.js module found for ${is}. Did you forget to extend the catalogue?`);
    }
    setIs(module);
    return T$1;
  }
});
function ThreeBackground($$payload, $$props) {
  push();
  let time = 0;
  let scaleFactor = 1;
  let positionFactor = 1;
  $$payload.out.push(`<div class="absolute inset-0 z-0">`);
  Canvas($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(Array(15));
      const each_array_1 = ensure_array_like(Array(200));
      $$payload2.out.push(`<!---->`);
      T.PerspectiveCamera($$payload2, {
        position: [0, 0, 15],
        lookAt: [0, 0, 0],
        fov: 45,
        makeDefault: true
      });
      $$payload2.out.push(`<!----> <ambientLight${attr("intensity", 0.6)} color="#404060"></ambientLight> <directionalLight${attr("position", [5, 8, 10])}${attr("intensity", 1.2)} color="#ffffff"${attr("target", [0, 0, 0])}></directionalLight> <pointLight${attr("position", [3, 3, 3])}${attr("intensity", 0.8)} color="#8b5cf6"${attr("distance", 15)}></pointLight> <!---->`);
      T.Mesh($$payload2, {
        position: [3, 0, 0],
        rotation: [time * 0.2, time * 0.2, time * 0.2],
        scale: 2.5,
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          T.IcosahedronGeometry($$payload3, { args: [1, 0] });
          $$payload3.out.push(`<!----> <!---->`);
          T.MeshBasicMaterial($$payload3, {
            color: "#8b5cf6",
            wireframe: true,
            wireframeLinewidth: 2,
            transparent: true,
            opacity: 0.7
          });
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <!---->`);
      T.Mesh($$payload2, {
        position: [0, -5, -5],
        rotation: [time * 0.4, time * 0.3, time * 0.5],
        scale: 1.2,
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          T.DodecahedronGeometry($$payload3, { args: [0.8, 0] });
          $$payload3.out.push(`<!----> <!---->`);
          T.MeshBasicMaterial($$payload3, {
            color: "#ec4899",
            wireframe: true,
            wireframeLinewidth: 1.5,
            transparent: true,
            opacity: 0.6
          });
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <!---->`);
      T.Mesh($$payload2, {
        position: [-1, 1, 7],
        rotation: [time * 0.6, time * 0.2, time * 0.4],
        scale: 0.5,
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->`);
          T.OctahedronGeometry($$payload3, { args: [1.2, 0] });
          $$payload3.out.push(`<!----> <!---->`);
          T.MeshBasicMaterial($$payload3, {
            color: "#10b981",
            wireframe: true,
            wireframeLinewidth: 2,
            transparent: true,
            opacity: 0.5
          });
          $$payload3.out.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <!--[-->`);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        $$payload2.out.push(`<!---->`);
        T.Mesh($$payload2, {
          position: [
            Math.sin(time * 0.1 + i * 0.5) * 20,
            Math.cos(time * 0.15 + i * 0.6) * 15,
            Math.sin(time * 0.08 + i * 0.4) * 18
          ],
          rotation: [
            time * 0.2 + i * 0.3,
            time * 0.25 + i * 0.4,
            time * 0.1 + i * 0.2
          ],
          scale: 0.2 + Math.sin(time * 2 + i * 0.5) * 0.15,
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->`);
            T.TetrahedronGeometry($$payload3, { args: [0.4, 0] });
            $$payload3.out.push(`<!----> <!---->`);
            T.MeshBasicMaterial($$payload3, {
              color: i % 6 === 0 ? "#06b6d4" : i % 6 === 1 ? "#84cc16" : i % 6 === 2 ? "#f97316" : i % 6 === 3 ? "#a855f7" : i % 6 === 4 ? "#ef4444" : "#3b82f6",
              transparent: true,
              opacity: 0.5 + Math.sin(time * 1.5 + i * 0.3) * 0.2,
              wireframe: true,
              wireframeLinewidth: 1
            });
            $$payload3.out.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!---->`);
      }
      $$payload2.out.push(`<!--]--> <!--[-->`);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        each_array_1[i];
        $$payload2.out.push(`<!---->`);
        T.Mesh($$payload2, {
          position: [
            20 * positionFactor + Math.sin(time * (0.03 + i * 8e-3) + i * 0.15) * (12 + i % 8) * positionFactor,
            Math.cos(time * (0.05 + i * 0.012) + i * 0.22) * (9 + i % 5) * positionFactor,
            Math.sin(time * (0.025 + i * 0.015) + i * 0.1) * (10 + i % 9) * positionFactor
          ],
          rotation: [
            time * 0.02 + i * 0.1,
            time * 0.04 + i * 0.15,
            time * 0.01 + i * 0.05
          ],
          scale: (0.1 + Math.sin(time * 1.2 + i * 0.3) * 0.06) * scaleFactor,
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->`);
            T.SphereGeometry($$payload3, { args: [0.05 + i % 6 * 0.025, 8, 8] });
            $$payload3.out.push(`<!----> <!---->`);
            T.MeshBasicMaterial($$payload3, {
              color: i % 12 === 0 ? "#ef4444" : i % 12 === 1 ? "#3b82f6" : i % 12 === 2 ? "#10b981" : i % 12 === 3 ? "#f59e0b" : i % 12 === 4 ? "#8b5cf6" : i % 12 === 5 ? "#ec4899" : i % 12 === 6 ? "#06b6d4" : i % 12 === 7 ? "#84cc16" : i % 12 === 8 ? "#f97316" : i % 12 === 9 ? "#a855f7" : i % 12 === 10 ? "#22d3ee" : "#facc15",
              transparent: true,
              opacity: 0.35 + Math.sin(time * 0.9 + i * 0.2) * 0.2
            });
            $$payload3.out.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!---->`);
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  pop();
}
function Hero($$payload, $$props) {
  push();
  let animatedText = "";
  $$payload.out.push(`<section id="home" class="h-screen bg-gray-900 relative overflow-hidden">`);
  ThreeBackground($$payload);
  $$payload.out.push(`<!----> <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10"><div class="w-full"><p class="text-xl text-primary-400 max-w-2xl leading-relaxed font-light">Hi, my name is</p> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"><span class="text-white">Lei Chen</span></h1> <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8 min-h-[2.5rem] tracking-wide">${escape_html(animatedText)} <span class="animate-pulse text-primary-400">|</span></h2> <p class="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">I enjoy transforming complex data into compelling visual stories through 
				interactive dashboards, beautiful charts, and insightful analytics.</p></div></div> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"><svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></section>`);
  pop();
}
function Projects($$payload, $$props) {
  push();
  let projects = [
    {
      id: 1,
      title: "Sudan Crisis",
      description: "Data story on two years of war, unprecedented displacement, and waning global attention.",
      technologies: ["D3.js", "Svelte", "Mapbox", "Datawrapper"],
      image: "projects/thumbnail-sudan-two_.jpg",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2025/04/sudan-crisis-deepens-but-attention-wanes-after-two-years-of-war/",
      githubUrl: "#",
      category: ["Data story"]
    },
    {
      id: 2,
      title: "The Learning Divide",
      description: "Data story on education challenges in displacement contexts across Mexico and Mauritania.",
      technologies: ["D3.js", "Svelte", "Datawrapper"],
      image: "projects/thumbnail-education.jpg",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2025/04/the-learning-divide/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 3,
      title: "No Escape",
      description: "Data story on how climate change compounds the challenges of global displacement.",
      technologies: ["D3.js", "Mapbox"],
      image: "projects/thumbnail-climate.jpg",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2024/11/no-escape/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 4,
      title: "Haiti: A Multi-Dimensional Crisis",
      description: "Data story exploring displacement, violence, and humanitarian challenges in Haiti.",
      technologies: ["D3.js", "Mapbox", "Datawrapper"],
      image: "projects/thumbnail-haiti.jpg",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2024/10/haiti-a-multi-dimensional-crisis-leading-to-continued-displacement/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 5,
      title: "Seeking Asylum During COVID-19",
      description: "Data story on the challenges faced by asylum seekers during the pandemic.",
      technologies: ["D3.js", "Datawrapper"],
      image: "projects/thumbnail-covid.jpg",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2024/04/seeking-asylum-during-covid-19-and-what-it-means-today/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 6,
      title: "Sudan Crisis",
      description: "Data story on one year of escalating conflict and growing displacement in Sudan.",
      technologies: ["D3.js", "Illustrator", "Mapbox", "QGIS"],
      image: "projects/thumbnail-sudan-one.gif",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2024/04/sudan-one-year-of-spiralling-conflict-and-displacement/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 7,
      title: "Refugee Registration Interactive Dashboard",
      description: "Prototype visualizing global refugee registration data.",
      technologies: ["D3.js", "Svelte", " ThreeJS", "WebGL"],
      image: "projects/thumbnail-globe.jpg",
      liveUrl: "https://leichen88.github.io/globe-data-viz/",
      githubUrl: "#",
      category: ["Dashboard"]
    },
    {
      id: 8,
      title: "Sudan Crisis",
      description: "Data story on mass displacement 6 months after the crisis started",
      technologies: ["D3.js", "ai2html", "Arcgis", "QGIS", "Flourish"],
      image: "projects/thumbnail-sudan-six-months.gif",
      liveUrl: "https://storymaps.arcgis.com/stories/e02f1a1878ad4bed9ccdb6eab429da75",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 9,
      title: "Death in the Desert",
      description: "Data story on the dangers facing refugees and migrants en route to Africa’s Mediterranean coast.",
      technologies: ["Arcgis", "QGIS", "D3.js", "Datawrapper"],
      image: "projects/thumbnail-centralMed.gif",
      liveUrl: "https://storymaps.arcgis.com/stories/da9df715ef4d40b1bbe257b13bee4ae4",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 10,
      title: "Data Visualization Guidelines",
      description: "Guidelines helping to produce effective, impactful, and standardized UNHCR data visualizations.",
      technologies: ["Illustrator", "InDesign"],
      image: "projects/thumbnail-dataviz-guidelines.jpg",
      liveUrl: "https://dataviz.unhcr.org/guidance/",
      githubUrl: "#",
      category: "Style Guide"
    },
    {
      id: 11,
      title: "No Escape",
      description: "Report showing interconnection of climate change, conflict, and forced displacement.",
      technologies: ["Illustrator", "QGIS"],
      image: "projects/thumbnail-climate-report.jpg",
      liveUrl: "https://www.unhcr.org/media/no-escape-frontlines-climate-change-conflict-and-forced-displacement",
      githubUrl: "#",
      category: "Infographic"
    },
    {
      id: 12,
      title: "Returns to Afghanistan",
      description: "Data story on Afghans returning home amid uncertainty and ongoing challenges.",
      technologies: ["D3.js", "Datawrapper", "Mapbox"],
      image: "projects/thumbnail-afg-returns.gif",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2024/05/returns-to-afghanistan/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 13,
      title: "Protecting People Displaced in Their Own Country",
      description: "Data story highlighting the role of law and policy in protecting internally displaced people.",
      technologies: ["D3.js", "Datawrapper"],
      image: "projects/thumbnail-idp-number.gif",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2024/07/protecting-people-displaced-in-their-own-country-through-law-and-policy/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 14,
      title: "Out of the Spotlight",
      description: "Data story highlighting millions of displaced people overlooked by global attention.",
      technologies: ["D3.js", "Angular", "Java", "MySQL"],
      image: "projects/thumbnail-oos-story.jpg",
      liveUrl: "https://storymaps.arcgis.com/stories/8ca0005f48fc4f29b4dfd519824def54",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 15,
      title: "Mapping Guidelines",
      description: "Guidelines ensuring clarity, consistency, and impact in UNHCR’s mapping products.",
      technologies: ["QGIS", "Illustrator", "InDesign"],
      image: "projects/thumbnail-mapping-guidelines.jpg",
      liveUrl: "https://dataviz.unhcr.org/download/UNHCR_Mapping_Guidelines_2024.pdf",
      githubUrl: "#",
      category: "Style Guide"
    },
    {
      id: 16,
      title: "Monitoring Movements Through the Darien Jungle",
      description: "Data story on migration flows through Central America and the challenges of protection.",
      technologies: ["D3.js", "ai2html", "datawrapper"],
      image: "projects/thumbnail-darien-gap.jpg",
      liveUrl: "https://dataviz.unhcr.org/product-gallery/2023/07/monitoring-movements-through-the-darien-jungle-in-panama/",
      githubUrl: "#",
      category: "Data story"
    },
    {
      id: 17,
      title: "Global Trends Report",
      description: "Report capturing global displacement figures and statistical trends.",
      technologies: ["Arcgis", "Illustrator"],
      image: "projects/thumbnail-gt-2017.jpg",
      liveUrl: "https://www.unhcr.org/media/unhcr-global-trends-2017",
      githubUrl: "#",
      category: "Infographic"
    },
    {
      id: 18,
      title: "Sudan Emergency Response",
      description: "Dashboard tracking the latest developments and humanitarian situation in South Sudan.",
      technologies: ["Illustrator", "QGIS"],
      image: "projects/thumbnail-core-ssd.jpg",
      liveUrl: "https://data.unhcr.org/en/documents/details/100795",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 19,
      title: "Uganda Emergency Response",
      description: "Dashboard showing the latest data on Sudanese arrivals and settlements in Uganda.",
      technologies: ["Illustrator", "QGIS"],
      image: "projects/thumbnail-core-uga.jpg",
      liveUrl: "https://data.unhcr.org/en/documents/details/112285",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 20,
      title: "DRC Emergency Response",
      description: "Dashboard showing the latest data on arrivals and movements from eastern DRC.",
      technologies: ["Illustrator", "QGIS"],
      image: "projects/thumbnail-core-bdi.jpg",
      liveUrl: "https://data.unhcr.org/en/documents/details/116060",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 21,
      title: "Pakistan-Afghanistan Emergency Response",
      description: "Data dashboard summarizing current Afghan return movements and trends.",
      technologies: ["Illustrator", "QGIS"],
      image: "projects/thumbnail-core-afg.jpg",
      liveUrl: "https://data.unhcr.org/en/documents/details/104656",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 22,
      title: "Sudan Situation: One Year On",
      description: "Dashboard with data and insights on conflict, displacement, and humanitarian needs.",
      technologies: ["Illustrator", "QGIS"],
      image: "projects/thumbnail-ssd-one-twopager.jpg",
      liveUrl: "https://data.unhcr.org/en/documents/details/107844",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 23,
      title: "Emergency Need Assessment Dashboard",
      description: "Dashboard showing results of humanitarian needs assessments across Ethiopia.",
      technologies: ["QGIS", "Illustrator"],
      image: "projects/thumbnail-assessment-eth.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 24,
      title: "Ethiopia: Needs Overview Dashboard",
      description: "Dashboard analyzing trends and gaps in WASH support across Ethiopia",
      technologies: ["QGIS", "Illustrator"],
      image: "projects/thumbnail-wash-eth.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 25,
      title: "Ethiopia: Needs Overview Dashboard",
      description: "Dashboard analyzing trends and gaps in shelter and essential non-food itemsin Ethiopia",
      technologies: ["QGIS", "Illustrator"],
      image: "projects/thumbnail-shelter-eth.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 26,
      title: "Ethiopia: Activity Tracking Dashboard",
      description: "Dashboard tracking humanitarian activities and program implementation across Ethiopia.",
      technologies: ["QGIS", "Illustrator"],
      image: "projects/thumbnail-needs-eth.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Dashboard"
    }
  ];
  let selectedCategory = "all";
  let filteredProjects = projects;
  let visibleCount = 12;
  function getUniqueCategories(projects2) {
    const categories = /* @__PURE__ */ new Set();
    projects2.forEach((project) => {
      if (Array.isArray(project.category)) {
        project.category.forEach((cat) => categories.add(cat));
      } else {
        categories.add(project.category);
      }
    });
    return Array.from(categories).sort();
  }
  let uniqueCategories = getUniqueCategories(projects);
  const each_array = ensure_array_like(uniqueCategories);
  const each_array_1 = ensure_array_like(filteredProjects.slice(0, visibleCount));
  $$payload.out.push(`<section id="projects" class="py-20 bg-gray-900 svelte-181rzhi"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 svelte-181rzhi"><div class="mb-8 svelte-181rzhi"><h2 class="text-3xl sm:text-4xl font-bold text-white mb-8 svelte-181rzhi">Featured Projects</h2> <p class="text-gray-400 svelte-181rzhi">Explore my portfolio of data visualization projects that demonstrate technical expertise and creative problem-solving</p></div> <div class="flex flex-wrap gap-3 mb-8 svelte-181rzhi"><button${attr_class(
    `pr-4 py-2 font-regular transition-colors duration-200 ${"text-primary-400 font-semibold"}`,
    "svelte-181rzhi"
  )}>All</button> <!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out.push(`<button${attr_class(
      `pr-4 py-0 font-regulartransition-colors duration-200 ${selectedCategory === category ? "text-primary-400 font-semibold" : "text-gray-300 hover:text-primary-400"}`,
      "svelte-181rzhi"
    )}>${escape_html(category)}</button>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 svelte-181rzhi"><!--[-->`);
  for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
    let project = each_array_1[index];
    const each_array_2 = ensure_array_like(project.technologies);
    $$payload.out.push(`<div class="bg-gray-800 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative z-0 hover:z-10 svelte-181rzhi"><a${attr("href", project.liveUrl)} class="block bg-gray-700 overflow-hidden svelte-181rzhi"><div class="relative pt-[75%] svelte-181rzhi">`);
    if (project.image && project.image !== "/api/placeholder/400/250") {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<img${attr("src", base ? `${base}/${project.image}` : project.image)}${attr("alt", project.title)} class="absolute top-0 left-0 w-full h-full object-cover svelte-181rzhi"/>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center svelte-181rzhi"><svg class="w-10 h-10 text-primary-400 opacity-70 svelte-181rzhi" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" class="svelte-181rzhi"></path></svg></div>`);
    }
    $$payload.out.push(`<!--]--></div></a> <div class="p-6 svelte-181rzhi"><a${attr("href", project.liveUrl)} class="text-xl font-semibold text-gray-200 mb-0 hover:text-primary-600 svelte-181rzhi">${escape_html(project.title)}</a> <p class="text-gray-400 mb-2 text-sm svelte-181rzhi">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2 svelte-181rzhi"><!--[-->`);
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let tech = each_array_2[$$index_1];
      $$payload.out.push(`<span class="pr-1 text-primary-400 text-xs svelte-181rzhi">${escape_html(tech)}</span>`);
    }
    $$payload.out.push(`<!--]--></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="pt-10 svelte-181rzhi"><a href="#" class="inline-flex items-center text-primary-400 hover:text-primary-300 font-light transition-colors duration-200 svelte-181rzhi"><span class="svelte-181rzhi">Load More Projects</span> <svg class="w-5 h-5 ml-2 animate-arrow-right svelte-181rzhi" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" class="svelte-181rzhi"></path></svg></a></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
  pop();
}
function Contact($$payload, $$props) {
  push();
  $$payload.out.push(`<section id="contact" class="py-20 bg-gray-800"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-12"><h2 class="text-3xl sm:text-4xl font-bold text-white mb-8">Get In Touch</h2> <p class="text-lg text-gray-400 max-w-2xl">Interested in working together? Reach out via email or connect on social platforms.</p></div> <div class="flex flex-col sm:flex-row gap-4"><a href="mailto:lei.chen.88@hotmail.com" rel="noopener noreferrer" aria-label="Go To Lei Chen LinkedIn Page" class="pr-6 py-3 font-medium text-gray-300 transition-colors duration-200 hover:text-primary-400"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></a> <a href="https://www.linkedin.com/in/lei-chen-a2156987/" target="_blank" rel="noopener noreferrer" aria-label="Go To Lei Chen LinkedIn Page" class="pr-6 py-3 font-medium text-gray-300 transition-colors duration-200 hover:text-primary-400"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064  2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a> <a href="https://github.com/leichen88" target="_blank" rel="noopener noreferrer" aria-label="Go To Lei Chen Github Page" class="pr-6 py-3 font-medium text-gray-300 transition-colors duration-200 hover:text-primary-400"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a></div> <div class="mt-16 text-right"><p class="text-sm text-gray-400">© ${escape_html(
    // Contact component with text labels and button boxes
    (/* @__PURE__ */ new Date()).getFullYear()
  )} Lei Chen.</p> <p class="text-sm text-gray-400 mt-1">Created using SvelteKit, Tailwind CSS, TypeScript, Threlte, and Visual Studio Code.</p></div></div></section>`);
  pop();
}
function _page($$payload) {
  $$payload.out.push(`<main class="min-h-screen">`);
  Navigation($$payload);
  $$payload.out.push(`<!----> `);
  Hero($$payload);
  $$payload.out.push(`<!----> `);
  Projects($$payload);
  $$payload.out.push(`<!----> `);
  Contact($$payload);
  $$payload.out.push(`<!----></main>`);
}
export {
  _page as default
};
