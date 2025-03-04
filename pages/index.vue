<template>
  <div class="container">
    <h1 class="welcome-text">เส้นทางแห่งธรรม</h1>
    <img src="/main.png" alt="Lotus Image" class="image" />
    <nuxt-link to="/next-page">
    <div class="text-container">
      <h1 class="text">ก้าวสู่เส้นทางแห่งธรรม</h1>
    </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMoving = ref(false);

onMounted(() => {
  setTimeout(() => {
    isMoving.value = true;
  }, 1000); // เริ่มเคลื่อนไหวหลังจาก 1 วินาที
});
</script>

<style scoped>
body {
  font-family: 'Prompt', sans-serif;
  background-color: rgb(175, 115, 115);
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/main.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.image {
  max-width: 200%;
  max-height: 300%;
  height: auto;
  object-fit: cover;
}

.welcome-text {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  text-align: center;
  color: #800080;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 2px yellow;
  text-stroke: 2px yellow;
  animation: moveText 2s infinite alternate;
}

@keyframes moveText {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(20px);
  }
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 20%;
  padding: 30px;
  background-color: rgba(255, 187, 0, 0.22);
  border: 2px solid #FFFF00;
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.text-container:hover {
  box-shadow: 0 12px 24px rgba(255, 77, 77, 0);
  transform: translate(-50%, -50%) scale(1.1);
}

.text {
  font-size: 3rem;
  color: #8B4513;
  text-shadow: 1px 1px 2px rgb(0, 0, 0);
}

/* หน้าจอขนาดเล็ก (โทรศัพท์มือถือ) */
@media (max-width: 767px) {
  .welcome-text {
    font-size: 2rem; /* ปรับขนาดตัวอักษร */
    top: 2%; /* ปรับตำแหน่ง */
  }
  .text-container {
    width: 90%; /* ปรับขนาดกล่องข้อความ */
    height: auto; /* ปรับความสูงอัตโนมัติ */
    padding: 20px; /* ปรับ padding */
    top: 60%; /* ปรับตำแหน่ง */
  }
  .text {
    font-size: 2rem; /* ปรับขนาดตัวอักษร */
  }
  .image {
    max-width: 100%; /* ปรับขนาดรูปภาพ */
    max-height: 200%; /* ปรับขนาดรูปภาพ */
  }
}

/* หน้าจอขนาดกลาง (แท็บเล็ต) */
@media (min-width: 768px) and (max-width: 991px) {
  .welcome-text {
    font-size: 3rem;
  }
  .text-container {
    width: 60%;
  }
  .text {
    font-size: 2.5rem;
  }
  .image {
    max-width: 150%; /* ปรับขนาดรูปภาพ */
    max-height: 250%; /* ปรับขนาดรูปภาพ */
  }
}
</style>