<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่หลวง กตปุญโญ</h1>
    <div class="empty-box">
      <img src="/pu_luang.jpg" class="image" />
      <h2 class="birth-title">ประวัติหลวงปู่หลวง กตปุญฺโญ</h2>
      <p class="birth-detail">
        พระครูการุณยธรรมนิวาส (หลวงปู่หลวง กตปุญฺโญ)
        วัดป่าสำราญนิวาส จังหวัดลำปางหลวงปู่หลวง กตปุญโญ ท่านเป็นญาติกับ
        หลวงปู่สิม พุทธจาโร วัดถ้ำผาปล่อง อ.เชียงดาว จ.เชียงใหม่และหลวงปู่แว่น ธนปาโล วัดถ้ำพระสบาย อ.แม่ทะ จ.ลำปาง 
        หลวงปู่หลวงเป็นพระนักปฏิบัติท่านออกธุดงค์กรรมฐานไปหลาย จังหวัดทั่วทุกภาคของประเทศไทย ท่านได้ถวายตัวเป็นศิษย์ 
        ของหลวงปู่มั่น ภูริทัตโต หลวงปู่ฝั้น อาจาโร และหลวงปู่เทสก์ เทสรังษี หลวงปู่หลวงท่านเป็นผู้ทรงศีลตามรอยพระพุทธบาท 
        ขององค์สมเด็จพระสัมมาสัมพุทธเจ้า ที่ควรค่ายิ่งแห่งความเคารพบูชาของพุทธศาสนิกชนชาวพุทธทั้งหลาย
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่หลวง กตปุญฺโญ</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1H1Kj_lPZzZ9gacP3zeIRqWCKeJoQ3XZq?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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