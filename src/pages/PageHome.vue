<template>
  <div>
    <!-- <div v-if="pageLoader_isDataLoaded" class="container"> -->
      <div  class="container">
      <section class="section">
        <div>
          <h1 class="title">Instansi</h1>
          <div class="columns cover is-multiline is-mobile">
            <!-- <CategoryItem v-for="category in categories" 
                          :key="category._id"
                          :category="category"
                          ></CategoryItem>   -->
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
//   import CategoryItem from '@/components/CategoryItem'
//   import PageLoader from '@/mixins/PageLoader'
   import AppSpinner from '../components/shared/AppSpinner'
  import InstansiItem from '../components/InstansiItem'
  export default {
    components:{
      InstansiItem,
      AppSpinner
    },
    // mixins:[PageLoader],
    // computed: {
    //   ...mapGetters({
    //     'user':'auth/authUser'
    //   }),
    //   ...mapState({
    //     meetups: state => state.meetups.items,
    //     categories: state => state.categories.items
    //   })
    // },
    //  created() {
    //    Promise.all([this.fetchMeetups(),this.fetchCategories()])
    //    .then(() => {
    //      this.pageLoader_resolveData()})
    //    .catch(()=>{
    //      this.pageLoader_resolveData()
    //    })
       
    //  },
    //  methods: {
    //    ...mapActions('meetups',['fetchMeetups']),
    //    ...mapActions('categories',['fetchCategories'])
    //  },
  }
</script>

<style scoped>
  .is-rounded {
    border-radius: 10px !important;
  }
</style>
