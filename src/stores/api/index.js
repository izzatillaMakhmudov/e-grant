import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const api = ({ url, open = false, ...props }) => {
  const token = localStorage.getItem("_token")
    ? `${localStorage.getItem("_token")}`
    : null;
  if (!open) {
    props.headers = {
      ...props.headers,
      Authorization:
        props.headers && props.headers.Authorization
          ? props.headers.Authorization
          : `Bearer ${token}`,
    };
  }
  if ("pk" in props) {
    url = `${url}/${props.pk}`;
  }
  return instance({
    url: url,
    ...props,
  });
};

function createAxiosResponseInterceptor() {
  const interceptor = instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        instance.interceptors.response.eject(interceptor);
        try {
          const refreshToken = localStorage.getItem("_refreshToken");
          if (refreshToken) {
            const { data } = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
              { token: refreshToken }
            );
            const newToken = data.token;
            localStorage.setItem("_token", newToken);
            error.config.headers.Authorization = `Bearer ${newToken}`;
            return instance(error.config);
          } else {
            localStorage.removeItem("_token");
            localStorage.removeItem("sso_token");
            window.location.href = "/auth";
          }
        } catch (refreshError) {
          console.error("Tokenni yangilashda xato:", refreshError);
          localStorage.removeItem("_token");
          localStorage.removeItem("sso_token");
          await router.push({ name: "AuthLayout" });
          window.location.href = "/auth";
        }
      } else if ([404].includes(error.response?.status)) {
      }

      return Promise.reject(error);
    }
  );
}

createAxiosResponseInterceptor();
