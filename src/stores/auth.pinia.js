import {defineStore} from "pinia";
import {useRouter} from "vue-router";
import {api} from "./api/index.js";
import {useCore} from "./core.pinia";

export const useAuthStore = defineStore('auth', () => {
  const core = useCore();
  const router = useRouter();

  const auth = (data) => {
    core.setMainLoader(true);
    api({
      url: '/api/user/login-with-sso',
      method: 'post',
      data: data,
      open: true
    }).then(({data}) => {
      localStorage.setItem('_token', data?.['user_auth_token']);
      localStorage.setItem('sso_token', data?.['sso_access_token']);
    //   core.setToast({
    //     status: "success",
    //     message: "Muvaffaqiyatli"
    //   });
      router.replace({name: 'MainLayout'});
    }).catch((error) => {
      console.log(error)
    //   core.setToast({
    //     status: "error",
    //     message: error.response?.data.message || "Xatolik."
    //   });
      router.replace({name: 'AuthLayout'});
    }).finally(() => {
      localStorage.removeItem('verify');
      core.setMainLoader(false);
    })
  };

  return {
    auth
  }
});
