import React from 'react'
import { render } from 'react-dom'

const getUserModule = () =>
    import(/* webpackChunkName: "usersAPI" */ './common/usersAPI')

function App() {
    return (
        <div>
            <button onClick={() => getUsers()}>Get users</button>
        </div>
    )
}

const getUsers = () => {
    getUserModule().then(({ getUsers }) => {
        getUsers().then((json) => console.log(json))
    })
}

render(<App />, document.getElementById('root'))
