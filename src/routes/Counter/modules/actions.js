import { SET_STATE } from './constants'

// ------------------------------------
// Actions
// ------------------------------------

export function increment () {
  return (dispatch, getState) => {
    const { count } = getState().counter
    dispatch({
      type    : SET_STATE,
      payload : {
        count: count + 1
      }
    })
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    const { count } = getState().counter
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : SET_STATE,
          payload : {
            count: count * 2
          }
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}
