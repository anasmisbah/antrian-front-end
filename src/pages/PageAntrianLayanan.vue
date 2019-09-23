<template>

  <div>
    <!-- <div v-if="pageLoader_isDataLoaded" class="container"> -->
      <div  class="container">
        <section class="section">
          <div>
            <a class="button is-success">
              Kembali
            </a>
            <div class="columns is-centered is-mobile">
                <div class="column is-one-quarter is-rounded" :style="{'min-height': '160px'}">
                  <div class="box ">
                    <article class="media">
                      <div class="media-left">
                        <figure class="image is-64x64">
                          <img src="http://www.alatantrian.com/wp-content/uploads/2017/04/ICON-Antrian.png" alt="Image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <div class="content">
                          <p class="title is-1">120</p>
                          <p class="subtitle is-5">sisa antrian 20</p>
                        </div>
                      </div>
                    </article>
                    
                  </div>
                </div>
            </div>
          </div>
        </section>
      </div>

      <div  class="container">
          <div class="columns  is-centered is-mobile">
            <a class="button is-large is-primary is-focused">Cetak Tiket</a>
          </div>
      </div>
      <div  class="container">
      <section class="section">
        <div>
          <h1 class="title">Daftar Antrian</h1>
          <div class="columns cover is-multiline is-mobile">
            <!-- <CategoryItem v-for="category in categories" 
                          :key="category._id"
                          :category="category"
                          ></CategoryItem>   -->
                <DaftarAntrianItem/>
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
  // import AppSpinner from '../components/shared/AppSpinner'
  import DaftarAntrianItem from '../components/DaftarAntrianItem'
  export default {
    components:{
      DaftarAntrianItem
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
</style>
