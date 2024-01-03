import {GetItemsType, instanse, ResponseType} from "./api";

export const usersAPI =  {
    getUsers(page: number) {
        return instanse.get<GetItemsType>(`users?page=${page}&count=100`).then(res => res.data)
    },
    getFollowed(userId: number) {
        return instanse.get(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instanse.delete<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
    follow(userId: number) {
        return instanse.post<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
}