import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)  //dont use setuser because we dont want method . we want data SO WE use user.
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile