<template>
  <div>
    <div class="container">
      <div class="section">
      <div class="columns  is-centered cover is-mobile">
        <div class="column  is-three-quarters">
          <div class="box box-dark-mode">
            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="input is-medium" type="text" placeholder="Cari Instansi">
              </p>
              <p class="control">
                <button class="button is-medium">
                  Cari
                </button>
              </p>
            </div>
          </div>
        </div> 
      </div>
      </div>
    </div>
    <div v-if="pageLoader_isDataLoaded" class="container">
        <section class="section">
          <div>
            <div class="columns cover is-multiline is-mobile">
              <InstansiItem v-for="instansi in allInstansi" :key="instansi.id" :instansi="instansi"/>
            </div>
          </div>
        </section>
    </div>
    <div v-else class="container">
      <AppSpinner />
    </div>
 </div>
</template>

<script>
  import PageLoader from '@/mixins/PageLoader'
  import AppSpinner from '../components/shared/AppSpinner'
  import InstansiItem from '../components/InstansiItem'
  import { mapActions,mapState } from "vuex";
  export default {
    components:{
      InstansiItem,
      AppSpinner
    },
     mixins:[PageLoader],
    computed: {
      ...mapState({
        allInstansi: state => state.instansi.items
      })
    },
     created() {
       Promise.all([this.fetchAllInstansi()])
       .then(() => {
         this.pageLoader_resolveData()})
       .catch(()=>{
         this.pageLoader_resolveData()
       })
     },
     methods: {
       ...mapActions('instansi',['fetchAllInstansi'])
     },
  }
</script>

<style scoped>
  .is-rounded {
    border-radius: 10px !important;
  }
  .box-dark-mode{
    background-color: #1A2238;
    padding: 30px 40px;
  }
</style>
