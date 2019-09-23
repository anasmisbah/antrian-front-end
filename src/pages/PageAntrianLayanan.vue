<template>

  <div>
    <!-- <div v-if="pageLoader_isDataLoaded" class="container"> -->
      <div  class="container">
        <section class="section">
          <div>
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
                          <p class="subtitle is-5">Loket tersedia 3</p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
            </div>
          </div>
        </section>
      <div class="columns  is-centered is-mobile">
        <a class="button is-large is-primary is-focused">Cetak Tiket</a>
      </div>
      <section class="section">
        <div>
          <h1 class="title">Daftar Antrian</h1>
          <div class="columns cover is-multiline is-mobile">
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
  import PageLoader from '@/mixins/PageLoader'
  // import AppSpinner from '../components/shared/AppSpinner'
  import DaftarAntrianItem from '../components/DaftarAntrianItem'
  export default {
    components:{
      DaftarAntrianItem
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

<style>
</style>
