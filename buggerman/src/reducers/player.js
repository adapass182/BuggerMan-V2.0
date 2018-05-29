import {PLAYER_JOINED, PLAYER_MOVE} from '../actions/player'

const starterData = {
  posX: 0,
  posY: 0,
  symbol: 'x'
}

export default function(state = starterData, {type, payload} = {}) {
  switch (type) {
  case PLAYER_JOINED: 
      return {
        ...state,
        ...payload
      }
  case PLAYER_MOVE:
      return {
        ...state,
        posX: payload.nextPosX,
        posY: payload.nextPosY
      }
  default:
    return state
  }
}
