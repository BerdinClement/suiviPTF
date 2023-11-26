

export async function getAllStudents() {
    const axios = require('axios');

    const token = localStorage.getItem('token');

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/student`,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

    const res = await axios.request(config)
        .then((response: any) => {
            return response.data;
        })
        .catch((error: Error) => {
            console.log(error);
        });
    
    return res;
}