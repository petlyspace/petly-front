import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: Cookies.get('token') || null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      Cookies.set('token', token);
    },
    logout() {
      this.token = null;
      Cookies.remove('token');
    },
  },
});
