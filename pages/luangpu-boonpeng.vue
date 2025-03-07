<template>
  <div class="container">
    <h1 class="welcome-text">พระอาจารย์บุญเพ็ง กัปปโก</h1>
    <div class="empty-box">
      <img src="/pu_boonpeng.jpg" class="image" />
      <h2 class="birth-title">ประวัติโดยย่อของพระอาจารย์บุญเพ็ง กัปปโก</h2>
      <p class="birth-detail">
        พระโสภณวิสุทธิคุณ นามเดิม บุญเพ็ง เหล่าหงษา ฉายา กฺปปโก เป็นพระภิกษุฝ่ายวิปัสสนาธุระ สังกัดคณะสงฆ์ธรรมยุติกนิกาย 
        พระกรรมฐานสายพระป่าในประเทศไทยของหลวงปู่มั่น ภูริทตฺโต อดีตเจ้าอาวาสวัดป่า
      <br><strong>วิเวกธรรม</strong>
      </p>

      <p class="birth-detail">
      หลวงปู่บุญเพ็งเป็นที่รู้จักในฐานะพระนักปฏิบัติวิปัสสนากรรมฐานผู้มีศีลาจารวัตรอันงดงาม และเป็นพระนักเทศนาโวหารผู้มีปฏิภาณไหวพริบดี เทศนาอบรมจิตภาวนาวิปัสสนากรรมฐาน นอกจากนี้ 
      ท่านยังเป็นพระนักพัฒนารับอุปการะการสร้างและปฏิสังขรณ์เสนาสนะของวัดต่างๆ บำเพ็ญคุณูปการแก่คณะสงฆ์และเมตตาเกื้อกูลแก่สังคมและประเทศชาติ
      <br><strong>อุปสมบท.</strong>
      </p>

      <p class="birth-detail">
      เมื่อท่านอายุ 21 ปี ได้อุปสมบทในวันที่ 3 พฤษภาคม พ.ศ. 2492 ณ วัดศรีจันทร์ อำเภอเมือง จังหวัดขอนแก่น โดยมีพระพิศาลสารคุณ (อินทร์ ถิรเสวี) ต่อมาคือ พระเทพบัณฑิต 
      เป็นพระอุปัชฌาย์ พระครูคัมภีรนิเทศเป็นพระกรรมวาจาจารย์ และพระมหาสุพจน์เป็นพระอนุสาวนาจารย์ โดยได้ฉายา "กปฺปโก" แปลว่า "ผู้สำเร็จ"
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%AA%E0%B8%A0%E0%B8%93%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%84%E0%B8%B8%E0%B8%93_(%E0%B8%9A%E0%B8%B8%E0%B8%8D%E0%B9%80%E0%B8%9E%E0%B9%87%E0%B8%87_%E0%B8%81%E0%B8%9B%E0%B8%BA%E0%B8%9B%E0%B9%82%E0%B8%81)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
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
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1RNu7hX_e3pYUeTxpRl8R8L76hOu3eDbb?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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