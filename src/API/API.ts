import * as axios from "axios";


const instance = axios.default.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e0c04a17-3bae-430a-ba6b-9e96e9991aaf"
    }
})
export const UsersAPI = {
    getUsers(currentPage: number) {
        return (instance.get(`users?page=${currentPage}&count=10`)
            .then(response => response.data))
    },
    getAuth(){
        return(instance.get(`auth/me`)
            .then(response => response.data))
    },
    getUser(userId: number){
        return(instance.get(`profile/${userId}`)
            .then(response => response.data))
    },
    PostFollow(userId: number) {
        return (instance.post(`follow/${userId}`, {})
            .then(response => response.data))
    },
    DeleteFollow(userId: number) {
        return (instance.delete(`follow/${userId}`).then(response => response.data))
    }
}
export const profileAPI = {
    getStatus(userId: number){
        return(instance.get(`profile/status/${userId}`).then((response) => {
            return response.data
        }))
    },
    updateStatus(status: string){
      return(instance.put(`profile/status`,{status: status})
          .then((response) => {
            return response.data
        }))
    }
}
