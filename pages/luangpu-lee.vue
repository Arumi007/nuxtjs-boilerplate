<template>
  <div class="container">
    <h1 class="welcome-text">ท่านพ่อลี ธมฺมธโร</h1>
    <div class="empty-box">
      <img src="/pu_lee.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
      พระสุทธิธรรมรังสี คัมภีรเมธาจารย์ หรือ ท่านพ่อลี นามเดิม ชาลี นารีวงศ์ ฉายา ธมฺมธโร เป็นพระวิปัสสนาจารย์สายพระป่าในประเทศไทย ศิษย์พระอาจารย์มั่น ภูริทัตโต และอดีตเจ้าอาวาสวัดอโศการาม (จังหวัดสมุทรปราการ)
      <br><strong>ประวัติ</strong>
      </p>
      <p class="birth-detail">
      ท่านพ่อลี มีนามเดิมว่า ชาลี นารีวงศ์ เกิดเมื่อวันที่ 31 มกราคม พ.ศ. 2449 (นับแบบปัจจุบันเป็นปี พ.ศ. 2450) 
      ที่ตำบลยางโยภาพ อำเภอม่วงสามสิบ จังหวัดอุบลราชธานี เป็นบุตรของนายปาว นางพ่วย นารีวงศ์ 
      ได้ช่วยบิดาทำงานจนอายุครบอุปสมบทจึงได้อุปสมบทเมื่อวันที่ 6 พฤษภาคม พ.ศ. 2468 เมื่อบวชได้ 2 พรรษา 
      ท่านได้ฟังเทศน์จากศิษย์รูปหนึ่งของพระอาจารย์มั่น จึงเกิดเลื่อมใสออกติดตามหาพระอาจารย์มั่นจนพบท่านที่วัดบูรพา จังหวัดอุบลราชธานี 
      ท่านสอนให้ภาวนาว่า "พุทฺโธ ๆ" และได้ติดตามท่านออกจาริกไปตามที่ต่าง ๆ แล้วญัตติในธรรมยุติกนิกายเมื่อวันที่ 27 พฤษภาคม พ.ศ. 2470 ณ 
      มีพระปัญญาพิศาลเถร (หนู ฐิตปญฺโญ) วัดปทุมวนารามราชวรวิหาร จังหวัดพระนคร เป็นพระอุปัชฌาย์ พระอาจารย์เพ็ง วัดใต้ จังหวัดอุบลฯ 
      เป็นกรรมวาจาจารย์ หลังอุปสมบทแล้วท่านยังคงถือธุดงค์ข้อฉันมื้อเดียวและอยู่โคนไม้เป็นวัตรอย่างเคร่งครัด
      </p>

      <p class="birth-detail">
      ท่านจาริกไปยังสถานที่ต่าง ๆ รวมถึงเขมร พม่า และอินเดีย จนมาสร้างสำนักสงฆ์แม่ชีขาว จังหวัดสมุทรปราการ ต่อมาตั้งชื่อว่า “วัดอโศการาม” 
      เพื่อเป็นอนุสรณ์ถึงพระเจ้าอโศกมหาราช และได้ก่อสร้างเสนาสนะจนวัดรุ่งเรืองเป็นที่ศรัทธาของพุทธศาสนิกชนเรื่อยมาจนทุกวันนี้
      </p>

      <p class="birth-detail">
      ท่านพ่อลีเริ่มอาพาธหนักตั้งแต่วันที่ 30 ธันวาคม พ.ศ. 2502 กระทั่งวันที่ 26 เมษายน พ.ศ. 2504 ท่านจึงถึงแก่มรณภาพ รวมอายุ 54 ปี 334 วัน พรรษา 33
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5_(%E0%B8%A5%E0%B8%B5_%E0%B8%98%E0%B8%A1%E0%B8%BA%E0%B8%A1%E0%B8%98%E0%B9%82%E0%B8%A3)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>


      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา ท่านพ่อลี ธมฺมธโร</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1rxhQ8lTYjtBLn9scG-JProuv4QhQ6KNI?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  width: 30%;
  height: 30%;
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