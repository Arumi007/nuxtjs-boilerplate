<template>
  <div class="container">
    <h1 class="welcome-text">ชีวประวัติหลวงปู่ขาว อนาลโย</h1>
    <div class="empty-box">
      <img src="/pu_kao.jpg" class="image" />
      <h2 class="birth-title">ชาติกำเนิด</h2>
      <p class="birth-detail">
        หลวงปู่ขาว อนาลโย เป็นพระภิกษุ คณะธรรมยุติกนิกาย ท่านได้รับความเคารพนับถือจากพุทธศาสนิกชนในฐานะพระนักปฏิบัติวิปัสสนากรรม
        <br><strong>อุปสมบท</strong>
      </p>

      <p class="birth-detail">
      ท่านได้อุปสมบทเป็นพระภิกษุเมื่อวันที่ 2 พฤษภาคม พ.ศ. 2462 ที่วัดโพธิ์ศรี (ปัจจุบันคือวัดบ่อชะเนง) บ้านบ่อชะเนง ตำบลหนองแก้ว อำเภอหัวตะพาน จังหวัดอำนาจเจริญ 
      สังกัดคณะมหานิกาย มีท่านพระครูพุฒิศักดิ์ฯ เจ้าคณะอำเภออำนาจเจริญ เป็นพระอุปัชฌาย์ มีพระอาจารย์บุญจันทร์ฯ เป็นพระกรรมวาจาจารย์ และจำพรรษาที่วัดโพธิ์ศรี 6 พรรษา
      </p>

      <p class="birth-detail">
      ต่อมาหลวงปู่ขาวเกิดความศรัทธาในปฏิปทาของพระอาจารย์มั่น ภูริทตฺโต จึงได้ญัตติกรรมเป็นพระธรรมยุติกนิกายเมื่อ พ.ศ. 2468 ขณะมีอายุได้ 37 ปี ณ พัทธสีมาวัดโพธิสมภรณ์ จังหวัดอุดรธานี 
      มีพระอุบาลีคุณูปมาจารย์ (จันทร์ สิริจนฺโท) เป็นประธานพิธี พระธรรมเจดีย์ (จูม พนฺธุโล) ครั้งดำรงสมณศักดิ์เป็นพระราชาคณะที่ พระชิโนวาทธำรง เป็นพระอุปัชฌาย์ พระอาจารย์บุญ ปญฺญาวุฑโฒ 
      เป็นพระกรรมวาจาจารย์ าน สายของพระอาจารย์หลวงปู่มั่น ภูริทัตโต
      <a href="https://th.wikipedia.org/wiki/%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9B%E0%B8%B9%E0%B9%88%E0%B8%82%E0%B8%B2%E0%B8%A7_%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%A5%E0%B9%82%E0%B8%A2" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
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