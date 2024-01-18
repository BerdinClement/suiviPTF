export async function getAllStudents() {
  const axios = require("axios");

  const token = localStorage.getItem("token");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/student`,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const res = await axios
    .request(config)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: Error) => {
      console.log(error);
    });

  return res;
}

export async function getAllTutors() {
  const axios = require("axios");

  const token = localStorage.getItem("token");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/tutor`,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const res = await axios
    .request(config)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: Error) => {
      console.log(error);
    });

  return res;
}

export async function createStudent(email: string, password: string, firstName: string, lastName: string, ine: string, num_etu: string) {
  const axios = require('axios');

  const token = localStorage.getItem('token');

  let data = JSON.stringify({
    "email": email,
    "password": password,
    "firstName": firstName,
    "lastName": lastName,
    "student": {
      "ine": ine,
      "num_etu": num_etu
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/student`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      "Access-Control-Allow-Origin": "*",
    },
    data: data
  };

  const res = await axios.request(config)
    .then((response: any) => {
      return { status: true, data: response.data };
    })
    .catch((error: Error) => {
      return { status: false, data: error };
    });

  return res;
}

export async function createTutor(email: string, password: string, firstName: string, lastName: string) {
  const axios = require('axios');

  const token = localStorage.getItem('token');

  let data = JSON.stringify({
    "email": email,
    "password": password,
    "firstName": firstName,
    "lastName": lastName,
    "isAdmin": true,
    "tutor": {}
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/tutor`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      "Access-Control-Allow-Origin": "*",
    },
    data: data
  };

  const res = await axios.request(config)
    .then((response: any) => {
      return { status: true, data: response.data };
    })
    .catch((error: Error) => {
      return { status: false, data: error };
    });

  return res;
}

export async function affectStudents(tutorId: string, students: string[]) {
  const axios = require('axios');

  const token = localStorage.getItem('token');

  let data = JSON.stringify({
    "students": students
  });

  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/tutor/students/${tutorId}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      "Access-Control-Allow-Origin": "*",
    },
    data: data
  };

  const res = await axios.request(config)
    .then((response: any) => {
      return { status: true, data: response.data };
    })
    .catch((error: Error) => {
      return { status: false, data: error };
    });

  return res;
}

export async function getAllStudentsByTutor(tutorId: string) {
  const axios = require("axios");

  const token = localStorage.getItem("token");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/student/${tutorId}`,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const res = await axios
    .request(config)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: Error) => {
      console.log(error);
    });

  return res;
}