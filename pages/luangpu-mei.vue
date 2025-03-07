<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่หนูเมย สิริธโร</h1>
    <div class="empty-box">
      <img src="/pu_mei.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        วันนี้วันที่ ๕ กรกฎาคม​ ๒๕๖​๗ เป็นวันคล้ายวันเกิดหลวงปู่หนูเมย สิริธโร 
        วัดป่าอุดมสังฆกิจ(วัดป่าท่าศรีไคล) ตำบลธาตุ อำเภอวานรนิวาส จังหวัดสกลนคร เจริญอายุวัฒนมงคลครบ ๘๔ ปี หลวงปู่หนูเมย สิริธโร 
        ท่านเป็นพระน้องชายแท้ๆ ของหลวงปู่เนย สมจิตฺโต หลวงปู่หนูเมย ท่านเป็นพระผู้มีปฏิปทางดงาม เป็นผู้เคร่งครัดในพระธรรมวินัย 
        เป็นผู้ทรงไว้ซึ่งสิริคือ ความงดงามความดี ธรรมะที่ท่านเทศนาสั่งสอนลูกศิษย์ในหลายๆ โอกาส หากเพียงแต่ได้น้อมนําเข้ามาสู่ ตัวเองมาพิจารณา 
        จะพบว่า ไม่ได้ห่างไกลไปจากชีวิตประจําวันเลย หลวงปู่พร่ำสอนเสมอว่า “กินง่าย อยู่ง่าย แต่อย่าเป็นคนมักง่าย” , “นิ่มนวล แน่นอน และหนักแน่น” 
        , ให้มี “นโม” อยู่ในหัวใจ นโมคือความนอบน้อม นอบน้อมต่อพระพุทธ นอบน้อมต่อพระธรรมวินัย นอบน้อมต่อพระสงฆ์ผู้ปฏิบัติดี ปฏิบัติชอบ และนอบน้อมต่อพ่อแม่บุพการีและผู้มีพระคุณ
      </p>
      
      <p class="birth-detail">
      <strong>อุปสมบท</strong> เมื่อวันที่ ๕ พฤษภาคม ๒๕๐๖ ที่วัดป่าสุนทราราม (วัดบ้านกุดแห่) อำเภอเลิงนกทา จังหวัดอุบลราชธานี (ปัจจุบัน คือ จังหวัดยโสธร) โดยมีพระอุปัชฌาย์ คือ พระครูภัทรคุณาธาร (บุญ โกสโส) ป.ธ.๔ วัดพรหมวิหาร และพระอาจารย์สิงห์ทอง ปภากโร เป็นพระกรรมวาจาจารย์
      </p>
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่หนูเมย สิริธโร</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1OYYxzatrhvgPJ80W4-EyKtnJ1jebE5jJ?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  width: 150%;
}

.empty-box {
  position: absolute;
  top: 52%;
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
  width: 25%;
  height: 25%;
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