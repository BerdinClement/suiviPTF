export async function getAllForms() {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/`,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    };

    const forms = await axios.request(config)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: Error) => {
            return error;
        });

    return forms;
}

export async function getFormById(id: string) {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/responses/${id}`,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    };

    const form = await axios.request(config)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: Error) => {
            return error;
        });

    return form;
}