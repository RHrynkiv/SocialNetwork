import * as axios from "axios";


const instance = axios.default.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "d1f936df-146d-4493-8fec-3465cd184491"
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
