import React from "react";
import User from "./user";
import { Skeleton } from "./skeleton";

const Users = ({ items, isLoading, onInputChange, search, onClickInvite, invite, clickSuccess }) => {


    return (
        <div className="">
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={search} onChange={onInputChange} type="text" placeholder="Найти пользователя..." />
            </div>

            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <ul className="users-list">
                    {
                        items.filter((el) => {
                            const fullname = (el.first_name + ' ' + el.last_name).toLowerCase()
                            return fullname.includes(search.toLowerCase()) || el.email.toLowerCase().includes(search.toLowerCase())
                        }).map((el) => {

                            return (
                                <User onClickInvite={onClickInvite}
                                    isInvited={invite.includes(el.id)}
                                    {...el}
                                    key={el.id} />

                            )

                        })}

                </ul>
            )}

            <button onClick={clickSuccess} className="send-invite-btn">Отправить приглашение</button>
        </div>
    )
}

export default Users