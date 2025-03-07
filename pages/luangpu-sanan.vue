<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่สนั่น รกฺขิตสีโล</h1>
    <div class="empty-box">
      <img src="/pu_sanan.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        หลวงปู่สนั่น รกฺขิตสีโล เป็นพระเถระในสายหลวงปู่มั่น ภูริทตฺโต ดำรงตำแหน่งเจ้าอาวาสวัดป่าสุขเกษมนิราศภัย อำเภอสว่างแดนดิน จังหวัดสกลนคร
      </p>

      <p class="birth-detail">
      หลวงปู่ได้รับการศึกษาในสำนักของครูบาอาจารย์ อาทิ หลวงปู่แหวน สุจิณฺโณ และหลวงปู่สิม พุทฺธาจาโร เป็นต้น หลวงปู่มีปฏิปทาชอบอดอาหารครั้งละหลาย ๆ วัน ท่านได้บรรลุธรรมขั้นสูงที่วัดถ้ำปากเปียง อำเภอเชียงดาว จังหวัดเชียงใหม่ การแสดงธรรมของท่านมีความลึกซึ้ง ฟังได้ทุกระดับ ทันตธาตุของท่านได้แปรสภาพเป็นพระธาตุตั้งแต่ขณะที่ท่านยังทรงขันธ์อยู่ หลังจากท่านมรณภาพแล้ว อัฐิธาตุของท่านก็ได้แปรสภาพเป็นพระธาตุ
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่สนั่น รกฺขิตสีโล</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1ewp0f5aOB9d-ZY5TR3izkU8Y1hQZmMVh?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '1. ทานศีลภาวนาคือทางสู่พระนิพพานA 8-1-43', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ทานศีลภาวนาคือทางสู่พระนิพพานB 8-1-43', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ผลแห่งทานศีลภาวนาA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ผลแห่งทานศีลภาวนาB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ผู้ภาวนาย่อมอยู่เป็นสุขA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ผู้ภาวนาย่อมอยู่เป็นสุขB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ทุกข์เพื่อพ้นทุกข์A', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ทุกข์เพื่อพ้นทุกข์B', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ผู้รู้คือนิพพานA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ผู้รู้คือนิพพานB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. โลกอยู่ได้ด้วยธรรมA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. โลกอยู่ได้ด้วยธรรมB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. หลงกายหลงจิตพาเวียนว่ายตายเกิดA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. หลงกายหลงจิตพาเวียนว่ายตายเกิดB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. บุญ-บาปคือสิ่งพาไปA.', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. บุญ-บาปคือสิ่งพาไปB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ภาวนาเพื่อละชั่วบำเพ็ญบุญA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ภาวนาเพื่อละชั่วบำเพ็ญบุญB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. จิตอันใดใจอันนั้นA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. จิตอันใดใจอันนั้นB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อานิสงค์เข้าพรรษาA 27-7-34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. อานิสงค์เข้าพรรษาB 27-7-34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. กายคตาสติภาวนาA', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. กายคตาสติภาวนาB', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ธรรมทั้งหลายเกิดจากเหตุA 27-6-28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ธรรมทั้งหลายเกิดจากเหตุB 27-6-28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
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