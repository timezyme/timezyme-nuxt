import { defineStore } from "pinia";

export const themes = ["light", "contrast", "material", "dark", "dim", "material-dark", "system"] as const;

export type ITheme = (typeof themes)[number];

const localStorageKey = "__NEXUS_CONFIG_v2.0__";

type IConfig = {
  theme: ITheme;
  direction: "ltr" | "rtl";
  sidebarTheme: "light" | "dark";
  fullscreen: boolean;
};

const defaultConfig: IConfig = {
  theme: "system",
  direction: "ltr",
  sidebarTheme: "light",
  fullscreen: false,
};

function getConfigFromLocalStorage() {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(localStorageKey);
    if (saved) {
      return JSON.parse(saved) as IConfig;
    }
  }
  return defaultConfig;
}

export const useConfig = defineStore(localStorageKey, () => {
  const config = ref(getConfigFromLocalStorage());
  const isMounted = ref(false);

  const changeTheme = (theme: IConfig["theme"]) => {
    config.value.theme = theme;
  };
  const changeSidebarTheme = (sidebarTheme: IConfig["sidebarTheme"]) => {
    config.value = { ...config.value, sidebarTheme };
  };
  const changeDirection = (direction: IConfig["direction"]) => {
    config.value.direction = direction;
  };
  const toggleFullscreen = async () => {
    const htmlRef = document.documentElement;
    if (htmlRef) {
      if (document.fullscreenElement != null) {
        await document.exitFullscreen();
      }
      else {
        await htmlRef.requestFullscreen();
      }
    }
    config.value.fullscreen = !config.value.fullscreen;
  };
  const reset = async () => {
    config.value = defaultConfig;
    if (document.fullscreenElement != null) {
      await document.exitFullscreen();
    }
  };
  const updateConfig = (_config: IConfig) => {
    config.value = { ..._config };
  };

  watch(
    config,
    (config) => {
      applyConfigToDOM(config);
      if (isMounted.value)
        localStorage.setItem(localStorageKey, JSON.stringify(config));
    },
    { deep: true },
  );

  onMounted(() => {
    isMounted.value = true;
    const value = getConfigFromLocalStorage();
    updateConfig(value);
    applyConfigToDOM(value);
  });

  return { config, changeDirection, changeSidebarTheme, changeTheme, toggleFullscreen, reset, updateConfig };
});

function applyConfigToDOM(state: IConfig) {
  const htmlRef = document.documentElement;
  if (htmlRef) {
    if (state.theme === "system") {
      htmlRef.removeAttribute("data-theme");
    }
    else {
      htmlRef.setAttribute("data-theme", state.theme);
    }
    if (state.fullscreen) {
      htmlRef.setAttribute("data-fullscreen", "");
    }
    else {
      htmlRef.removeAttribute("data-fullscreen");
    }
    if (state.sidebarTheme) {
      htmlRef.setAttribute("data-sidebar-theme", state.sidebarTheme);
    }
    if (JSON.stringify(state) !== JSON.stringify(defaultConfig)) {
      htmlRef.setAttribute("data-changed", "");
    }
    else {
      htmlRef.removeAttribute("data-changed");
    }
    if (state.direction) {
      htmlRef.dir = state.direction;
    }
  }
}
