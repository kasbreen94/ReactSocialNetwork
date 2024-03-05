import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PhotosType} from "../redux/types/types";
import {number} from "prop-types";

type responsePhotosType = {
    small: string | null
    large: string | null
}

type responseUsersType = {
    id: number
    name: string
    status: string
    photos: responsePhotosType
    followed: boolean
}

export type DataUsersType = {
    items: responseUsersType[]
    totalCount: number
    error: string
}


interface RequestUsersParam {
    page: number
    count: number
    term: string
    friend: string | null | boolean
}

type UserDialogType = {
    id: number
    userName: string
    photos: {
        large: string | null
        small: string | null
    }
}

export type ResponseDialogsType = UserDialogType[]

export const usersApi = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
        credentials: "include",
        headers: {
            "API-KEY": "6a48818c-31c7-405a-9c16-8b1dcccca3c7"
        }}),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        requestUsers: builder.query<DataUsersType, RequestUsersParam>({
            query: ({page, count, term, friend}) => ({
                url: `users`,
                params: {page: page, count: count, term: term, friend: friend}
            }),
            providesTags: ['users']
        }),
        getFollowed: builder.query({
            query: (id) => ({
                url: `follow/${id}`
            }),
            // providesTags: ['users']
        }),
        setFollow: builder.mutation({
            query: (user) => ({
                url: `follow/${user.id}`,
                method: 'POST',
                body: user.followed
            }),
            invalidatesTags: ['users']
        }),
        setUnfollow: builder.mutation({
            query: (user) => ({
                url: `follow/${user.id}`,
                method: 'DELETE',
                body: user.followed
            }),
            invalidatesTags: ['users']
        }),
        getDialogs: builder.query<ResponseDialogsType, unknown>({
            query: () => ({
                url: `dialogs`,
            }),
        }),
        getMessages: builder.query({
            query: (userId) => ({
                url: `dialogs/${userId}/messages`,
            }),
        }),
        sendMessage: builder.mutation({
            query: ({userId, body}) => ({
                url: `dialogs/${userId}/messages`,
                method: 'POST',
                body: {body}
            })
        }),
        startDialog: builder.mutation({
            query: ({userId}) => ({
                url: `dialogs/${userId}`,
                method: 'PUT',

            })
        })
    })
})


export const {useRequestUsersQuery, useGetFollowedQuery, useSetFollowMutation,
    useSetUnfollowMutation, useSendMessageMutation, useStartDialogMutation, useGetMessagesQuery, useGetDialogsQuery} = usersApi;