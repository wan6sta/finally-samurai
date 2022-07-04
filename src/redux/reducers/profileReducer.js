import {axiosMain} from "../../assets/config/axios";

const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE'

const initialState = {
  isLoading: false,
  profileCurrentInfo: {},
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        profileCurrentInfo: {...action.payload}
      }

    default:
      return state
  }
}

const setCurrentProfile = (payload) => ({type: SET_CURRENT_PROFILE, payload})

export const getCurrentProfile = (userId) => async (dispatch) => {
  try {
    const profileCurrentInfo = await axiosMain.get(`/profile/${userId}`)
    dispatch(setCurrentProfile(profileCurrentInfo.data))
  } catch (e) {
    console.error(e.message)
  }
}
