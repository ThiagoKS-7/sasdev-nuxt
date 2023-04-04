<template>
  <div>
    <Header/>
    <div class="grid grid-cols-2 md:grid-cols-3">
        <div v-for="rule in ruleList.entities" :class="rule.active ? 'rule-card' : 'inactive-card'" @click="checkDetails(rule.id)">
          <img :src="getImageUrl(rule.id)" class="rounded-[1em]"/>
          <div class="flex flex-col">
            <h1 class="text-md md:text-2xl"> RULE #{{ rule.id }}: </h1>
            <h3 class="text-sm md:text-xl">Name: {{rule.name }}</h3>
            <h3 class="text-sm md:text-xl">Status: {{rule.active == "0" ? "Inactive" : "Active" }}</h3>
          </div>
        </div>
    </div>  
    <div class="flex justify-end">
      <div class="mx-3"  v-if="ruleList?.pagination?.links?.prev != null">
        <span class="pagination-link" @click="getRulesList(`/admin/house_rules?page=${ruleList.pagination.current_page -1}`)">Previous</span>
      </div>
      <div class="mx-[2em]" v-if="ruleList?.pagination?.links?.next != null">
        <span class="pagination-link" @click="getRulesList(`/admin/house_rules?page=${ruleList.pagination.current_page +1}`)">Next</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      ruleList: []
    }
  }, 
  mounted() {
    this.getRulesList("/admin/house_rules");
  },
  methods: {
    async getRulesList(path) {
      try {
        const token = window.localStorage.getItem("token")
        if (token) {
          this.$axios.setToken(token, 'Bearer');
          const {data} = await this.$axios.$get(path)
          this.ruleList = data;
        }
      } catch (e) {
        console.error(e)
      }
    },
    getImageUrl(data) {
      return `https://picsum.photos/200/?id=${data}`
    },
    checkDetails(data) {
      this.$router.push(`/details/${data}`)
    }
  }
 }
</script>
