import React from 'react';
import FinanceStats from '../../components/FinanceStats';
import View from '../../components/View';
import Table from '../../components/Table';
import { Text, Flex, Box, Heading } from '@chakra-ui/core';
import { LineChart, XAxis, CartesianGrid, Line, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
    const columns = [
        { label: 'Data', field: 'date', type: 'date' },
        { label: 'Histórico', field: 'history', type: 'string' },
        { label: 'Valor (R$)', field: 'amount', type: 'currency' }
    ]

    const data = [
        { id: 1, date: '2020-07-05', history: 'Compra de materiais de escritório', amount: '350000', status: 'active'},
        { id: 2, date: '2020-07-15', history: 'Parcela Laptop 2/5', amount: '220182.46', status: 'active'},
        { id: 3, date: '2020-06-23', history: 'Água', amount: '12010.5', status: 'inactive'},
        { id: 4, date: '2020-05-18', history: 'Internet', amount: '9128.37', status: 'deleted'},
    ]

    return (
        <View
            title="Dashboard"
        >
            <Text as="strong" color="blue.400">
                Referência:
            </Text>
            <Text as="span" ml="5px" color="blue.600">25/07/2020</Text>
            <FinanceStats />
            <Flex mt={10}>
                <Table
                    w="47%"
                    title="Contas a Pagar (7 dias)"
                    columns={columns}
                    data={data}
                    filterField="history"
                />
                <Box bg="white" ml="10px" w="51%" py={5} rounded="md">
                    <Heading
                        as="h5"
                        size="sm"
                        mb="10px"
                        ml="20px"
                    >
                        Evolução de Caixa (Trimestral)
                    </Heading>
                <LineChart
                    width={550}
                    height={400}
                    data={[{name: 'MAI', uv: 450, pv: 2300, amt: 2300}, {name: 'JUN', uv: 300, pv: 2400, amt: 2400}, {name: 'JUL', uv: 500, pv: 2500, amt: 2500}]}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                </LineChart>
                </Box>
            </Flex>
        </View>
    )
}

export default Dashboard;
