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

export async function createForm(title: string, questions: any, date: string) {
    const axios = require('axios');
    let data = JSON.stringify({
        "title": title,
        "date": new Date(date),
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

    let res = await axios.request(config)
        .then((response: any) => {
            return { status: true, data: response.data };
        })
        .catch((error: Error) => {
            return { status: false, data: error };
        });

    if (questions.length == 0) {
        return res;
    }

    const questionsArray = questions.map((question: any) => {
        return {
            "text": question.last,
            "type": "text",
            "required": false,
        }
    });

    data = JSON.stringify({
        "questions": questionsArray,
    });

    config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/many/${res.data._id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: data
    };

    res = await axios.request(config)
        .then((response: any) => {
            return { status: true, data: response.data };
        })
        .catch((error: Error) => {
            return { status: false, data: error };
        });

    return res;
}

export async function getLast() {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/last`,
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

export async function getFormByIdUser(id: string, user: string) {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/responses/student/${id}/${user}`,
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