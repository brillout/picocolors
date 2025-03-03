export default new Proxy(
  {},
  {
    get: (_, p) =>
      (s: string) => {
        if (p === 'code') return `\`${s}\``
        if (p === 'string') return `'${s}'`
        return s
      }
  }
)
