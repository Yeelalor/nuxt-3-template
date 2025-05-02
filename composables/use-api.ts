import axios from 'axios';
export const useAPI = () => {
    const cToken = localStorage.getItem('ctoken')
    const config = useRuntimeConfig();
    return axios.create({
        baseURL: `${config.public.api}/`,
        headers: {
            Authorization:
                'Bearer ' + cToken,
        },
    });
};