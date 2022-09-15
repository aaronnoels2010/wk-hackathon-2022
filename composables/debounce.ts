export function useDebounce(func: () => void, delay: number) {
  let timer: NodeJS.Timeout
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      func.apply(this, [])
    }, delay)
  }
}
