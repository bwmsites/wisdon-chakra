import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

const View = (props) => {
    const { title, children } = props;

    return (
        <Box
            w={0.9}
            m="70px auto"
        >
            <Heading
                as="h4"
                size="md"
                textTransform="uppercase"
                mb="20px"   
            >
                { title }
            </Heading>
            { children }
        </Box>
    )
}

export default View;
