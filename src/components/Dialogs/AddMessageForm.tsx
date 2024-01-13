import React from 'react';
import {useForm} from "react-hook-form";
import {AppDispatch} from "../../redux/redux_store";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../redux/dialogsReducer";
import {getStatusCh} from "../../redux/selectors/dialogs_selectors";




export const AddMessageForm = () => {


    const status = useSelector(getStatusCh)

    const dispatch: AppDispatch = useDispatch()

    const onSubmit = (e: any) => {
        if (!e.target.value) {
            return
        }
        dispatch(sendMessage(e.target.value))

    }



    return (
        <div>

        </div>
    )
}