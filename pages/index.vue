<template>
  <div>
    <Header/>
    {{ruleList || "Nenhum dado encontrado."}}
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
    this.getRulesList();
  },
  methods: {
    async getRulesList() {
      try {
        const token = window.localStorage.getItem("token")
        if (token) {
          this.$axios.setToken(token, 'Bearer');
          const {data} = await this.$axios.$get(`/admin/house_rules`)
          this.ruleList = data;
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
 }
</script>
