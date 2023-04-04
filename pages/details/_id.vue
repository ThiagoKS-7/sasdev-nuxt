<template>
    <div>
        <DetailsHeader/>
        <div class="details-wrapper">
            <div class="flex flex-col md:flex-row justify-start">
                <img v-if="this.$route.params" :src="getImageUrl()" class="rounded-[2em] opacity-100" />
                <div class="flex flex-col ml-[3em]">
                    <h1 class="text-3xl">Name: {{ details?.name ||"-" }}</h1>
                    <h3 class="text-xl">#{{ details?.id  ||"-"}}</h3>
                    <h3 class="text-xl">Status: {{ details?.active == "0" ? "inactive" : "active"}}</h3>
                    <h3 class="text-xl">Order: {{ details?.order}}</h3>
                </div>
            </div>
            <h1 class="mt-5 text-2xl"> #{{details?.id || "-"}}'s Details</h1>
            <div class="edit-button">
                <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" :stroke="$colorMode.value === 'light' ? 'black' : 'white'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" :stroke="$colorMode.value === 'light' ? 'black' : 'white'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
            </div>
            <div class="delete-button">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12V17" :stroke="$colorMode.value === 'light' ? '#ef4444' : '#b91c1c'"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 12V17" :stroke="$colorMode.value === 'light' ? '#ef4444' : '#b91c1c'"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 7H20" :stroke="$colorMode.value === 'light' ? '#ef4444' : '#b91c1c'"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" :stroke="$colorMode.value === 'light' ? '#ef4444' : '#b91c1c'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" :stroke="$colorMode.value === 'light' ? '#ef4444' : '#b91c1c'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsComponent',
    data() {
        return {
            details: [],
        }
    },
    mounted() {
        this.getUserDetails();
    },
    methods: {
        async getUserDetails() {
            try {
                const id = this.$route.params ? this.$route.params.id : "-"
                const {data} = await this.$axios.$get(`/admin/house_rules/${id}`)
                this.details = data
            } catch (e) {
                console.error(e)
            }
        },
        getImageUrl() {
            return `https://picsum.photos/200/?id=${this.$route.params.id.toString()}`
        }
     }
}
</script>