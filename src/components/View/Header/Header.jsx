import React from 'react';
import {useHistory} from 'react-router-dom';

function Header() {

    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div>
            <b style={{cursor: 'pointer'}} onClick={() => logout()}>Logout</b>
        </div>
    )
}

export default Header;