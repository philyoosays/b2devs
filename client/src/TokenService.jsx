const TokenService = {
  save(token) {
    window.localStorage.setItem('authToken', token.token);
  },
  read() {
    // console.log(window.localStorage.getItem('authToken'))
    return window.localStorage.getItem('authToken');
  },
  destroy() {
    window.localStorage.removeItem('authToken');
    window.location.assign('/cpanel/login')
  }
};

export default TokenService;
