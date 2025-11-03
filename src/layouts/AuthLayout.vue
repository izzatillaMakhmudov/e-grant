<template>
    <div class="auth">
        <div class="left">
            <img src="../assests/images/logo.png" alt="">
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
                <button><img src="../assests/images/Symbol.png" alt="">
                    <p>IMV.ID orqali davom etish</p>
                </button>
            </div>
            <div class="footer">
                <p>Iqtisodiyot va Moliya vazirligi – Inson Resurslarini Boshqarish Tizimi</p>
                <p>© {{ new Date().getFullYear() }}, Аxborot texnologiyalari markazi</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.auth {
    display: grid;
    grid-template-columns: 460px 1fr;
    height: 100vh;
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
    /* overflow: hidden; */
}

.video-bg{
    position: absolute;
    top: 0;
    left: -120px;
    height: 100vh;

    z-index: -1;

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
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.center button {
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

<script>

</script>