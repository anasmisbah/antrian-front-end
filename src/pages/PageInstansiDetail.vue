<template>
<div class="instansi-detail-page">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <article class="media v-center">
            <figure class="media-left">
              <p class="image is-128x128">
                <img class="is-rounded" src="https://3.bp.blogspot.com/-ZI6QUUYMfgY/UIGOe9n0MmI/AAAAAAAAAqs/EiG4Yp6sv5E/s320/LOGO+Kementrian+Pendidikan+Dan+Olah+Raga.jpg">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h1 class="title">
                  Nama Instansi
                </h1>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="section">
      <div class="columns  is-centered cover is-mobile">
        <div class="column  is-three-quarters">
          <div class="box box-dark-mode">
            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="input is-medium" type="text" placeholder="Cari Layanan Pada instansi">
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
      <div class="columns cover is-multiline is-mobile">
          <!-- <div v-if="pageLoader_isDataLoaded" class="container"> -->  
          <LayananItem/>
          <!-- <div v-else class="container">
            <AppSpinner />
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import PageLoader from '@/mixins/PageLoader'
  //  import AppSpinner from '../components/shared/AppSpinner'
  import LayananItem from '../components/LayananItem'
  export default {
    components:{
      LayananItem
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

<style scoped lang="scss">
  .instansi-detail-page {
    background-color: #f5f5f5;
    .mapouter{text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
    .hero-body {
      background-color: white;
      border: 1px solid rgba(46,62,72,.12);
      color: white;
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1531263060782-b024de9b9793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
        > p,h1,h2, strong {
          color: white;
        }
      }
    .meetup-side-box {
      background-color: white;
      border-radius: 10px;
      font-size: 16px;
      padding: 15px;
    }
  }
  pre,
  .message {
    max-width: 960px;
  }
  .v-center {
    align-items: center;
  }
  li {margin: 10px}
  .hero.is-primary {
  background: linear-gradient(to top right, #524ad0 10%, #D099FA);
  }
  
  .media-content {overflow: hidden;}
  .menu-list li a:hover {
    background: #d9d9d9;
  }
  .token.number {
    display: inline;
    padding: inherit;
    font-size: inherit;
    line-height: inherit;
    text-align: inherit;
    vertical-align: inherit;
    border-radius: inherit;
    font-weight: inherit;
    white-space: inherit;
    background: inherit;
    margin: inherit;
  }
  .content {
    figure {
      margin-bottom: 0;
    }
  }
  .media + .media {
    border: none;
    margin-top: 0;
  }
  .box-dark-mode{
    background-color: #1A2238;
    padding: 30px 40px;
  }
</style>
