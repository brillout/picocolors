export default new Proxy(
  {},
  {
    get: (_, p) =>
      (s) => {
        if (p === 'code') return `\`${s}\``
        return s
      }
  }
)
