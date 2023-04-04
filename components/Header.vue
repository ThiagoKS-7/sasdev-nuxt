<template>
    <div class="header-skeleton header-color">
        <h1 class="header-title">SearchAndStay Frontend Task</h1>
        <div class="flex justify-around items-center">
            <div class="add-button" @click="registerRule()">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 14V7C20 5.34315 18.6569 4 17 4H12M20 14L13.5 20M20 14H15.5C14.3954 14 13.5 14.8954 13.5 16V20M13.5 20H7C5.34315 20 4 18.6569 4 17V12" :stroke="$colorMode.value === 'light' ? 'black' : 'white'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 4V7M7 10V7M7 7H4M7 7H10" :stroke="$colorMode.value === 'light' ? 'black' : 'white'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <span class="ml-6 logout-button" @click="logoutUser()">Logout</span>
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
        },
        registerRule() {
            this.$router.push("/new")
        }
    }
}
</script>