import Ls from './ls'
import axios from 'axios';

export default {
    async login(loginData) {
        try {
            let response = await axios.post('/api/auth/login', loginData);
            console.log(response);
            Ls.set('auth.token', response.data.token);
            toastr['success']('Đăng nhập thành công!', 'Thông Điệp');
            return response.data.token
        } catch (error) {
            if (error.response.status === 401) {
                window.toastr['error']('Địa chỉ email hoặc mật khẩu không đúng!', 'Lỗi');
            } else {
                console.log('Error', error.message);
            }
        }
    },

    async logout() {
        try {
            await axios.get('/api/auth/logout');

            Ls.remove('auth.token');
            toastr['success']('Đăng xuất thành công!', 'Thông Điệp');
        } catch (error) {
            console.log('Error', error.message);
        }
    },

    async check() {
        let response = await axios.get('/api/auth/check');

        return !!response.data.authenticated;
    },
}
