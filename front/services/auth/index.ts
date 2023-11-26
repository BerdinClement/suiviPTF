
export async function login(email: string, password: string) {
    const axios = require('axios');
    let data = JSON.stringify({
        "email": email,
        "password": password
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/login`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    const user = await axios.request(config)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: Error) => {
            return error;
        });

    return user;
}

export async function logout() {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const data = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/logout`, {}, {

        headers: {
            'Authorization': 'Bearer ' + token
        },
        withCredentials: true,
    })
        .then((response: any) => {
            localStorage.removeItem('token');
            return response.data;
        })
        .catch((error: Error) => {
            return error;
        });

    return data;
}

export async function getProfile() {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        withCredentials: true,
    };

    const user = await axios.request(config)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: Error) => {
            console.log(error);
        });

    return user;
}

