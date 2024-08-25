import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const getCourses = () => axios.get(`${API_URL}courses/`);
export const getCourse = (id) => axios.get(`${API_URL}courses/${id}/`);
export const createCourse = (data) => axios.post(`${API_URL}courses/`, data);
export const deleteCourse = (id) => axios.delete(`${API_URL}courses/${id}/`);

export const getInstances = (year, semester) => axios.get(`${API_URL}instances?year=${year}&semester=${semester}`);
export const createInstance = (data) => axios.post(`${API_URL}instances/`, data);
export const deleteInstance = (id) => axios.delete(`${API_URL}instances/${id}/`);
