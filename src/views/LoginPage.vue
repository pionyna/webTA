<script setup>
import { ref } from 'vue'
//import { useRouter } from 'vue-router' // Import useRouter dari vue-router
import '@/assets/css/Login.scss'

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

    <section class="login-page">
      <section class="content">
        <h1>常机智造生产管理系统</h1>
        <!--登灵界面 -->
        <form action="#">
          <p><input type="text" placeholder="请输入用户名" class="txt" /></p>
          <p><input type="password" placeholder="请输入密码" class="txt" /></p>
          <!--验证码-->
          <div class="code">
            <input v-model="userInput" type="text" placeholder="谓输入验证码" />
            <div class="cap">
              <canvas width="146" height="60" ref="canRef" @click="changeCaptcha"></canvas>
            </div>
          </div>
          <p class="remb"><input type="checkbox" /><span>记住我</span></p>
          <p><button @click="verifyCaptcha">受录</button></p>
        </form>
        <p>没有账户?<span>立劍注册</span></p>
      </section>
    </section>
  </body>
</template>
