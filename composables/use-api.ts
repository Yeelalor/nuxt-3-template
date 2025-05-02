import axios from "axios";
const api = useRuntimeConfig()

export async function useDelete(path: any, body: any) {
    const token = localStorage.getItem('token')
    const lg = localStorage.getItem('lg')
    try {
        const { data } = await axios.delete(`${api.public.API_URL}/${path}`, {
            data: body, headers: {
                Authorization: `Bearer ${token}`,
                language: lg ?? 'lo'
            }
        },)
        return data;
    } catch (error: any) {
        return error?.response?.data
    }

};

export async function usePost(path: any, body: any) {
    const token = localStorage.getItem('token')
    const lg = useCookie('lg')
    try {
        const { data } = await axios.post(`${api.public.API_URL}/${path}`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
                language: lg.value ?? 'lo'
            }
        })
        return data;
    } catch (error: any) {
        return error?.response?.data
    }
};

export async function usePut(path: any, body: any) {

    const token = localStorage.getItem('token')
    const lg = useCookie('lg')
    try {
        const { data } = await axios.put(`${api.public.API_URL}/${path}`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
                language: lg.value ?? 'lo'
            }
        })
        return data;
    } catch (error: any) {
        return error?.response?.data
    }
};
export async function useGet(path: any, body: any) {

    const token = localStorage.getItem('token')
    const lg = useCookie('lg')
    try {
        const { data } = await axios.get(`${api.public.API_URL}/${path}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                language: lg.value ?? 'lo'
            }
        })
        return data;
    } catch (error: any) {
        return error?.response?.data
    }
};