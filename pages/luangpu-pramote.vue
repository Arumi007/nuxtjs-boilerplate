<template>
  <div class="container">
    <h1 class="welcome-text">หลวงพ่อปราโมทย์ ปาโมชฺโช</h1>
    <div class="empty-box">
      <img src="/pu_pramote.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        เกิด พ.ศ. ๒๔๙๕ ณ บ้านดอกไม้ ต.บ้านบาตร อ.ป้อมปราบศัตรูพ่าย จังหวัดพระนคร
        <br><strong>การศึกษา</strong>
      </p>

      <p class="birth-detail">
      ชั้นประถมศึกษาตอนต้น ณ โรงเรียนสุริยวงศ์, ชั้นประถมศึกษาตอนปลาย ณ โรงเรียนวัดพลับพลาชัย, ชั้นมัธยมศึกษา ณ โรงเรียนโยธินบูรณะ, ปริญญาตรีและโท ณ คณะรัฐศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย, สจว.รุ่นที่ ๕๗
      <br><strong>การทำงาน</strong>
      </p>

      <p class="birth-detail">
      ลูกจ้าง กอ.รมน. (๒๕๑๘-๒๕๒๑), เจ้าหน้าที่วิเคราะห์นโยบายและแผน ๓-๗ สำนักงานสภาความมั่นคงแห่งชาติ (๒๕๒๑-๒๕๓๕), ผู้ชำนาญการ ๘-๑๐ องค์การโทรศัพท์แห่งประเทศไทย (๒๕๓๕-๒๕๔๔)
      <br><strong>การศึกษาธรรม</strong>
      </p>

      <p class="birth-detail">
      นักธรรมตรี, ศึกษาอานาปานสติตามคำสอนของท่านพ่อลี ธัมมธโรตั้งแต่ ๒๕๐๒, ศึกษากรรมฐานจากครูบาอาจารย์สายวัดป่าหลายรูป 
      ตั้งแต่ ๒๕๒๕​ อาทิ หลวงปู่ดูลย์ อตุโล หลวงพ่อพุธ ฐานิโย หลวงปูเทสก์ เทสรังสี หลวงปู่สิม พุทธาจาโร หลวงปู่บุญจันทร์ จันทวโร 
      และหลวงปู่สุวัจน์ สุวโจ เป็นต้น, อุปสมบทครั้งแรกในสมัยที่ยังเป็นนักศึกษา ณ วัดชลประทานรังสฤษฎ์ จ.นนทบุรี โดยมีหลวงพ่อปัญญา 
      นันทภิกขุเป็นพระอุปัชฌาย์, อุปสมบทครั้งที่ ๒ ณ วัดบูรพาราม จ.สุรินทร์ (๓๐ มิถุนายน ๒๕๔๔) โดยมีพระราชวรคุณ (สมศักดิ์ ปณฑิโต) เป็นพระอุปัชฌาย์
      <br><strong>สถานที่จำพรรษา</strong>
      </p>

      <p class="birth-detail">
      ๕ พรรษาแรกจำพรรษาอยู่ ณ สวนโพธิญาณอรัญวาสี อ.ท่าม่วง จ.กาญจนบุรี ของท่านพระอาจารย์สุจินต์ สุจิณโณ และพรรษาที่ ๖ เป็นต้นมา ณ สวนสันติธรรม อ.ศรีราชา จ.ชลบุรี โดยความเห็นชอบของพระอุปัชฌาย์
      <a href="https://www.dhamma.com/biography-th/" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. เริ่มต้นการปฏิบัติภาวนา จนถึง วิถีทางแห่งความรู้แจ้ง</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>
      
      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1oGynQNqbWGI8-VwsAd9YQsimeP14tZtv?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '21. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
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