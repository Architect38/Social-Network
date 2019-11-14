import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: { 
        "API-KEY": "07d72dd6-c4bd-4a77-837c-92f8a89a5e10" 
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});


export const usersAPI = {
    getUsers(currentPage=1, pageSize=5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
            return response.data;
        });
    },
    follow(userId){
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`).then(response=>{
            return response.data;
        });
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`).then(response=>{
            return response.data;
        });
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status: status});
    }
}

export const authAPI = {
    getLogin(){
        return instance.get("auth/me").then(response=>{
            return response.data; 
        });
    },
    postLogin(login,password,rememberMe){
        return instance.post("auth/login", {email:login, password, rememberMe});
    },
    logout(){
        return instance.delete("auth/login");
    }
}
