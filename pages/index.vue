<template>
  <div class="container">
    <h1 class="welcome-text">เส้นทางแห่งธรรม</h1>
    <div class="about-support-container">
      <div class="about-box">
        <nuxt-link to="/about">
          <h2>เกี่ยวกับเรา</h2>
        </nuxt-link>
      </div>

      <div class="support-box box">
      <a href="https://commerce.coinbase.com/checkout/e2355c57-625b-4cc9-b05c-55cba3248f3d" target="_blank">
        <h2>สนับสนุน</h2>
      </a>
    </div>

    </div>
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

.about-support-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 500px;
}

.about-box,
.support-box {
  width: 30%;
  height: 25%;
  padding: 30px;
  background-color: rgba(255, 187, 0, 0.22);
  border: 2px solid #FFFF00;
  border-radius: 50%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease; /* เพิ่ม transition */
  margin: 10px;
}

.about-box:hover,
.support-box:hover {
  box-shadow: 0 12px 24px rgba(255, 77, 77, 0);
  transform: scale(1.1); /* เพิ่ม transform */
}

.about-box a,
.support-box a,
.about-box nuxt-link,
.support-box nuxt-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

/* หน้าจอขนาดเล็ก (390x844 px) */
@media (max-width: 400px) {
  .welcome-text {
    font-size: 3rem;
    top: 6%;
  }
  .text-container {
    width: 80%;
    height: auto;
    padding: 15px;
    top: 45%;
  }
  .text {
    font-size: 1.5rem;
  }
  .about-support-container {
    flex-direction: column;
    align-items: center;
  }
  .about-box,
  .support-box {
    width: 80%;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    margin: 15px 0;
  }
}

/* หน้าจอขนาดกลาง (แท็บเล็ต 768x1024 px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .welcome-text {
    font-size: 4rem;
    top: 5%;
  }
  .text-container {
    width: 70%;
    height: auto;
    padding: 25px;
    top: 40%;
  }
  .text {
    font-size: 2.8rem;
  }
  .about-box,
  .support-box {
    width: 45%;
    height: auto;
    padding: 20px;
    border-radius: 12px;
  }
}

/* หน้าจอขนาดใหญ่พิเศษ (เดสก์ท็อปขนาดใหญ่กว่า 1440x900 px) */
@media (min-width: 1441px) {
}
</style>