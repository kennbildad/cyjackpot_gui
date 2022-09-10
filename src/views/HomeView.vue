<template>
  <div>
    <NavBar />
    <SlideShow />
    <div class="card">
      <div class="card-body text-center display-4">
        Follow and predict the English Premier League and UEFA Champions League games, while you stand a change to win HUGE
      </div>
    </div>
    <div class="card text-center">
      <div class="card-body">
        <div class="row mt-4">
          <div class="col-lg-8">
            <h3 class="card-title">
              Register to play cyJackpot League
            </h3>
            <p class="card-text">
              Over 100,000,000 Naira to be won. <br />
              cyJackpot League is the biggest football Jackpot in Nigeria. <br />
              <b>It's easy to play and affordable to play!</b>
            </p>
          </div>
          <div class="col-lg-4 mt-5 mb-5">
              <router-link to="/sign-up" class="btn btn-primary">Sign Up Now</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 mt-4">
      <div class="card text-center">
        <div class="card-body">
          <h3>Hit top points for every league game_week and win...</h3> <br />
          <h4><b>50K, 30K or 20K</b></h4> <br />
          <router-link to="#" class="btn btn-primary">How To Play</router-link>
        </div>
      </div>
      </div>
      <div class="col-lg-6 mt-4">
      <div class="card text-center">
        <div class="card-body">
          <h3>Do you love and follow the English Premier League and UEFA Champions League?</h3> <br />
          <h4><b>Then, stand the change to win huge at the end of the sesason</b></h4> <br />
          <router-link to="#" class="btn btn-primary">Learn More</router-link>
        </div>
      </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import SlideShow from '@/components/SlideShow.vue'
import FooterBar from '@/components/FooterBar.vue'

</script>
