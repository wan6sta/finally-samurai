import {axiosMain} from "../../assets/config/axios";

const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
  id: null,
  login: '',
  email: '',
  isLogin: false,
  isLoading: false,

  profileInfo: {},

  status: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload,
        isLogin: true
      }

    case SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: {...action.payload}
      }

    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.payload
      }

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

const setProfile = (payload) => ({type: SET_PROFILE, payload})
const setProfileInfo = (payload) => ({type: SET_PROFILE_INFO, payload})
const setProfileStatus = (payload) => ({type: SET_PROFILE_STATUS, payload})
const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload})

export const getProfile = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const profile = await axiosMain.get('/auth/me')
    dispatch(setIsLoading(false))
    if (profile.data.data.id) {
      dispatch(setProfile(profile.data.data))
    }

    return profile.data.data
  } catch (e) {
    console.error(e.message)
  }
}

export const getProfileInfo = (userId) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const profileInfo = await axiosMain.get(`/profile/${userId}`)
    dispatch(setIsLoading(false))
    dispatch(setProfileInfo(profileInfo.data))
  } catch (e) {
    console.error(e.message)
  }
}

export const getStatus = (userId) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const status = await axiosMain.get(`/profile/status/${userId}`)
    dispatch(setIsLoading(false))
    dispatch(setProfileStatus(status.data))
  } catch (e) {
    console.error(e.message)
  }
}

export const putStatus = (status) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    await axiosMain.put(`/profile/status`, {
      status
    })
    dispatch(setIsLoading(false))
  } catch (e) {
    console.error(e.message)
  }
}

export const logOut = () => async (dispatch) => {
  try {
    await axiosMain.delete('/auth/login')
  } catch (e) {
    console.error(e.message)
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  try {
    const login = await axiosMain.post('/auth/login', {
      email,
      password,
      rememberMe,
      captcha
    })
    console.log(login)
  } catch (e) {
    console.error(e.message)
  }
}