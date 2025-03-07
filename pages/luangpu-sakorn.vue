<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่สาคร ธัมมาวุโธ</h1>
    <div class="empty-box">
      <img src="/pu_sakorn.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        พระครูภาวนาสุทธาจารย์ หรือ ท่านพระอาจารย์สาคร ธัมมาวุโธ มีนามเดิมว่า สาคร แสงมุกดา เกิดเมื่อวันเสาร์ที่ 20 ตุลาคม พ.ศ. 2488 
        ตรงกับวันขึ้น 14 ค่ำ เดือน 11 ปีระกา ณ บ้านโนนสงเปลือย ตำบลหนองบัว อำเภอหนองบัวลำภู จังหวัดอุดรธานี 
        (ปัจจุบันคือ ตำบลเหล่าโพธิ์ชัย อำเภอเมือง จังหวัดหนองบัวลำภู) โยมบิดา-โยมมารดาชื่อ นายบู่ แสงมุกดา และนางบัวลา แสงมุกดา (สกุลเดิมของโยมมารดาคือ ชามนตรี ทายาทอดีตเจ้าเมืองหนองบัวลำภูในยุคนั้น) มีพี่น้องร่วมบิดามารดาเดียวกันทั้งหมด 7 คน ท่านเป็นบุตรคนที่ 5
      </p>

      <p class="birth-detail">
      ปัจจุบันท่านดำรงตำแหน่งเป็นเจ้าอาวาสวัดเวฬุวันวนาราม (วัดเวฬุวัน) ตำบลท่าขนุน อำเภอทองผาภูมิ จังหวัดกาญจนบุรี และประธานสงฆ์แห่งวัดป่ามณีกาญจน์ ตำบลศาลากลาง อำเภอบางกรวย จังหวัดนนทบุรี
      <br><strong>ออกบวช</strong><br>
      </p>

      <p class="birth-detail">
      อำเภอหนองบัวลำภูในยุคนั้น อยู่บนเส้นทางที่พระวิปัสสนากัมมัฏฐานหลายรูปใช้เป็นเส้นทางเดินธุดงค์เพื่อไปอบรมปฏิบัติและฟังธรรมจากองค์หลวงปู่มั่น ภูริทัตโต ที่จังหวัดสกลนคร 
      และหลายท่านได้มาพักสร้างวัดในธรรมยุติกนิกายที่เน้นการปฏิบัติขึ้น ณ อำเภอแห่งนี้ ซึ่งญาติพี่น้องของท่านพระอาจารย์สาครเองก็ได้บวชเป็นพระเณรกันหลายคน บางท่านบวชเรียนสามารถสอบได้นักธรรม เปรียญธรรมประโยคต่างๆ บางท่านได้รับสมศักดิ์เป็นท่านเจ้าคุณ มีจริยวัตรงดงาม แสดงธรรมเทศนาได้ลึกซึ้งน่าติดตาม
      </p>

      <p class="birth-detail">
      <strong>ดังนั้น</strong> เมื่ออายุครบอุปสมบท ท่านพระอาจารย์สาครจึงตัดสินใจกราบขออนุญาตโยมบิดา-โยมมารดาลาบวชเพื่อศึกษาธรรม 
      โดยได้เข้าพิธีอุปสมบทเป็นพระภิกษุ เมื่อวันที่ 3 เมษายน พ.ศ. 2508 ณ พัทธสีมาวัดมหาชัย ตำบลหนองบัว อำเภอเมือง จังหวัดหนองบัวลำภู 
      โดยมีพระพิศาลคณานุกิจ (หลวงพ่อเส็ง กัณณวโร) เป็นพระอุปัชฌาย์ และพระสมุห์คำบาล เป็นพระกรรมวาจาจารย์ ได้รับนามฉายาทางพระพุทธศาสนาว่า “ธมฺมาวุโธ” อันมีความหมายเป็นมงคลว่า “ผู้มีธรรมเป็นอาวุธ” สังกัดคณะสงฆ์ธรรมยุติกนิกาย ท่านได้อยู่จำพรรษาแรก ณ วัดมหาชัย
      <a href="http://www.dhammajak.net/board/viewtopic.php?t=7790" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา หลวงปู่สาคร ธัมมาวุโธ</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1rDwb2eGB_q_iqwgDXowneEZdcyvpE5Aq?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '1. จากใจคณะศิษย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. แสวงหาความรู้ ไม่ใช่แสวงหาความหลง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. เราต้องใหม่อยู่เสมอ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เจริญที่ใจ ไม่ใช่วิหาร กุฏิ ศาลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. น้ำห้วยลึกแค่ไหน กระโดดลงไปวัดดู', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. เดือนมาฆะ อย่าสะสมอารมณ์ในใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. อิสรภาพของใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ความเป็นมาของพระป่ากัมมัฏฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เกร็ดประวัติหลวงปู่สาคร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. การปฏิบัติกัมมัฏฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ฟังเทศน์ให้เป็น 2010-09-04', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. กลับเข้ามาดูข้างใน 2010-08-29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เห็นไปตามความเป็นจริง 2010-01-16', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ลืมตาตาย 2010-01-17', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. หญิงงามนามสิริมา 2009-06-08', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ไก่มันขันตั้งแต่อยู่ในไข่ 2009-07-18', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. เสียงอ่านชีวประวัติพระอาจารย์สาคร ธมฺมาวุโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
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