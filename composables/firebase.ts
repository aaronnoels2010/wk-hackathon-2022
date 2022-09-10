import type { Unsubscribe } from 'firebase/database'
import { onValue, ref, remove, set } from 'firebase/database'
import Room from '~/models/Room'
import Firebase from '~/services/firebase-service'

const SPRINT_POKER_PATH = 'sprint-poker/'

export function writeRoom(room: Room): Promise<void> {
  const config = useRuntimeConfig()
  const firebase = new Firebase(config.public.FIREBASE_API_KEY as string)
  return set(ref(firebase.firebaseDatabase, `${SPRINT_POKER_PATH}${room.id}`), room)
}

export function getRoom(roomId: string, successCallback: (room: Room) => void): Unsubscribe {
  const config = useRuntimeConfig()
  const firebase = new Firebase(config.public.FIREBASE_API_KEY as string)
  return onValue(ref(firebase.firebaseDatabase, `${SPRINT_POKER_PATH}${roomId}`), (snapshot) => {
    if (snapshot.exists())
      successCallback(Room.FromJSON(snapshot.val()))
  })
}

export function deleteRoom(roomId: string): Promise<void> {
  const config = useRuntimeConfig()
  const firebase = new Firebase(config.public.FIREBASE_API_KEY as string)
  return remove(ref(firebase.firebaseDatabase, `${SPRINT_POKER_PATH}${roomId}`))
}
