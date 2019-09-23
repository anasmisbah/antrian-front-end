<template>
    <div class="column is-hoverable is-half" :style="{'min-height': '160px'}">
        <router-link :to="{name: 'PageAntrianLayanan',params:{id:'1'}}">
        <span class="is-primary is-top is-medium tooltip">
            <figure class="image is-5by3  imageFade">
            <img class="is-rounded" src="https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80" alt="">
            </figure>
            <div class="subtitle m-t-xs bold">Sport</div>
        </span>
        </router-link>
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