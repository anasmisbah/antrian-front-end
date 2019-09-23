<template>
  <div>
    <!-- <div v-if="pageLoader_isDataLoaded" class="container"> -->
      <div  class="container">
      <section class="section">
        <div>
          <h1 class="title">Instansi</h1>
          <div class="columns cover is-multiline is-mobile">
            <InstansiItem/>
          </div>
        </div>
      </section>
    </div>
    <!-- <div v-else class="container">
      <AppSpinner />
    </div> -->
  </div>
</template>

<script>
  import PageLoader from '@/mixins/PageLoader'
  import AppSpinner from '../components/shared/AppSpinner'
  import InstansiItem from '../components/InstansiItem'
  export default {
    components:{
      InstansiItem,
      AppSpinner
    },
     mixins:[PageLoader],
    computed: {
      
    },
     created() {
       
       
     },
     methods: {

     },
  }
</script>

<style scoped>
  .is-rounded {
    border-radius: 10px !important;
  }
</style>
