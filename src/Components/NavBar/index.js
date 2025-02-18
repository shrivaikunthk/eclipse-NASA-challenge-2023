import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import {Menu} from '@mui/base';
import { Button } from '@mui/material';

export default function NavBar() {
    return (
       <AppBar>
            <Menu className='NavBar-Menu'>
            {navbar.map((navbarItem) => (
                    <a variant='h6' href={navbarItem.link}>
                        <Button className='header-button'>
                        {navbarItem.name}
                        </Button>
                    </a>
            ))}
            </Menu>
        </AppBar>
    );

    
};
const navbar = [
    {
        name:'header',
        link: '/#header'
    },
    {
        name:'eclipse',
        link: '/#eclipse'
    },
    {
        name:'cards',
        link: '/#card-deck'
    },
    
];