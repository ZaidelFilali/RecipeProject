<template>
    <div class="layout">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
  
<script setup>
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';
</script>
  
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

Footer {
    margin-top: auto;
    text-align: center;
    background-color: #fcd0d0;
    color: white;
    padding: 17px 0;
    border-radius: 10px;
}

.Footer a {
    text-decoration: none;
    color: #FFFFFF;
    margin: 0 10px;
}

.Footer a:hover {
    text-decoration: underline;
}

.social-icons {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.social-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: filter 0.2s;
    margin: 0 10px;
}

.social-logo:hover {
    filter: brightness(1.2);
}
</style>
  