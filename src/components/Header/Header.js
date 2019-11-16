import React from 'react';
import c from './Header.module.css';

function Header() {
    return (
        <header className={c.header_wrapper}>
            <div className={c.header}>
                <a href="/"><button>Main page</button></a>
            </div>

        </header>
    )
}

export default Header;


