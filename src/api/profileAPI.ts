import {PhotosType, ProfileType} from "../redux/types/types";
import {instanse, ResponseType} from "./api";

export type UpdatePhotoResponseType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instanse.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instanse.get<string>(`profile/status/` + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instanse.put<ResponseType>(`profile/status`, {status: status}).then(res => res.data)
    },
    updatePhoto(file: File) {
        let formData = new FormData();
        formData.append("image", file)

        return instanse.put<ResponseType<UpdatePhotoResponseType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateInfo(profile: ProfileType) {
        return instanse.put<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile`, profile).then(res => res.data)
    }
}