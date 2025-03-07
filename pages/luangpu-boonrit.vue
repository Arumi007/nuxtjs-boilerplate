<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่บุญฤทธิ์ ปัณฑิโต</h1>
    <div class="empty-box">
      <img src="/pu_boonrit.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      
      <p class="birth-detail">
        หลวงปู่บุญฤทธิ์ ปัณฑิโต เป็นพระภิกษุฝ่ายอรัญวาสี ศิษย์ของหลวงปู่ชอบ ฐานสโม 
        ท่านเป็นที่เคารพศรัทธาของพุทธศาสนิกชนทั่วไป ทั้งชาวไทยและชาวต่างชาติ
        <br><strong>ชาติกำเนิด</strong>
      </p>

      <p class="birth-detail">
                หลวงปู่บุญฤทธิ์ ปัณฑิโต มีนามเดิมว่า บุญฤทธิ์ จันทรสมบูรณ์ 
          เกิดในช่วงสงครามโลกครั้งที่ 1 เดือนกุมภาพันธ์ พ.ศ. 2458 ที่บ้านท่าอิฐ ตำบลท่าอิฐ อำเภอพิชัยดาบหัก จังหวัดอุตรดิตถ์ 
          เป็นบุตรชายของหลวงพินิจจินเภท และคุณแส จันทรสมบูรณ์ 
          <br><strong>การศึกษาและการทำงาน</strong>
      </p>

      <p class="birth-detail">
                ในอดีตท่านเป็นนักศึกษาจบปริญญาจากต่างประเทศ 
          เป็นข้าราชการหนุ่มที่มีอนาคตสดใส 
          <br><strong>การอุปสมบท</strong>
      </p>

      <p class="birth-detail">
      ด้วยความเลื่อมใสปฏิปทาพระป่าสายหลวงปู่มั่น ภูริทัตโต ท่านจึงลาออกจากราชการแล้วออกบวชและปฏิบัติธรรมแบบถวายชีวิตต่อพระศาสนา 
      <br><strong>ปฏิปทาและคุณธรรม</strong>
      </p>

      <p class="birth-detail">
          ออกธุดงค์อยู่ตามป่าตามเขาโดยตลอด 
          เป็นศิษย์สำคัญองค์หนึ่งของหลวงปู่ชอบ ฐานสโม 
          มีความสามารถพูดได้หลายภาษา 
          เป็นพระธรรมทูต เดินทางไปเผยแผ่พระพุทธศาสนาในต่างประเทศกว่า 30 ปี เช่น เม็กซิโก สวีเดน สวิตเซอร์แลนด์ จีน เยอรมัน สหรัฐอเมริกา ออสเตรเลีย
          <br><strong>สถานที่สำคัญ</strong>   
      </p>

      <p class="birth-detail">
      สำนักปฏิบัติธรรมสวนทิพย์ อำเภอปากเกร็ด จังหวัดนนทบุรี 
      <br><strong>มรณภาพ</strong>
      </p>

      <p class="birth-detail">
      หลวงปู่บุญฤทธิ์ ปัณฑิโต ได้ละสังขารอย่างสงบเมื่อวันที่ 14 พฤศจิกายน พ.ศ. 2561 เวลา 22.22 น. สิริอายุ 104 ปี 73 พรรษา ณ โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา ของหลวงปู่บุญฤทธิ์ ปัณฑิโต</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/19M4LgRLOK6iKLDMsAzyJxNIGb4qROOaq?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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