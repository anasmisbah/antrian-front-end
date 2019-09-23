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
                  Instansi Anu
                </h1>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <aside class="is-medium menu">
              <div class="meetup-side-box">
                <div class="meetup-side-box-date m-b-sm">
                  <p><b>Nama</b></p>
                  <p>no</p>
                </div>
                <div class="meetup-side-box-date m-b-sm">
                  <p><b>Alamat</b></p>
                  <span>no</span> - <span>no</span>
                </div>
              </div>
              <div class="meetup-side-box-map">
                <img src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png" class="venueMap-mapImg span--100" alt="Location image of meetup venue">
              </div>
              <!-- Threads Start -->
            </aside>
          </div>
          <div class="column is-8 ">
            <!-- <div v-if="pageLoader_isDataLoaded" class="container"> -->
                <div>
                  <h1 class="title">Layanan Pada instansi</h1>
                  <div class="columns cover is-multiline is-mobile">
                    <LayananItem/>
                  </div>
                </div>
            <!-- <div v-else class="container">
              <AppSpinner />
            </div> -->
          </div>
        </div>
      </div>
    </section>
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
</style>
