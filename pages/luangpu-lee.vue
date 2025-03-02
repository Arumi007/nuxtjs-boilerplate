<template>
  <div class="container">
    <h1 class="welcome-text">ท่านพ่อลี ธมฺมธโร</h1>
    <div class="empty-box">
      <img src="/pu_lee.jpg" class="image" />
      <h2 class="birth-title">ประวัติ</h2>
      <p class="birth-detail">
        ท่านพ่อลี มีนามเดิมว่า ชาลี นารีวงศ์ เกิดเมื่อวันที่ 31 มกราคม พ.ศ. 2449[1] (นับแบบปัจจุบันเป็นปี พ.ศ. 2450) 
        ที่ตำบลยางโยภาพ อำเภอม่วงสามสิบ จังหวัดอุบลราชธานี เป็นบุตรของนายปาว นางพ่วย นารีวงศ์ 
        ได้ช่วยบิดาทำงานจนอายุครบอุปสมบทจึงได้อุปสมบทเมื่อวันที่ 6 พฤษภาคม พ.ศ. 2468 เมื่อบวชได้ 2 พรรษา 
        ท่านได้ฟังเทศน์จากศิษย์รูปหนึ่งของพระอาจารย์มั่น จึงเกิดเลื่อมใสออกติดตามหาพระอาจารย์มั่นจนพบท่านที่วัดบูรพา 
        จังหวัดอุบลราชธานี ท่านสอนให้ภาวนาว่า "พุทฺโธ ๆ" และได้ติดตามท่านออกจากจาริกไปตามที่ต่าง ๆ 
        แล้วญัตติในธรรมยุติกนิกายเมื่อวันที่ 27 พฤษภาคม พ.ศ. 2470 ณ มีพระปัญญาพิศาลเถร (หนู ฐิตปญฺโญ) วัดปทุมวนารามราชวรวิหาร จังหวัดพระนคร 
        เป็นพระอุปัชฌาย์ พระอาจารย์เพ็ง วัดใต้ จังหวัดอุบลฯ เป็นกรรมวาจาจารย์ หลังอุปสมบทแล้วท่านยังคงถือธุดงค์ข้อฉันมื้อเดียวและอยู่โคนไม้เป็นวัตรอย่างเคร่งครัด
        ท่านจาริกไปยังสถานที่ต่าง ๆ รวมถึงเขมร พม่า และอินเดีย จนมาสร้างสำนักสงฆ์แม่ชีขาว จ.สมุทรปราการ ต่อมาตั้งชื่อว่า “วัดอโศการาม” 
        เพื่อเป็นอนุสรณ์ถึงพระเจ้าอโศกมหาราช และได้ก่อสร้างเสนาสนะจนวัดรุ่งเรืองเป็นที่ศรัทธาของพุทธศาสนิกชนเรื่อยมาจนทุกวันนี้
        ท่านพ่อลีเริ่มอาพาธหนักตั้งแต่วันที่ 30 ธันวาคม พ.ศ. 2502 กระทั่งวันที่ 26 เมษายน พ.ศ. 2504 
        ท่านจึงถึงแก่มรณภาพรวมอายุ 54 ปี 334 วัน พรรษา 33
      </p>
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">ธรรมเทศนา ท่านพ่อลี ธมฺมธโร</span>
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