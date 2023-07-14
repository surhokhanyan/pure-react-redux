import {loadCurrentUser} from "./currentUserAPI";

export function currentUserReducer(state={}, action){
    if (action.type === "edit"){
        return  {
            ...state,
            name: action.payload.name
        }

    }
    return state
}

export const initialCurrentUser = {
    name: "Suren"
}

// useSelector ին պատրաստի փոխանցվող ֆունկցիան որպեսզի component ը չիմանա թե ինչ անուն ունի մեր ցւռռենտՒսեռ Y
export function selectName(state){
    return state.currentUser.name
}

export function editName (newName){
    return {
        type: "edit",
        payload: {
            name: newName
        }
    }
}

export function loadUser () {
    return function (dispatch, getState){
         return loadCurrentUser().then((loadedUser) => {
             dispatch(editName(loadedUser.name))
         })
    }
}