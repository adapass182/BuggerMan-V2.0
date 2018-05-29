export const PLAYER_JOINED = 'PLAYER_JOINED'
export const PLAYER_MOVE = 'PLAYER_MOVE'

const rand = () => Math.floor(Math.random() * 10)

export const move = (dir) => (dispatch, getState) => {
  const state = getState()
  const prevPosX = state.player.posX
  const prevPosY = state.player.posY
  let nextPosX, nextPosY
  console.log(dir)
  switch (dir) {
  // w - up
  case 119:
    nextPosX = prevPosX-1
    nextPosY = prevPosY
    break
    // s - down
  case 115:
    nextPosX = prevPosX+1
    nextPosY = prevPosY
    break
    //a - left
  case 97:
    nextPosX = prevPosX
    nextPosY = prevPosY-1
    break
    // d - right
  case 100:
    nextPosX = prevPosX
    nextPosY = prevPosY+1
    break
  }
  dispatch({
    type: PLAYER_MOVE,
    payload: {
      prevPosX,
      prevPosY,
      nextPosX,
      nextPosY,
      symbol: state.player.symbol
    }
  })
  

}

export const renderPlayer = () => (dispatch, getState) => {
  const state = getState()
  dispatch({
    type: PLAYER_JOINED,
    payload: {
      posX: rand(),
      posY: rand(),
      symbol: state.player.symbol
    }
  })
}
