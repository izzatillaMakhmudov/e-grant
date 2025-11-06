<script setup>
import RightArrow from '@/components/Icons/RightArrow.vue';
import generate from '@/utils/generateCode';
import { onMounted } from 'vue';
import { useCore } from '@/stores/core.pinia';
const core = useCore();
import { useAuthStore } from '@/stores/auth.pinia';
const authStore = useAuthStore();
const login = (e) => {
    const { challenge, verify } = generate();
    localStorage.setItem('verify', verify);
    window.location.href = `https://sso.mf.uz/oauth2/login?clientId=e-grant&redirectUri=${import.meta.env.VITE_SSO_BASE_URL}/auth&codeChallenge=${challenge}`;
}

onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
        console.log('code', code);
        authStore.auth({
            code: code,
            redirect_url: import.meta.env.VITE_SSO_BASE_URL + '/auth',
            code_verifier: localStorage.getItem('verify')
        });
    }
});
</script>

<template>
    <div class="auth">
        <div class="left">
            <img src="../assests/images/logo.png" alt="">
            <h1>Davlat buyurtmasini shakllantirish tizimi</h1>
            <select name="lang" id="">
                <option value="uz">O'zb</option>
                <option value="ru">Rus</option>
            </select>
            <video class="video-bg" id="video2" preload="" autoplay="" muted="" playsinline="" loop="">
                <source src="../assests/images/left-bg.mp4" type="video/mp4">
            </video>
        </div>
        <div class="main">
            <div class="center">
                <h2>Tizimga kirish</h2>
                <button @click="login()">
                    <img src="../assests/images/Symbol.png" alt="" height="100%">
                    <div>
                        <p>IMV.ID orqali davom etish</p>
                        <RightArrow />
                    </div>
                </button>
            </div>
            <div class="footer">
                <p>Iqtisodiyot va Moliya vazirligi – Inson Resurslarini Boshqarish Tizimi</p>
                <p>© {{ new Date().getFullYear() }}, Аxborot texnologiyalari markazi</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.auth {
    display: grid;
    grid-template-columns: 460px 1fr;
    height: 100vh;
    overflow: hidden;
}


.left {
    position: relative;
    max-width: 460px;
    min-width: 460px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: url('../assests/images/left-bg.mp4');
    background-size: cover;
    background-position: left;
    background-clip: border-box;
    text-align: center;

    h1 {
        font-size: 32px;
        font-weight: 700;
        color: rgba(36, 47, 62, 1);
        margin-top: -120px;

    }
}

.video-bg {

    width: 460px;
    position: absolute;
    top: 0;
    left: 0px;
    height: 100vh;
    z-index: -2;
    object-fit: fill;
    width: auto;

    source {
        object-fit: cover;
    }

}

.left img {
    margin: 60px;
}

select,
::picker(select) {
    appearance: base-select;
}

select {
    text-transform: uppercase;
    gap: 2px;
    width: 80px;
    height: 40px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(214, 218, 225, 1);
    padding: 10px;
    margin: 30px;

}

option {
    border: 1px solid rgba(214, 218, 225, 1);
    outline: none;
}

.main {
    display: grid;
    grid-template-rows: 1fr 100px;
    text-align: center;

    h2 {
        font-size: 28px;
        font-weight: 700;
        color: rgba(27, 37, 51, 1);
    }
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
        cursor: pointer;
        min-width: 460px;
        max-width: 460px;
        height: 92px;
        border: 1px solid rgba(214, 218, 225, 1);
        background: #fff;
        box-shadow: 0px 20px 12px -16px rgba(10, 65, 117, 0.25);
        border-radius: 20px;
        margin: 30px auto;
        display: flex;
        padding: 25px;
        align-items: center;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
}


.footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px;
}

.footer p {
    color: rgba(105, 116, 131, 1);
    font-weight: 500;
    font-size: 14px;
}

.center button p {
    color: rgba(36, 47, 62, 1);
    font-size: 18px;
    font-weight: 600;
    margin-left: 25px;


}
</style>
