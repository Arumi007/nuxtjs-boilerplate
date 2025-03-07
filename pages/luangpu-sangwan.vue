<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่สังวาลย์ เขมโก</h1>
    <div class="empty-box">
      <img src="/pu_sangwan.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        นาม เดิมท่านคือสังวาลย์ นามสกุล จันทร์เรือง เกิดเมื่อ จันทร์ เดือน 4 ปีมะโรง (2459) ที่บ้านหนองผักนาก สามชุก สุพรรณบุรี บรรพบุรุษท่านมีอาชีพทำนา แต่โยมบิดาท่านเป็นผู้ที่ได้นำภาพยนตร์มาฉายในอำเภอสามชุกเป็นคนแรก

        <br><strong>อุปสมบท</strong><br>
      </p>
      <p class="birth-detail">
      เมื่ออายุครบบวช แต่ด้วยความที่ท่านเป็นคนไม่รู้หนังสือ บทสวดมนต์บางบท ท่านต้องจำจากที่แม่ชีสวดกัน ท่านจึงสวดมนต์ได้แค่อิติปิโส ฯ พาหุง ฯ แม้แต่นะโมก็ต้องต่อเอา ด้วยเหตุนี้ท่านจึงต้องลาสิกขาบท ทั้งๆ ที่ไม่อยากจะลาเลย
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ประวัติหลวงปู่สังวารล์ เขมโก</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">2. ธรรมะชำระจิต</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">3. ธรรมะเพื่อการปฏิบัติ</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1z3_9051fAT03P6dC0uCW2KnP82LxwdDi?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
      </div>

    </div>
  </div>
  <audio ref="audioPlayer" controls style="display: none;"></audio>
</template>

<script setup>

import { ref } from 'vue';

const dharmaList = ref(null);
let isListVisible = ref(false);

const dharmaList2 = ref(null);
let isListVisible2 = ref(false);

const dharmaList3 = ref(null);
let isListVisible3 = ref(false);


const dharmaItems = ref([
  { title: '1. ประวัติหลวงปู่สังวาลย์ เขมโก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

  
]);

const dharmaItems2 = ref([
  { title: '1. เกิดแก่เจ็บตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. จิตตวิถี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. จิตตนิมิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ที่พึ่งอันเกษม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. มุทิตากรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. มุสาธรณีสูบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ความอยากปิดบังทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ภาวนากันตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ผู้ไม่ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ธรรมะที่ลานธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. มาตาผู้รู้ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. รู้...เฉย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. หลวงปู่ฝากไว้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เมตตาเป็นอาวุธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ธรรมะปฏิสันถาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เกาะศพข้ามฝั่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. เมตตาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. มีครูดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. รู้จักประมาณในอาหาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. รู้อด รู้ทน พ้นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ทำจริง รู้จริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. รวมธรรมที่เรือนไท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ทำใจให้ไปนิพพาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. จิตตวิเวกใหม่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. มรรค 4 ผล 4', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },


  
]);

const dharmaItems3 = ref([
  { title: '1. ผู้มีจิตสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. กรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ทั้งรู้ทั้งเห็น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. อบรมสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. จิตตภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. แนะนำผู้ปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. รู้ตามความเป็นจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ฝึกจิตบ่อยๆ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. รู้เรื่องธรรมะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ออกจากทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ใจสว่างทางสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. โลภะจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เสกให้เป็นพระ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. แสวงหาความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ขันธ์วิมุตติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. สติปัฎฐาน 4', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ละขันธ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ธรรมที่ควรรู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. เกิด แก่ เจ็บ ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. มาตาผู้รู้ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. วินัย-โทษของกาม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. หนทางพระนิพพาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

  
]);



const toggleList = () => {
  isListVisible.value = !isListVisible.value;
  dharmaList.value.style.display = isListVisible.value ? 'block' : 'none';
};

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
  width: 25%;
  height: 20%;
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