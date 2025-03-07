<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่หลวง กตปุญโญ</h1>
    <div class="empty-box">
      <img src="/pu_luang.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        หลวงปู่หลวง กตปุญโญ นามเดิม หลวง สอนวงค์ษา เกิดเมื่อวันที่ 27 กุมภาพันธ์ พ.ศ. 2464 ที่บ้านบัว ตำบลสว่าง อำเภอพรรณานิคม จังหวัดสกลนคร 
      </p>

      <p class="birth-detail">
      เมื่ออายุ 22 ปี ท่านได้อุปสมบทในสังกัดมหานิกาย เมื่อปี พ.ศ. 2485 ที่วัดศรีรัตนาราม อำเภอพรรณานิคม จังหวัดสกลนคร ได้รับฉายาว่า "ขันติพโล" 
      <br><strong>การศึกษาและการปฏิบัติธรรม</strong>
      </p>

      <p class="birth-detail">
      ท่านได้เดินทางธุดงค์ติดตามครูบาอาจารย์หลายรูป เช่น หลวงปู่ชอบ ฐานสโม, หลวงปู่สิม พุทฺธาจาโร, หลวงปู่แว่น ธนปาโล ไปในหลายจังหวัดเขตภาคเหนือ เพื่อฝึกปฏิบัติอบรมกัมมัฏฐานภาวนา 
      <strong>ในปี พ.ศ. 2506</strong> ท่านได้รับแต่งตั้งเป็นเจ้าอาวาสวัดป่าสำราญนิวาส และในปีเดียวกันเป็นเจ้าคณะตำบลเกาะคา
      <strong>ในปี พ.ศ. 2509</strong> ท่านได้รับสมณศักดิ์เป็นพระครูการุณยธรรมนิวาส
      <br><strong>ปฏิปทาและคุณธรรม</strong>  
      </p>

      <p class="birth-detail">
      หลวงปู่หลวงเป็นพระเถระผู้ใหญ่ที่มีปฏิปทาอันงดงาม เปี่ยมล้นด้วยเมตตาธรรม เป็นที่เคารพเลื่อมใสศรัทธาของสาธุชน 
      ท่านได้ดูแลรักษาพัฒนาวัดป่าสำราญนิวาสทั้งด้านศาสนสถานและศาสนวัตถุ ตลอดทั้งด้านจิตใจของสาธุชน เทศนาสั่งสอนอบรมศรัทธาญาติโยมทั้งทางใกล้และทางไกลให้ประพฤติปฏิบัติตั้งมั่นอยู่ในทาน ศีล สมาธิ ภาวนากัมมัฏฐานโดยไม่ย่อท้อต่อความยากลำบาก 
      <a href="https://www.web-pra.com/amulet/%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9B%E0%B8%B9%E0%B9%88%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%84%E0%B8%B5%E0%B8%9A%E0%B8%B8%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1(%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%9E%E0%B8%95)/history#google_vignette" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      <br><strong>มรณภาพ</strong>
      </p>

      <p class="birth-detail">
      วันที่ 6 มิถุนายน พ.ศ. 2546 ท่านได้เข้ารับการรักษาอาการอาพาธและมรณภาพในเวลาต่อมา
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่หลวง กตปุญฺโญ</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1H1Kj_lPZzZ9gacP3zeIRqWCKeJoQ3XZq?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  width: 150%;
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