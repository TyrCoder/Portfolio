const listeners = new Set<() => void>();

export function subscribeToQuery(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("popstate", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("popstate", callback);
  };
}

export function readQuery() {
  return window.location.search;
}

export function serverQuery() {
  return "";
}

export function writeQuery(params: URLSearchParams) {
  const query = params.toString();
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
  );
  listeners.forEach((listener) => listener());
}
