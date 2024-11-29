import http from '../routing/http-auth.js';

class AuthService {
  loginUser = data => http.post('/login', data);
  registerUser = data => http.post('/register', data);
  userForgotPassword = data => http.post('/forgotpassword', data);
  userPasswordReset = data => http.put('/passwordreset/:resetToken', data);
}

export default new AuthService();
