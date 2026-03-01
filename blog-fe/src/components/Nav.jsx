import React from 'react';

const Nav = () => {
    let image_path = localStorage.getItem('image')
    return (
        <div>
            <img src={`http://localhost:8000/files/${image_path}`} alt="" />
        </div>
    );
}

export default Nav;
