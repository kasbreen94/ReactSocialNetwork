import React from "react";
import usersStyle from './Users.module.css'
import avatar from "../../redux/avatar.svg";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div>{this.props.users.map(u =>
                <div className={usersStyle.userItem} key={u.id}>
                    <span className={usersStyle.follow}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : avatar}
                                 alt=''
                                 className={usersStyle.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span className={usersStyle.info}>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
            </div>
        )
    }
}

export default Users;