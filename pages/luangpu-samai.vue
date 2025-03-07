<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่สมัย ทีฆายุโก วัดป่าโนนแสงทอง</h1>
    <div class="empty-box">
      <img src="/pu_samai.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        หลวงปู่สมัย ทีฆายุโก มีนามเดิมว่า พิสมัย โสภาจร เกิดเมื่อวันที่ 3 มกราคม พ.ศ. 2473 ณ บ้านนาเตียง ตำบลตาลเนิ้ง อำเภอสว่างแดนดิน จังหวัดสกลนคร โยมบิดา-มารดาชื่อ นายสาและนางเพ็ง โสภาจร
        <br><strong>ชีวิตในวัยเด็ก</strong><br>
      </p>

      <p class="birth-detail">
      <strong>ในวัยเด็ก</strong> ท่านมีหน้าที่ช่วยบิดามารดาทำงานในเรือกสวนไร่นา พร้อมทั้งต้องทำหน้าที่ช่วยพี่ ๆ น้อง ๆ บ้านเกิดเป็นป่า สมาชิกทุกคนในครอบครัวต้องช่วยกันทำงานอย่างหนัก ในการช่วยไถ ปักกล้า และดำนา
      เมื่ออายุ 9 ขวบ ได้เข้าเรียนชั้นประถมศึกษาปีที่ 1 ที่โรงเรียนประชาบาล ซึ่งตั้งอยู่ในวัดอัมพวัน บ้านนาเตียง ตำบลตาลเนิ้ง อำเภอสว่างแดนดิน จังหวัดสกลนคร กระทั่งเรียนจบชั้นประถมศึกษาปีที่ 4 จึงได้ลาออกมาช่วยพ่อแม่ทำนา
      </p>

      <p class="birth-detail">
      <strong>ต่อมา</strong> โยมบิดาได้นำฝากให้เป็นเด็กวัดกับพระที่อยู่วัดเหนือ อำเภอเมือง จังหวัดสกลนคร พระที่อยู่ด้วยได้นำไปฝากเข้าโรงเรียนช่างไม้สกลนคร (ปัจจุบันคือโรงเรียนสกลราชวิทยานุกูล) อำเภอเมือง จังหวัดสกลนคร เป็นเวลา 3 ปี
      เมื่ออายุได้ 16 ปี ได้กลับมาอยู่ที่บ้านนาเตียง ช่วยบิดามารดาทำการงานในเรือกสวนไร่นาต่อไป
      <br><strong>การอุปสมบท</strong><br>
      </p>

      <p class="birth-detail">
      ล่วงเข้าสู่วัยหนุ่มอายุครบ 20 ปีบริบูรณ์ ได้เข้าพิธีอุปสมบทเป็นพระภิกษุ เมื่อวันที่ 21 ธันวาคม พ.ศ. 2493 ณ วัดสามัคคีบำเพ็ญผล บ้านนาเตียง ตำบลตาลเนิ้ง อำเภอสว่างแดนดิน จังหวัดสกลนคร
      ในสมัยนั้นได้บวชด้วยกัน 4 รูป คือ บวชพระ 3 รูป และบวชเป็นสามเณร 1 รูป ที่ฉิมน้ำบ้านหนองดินดำ โดยมีพระครูพุฒิวราคม เป็นพระอุปัชฌาย์ พระอาจารย์นนท์ โกวิโท เป็นพระกรรมวาจาจารย์
      ภายหลังอุปสมบท ท่านได้เดินทางไปจังหวัดนครพนม พร้อมกับพระกรรมวาจาจารย์ พักอยู่ที่วัดอรัญญิกาวาส โดยมีพระอาจารย์บุญมา มหายโส (พระครูไพโรจปัญญาคุณ) เป็นเจ้าอาวาสในขณะนั้น
      <a href="https://palungjit.org/threads/%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9B%E0%B8%B9%E0%B9%88%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B8%86%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B9%82%E0%B8%81-%E0%B8%A8%E0%B8%B4%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%AA%E0%B8%B2%E0%B8%A2-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%A1%E0%B8%A1%E0%B8%B1%E0%B8%8F%E0%B8%90%E0%B8%B2%E0%B8%99.96612/" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่สมัย ทีฆายุโก</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1iVtazoY4pEd1D2RoXZOcP193ZJ2dUor0?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '1. การพิจารณาร่างกาย (เทศน์เมื่อวันที่ ๘ สิงหาคม ๒๕๔๓)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. อานิสงส์ของการรักษาศีล (เทศน์เมื่อวันที่ ๑๕ กรกฏาคม ๒๕๔๓)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. มรรค ๘ (เทศน์เมื่อวันที่ ๒๓ กรกฎาคม ๒๕๔๓)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. มัชฌิมาปฏิปทา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. สติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. การปฏิบัติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. พระธรรมเทศนา  วันออกพรรษา (เมื่อวันที่ ๒๖ ตุลาคม พ.ศ. ๒๕๕๐)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
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
  font-size: 2rem;
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