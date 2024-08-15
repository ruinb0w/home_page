import type { Ref } from "vue";
import { ref } from "vue";

export function genGetTabStyle(hoverTabPath: Ref<string | null>, route: { path: string }) {
  return (tab: { path: string; color: string }) => {
    if (route.path == tab.path || hoverTabPath.value == tab.path) {
      return `background:${tab.color}`;
    }
    return "";
  };
}

export function useHoverTab() {
  const hoverTabPath = ref<string | null>(null);
  function setHoverTabPath(tabPath: string | null) {
    hoverTabPath.value = tabPath;
  }
  function clearHoverTabPath() {
    hoverTabPath.value = null;
  }
  return { hoverTabPath, setHoverTabPath, clearHoverTabPath };
}
