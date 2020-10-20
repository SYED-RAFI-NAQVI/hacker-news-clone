import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

import './header.css'


function Header() {
    return (
        <div className='header'>
            <div className='header_right'>
            <img clasName='header_logo' src='https://upload.wikimedia.org/wikipedia/en/b/bf/Hackernews_logo.png' alt='logo' />
            </div>
            <div className='header_left'>
            <SearchIcon className='search_icon' fontSize='large'/>
            <TextField id="standard-basic" className='search_field' label="Search" />
            <Avatar />
            </div>
        </div>
    )
}

export default Header
