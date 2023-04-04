<template>
    <div class="login_wrapper">
        <div class="absolute top-5 right-0">
            <ThemeSwitch/>
        </div>
        <div class="back-button absolute top-3 left-4" @click="returnToHome()">
            <svg width="40" height="40" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M14.389 7.956v4.374l1.056 0.010c7.335 0.071 11.466 3.333 12.543 9.944-4.029-4.661-8.675-4.663-12.532-4.664h-1.067v4.337l-9.884-7.001 9.884-7zM15.456 5.893l-12.795 9.063 12.795 9.063v-5.332c5.121 0.002 9.869 0.26 13.884 7.42 0-4.547-0.751-14.706-13.884-14.833v-5.381z"
            :fill="$colorMode.value === 'light' ? 'black' : 'white'">
            </path>
            </svg>
        </div>
        <h1 class="text-[5em] mb-[1em]">New rule</h1>
        <div class="flex flex-col items-center">
            <div class="form_input">
                <span class="flex items-center">Name: </span>
                <input :disabled="loading" type="text" v-model="form.name" required class="ml-3 rounded-[0.5em] w-[90%] text-black h-[34px]" placeholder="   Enter rule's name">
            </div>
            <div class="form_input">
                <span class="flex items-center">Status: </span>
                <label class="switch">
                    <input type="checkbox" :disabled="loading" v-model="form.active"> 
                    <span class="slider round"></span>
                </label>
            </div>
            <button type="submit" class="self-center submit-button" @click="createRule()">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            form: {
                name: "",
                active: "",
            },
            loading: false
        }
    },
    methods: {
        isValidForm() {
            return this.form.name?.length > 0
        },
        async createRule() {
            try {
                this.loading = true;
                const body = {
                    house_rules: {
                        name: this.form.name,
                        active: this.form.active ? 1 : 0,
                    }
                }
                const token = window.localStorage.getItem("token");
                if (token) {
                    this.$axios.setToken(token, 'Bearer');
                    if (this.isValidForm()) {
                        await this.$axios.$post("/admin/house_rules",body)
                        alert("Rule created successfully!")
                        this.$router.push("/")
                    } else {
                        alert("Error! Check all form params before submitting!")
                    }
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.loading = false
            }
        },
        returnToHome() {
            this.$router.push("/")
        }
    }

}
</script>