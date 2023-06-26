import { defineStore } from "pinia";
import { show_alert } from "../helpers/functions";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser:null,
        authToken:null
    }),
    //persistencia de datos
    persist: true,
    getters: {
        user:(state) => state.authUser,
        token:(state) => state.authToken
    },
    actions:{
        async getToken(){
            await axios.get('/sanctum/csrf-cookie');
        },

        async login(form){
            await this.getToken();
            await axios.post('auth/login', form).then(
                (resp) => {
                    this.authToken = resp.data.token;
                    this.authUser = resp.data.data;
                    this.router.push('panelprincipal');
                }
            ).catch(
                (errors) => {
                    let desc = '';
                    errors.response.data.errors.map(
                        (e) => {
                            desc = desc + ' '+e
                        }
                    )
                    show_alert(desc, 'error', '');
                }
            )
        },

        async register (form) {
            await this.getToken();
            await axios.post('auth/register', form).then(
                (resp) => {
                    show_alert(resp.data.message, 'success', '');
                    setTimeout( () => this.router.push('/login'), 2000);

                }
            ).catch(
                (errors) => {
                    let desc = '';
                    errors.response.data.errors.map(
                        (e) => {
                            desc = desc + ' '+e
                        }
                    )
                    show_alert(desc, 'error', '');
                }
            )
        },

        async logout() {
            await axios.get('auth/logout', this.authToken);
            this.authToken = null;
            this.authUser = null;
            this.router.push('/login');
        },


    }
});
