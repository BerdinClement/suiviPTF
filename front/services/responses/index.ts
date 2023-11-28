export async function createResponse(questionId: string, text: string, student: {user: {id: string}}) {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    let data = JSON.stringify({
        "text": text
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/responses/${questionId}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        data: data
    };

    const res = axios.request(config)
        .then((response: any) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error: Error) => {
            console.log(error);
        });

    return res;

}

export async function createManyResponse(responses: { questionId: string, text: string, student: {user: {id: string}} }[]) {
    
    const axios = require('axios');

    const token = localStorage.getItem('token');

    let fail = 0;

    responses.forEach(async (response) => {
        let data = JSON.stringify({
            "text": response.text
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/responses/${response.questionId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            data: data
        };

        const res = await axios.request(config)
            .then((response: any) => {})
            .catch((error: Error) => {
                fail++;
            });

    })

    if (fail > 0) {
        return { status: false, count: fail };
    }

    return {status: true, count: responses.length };

}