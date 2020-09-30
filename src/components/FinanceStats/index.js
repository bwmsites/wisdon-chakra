import React from 'react'
import {
    StatGroup, Stat, StatLabel, StatNumber, StatHelpText, Icon, Link
} from '@chakra-ui/core';

const FinanceStats = (props) => {
    const data = [
        { title: 'Contas a Pagar', amount: 875, to: '' },
        { title: 'Valores a Receber', amount: 2560.25, to: '' },
        { title: 'Saldo Disponível', amount: 214550.58, to: '' }
    ]

    return (
        <StatGroup
            color="gray.50"
            {...props}    
        >
            {data.map((dt, ix) => (    
                <Stat
                    bg="blue.700"
                    p={2}
                    w={180}
                    key={ix}
                    mr={3}
                    rounded="lg"
                >
                    <StatLabel>{dt.title}</StatLabel>
                    <StatNumber>
                        {dt.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </StatNumber>
                    <StatHelpText>
                        <Link>
                            Detalhar
                            <Icon name="external-link" ml="5px" />
                        </Link>
                    </StatHelpText>
                </Stat>
            ))}
        </StatGroup>
    )
}

export default FinanceStats;
