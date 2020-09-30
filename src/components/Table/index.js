import React, { useState, useEffect } from 'react';
import { Flex, Box, Heading, InputLeftElement, InputGroup, Icon, Input, PseudoBox } from '@chakra-ui/core';
import * as parser from '../../helpers/parser';

const Table = (props) => {
    const {
        columns,
        data,
        useFilter,
        filterField,
        title,
        ...rest
    } = props;

    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        setFiltered(data);
    }, [data]);

    const filterData = (event) => {
        const value = event.target.value;
        const found = data.filter(dt => dt[filterField].includes(value))

        setFiltered(found);
    }

    return (
        <Box
            {...rest}
            backgroundColor="white"
            rounded="md"
            p={5}    
        >
            <Heading
                as="h5"
                size="sm"
                mb="10px"
            >
                { title }
            </Heading>
           <Flex
            mb={5}
           >
                {useFilter && (
                    <InputGroup width="100%">
                        <InputLeftElement children={<Icon name="search-2" color="gray.300" />} />
                        <Input placeholder="Digite aqui o parâmetro de pesquisa" onChange={filterData} />
                    </InputGroup>
                )}
           </Flex>
            <Flex
                borderBottom="1px"
                borderTop="1px"
                p="5px"
            >
                {
                    columns.map((column, ix) => (
                        <Box
                            key={ix}
                            mr="10px"
                            w={column.size ? column.size : `${Math.round(100/columns.length)}%`}
                            cursor="pointer"
                        >
                            <Heading
                                as="h5"
                                size="sm"
                            >
                                { column.label }
                            </Heading>
                        </Box>
                    ))
                }
            </Flex>
            <Box
                mt="20px"
            >
                {
                    filtered.map((dt,ix) => (
                        <PseudoBox
                            display="flex"
                            key={ix}
                            backgroundColor={
                                ix % 2 === 0
                                ? 'blue.50'
                                : null
                            }
                            _hover={{ bg: 'gray.300'}}
                        >
                            {
                               columns.map((column, ix) => (
                                    <Box
                                        key={ix}
                                        w={column.size ? column.size : `${Math.round(100/columns.length)}%`}
                                        py="5px"
                                        px="5px"
                                    >
                                       { parser.parse({data: dt[column.field], format: 'display'}, column.type) }
                                    </Box>
                               ))
                            }
                        </PseudoBox>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Table;