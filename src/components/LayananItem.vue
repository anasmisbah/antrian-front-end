<template>
    <div  class="column is-one-third">
      <div class="card is-hoverable large">
        <router-link :to="{name: 'PageAntrianLayanan',params:'1'}" class="card-meetup-link">
          <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="level m-b-md">
              <div class="media-content">
                  <p class="title is-4 no-padding">Nama Layanan</p>
                  <p class="subtitle is-5">asdasd</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.is-rounded {
    border-radius: 10px !important;
  }
.is-hoverable {
    transition: 0.3s;
    &:hover {
      -webkit-box-shadow: 2px 4px 15px -2px rgba(189,189,189,1);
      -moz-box-shadow: 2px 4px 15px -2px rgba(189,189,189,1);
      box-shadow: 2px 4px 15px -2px rgba(189,189,189,1);
    }
  }
</style>