<template>
  <div class="container">
    <h1 class="welcome-text">พระอาจารย์ทองปาน จารุวัณโณ</h1>
    <div class="empty-box">
      <img src="/pu_thongpan.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        อาตมาภาพ พระอาจารย์ทองปาน จารุวัณโณ ชื่อเดิม ทองปาน สุริยะ วันที่ 2 กุมภาพันธ์ 2510 ที่บ้านหนองกุง 
        ต.บงเหนือ อ.สว่างแดนดิน จ.สกลนคร อุปสมบทเมื่อวันที่ 9 กรกฎาคม 2531 ณ วัดป่าลันติกาวาล อ.ไชยวาน
        จ.อุดรธานี มีพระครูวีระธัมมานุยุด เป็นพระอุปัชณาย์ พระอธิการคำเตียง สุมังคโส เป็นพระกรรมวาจารย์ พระอธิการสมศรี ธัมมกาโน เป็นพระอนุสาวนาจารย์  บวชแล้วได้ศึกษา รับวัตรปฎิบัติอยู่กับหลวงปู่บุญจันทร์ กมโล
        ณ วัดป่าสันติกาวาส และออกเที่ยววิเวทเป็นครั้งคราว เมื่อหลวงปู่บุญจันทร์ กมโล มรณภาพ ก็ออกเที่ยววิเวทไปหลายที่ สุดท้ายได้ไปทาง จ.ศรีสะเกษ และได้สร้างวัดขึ้นในปี พ.ศ. 2539 ชื่อวัดป่าสันตินิมิต
      <a href="https://palungjit.org/threads/%E0%B8%9C%E0%B8%A5%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%8C%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%B2%E0%B8%99-%E0%B8%88%E0%B8%B2%E0%B8%A3%E0%B8%B8%E0%B8%A7%E0%B8%B1%E0%B8%93%E0%B9%82%E0%B8%93%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4.295344/" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      
      </p>
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา พระอาจารย์ทองปาน จารุวัณโณ</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1DsBYUfV4jicRQbgiuYRYhDBPJjI6_qyR?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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