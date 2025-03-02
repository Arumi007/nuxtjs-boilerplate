<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่ฝั้น อาจาโร</h1>
    <div class="empty-box">
      <img src="/pu_fun.jpg" class="image" />
      <h2 class="birth-title">ชาติกำเนิด</h2>
      <p class="birth-detail">
        พระอาจารย์ฝั้น อาจาโร เป็นศิษย์พระกรรมฐาน ซึ่งเป็นพระอาจารย์ใหญ่ฝ่ายวิปัสสนาธุระ คือ ท่านอาจารย์เสาร์ กนฺตสีโร และท่านพระอาจารย์มั่น ภูริทตฺโต
        พระอาจารย์ฝั้น อาจาโร เป็นหนึ่งในกองทัพธรรม อันมีท่านอาจารย์สิงห์ ขันตยาคโม เป็นหัวหน้าตามคำสั่งของท่านพระอาจารย์มั่น ภูริทตฺโต ให้ออกธุดงค์ไปตามสถานที่ต่างๆ 
        เพื่อเผยแผ่ธรรมภาคปฏิบัติ หรือทางด้านวิปัสสนากัมมัฎฐาน โดยเฉพาะทางภาคตะวันออกเฉียงเหนือ นั่นคือ สาระสำคัญเบื้องต้นที่ผู้เขียนมีความสนใจ
        ครั้งหนึ่งเมื่อครั้งดำรงตำแหน่งผู้อำนวยการสำนักส่งเสริมสุขภาพ กรมอนามัย ได้ไปกราบนมัสการ “หลวงพ่อ” และได้หนังสือ “ท่านพระอาจารย์ฝั้น อาจาโร วัดป่าอุดมสมพร” 
        พระผู้เปี่ยมล้นด้วยเมตตาธรรมอันหาประมาณมิได้ จัดทำโดยมูลนิธิพระอาจารย์ฝั้น อาจาโร เมื่อวันที่ 20 สิงหาคม 2543 เมื่อมีโอกาสอ่าน 
        หลายรอบแล้วเห็นว่ามีคุณค่าแก่การเผยแพร่ให้อนุชนรุ่นหลังๆ ได้รู้จักพระอริยสงฆ์ ในอดีต อันควรแก่การกราบไหว้บูชา ผู้มีนามว่า พระอาจารย์ฝั้น อาจาโร...
      </p>
      
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">ธรรมเทศนา หลวงปู่ฝั้น อาจาโร</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>
      
    </div>
  </div>
  <audio ref="audioPlayer" controls style="display: none;"></audio>
</template>

<script setup>

import { ref } from 'vue';

const dharmaList = ref(null);
let isListVisible = ref(false);


const dharmaItems = ref([
  { title: '1. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);


const toggleList = () => {
  isListVisible.value = !isListVisible.value;
  dharmaList.value.style.display = isListVisible.value ? 'block' : 'none';
};
const goToSoundCloud = (soundcloudUrl) => {
  window.open(soundcloudUrl, '_blank');
};

</script>

<style scoped>
.container {
  background-image: url('/lotus3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 400vh;
  position: relative;
}

.welcome-text {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Prompt', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: yellow;
}

.empty-box {
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 400vh;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #ccc;
  text-align: center;
}

.image {
  width: 25%;
  height: 10%;
  display: block;
  margin: 0 auto;
}

.birth-title {
  font-size: 2rem;
  margin-top: 20px;
  color: #333;
}

.birth-detail {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #555;
  text-align: left;
  width: 80%;
  margin: 10px auto;
  text-indent: 2em;
}

.dharma-list {
  margin-top: 20px;
  text-align: left;
  width: 80%;
  margin: 0px auto;
  display: flex; /* เพิ่มบรรทัดนี้ */
  align-items: flex-start; /* เพิ่มบรรทัดนี้ */
}

.dharma-title {
  font-size: 2rem;
  color: red;
  margin-bottom: 20px;
  cursor: pointer;
}


/* เพิ่มบรรทัดนี้ */
.dharma-list:nth-child(2) {
  margin-top: 40px; /* ปรับค่า margin-top ตามต้องการ */
}

.dharma-sublist {
  list-style: none;
  padding: 10px;
  margin-top: 5px;
  display: none;
  border: 1px solid #ccc; /* เพิ่มเส้นขอบ */
  border-radius: 5px; /* เพิ่มขอบมน */
  max-height: 200px; /* กำหนดความสูงสูงสุด */
  overflow-y: auto; /* เปิดใช้งานการเลื่อน */
}

.dharma-item {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}

</style>