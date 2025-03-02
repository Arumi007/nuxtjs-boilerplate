<template>
  <div class="container">
    <h1 class="welcome-text">หลักคำสอนทางพระพุทธศาสนา</h1>
    <img src="/lotus.jpg" alt="Lotus Image" class="image" />
    <nuxt-link to="/next-page">
    <div class="text-container">
      <h1 class="text">ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา</h1>
    </div>
    </nuxt-link>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  position: relative; /* เพิ่ม position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image {
  max-width: 130%; /* ปรับขนาดรูปภาพให้ใหญ่ขึ้น */
  max-height: 150%; /* ปรับขนาดรูปภาพให้ใหญ่ขึ้น */
  height: auto;
  object-fit: contain; /* หรือ object-fit: cover; */
}
.welcome-text {
  position: absolute; /* ใช้ position: absolute; */
  top: 10%; /* ปรับตำแหน่งข้อความต้อนรับตามต้องการ */
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Prompt', sans-serif;
  font-size: 3rem;
  text-align: center;
  color: yellow;
}


.text-container {
  position: absolute; /* ใช้ position: absolute; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* เพิ่มพื้นหลังโปร่งแสง */
  border: 1px solid yellow; /* เพิ่มขอบ */
  text-align: center;
}

.text {
  font-family: 'Prompt', sans-serif;
  font-size: 1.5rem;
}
</style>