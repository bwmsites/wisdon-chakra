import React from 'react';
import { Box, Flex, Heading, Divider, Icon, Image } from '@chakra-ui/core';

import logo from '../../assets/images/logo-wisdon.png';

const Header = () => {
    return (
        <Box
            bg="blue.800"
            h={180}
        >
            <Flex
                w={0.9}
                m="0 auto"
                py={5}
            >
                <Box>
                    <Image maxW="180px" maxH="90px" w="auto" h="auto" src={logo} alt="Logo Wisdon" objectFit="cover" />
                </Box>
                
                <Flex
                    h="40px"
                    my="30px"
                    ml={3}
                >
                    <Box
                        w="200px"
                    >
                        <Heading as="h6" size="xs" color="blue.200">
                            Empresa
                        </Heading>
                        <Heading
                            as="h5"
                            size="sm"
                            color="blue.100"
                            textTransform="capitalize"
                            isTruncated
                            letterSpacing={1}
                        >
                            skarlata web crafting
                        </Heading>
                    </Box>
                    <Divider orientation="vertical" borderStyle="dotted" />
                    <Flex ml={2}>
                        <Box
                            w="170px"
                            mr="5px"
                        >
                            <Heading
                                as="h5"
                                size="sm"
                                color="blue.200"
                                isTruncated
                                textTransform="capitalize"
                            >
                                bruno cesar da silva
                            </Heading>
                            <Heading
                                as="h6"
                                size="xs"
                                color="blue.100"
                                textTransform="lowercase"
                                isTruncated
                                letterSpacing={1}
                            >
                                Bruno.skarlata@gmail.com
                            </Heading>
                        </Box>
                        <Icon name="settings" size="36px" color="blue.200" />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header;
