import { isClientSide } from "@/constants";

export function useLocalStorage(key) {
  function getItem() {
    if (isClientSide) {
      return window.localStorage.getItem(key);
    }

    return null;
  }

  function setItem(value) {
    if (isClientSide) {
      return window.localStorage.setItem(key, value);
    }

    return null;
  }

  function removeItem() {
    if (isClientSide) {
      return window.localStorage.removeItem(key);
    }

    return null;
  }

  return { getItem, setItem, removeItem };
}
