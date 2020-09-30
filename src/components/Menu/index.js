import React from 'react';
import { Flex, Box, Grid, PseudoBox } from '@chakra-ui/core';
import {
    FaHome,
    FaTasks,
    FaFilePdf,
    FaDollarSign,
    FaTag,
    FaLayerGroup
} from 'react-icons/fa';

const items = [
    { label: 'Home', icon: FaHome },
    { label: 'Cadastros', icon: FaTasks },
    { label: 'Finanças', icon: FaDollarSign },
    { label: 'Estoque', icon: FaTag },
    { label: 'Fiscal', icon: FaLayerGroup },
    { label: 'Relatórios', icon: FaFilePdf },
]

const Menu = () => {
    return (
        <Flex
            bg="white"
            h={80}
            rounded="lg"
        >
            {
                items.map((item, key) => (
                    <PseudoBox
                        key={key}
                        color="blue.700"
                        _hover={{ color: 'blue.500' }}
                    >
                        <Grid
                            key={`menu-${key}`}
                            mr="50px"
                            w="100px"
                            rounded="lg"
                            py="15px"
                            alignItems="center"
                            justifyContent="center"
                            cursor="pointer"
                        >
                            <Grid
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box key={`icon-${key}`} as={item.icon} mb="3px" />
                            </Grid>
                            <Grid
                                alignItems="center"
                                justifyContent="center"
                            >
                                {item.label}
                            </Grid>
                        </Grid>
                    </PseudoBox>
                ))
            }
        </Flex>
    )
}

export default Menu;
