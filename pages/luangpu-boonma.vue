<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่บุญมา คัมภีรธัมโม</h1>
    <div class="empty-box">
      <img src="/pu_boonma.jpg" class="image" />
      <h2 class="birth-title">ชาติกำเนิด</h2>
      <p class="birth-detail">
        หลวงปู่บุญมา คัมภีรธัมโม เป็นพระภิกษุฝ่ายอรัญวาสี ศิษย์ของหลวงปู่สิงห์ สหธัมโม และหลวงปู่ขาว อนาลโย ท่านเป็นที่เคารพศรัทธาของพุทธศาสนิกชนทั่วไป
      <br><strong>ชาติกำเนิด</strong>
      </p>

      <p class="birth-detail">
      หลวงปู่บุญมา คัมภีรธัมโม เกิดเมื่อวันจันทร์ ที่ 1 ตุลาคม พ.ศ. 2471 ตรงกับวันแรม 3 ค่ำ เดือน 10 ปีมะโรง 
      ภูมิลำเนา บ้านขาม หมู่ที่ 5 ตำบลค้อใต้ อำเภอสว่างแดนดิน จังหวัดสกลนคร 
      ชื่อบิดา นายเข่ง ธิอัมพร มารดาชื่อ นางชาดา ธิอัมพร 
      <br><strong>การอุปสมบท</strong>
      </p>

      <p class="birth-detail">
          อุปสมบท  เมื่อวันที่ 10 กรกฎาคม พ.ศ. 2494 ขณะอายุได้ 24 ปี ณ วัดโพธิสมภรณ์ ตำบลหมากแข้ง อำเภอเมืองอุดรธานี จังหวัดอุดรธานี 
          พระอุปัชฌาย์ พระธรรมเจดีย์ (จูม พันธุโล) วัดโพธิสมภรณ์ 
          พระกรรมวาจาจารย์  พระครูสมุห์สวัสดิ์
          <br><strong>ปฏิปทาและคุณธรรม</strong>
      </p>

      <p class="birth-detail">
        เคยศึกษาปฏิบัติธรรมกับหลวงปู่ขาว อนาลโย หลวงปู่ชอบ ฐานสโมหลวงปู่บุญมี ฐิตปุญโญ (พระราชญาณมุนี วัดป่าประชานิยม) หลวงปูคำดี ปภาโส และเป็นสหธรรมิก หลวงปู่ คำบุ ธัมมธโร ร่วมธุดงค์ปลีกวิเวกไปด้วยกันหลายจังหวัด   
        ในปี พ.ศ.2524 ได้จำพรรษา ณ วัดหนองกุง (วัดป่าสีห์พนม) จนถึงปัจจุบัน 
        เป็นพระอริยสงฆ์แห่งวัดป่าสีห์พนม จ.สกลนคร
        <br><strong>สถานที่สำคัญ</strong>
      </p>

      <p class="birth-detail">
      วัดป่าสีห์พนมประชาคม ต. บงใต้ อ. สว่างแดนดิน จ. สกลนคร 
      <a href="https://www.web-pra.com/amulet/%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9B%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B8%B8%E0%B8%8D%E0%B8%A1%E0%B8%B2-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B5%E0%B8%AB%E0%B9%8C%E0%B8%9E%E0%B8%99%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%84%E0%B8%A1/history" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา ของหลวงหลวงปู่บุญมา คัมภีรธัมโม</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1Br5qIYDhfw9gKE5ncazkpU_G4fP3_ly2?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '20. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
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