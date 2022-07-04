import {axiosMain} from "../../assets/config/axios";

const SET_USERS = 'SET_USERS'
const SET_IS_LOADING1 = 'SET_IS_LOADING1'
const SET_PAGE = 'SET_PAGE'
const SET_FOLLOW = 'SET_FOLLOW'
const SET_HEART = 'SET_HEART'

const initialState = {
  users: [
    {
      name: '',
      id: null,
      uniqueUrlName: null,
      photos: {},
      status: '',
      followed: false
    }
  ],
  page: 1,
  count: 100,
  allCount: 1000,
  isLoading: false,
  isHeart: false
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload]
      }

    case SET_IS_LOADING1:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      }

    case SET_FOLLOW: {
      return {
        ...state,
        users: [{...state.users, followed: action.payload}]
      }
    }

    case SET_HEART: {
      return {
        ...state,
        isHeart: action.payload
      }
    }

    default:
      return state
  }
}

const setUsers = (payload) => ({type: SET_USERS, payload})
const setIsLoading = (payload) => ({type: SET_IS_LOADING1, payload})
export const setPage = (payload) => ({type: SET_PAGE, payload})
const setFollow = (payload) => ({type: SET_FOLLOW, payload})
const setHeart = (payload) => ({type: SET_HEART, payload})


export const getUsers = (count, page) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const users = await axiosMain.get(`/users?count=${count}&page=${page}`)
    dispatch(setIsLoading(false))
    dispatch(setUsers(users.data.items))
  } catch (e) {
    console.error(e.message)
  }
}

export const getFollow = (followed, userId) => async (dispatch) => {
  try {

    if (followed) {
      dispatch(setHeart(true))
      const users = await axiosMain.delete(`/follow/${userId}`)
      dispatch(setHeart(false))
      return users
    }
    if (!followed) {
      dispatch(setHeart(true))
      const users = await axiosMain.post(`/follow/${userId}`)
      dispatch(setHeart(false))
      return users
    }

  } catch (e) {
    console.error(e.message)
  }
}

