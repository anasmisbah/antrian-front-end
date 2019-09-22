<template>
  <div class="column is-one-third">
      <router-link :to="{name: 'PageDetailInstansi',params:{id:'1'}}">
          <div class="card is-hoverable large">
            <div class="card-image">
              <figure class="image is-4by3">
                  <img src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="level m-b-md">
                <div class="media-left">
                  <div class="level-item has-text-centered">
                    <div>
                      <p class="title">JAN</p>
                      <p class="title">16</p>
                    </div>
                  </div>
                </div>
                <div class="media-content">
                    <p class="title is-4 no-padding is-marginless">Beer and Burger in Hamburg</p>
                    <!-- <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p> -->
                    <span class="tag is-success">Music</span>
                    <p class="subtitle is-7">Tomorrow · Times Square · 05201 </p>
                </div>
              </div>
              <div class="content">
                  The Beast stumbled in the dark for it could no longer see the path...
                  <div class="background-icon"><span class="icon-twitter"></span></div>
              </div>
            </div>
          </div>
        </router-link>
        </div>
</template>

<script>
export default {

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
</style>