export const getHostname = (): string => {
  if (globalThis.window !== undefined) {
    return window.location.hostname
  }

  return globalThis.ADDRESS
}
