export default new Proxy(
  {},
  {
    get: (_, p) =>
      (s) => p !== 'code' ? s : `\`${s}\``
  }
)
