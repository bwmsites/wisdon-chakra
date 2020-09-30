const formatDateForDisplay = (date) => {
    const dt = new Date(date);
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    };

    return dt.toLocaleString('pt-BR', options);
}

export const parseDate = (date, format) => {
    const formats = {
        display: formatDateForDisplay,
        database: null
    }

    return formats[format](date);
}

export const parseCurrency = (value, param) => {
    value = parseFloat(value);
    const formatted = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatted.replace('R$', '');
}

export const parse = ({ data, format }, type) => {
    const types = {
        date: parseDate,
        string: (p1, p2) => p1,
        currency: parseCurrency
    }

    return types[type](data, format);
}