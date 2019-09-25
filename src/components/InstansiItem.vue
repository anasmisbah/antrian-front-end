<template>
  <div class="column is-full">
      <router-link :to="{name: 'PageDetailInstansi',params:{id:instansi.id}}">
          <div class="card is-hoverable large">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-96x96">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content ">
                  <p class="title is-4">{{ instansi.nama }}</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
                <div class="media-right is-vertical-center">
                  <p class="control">
                   <a class="button is-primary is-medium">Pilih</a> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
        </div>
</template>

<script>
export default {
  props:{
    instansi:{
      required:true,
      type:Object
    }
  }
}
</script>

<style scoped lang="scss">
.card-meetup-link{
    color:black;
  }

  .is-hoverable {
    transition: 0.3s;
    &:hover {
      -webkit-box-shadow: 2px 4px 15px -2px rgba(189,189,189,1);
      -moz-box-shadow: 2px 4px 15px -2px rgba(189,189,189,1);
      box-shadow: 2px 4px 15px -2px rgba(189,189,189,1);
    }
  }
  .is-vertical-center {
    margin: auto;
    display: flex;
    align-items: center;
  }
</style>