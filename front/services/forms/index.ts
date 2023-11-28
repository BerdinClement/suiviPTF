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

export async function createForm(title: string) {
    const axios = require('axios');
    let data = JSON.stringify({
        "title": title
    });

    const token = localStorage.getItem('token');

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: data
    };

    const res = await axios.request(config)
        .then((response: any) => {
            return {succes : true, data: response.data};
        })
        .catch((error: Error) => {
            return {succes : false, data: error};
        });

    return res;
}