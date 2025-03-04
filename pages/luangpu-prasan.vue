<template>
  <div class="container">
    <h1 class="welcome-text">พระครูพิศาลปัญญาคม (หลวงปู่ประสาร ปัญญาพโล)</h1>
    <div class="empty-box">
      <img src="/pu_prasan.jpg" class="image" />
      <h2 class="birth-title">ประวัติ</h2>
      <p class="birth-detail">
        หลวงปู่ประสาร ปัญญาพโล นามเดิมท่านชื่อ ประสาร นามสกุล รำไพ เกิดเมื่อวันที่ ๔ กันยายน พ.ศ.๒๔๗๓ 
        ตรงกับวันพฤหัสบดี ขึ้น ๑๒ ค่ำ เดือน ๑๐ ณ บ้านหนองดินดำ ตำบลตาลโกน อำเภอสว่างแดนดิน จังหวัดสกลนคร
        บิดาท่านชื่อ นายสอน รำไพ มารดาท่านชื่อ นางชอม รำไพ ท่านเป็นคนมานะบากบั่น หนักเอาเบาสู้ ช่วยการช่วยงานบิดามารดา 
        จนท่านทั้งสองไว้วางใจ ขณะที่ท่านอยู่ในวัยหนุ่ม น้องชายของท่านที่บวชเป็นสามเณรเกิดล้มป่วยและมรณภาพลง หลวงปู่หอม 
        ซึ่งเป็นศิษย์ของหลวงปู่พรหม จิรปุญฺโญ ที่วัดป่าสามัคคีบำเพ็ญผล บ้านนาเตียง จังหวัดสกลนคร จึงมาทำพิธีฌาปนกิจ 
        และได้ชักชวนท่านออกบวช ด้วยใจที่ใฝ่ในทางธรรม จึงออกปากขอโยมพ่อ โยมแม่ ออกบวช ก็เป็นที่น่ายินดีกับทุกคนที่ได้รับฟังเวลานั้น 
        ช่วงนั้นเป็นเดือน ๑๑ เป็นช่วงเก็บเกี่ยวข้าว พอตอนเย็น ท่านกับเพื่อน ๆ ที่พร้อมจะบวชด้วยกันทั้ง ๔ คน 
        ก็มาฝึกขานนาคกับหลวงปู่หอมหลวงปู่ประสาร ปัญญาพโล ท่านอุปสมบทเมื่ออายุ ๒๐ ปี ตรงกับวันที่ ๒๑ ธันวาคม พ.ศ.๒๔๙๓ 
        ท่านได้อุปสมบทเป็นพระภิกษุในทางพระพุทธศาสนา ณ ณ สิมกลางน้ำ 
        วัดป่าบ้านหนองดินดำ (ภายหลังเปลี่ยนเป็น วัดป่าคามวาสี) ตำบลตาลโกน อำเภอสว่างแดนดิน จังหวัดสกลนคร 
        โดยมี พระอธิการพุฒิ ยโสธโร วัดคามวาสี เป็นพระอุปัชฌาย์ (ภายหลังได้รับสมณศักดิ์ เป็นพระครูพุทธิวาคม) 
        เป็นอุปัชฌาย์ หลวงปู่นนท์ โกวิโท เป็นพระกรรมวาจาจารย์ หลวงปู่หอม เป็นพระอนุสาวนาจารย์
      </p>
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่ประสาร ปัญญาพโล</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/12c6UgSUDBHBqsnK4zsquhthVuMPCXfE8?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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