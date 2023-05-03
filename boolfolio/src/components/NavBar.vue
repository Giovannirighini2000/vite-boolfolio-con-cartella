<template>
    <header>
        <div class="container nav">

            <router-link :to="{ name: 'home' }">Vue-router-Projects</router-link>

            <ul class="nav__menu">
                <li>
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects.index' }">Blog</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }">Chi siamo</router-link>
                </li>

            </ul>

        </div>
    </header>
</template>
  
<script>
import { effect } from 'vue';

export default {
    mounted() {
        console.log('nav bar mounted hook')
    }
    // per visionare i componenti che si montano ect.
}
</script>
  
<style scoped>
.nav,
.nav__menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: rebeccapurple;
}

.nav__menu {
    margin-left: auto;
}
</style>