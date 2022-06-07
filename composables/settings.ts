import type { Ref } from 'vue'

export const useColor = () => useState<string>('color', () => 'yellow')

export function useUser() {
  const user: Ref<string> = useState<string>('user', () => '')

  function setUser(userName: string) {
    user.value = userName
  }

  return {
    user,
    setUser,
  }
}
