import React, { useEffect, useState } from "react";
import Users from "./components/users";
import './scss/style.scss';
import { Success } from "./components/succes";

export const App = () => {
    const [users, setUsers] = useState();
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [invite, setInvite] = React.useState([])
    const [finish, setFinish] = useState(true);
    const [count, setCount] = useState(0)


    useEffect(() => {

        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.data)

            })
            .catch(err => alert(err))
            .finally(() => setLoading(false))
    }, [])

    const onInputChange = (event) => {
        setSearch(event.target.value)
    }


    const onClickInvite = (id) => {
        if (invite.includes(id)) {
            setInvite(prev => prev.filter(_id => _id !== id))
        } else {
            setInvite((prev) => [...prev, id])


        }
    }

    const clickSuccess = () => {
        setCount(invite.length)
        if (finish) {
            setFinish(false)
        } else {
            setFinish(true)
        }

        setInvite([])
    }


    return (
        <div className="App">
            {finish ? (
                <Users
                    items={users}
                    isLoading={isLoading}
                    onInputChange={onInputChange}
                    search={search}
                    onClickInvite={onClickInvite}
                    invite={invite}
                    clickSuccess={clickSuccess}
                />
            ) : (
                <Success count={count} clickSuccess={clickSuccess} />
            )}
        </div>
    )
}

export default App

