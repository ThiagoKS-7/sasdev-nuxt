<template>
    <div class="header-skeleton header-color">
        <h1 class="header-title">SearchAndStay Frontend Task</h1>
        <div>
            <span class="logout-button" @click="logoutUser()">Logout</span>
            <ThemeSwitch/>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderComponent",
    methods: {
        logoutUser() {
            window.localStorage.clear()
            this.$router.push("/login")
        }
    }
}
</script>