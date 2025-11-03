<script>
import SettingsIcon from '../Icons/SettingsIcon.vue';
import BellIcon from '../Icons/BellIcon.vue';
import MagnifierIcon from '../Icons/MagnifierIcon.vue';


export default {
    components: {
        SettingsIcon,
        BellIcon,
        MagnifierIcon
    },
    data() {
        return {
            currentDateTime: null,
            currentHour: null
        };
    },
    mounted() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);
    },
    methods: {
        updateDateTime() {
            const now = new Date();

            const day = String(now.getDate()).padStart(2, "0");
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");

            // format: DD.MM.YYYY HH:mm
            this.currentDateTime = `${day}.${month}.${year} ${hours}:${minutes}`;
            this.currentHour = now.getHours();
        }
    }
};
</script>

<template>
    <div class="header">
        <div class="content">
            <p class=" Font size/text-md  Line height/text-md">{{ currentDateTime, currentHour }}</p>
        </div>
        <div class="content right">
            <div class="actions">
                <button>
                    <MagnifierIcon />
                </button>
                <button>
                    <SettingsIcon />
                </button>
                <button>
                    <BellIcon />
                </button>
            </div>
            <button><img src="../../assests/images/me.jpg" alt="" class="avatar"></img></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    width: 100%;
    height: 72px;
    border: 1px solid rgba(245, 245, 245, 1);
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;

    p {
        color: rgba(0, 0, 0, 1);
        font-weight: 600;

    }

    .content.right {
        width: 184px;
    }

    .content {
        color: rgba(113, 118, 128, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .actions {
            display: flex;
            justify-content: space-between;
            align-items: center;

        }
        button {
            width: 40px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }


}
</style>
