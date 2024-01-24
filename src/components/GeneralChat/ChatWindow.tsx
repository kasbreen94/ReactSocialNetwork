import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chatSlice";
import React, {useEffect, useRef, useState} from "react";
import s from "./Dialogs.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/redux_store";
import avatar from "../../assets/images/avatar.svg";

export const ChatContainer = () => {

    const authUserId = useAppSelector(state => state.auth.auth.id)
    const {status, messages} = useAppSelector(state => state.dialogsPage)

    const dispatch= useAppDispatch()

    const [chat, setChat] = useState<boolean>(false)

    useEffect(() => {
        if (chat) {
            dispatch(startMessagesListening())
            return () => {
                dispatch(stopMessagesListening())
            }
        }
    }, [chat]);

    const [autoScroll, setAutoScroll] = useState(true)
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 200) {
            !autoScroll && setAutoScroll(true)
        } else {
            autoScroll && setAutoScroll(false)
        }
    }

    const messagesBlockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (autoScroll) messagesBlockRef.current?.scrollIntoView(true)

    }, [messages]);

    const press = (e: any) => {
        let value = e.target.value
        if (!value || /^\s*$/.test(value)) {
            return false
        }
        if (e.key === 'Enter') {
            e.preventDefault()
            dispatch(sendMessage(value))
            console.log('enter')
            e.target.value = ''
        }
    }

    return (
        <div className={s.dialogs}>
            {status === 'error' && <div>Some error occured. Please refresh the page.</div>}
            {/*<DialogItem />*/}
            {!chat
                ? <div className={s.openChat}>
                    <button onClick={() => setChat(!chat)}>Open Chat</button>
                </div>
                :  <div className={s.messages}>
                    <div className={s.messageChat} onScroll={scrollHandler}>
                        {messages.map(m =>
                            <div className={m.userId !== authUserId ? s.messageItem : s.messageItemAuth} key={m.id}>
                                <div className={s.photo}>
                                    <img src={m.photo ?? avatar} alt={''}/>
                                </div>
                                <div>
                                    <div className={s.userName}> {m.userName}</div>
                                    <div className={s.message}>{m.message}</div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesBlockRef}></div>
                    </div>
                    <div className={s.addMessage}>
                        <textarea placeholder="Add your text" maxLength={100} onKeyDown={press}/>
                    </div>
                    <div className={s.closeChat}>
                        <button  onClick={() => setChat(false)}>Close chat</button>
                    </div>
                </div>}


        </div>
    )
}


// @batm1x
// 1 год назад
// Пришлось типизирвоать так:
//     export type AppDispatch = ThunkDispatch<AppStateType, any, AppAction>
// type AppAction = ReturnType<typeof store.dispatch>
// export const useAppDispatch = () => useDispatch<AppDispatch>()