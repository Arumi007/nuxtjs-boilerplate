<template>
  <div class="container">
    <h1 class="welcome-text">พระอาจารย์ อุทัย สิริธโร</h1>
    <div class="empty-box">
      <img src="/pu_uthai.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        หลวงปู่เจ้าคุณอุทัย สิริธโร เป็นพระภิกษุฝ่ายวิปัสสนาธุระ สังกัดคณะสงฆ์ธรรมยุติกนิกาย ศิษย์ของหลวงปู่ฝั้น อาจาโร 
        ปัจจุบันดำรงตำแหน่งเจ้าอาวาสวัดเขาใหญ่ญาณสัมปันโน เป็นที่เคารพในฐานะเสาหลักพระกรรมฐานในยุคปัจจุบัน
        <br><strong>ชาติกำเนิด</strong>
      </p>

      <p class="birth-detail">
      หลวงปู่เจ้าคุณอุทัย สิริธโร เกิดเมื่อวันที่ 12 มีนาคม พ.ศ. 2479 ที่บ้านหนองบก ตำบลหนองหิน อำเภอยโสธร จังหวัดอุบลราชธานี 
      (ปัจจุบันคือ จังหวัดยโสธร) มีพี่น้องรวมทั้งหมด 3 คน โดยหลวงปู่เจ้าคุณอุทัย สิริธโรเป็นบุตรคนโตของครอบครัว
      <br><strong>อุปสมบท</strong>
      </p>

      <p class="birth-detail">
      หลวงปู่เจ้าคุณอุทัย สิริธโร อุปสมบทในวันพุธที่ 9 พฤษภาคม พ.ศ. 2499 โดยมี พระครูทัศนะประกาศ เป็นพระอุปชฌาย์ พระใบฏีกาอ่อน 
      เป็นพระกรรมวาจาจารย์ ณ วัดสำราญนิเวศน์ อำเภออำนาจเจริญ จังหวัดอุบลราชธานี (ปัจจุบันคือ จังหวัดอำนาจเจริญ) หลังจากอุปสมบทเสร็จแล้ว 
      ได้กลับมาจำพรรษาที่บ้านเกิดคือ ที่วัดป่าบ้านหนองบก ตำบลหนองหิน อำเภอยโสธร จังหวัดอุบลราชธานี (ปัจจุบันคือ จังหวัดยโสธร)
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%8A%E0%B8%B4%E0%B8%A3%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B9%82%E0%B8%AA%E0%B8%A0%E0%B8%93_(%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B1%E0%B8%A2_%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%98%E0%B9%82%E0%B8%A3)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา พระอาจารย์ อุทัย สิริธโร</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1oBrukQjtEmBz44lYmbAvhN6OeVFb13qB?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  background-image: url('/lotus2.jpg');
  background-size: cover; /* ปรับขนาดภาพพื้นหลังให้ครอบคลุมกล่อง */
  background-position: center; /* ปรับตำแหน่งภาพพื้นหลัง */
  background-repeat: no-repeat;
  min-height: 150vh; /* ปรับความสูงให้เต็ม viewport */
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
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 130vh; /* ปรับความสูงสูงสุด */
  overflow-y: auto; /* เพิ่ม scrollbar ถ้าเนื้อหาเกิน */
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