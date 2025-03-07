<template>
  <div class="container">
    <h1 class="welcome-text">พระครูสุทธิธรรมรังษี (เจี๊ยะ จุนฺโท)</h1>
    <div class="empty-box">
      <img src="/pu_Jia.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      
      <p class="birth-detail">
        หลวงปู่เจี๊ยะ จุนฺโท เป็นพระเถระในวงศ์พระกรรมฐานสายท่านพระอาจารย์มั่น ภูริทัตโต 
        ท่านเป็นที่รู้จักและยอมรับในเรื่องธรรมภายใน แม้ว่ากิริยาภายนอกของท่านจะดูสบาย ๆ ก็ตาม 
        ซึ่งอาจทำให้ผู้ที่นิยมวัตถุและมองแต่สิ่งสวยงามภายนอกมองข้ามปัญญาภายในของท่านไปได้
        <br><strong>ปฏิปทาและคุณธรรม</strong>
      </p>

      <p class="birth-detail">
      หลวงปู่เจี๊ยะมีปฏิปทาที่ตรงไปตรงมา คำสอนของท่านอาจดูเผ็ดร้อนและไม่ถูกใจบางคน 
      แต่เป็นความจริงที่เมื่อนำไปปฏิบัติแล้วเกิดผลดีต่อชีวิตจิตใจได้จริง 
      ท่านได้รับการเคารพจากศิษย์ท่านพระอาจารย์มั่นหลายรูป เช่น หลวงปู่ตื้อ อจลธมฺโม หลวงปู่ฝั้น อาจาโร หลวงปู่ชอบ ฐานสโม 
      หลวงปู่หลุย จนฺทสาโร หลวงปู่ขาว อนาลโย หลวงตามหาบัว ญาณสมปนฺโน ครูบาอาจารย์เหล่านี้มักแวะเยี่ยมและสนทนาธรรมกับท่านอยู่เสมอ 
      <br><strong>การอุปสมบท</strong>
      </p>

      <p class="birth-detail">
      ท่านอุปสมบทเมื่ออายุ 21 ปี ในวันที่ 11 กรกฎาคม พ.ศ. 2480 เวลา 16.19 น. ณ พัทธสีมาวัดจันทนาราม อำเภอเมือง จังหวัดจันทบุรี 
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%AA%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%A9%E0%B8%B5_(%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%B0_%E0%B8%88%E0%B8%B8%E0%B8%99%E0%B8%BA%E0%B9%82%E0%B8%97)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>
      
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">1. พระธรรมเทศนา โดย หลวงปู่เจี๊ยะ จุนฺโท ชุดที่ 1</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">2. พระธรรมเทศนา โดย หลวงปู่เจี๊ยะ จุนฺโท ชุดที่ 2</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

       <div class="dharma-list">
    <span class="dharma-title" @click="toggleList4">3. วิดีโอ หลวงปู่เจี๊ยะ จุนฺโท</span>
    <ul ref="dharmaList4" class="dharma-sublist">
      <li v-for="(item, index) in dharmaItems4" :key="index" class="dharma-item" @click="goToYouTube(item.youtubeUrl)">{{ item.title }}</li>
    </ul>
  </div>

  <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/17pb2qZXvkxr99ihSYtUCXFyjwNCZ8YDm?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา</span>
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

const dharmaList4 = ref(null);
let isListVisible4 = ref(false);


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
  { title: '20. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
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
  { title: '18. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems4 = ref([
  { title: 'วิดีโอที่ 1', youtubeUrl: 'https://www.youtube.com/watch?v=fv-qvyPkOtM' },
  

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

const toggleList4 = () => {
  isListVisible4.value = !isListVisible4.value;
  dharmaList4.value.style.display = isListVisible4.value ? 'block' : 'none';
};

const goToYouTube = (youtubeUrl) => {
  console.log(youtubeUrl);
  window.open(youtubeUrl, '_blank');
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
  background-color:rgb(168, 197, 195); /* สีพื้นหลัง LightSteelBlue */
  color: #333; /* สีตัวอักษรสีเทาเข้ม */ 
}

.dharma-item {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}

</style>