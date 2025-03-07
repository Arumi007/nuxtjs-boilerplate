<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่ฝั้น อาจาโร</h1>
    <div class="empty-box">
      <img src="/pu_fun.jpg" class="image" />
      <h2 class="birth-title">ชาติกำเนิด</h2>
      <p class="birth-detail">
              เกิดเมื่อวันอาทิตย์ ขึ้น 14 ค่ำ เดือน 9 ปีกุน ตรงกับวันที่ 20 สิงหาคม พ.ศ. 2442 ที่บ้านม่วงไข่ ตำบลพรรณา อำเภอพรรณานิคม จังหวัดสกลนคร 
      เป็นบุตรคนที่ 5 ของเจ้าไชยกุมาร (เม้า) ในตระกูล "สุวรรณรงค์" อดีตเจ้าเมืองพรรณานิคม มารดาของท่านชื่อ นางนุ้ย 
      พระอาจารย์ฝั้น ครั้งวัยเยาว์ มีความประพฤติเรียบร้อย นิสัยโอบอ้อมอารี ขยันหมั่นเพียร อดทนต่ออุปสรรค ช่วยเหลือกิจการงานของบิดามารดา โดยไม่ย่อท้อต่อความยากลำบาก 
      <br><strong>อุปสมบท</strong>
      </p>

      <p class="birth-detail">
            ครั้นอายุได้ 20 ปี ท่านได้อุปสมบทเป็นพระภิกษุ ณ วัดสิทธิบังคม ตำบลไร่ อำเภอพรรณานิคม จังหวัดสกลนคร โดยมีพระครูป้องเป็นอุปัชฌาย์ และเป็นผู้สอนการเจริญกรรมฐานตลอดพรรษาแรก 
      ออกพรรษาแล้ว ท่านกลับมาพำนักที่วัดโพนทอง ซึ่งมีพระครูสกลสมณกิจเป็นเจ้าอาวาส และวิปัสสนาจารย์ นำพระภิกษุฝั้น อาจาโร ออกธุดงค์และเจริญภาวนา 
      ในช่วงชีวิตบรรพชิตของหลวงปู่ ท่านได้ธุดงค์ไปยังสถานที่ต่างๆ เพื่อเผยแผ่พระธรรมคำสอน จนกระทั่งเป็นที่นับถือศรัทธาของญาติโยมจำนวนมาก และได้รับการยกย่องเป็น "อริยสงฆ์" องค์หนึ่ง 
      ท่านมีศิษย์ที่เป็นพระผู้ปฏิบัติดีปฏิบัติชอบหลายรูป เช่น พระโพธิธรรมาจารย์เถร (สุวัจน์ สุวโจ), สมเด็จพระอริยวงศาคตญาณ สมเด็จพระสังฆราช (อัมพร อมฺพโร) เป็นต้น
      <a href="https://th.wikipedia.org/wiki/%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9B%E0%B8%B9%E0%B9%88%E0%B8%9D%E0%B8%B1%E0%B9%89%E0%B8%99_%E0%B8%AD%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B9%82%E0%B8%A3" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่ฝั้น อาจาโร</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1VoaArJMMHRQd9mimdb4fDq7A6y6zNwvO?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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