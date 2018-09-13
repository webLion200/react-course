import React from 'react'
import AddUserProp from './addUserProp'

const Wrapper = () => {
    return (
        <AddUserProp>
            {
                (user) => <div>{user}</div>
            }
        </AddUserProp>
    )
};

export default Wrapper