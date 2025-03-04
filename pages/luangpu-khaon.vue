<template>
  <div class="container">
    <h1 class="welcome-text">ชีวประวัติหลวงปู่ขาว อนาลโย</h1>
    <div class="empty-box">
      <img src="/pu_kao.jpg" class="image" />
      <h2 class="birth-title">ชาติกำเนิด</h2>
      <p class="birth-detail">
        หลวงปู่ขาว อนาลโย นามเดิมชื่อ ขาว โคระถา เกิดวันอาทิตย์ที่ 28 ธันวาคม พ.ศ. 2431 ปีชวด 
        ที่บ้านบ่อชะเนง ตำบลหนองแก้ว อำเภออำนาจเจริญ จังหวัดอุบลราชธานี (ปัจจุบันขึ้นกับตำบลหนองแก้ว อำเภอหัวตะพาน จังหวัดอำนาจเจริญ) 
        บิดาชื่อ พั่ว โคระถา มารดาชื่อ รอด โคระถา มีพี่น้องร่วมท้องเดียวกัน 7 คน ท่านเป็นคนที่ 4 ทำอาชีพหลักของครอบครัว คือ ทำนาและค้าขาย 
        ต่อมาท่านได้สมรสกับนางมี โคระถา เมื่อ พ.ศ. 2452 ขณะอายุได้ 20 ปี มีบุตรด้วยกัน 3 คน ใช้ชีวิตคู่ได้ 11 ปี จึงได้อุปสมบทเป็นพระภิกษุในพระพุทธศาสนา 
        นอกจากหลวงปู่ขาวแล้วยังมีผลผลิตทางธรรมจากบ้านบ่อชะเนงและเป็นญาติกับหลวงปู่ขาว อีก 2 รูป คือ สมเด็จพระมหาวีรวงศ์ (มานิต ถาวโร) 
        เจ้าอาวาสวัดสัมพันธวงศาราม พระอารามหลวงชั้นตรี ชนิดวรวิหาร กรุงเทพมหานคร[1] และพระราชปรีชาญาณมุนี (หลอม มหาวิริโย ป.ธ.๗) เจ้าอาวาสวัดบ่อชะเนง และเจ้าคณะจังหวัดอำนาจเจริญ

      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ชีวประวัติหลวงปู่ขาว อนาลโย</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1xofptpljogTo6VPjK9ZJ-_rkjc5lTZed?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
    
]);


const toggleList = () => {
  isListVisible.value = !isListVisible.value;
  dharmaList.value.style.display = isListVisible.value ? 'block' : 'none';
};

const goToSoundCloud = (soundcloudUrl) => {
  window.open(soundcloudUrl, '_blank');
};

const goToDrive = (driveUrl) => {
  window.open(driveUrl, '_blank');
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
  font-size: 3rem;
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
  max-width: 150%;
  max-height: 150%;
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
  
}

.dharma-title {
  font-size: 2rem;
  color: red;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
}


.dharma-list:nth-child(2) {
  margin-top: 40px; 
}

.dharma-sublist {
  list-style: none;
  padding: 10px;
  margin-top: 5px;
  display: none;
  border: 1px solid #ccc; 
  border-radius: 5px; 
  max-height: 200px; 
  overflow-y: auto;
  background-color:rgb(252, 252, 252); /* สีพื้นหลัง LightSteelBlue */
  color: #333; /* สีตัวอักษรสีเทาเข้ม */ 
}

.dharma-item {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}

</style>