<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Import useRouter dari vue-router
import '@/assets/css/Home.css'

// Reactive state untuk mengontrol sidebar
const isOpen = ref(false)

// Fungsi membuka sidebar
function openSidebar() {
  isOpen.value = true
}

// Fungsi menutup sidebar
function closeSidebar() {
  isOpen.value = false
}

// Ambil instance router
const router = useRouter()

// Fungsi untuk navigasi ke halaman LoginPage
function goToLogin() {
  router.push({ name: 'LoginPage' }) // Navigasi ke halaman login
}
</script>

<template>
  <img src="" />
  <body>
    <section>
      <div :class="{ open: isOpen }" class="button">
        <br />
        <a v-if="!isOpen" class="open-btn" @click="openSidebar">▶</a>
        <a v-if="isOpen" class="close-btn" @click="closeSidebar">◀</a>
        <br />
      </div>
      <aside :class="{ open: isOpen }" class="kiri">
        <img src="/src/assets/img/Cinnamoroll.png" />
        <nav>
          <router-link to="/">Home</router-link>
          <a href="#">Login</a>
          <a href="#">Peta</a>
        </nav>
      </aside>
    </section>

    <header :class="{ open: isOpen }" class="header">
      <h1>Web Baju Adat</h1>
      <p>halo halo<img src="#" /></p>
    </header>

    <section class="sampul">
      <h1></h1>
    </section>
    <section id="hero" class="hero">
      <div class="text">
        <h1>HALO - !</h1>
        <h2>ayo belajar baju adat bersama Cinnamorol</h2>
        <br />
        <button @click="goToLogin">mulai</button>
        <br />
        <br />
      </div>
      <img
        src="/src/assets/img/a6ba493160f77d6bfb5a1d3ed8b781da.png"
        class="img-fluid animated"
        alt=""
      />
    </section>
  </body>
</template>
