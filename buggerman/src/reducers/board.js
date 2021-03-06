import {PLAYER_JOINED, PLAYER_MOVE} from '../actions/player'

const starterBoard = Array(10)
  .fill(0)
  .map(x => Array(10).fill(0))

export default function(state = starterBoard, {type, payload} = {}) {
  const newState = [...state]
  switch (type) {
    case PLAYER_JOINED:
      newState[payload.posX][payload.posY] = payload.symbol
      return newState
    case PLAYER_MOVE:
        newState[payload.nextPosX][payload.nextPosY] = payload.symbol
      if ( payload.prevPosX === payload.nextPosX ) {
        newState[payload.prevPosX][payload.prevPosY] = 0
        newState[payload.nextPosX][payload.nextPosY] = payload.symbol
      } else if ( payload.prevPosY === payload.nextPosY ) {
        newState[payload.prevPosX][payload.prevPosY] = 0
        newState[payload.nextPosX][payload.nextPosY] = payload.symbol
      } else {
        newState[payload.prevPosX][payload.prevPosY] = 0
      }
      return newState
    default:
      return state
  }
}
