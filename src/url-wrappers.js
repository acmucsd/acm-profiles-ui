/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import axios from "axios"

const apiUrl = "https://acm-profiles-api.herokuapp.com/api"
let currentToken = ""
let currentUUID = ""

export async function getUserAxios(uuid, path) {
  return axios({
    method: "GET",
    url: `${apiUrl}${path}${uuid}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function getUserPromise(uuid, path) {
  return axios({
    method: "GET",
    url: `${apiUrl}${path}${uuid}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
}

export async function userLogIn(email, password) {
  return axios({
    method: "POST",
    url: `${apiUrl}/user/login`,
    data: {
      email,
      password,
    },
  })
    .then((data) => {
      currentToken = data.data.token
      currentUUID = data.data.uuid
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
      return error.response.status
    })
}
export async function patchUserProfile(patchData) {
  return axios({
    method: "PATCH",
    url: `${apiUrl}/user/profile/${currentUUID}`,
    data: patchData,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function patchUserSocials(patchData) {
  return (
    axios({
      method: "PATCH",
      url: `${apiUrl}/user/profile/socials/${currentUUID}`,
      data: patchData,
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        // console.log(data)
      })
      .catch((error) => {
        // error!
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request)
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message)
        }
      })
  )
}

export async function searchUser(searchQuery) {
  return axios({
    method: "GET",
    url: `${apiUrl}/user/profile/search?search=${searchQuery}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}

export async function searchCommunity(searchQuery) {
  return axios({
    method: "GET",
    url: `${apiUrl}/community/search?search=${searchQuery}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
// the logged in user follows the person with the parameter's uuid
export async function followUser(uuid) {
  return axios({
    method: "POST",
    url: `${apiUrl}/user/follow/${currentUUID}/${uuid}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
// the logged in user unfollows the person with the parameter's uuid
export async function unfollowUser(uuid) {
  return axios({
    method: "DELETE",
    url: `${apiUrl}/user/unfollow/${currentUUID}/${uuid}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}

export async function createCommunity(communityData) {
  return axios({
    method: "POST",
    url: `${apiUrl}/community/create/${currentUUID}`,
    data: communityData,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function getCommunityAxios(ucid, path) {
  return axios({
    method: "GET",
    url: `${apiUrl}${path}${ucid}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function getCommunityMembers(ucid) {
  return axios({
    method: "GET",
    url: `${apiUrl}/community/member_list/${ucid}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function getCommunitySocials(ucid) {
  return axios({
    method: "GET",
    url: `${apiUrl}/community/social/${ucid}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function patchCommunityProfile(ucid, patchData) {
  return axios({
    method: "PATCH",
    url: `${apiUrl}/community/edit/${ucid}/${currentUUID}`,
    data: patchData,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function patchCommunitySocials(ucid, patchData) {
  return axios({
    method: "PATCH",
    url: `${apiUrl}/community/social/${ucid}/${currentUUID}`,
    data: patchData,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function joinCommunity(ucid) {
  return axios({
    method: "POST",
    url: `${apiUrl}/community/${ucid}/join/${currentUUID}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function leaveCommunity(ucid) {
  return axios({
    method: "DELETE",
    url: `${apiUrl}/community/${ucid}/leave/${currentUUID}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export async function getRecommendedUsers() {
  return axios({
    method: "GET",
    url: `${apiUrl}/user/recommendations/${currentUUID}`,
    headers: {
      Authorization: `Bearer ${currentToken}`,
    },
  })
    .then((data) => {
      return data
    })
    .catch((error) => {
      // error!
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message)
      }
    })
}
export function logOut() {
  currentUUID = ""
  currentToken = ""
}
export function getUUID() {
  return currentUUID
}
