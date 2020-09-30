import React from 'react';
import Header from '../Header';
import { Box } from '@chakra-ui/core';
import Cleaner from '../Cleaner';
import Menu from '../Menu';
import Dashboard from '../../views/Dashboard';

const Main = () => {
    return (
        <Box
            bg="gray.100"
        >
            <Header />
            <Box
                w={0.9}
                m="-40px auto"
            >
                <Menu />
            </Box>
            <Dashboard />
            <Cleaner />
        </Box>
    )
}

export default Main;
