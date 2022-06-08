import type Room from '~/models/Room'

export const useSprintPokerRoom = () => useState<Room | undefined>('sprint-poker', () => undefined)
