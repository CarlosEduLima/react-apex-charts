import api from '../services/api';

interface ILoginProps {
    email: string,
    password: string
}

export interface ILoginResponse {
    data: {
        token: string
    }
}

export const loginUser = async (): Promise<ILoginResponse> => {
    const credentials: ILoginProps = {
        email: '',
        password: ''
    }
    const { data } = await api.post(`/user/login`, credentials);
    return data;


};