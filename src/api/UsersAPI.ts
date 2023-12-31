import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "80f7eb98-d03d-4e4e-bcc2-ee3aa206800e"
    }
});

export const usersAPI =  {
    getUsers(count: number) {
        return instanse.get(`users?count=${count}`)
    },
    getFollowed(userId: number) {
        return instanse.get(`follow/${userId}`, {});
    },
    unfollow(userId: number) {
        return instanse.delete(`follow/${userId}`, {});
    },
    follow(userId: number) {
        return instanse.post(`follow/${userId}`, {}, {});
    },
    // getSearch(total: number) {
    //     return instanse.get(`users?page=1`, {totalCount: total})
    // },
}