<template>
  <div v-bind:class="cssClass" id="app">
    <div id="nav">
      <router-link to="/"><span @click="cssClass = 'green'">Home</span></router-link>
      <span>|</span>
      <router-link to="/categorie"><span @click="cssClass = 'blue'">Catégorie</span></router-link>

    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightColor: '110, 175, 75',
      darkColor: '100, 165, 65',
      cssClass: 'green',
    };
  },
};
</script>

<style>
html{
  height: 100%;
}
.green #nav a {
  color: rgb(80,145,45);
}

.green #nav a.router-link-exact-active {
  color: rgb(110, 175, 75);
}

body{
  margin: 0;
  padding: 0;

  overflow-x: auto;
/* 
  background-image: url(https://www.cjoint.com/doc/20_04/JDBkgffCJuV_bg.jpg); */
  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;

  /* Background image doesn't tile */
  background-repeat: no-repeat;

  /* Background image is fixed in the viewport so that it doesn't move when
     the content's height is greater than the image's height */
  background-attachment: fixed;

  /* This is what makes the background image rescale based
  on the container's size */
  background-size: cover;

  height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  vertical-align: center;
  color: white;

  height: 100%;

  margin: 0;
  padding: 0;
}
#nav {
  position: relative;
  padding: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  color: rgb(100, 100, 150);

  margin: 5px;
}

#nav a.router-link-exact-active {
  color: rgb(120, 95, 195);
}

.fade-enter-active {
  animation-delay: .4s;
  animation: fadeIn .5s;
  z-index: 2;
}
.fade-leave-active {
  animation: fadeOut .2s;
  z-index: 1;
}

@keyframes fadeIn {
  0%  {
    transform: scale(0);
    opacity: 0;
  }
  60%{
    transform: scale(1.2)
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
