<template>
  <div class="container">
    <h1 class="welcome-text">พระโพธิญาณเถร (ชา สุภทฺโท)</h1>
    <div class="empty-box">
      <img src="/pu_cha.jpg" class="image" />
      <h2 class="birth-title">ประวัติโดยย่อของพระโพธิญาณเถร (ชา สุภทฺโท)</h2>
      <p class="birth-detail">
        พระโพธิญาณเถร หรือ หลวงพ่อชา ฉายา สุภทฺโท (17 มิถุนายน พ.ศ. 2461 – 16 มกราคม พ.ศ. 2535) 
        ตรงกับ วันจันทร์ขึ้น 9 ค่ำ เดือน 8 ปีมะเมีย ณ บ้านจิกก่อ หมู่ที่ 9 ตำบลธาตุ อำเภอวารินชำราบ จังหวัดอุบลราชธานี บิดาชื่อนายมา ช่วงโชติ มารดาชื่อ นางพิมพ์ ช่วงโชติ 
        มีพี่น้องร่วมบิดามารดาเดียวกันจำนวน 10 คน
        หลวงปู่ชา สุภทฺโท ขณะมีชีวิตอยู่ท่านได้อุทิศชีวิตเพื่อการปฏิบัติธรรมและเผยแผ่พุทธศาสนา ทั้งแก่ชาวไทยและชาวต่างประเทศ 
        ซึ่งบังเกิดผลทำให้ผลงานที่เป็นประโยชน์อเนกอนันต์แก่พระศาสนา ทั้งที่เป็นพระธรรมเทศนา และสำนักปฏิบัติธรรมในนามวัดสาขาวัดหนองป่าพงมากมาย 
        ซึ่งแม้ท่านจะมรณภาพไปนานแล้ว แต่ศิษยานุศิษย์ของท่านก็ยังคงรักษาแนวทางปฏิบัติธรรมที่ท่านได้สั่งสอนไว้จนถึงปัจจุบัน
        <br><strong>สู่การปฏิบัติธรรม</strong>
      </p>

      <p class="birth-detail">
      เสร็จภารกิจการศึกษา ประกอบกับเกิดธรรมสังเวชคราวโยมบิดาเสียชีวิต จึงหันมาสู่การปฏิบัติธรรม 
      โดยออกธุดงค์และศึกษาหาแนวทางปฏิบัติในสำนักต่าง ๆ ผ่านอาจารย์ก็มากมาย เช่น ที่สำนักของหลวงพ่อเภา วัดเขาวงกฏ จังหวัดลพบุรี 
      และพระอาจารย์ชาวกัมพูชาที่เป็นพระธุดงค์ซึ่งได้พบกันที่วัดเขาวงกฏ หลวงปู่กินรี อาจารย์คำดี หลวงปู่ทองรัตน์ พระอาจารย์มั่น เป็นต้น 
      พออินทรีย์แก่กล้าแล้วก็ออกธุดงค์ปฏิบัติธรรมต่อไปเรื่อย ๆ โดยยังดำรงสมณเพศเป็นพระมหานิกายอยู่ตลอดเวลา 
      จนในที่สุดได้รับอาราธนาจากโยมมารดาและพี่ชาย เพื่อกลับไปโปรดสัตว์ที่บ้านเกิด เมื่อ พ.ศ. 2497 ก็ได้ดำเนินการสร้างวัดป่าขึ้น 
      ซึ่งเรารู้จักในปัจจุบัน คือ วัดหนองป่าพง และท่านดำรงตำแหน่งเจ้าอาวาสวัดนี้มาโดยตลอด 
      และถึงแก่มรณภาพเมื่อ 16 มกราคม พ.ศ. 2535 เวลา 05.20 น. ที่วัดหนองป่าพง อย่างสงบท่ามกลางธรรมสังเวชของศิษยานุศิษย์จากทุกสารทิศ
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B9%80%E0%B8%96%E0%B8%A3_(%E0%B8%8A%E0%B8%B2_%E0%B8%AA%E0%B8%B8%E0%B8%A0%E0%B8%97%E0%B8%BA%E0%B9%82%E0%B8%97)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>
      
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">1. พระธรรมเทศนา โดย หลวงปู่ชา สุภทฺโท  ชุดที่ 1</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">2. พระธรรมเทศนา โดย หลวงปู่ชา สุภทฺโท  ชุดที่ 2</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1zRI4w-1nX5gP8w-vjPcNjuTer0Q3Eye6?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
      </div>

    </div>
  </div>
  <audio ref="audioPlayer" controls style="display: none;"></audio>
</template>

<script setup>

import { ref } from 'vue';

const dharmaList2 = ref(null);
let isListVisible2 = ref(false);

const dharmaList3 = ref(null);
let isListVisible3 = ref(false);


/* ประวัติหลวงพ่อพุธ ฐานิโย */

const dharmaItems2 = ref([
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

/* ทางพ้นทุกข์ */

const dharmaItems3 = ref([
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

]);

/* หัวใจนักภาวนา */



const toggleList2 = () => {
  isListVisible2.value = !isListVisible2.value;
  dharmaList2.value.style.display = isListVisible2.value ? 'block' : 'none';
};

const toggleList3 = () => {
  isListVisible3.value = !isListVisible3.value;
  dharmaList3.value.style.display = isListVisible3.value ? 'block' : 'none';
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
  top: 50%;
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