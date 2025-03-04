<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่ท่อน ญาณธโร</h1>
    <div class="empty-box">
      <img src="/Por_ton.jpg" class="image" />
      <h2 class="birth-title">ชาติกำเนิด</h2>
      <p class="birth-detail">
        หลวงปู่ท่อน ญาณธโร ชื่อเดิมว่า ท่อน ประเสริฐพงศ์ เกิดเมื่อวันที่ 3 พฤษภาคม พ.ศ.
        2471 ณ บ้านหินขาว ตำบลสาวะถี อำเภอเมืองขอนแก่น จังหวัดขอนแก่น
        ตรงกับวันพฤหัสบดี ขึ้น 15 ค่ำ เดือน 6 ปีมะโรง บิดา-มารดาชื่อ นายแจ่ม
        และนางทา ประเสริฐพงศ์ มีพี่น้องร่วมกันทั้งหมด 19 คน ท่านบุตรคนที่ 6
      </p>
      <div class="dharma-list">
        <div class="dharma-list-item">
          <span class="dharma-title dharma-title" @click="toggleList">1. ธรรมเทศนา</span>
          <ul ref="dharmaList" class="dharma-sublist">
            <li
              v-for="(item, index) in dharmaItems"
              :key="index"
              class="dharma-item"
              @click="goToSoundCloud(item.soundcloudUrl)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="dharma-list-item">
          <span class="dharma-title" @click="toggleLastDharmaList">2. ธรรมเทศนา ๘๐ กัณฑ์สุดท้าย</span>
          <ul ref="lastDharmaList" class="dharma-sublist">
            <li
              v-for="(item, index) in lastDharmaItems"
              :key="index"
              class="dharma-item"
              @click="goToSoundCloud(item.soundcloudUrl)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="drive-download">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1rghqlC0J3sJpyjojp6403y8PajnSZVOw?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา Drive</span>
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
  { title: '01 จิต', soundcloudUrl: 'https://on.soundcloud.com/CmNEGsyWTpx6VEdWA' },
  { title: '02 พระคุณบิดามารดา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '03 โกเดียน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '04 บิดามารดาเมตตาบุตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '05 ความสามัคคี(งานกฐินวัดถ้ำพระเวส)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '06 ไตรสรณคมณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '07 ทานศีลภาวนา(งานฉลองกฐินสำนักสงฆ์ดำรงค์ธรรม)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '08 การฟังธรรมเป็นมงคลแห่งชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '09 เมตตาธรรมค้ำจุนโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10 เทศน์งานมุฑิตาสักการะหลวงปู่จันทร์โสม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11 เทิดทูนครูบาอาจารย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  // เพิ่มรายการอื่น ๆ
]);

const lastDharmaItems = ref([
  { title: 'เล่ม 01 560223 วัดป่าบ้านค้อ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_1' },
  { title: 'เล่ม 02 560311 กรมประมง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 03 560312 สุพรรณบุรี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 04 560330 มาเลเซีย สถานทูตไทย', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 05 560331 มาเลเซีย วัดพุทธไทยเชตวัน', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 06 560406 ที่พักสงฆ์ หมู่บ้านลานทอง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 07 560407 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 08 560409 รพ.รามาธิบดี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 09 560410 สำนักงานตรวจเงินแผ่นดิน', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 10 560510 สุพรรณบุรี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 11 560519 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 12 560605 วัดอรัญบรรพต', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 13 560608 การจัดการวิศวกรรม', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 14 560609 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 15 560611 มูลนิธิบ้านอารีย์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 16 560613 เรือนจำกลางบางขวาง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 17 560615 วัดเขาตาเงาะอุดมพร', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 18 560625 วัดป่าห้วยเดื่อ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 19 560628 วัดป่าภูก้อน', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 20 560703 บ้านโยม ปิ่นเกล้า', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 21 560706 บ้านโยม ลาดพร้าว 107', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 22 560709 DMG', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 23 560710 วัดทองเนียม', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 24 560711 สุพรรณบุรี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 25 560714 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 26 560803 Benz รัชดา', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 27 560818 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 28 560824 วัดศรีอภัยวัน', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 29 560825 วัดศรีอภัยวัน', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 30 560912 ทำบุญวัดที่ 9', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 31 561011 วัดป่าม่วงไข่', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 32 561013 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 33 561015 บ้านโยม เรวดี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 34 561020 วัดเวฬุวัน', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 35 561022 วัดป่ากุลสุวรรณ์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 36 561108 วัดสวนหงษ์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 37 561109 วัดบึงพลาราม', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 38 561120 วัดโป่งจันทร์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 39 561123 วัดถ้ำผาปู่', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 40 561203 EXIM Bank', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 41 561206 ต้นบุญธรรมสถาน', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 42 561212 ม.รามคำแหง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 43 561215 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 44 561218 สุพรรณบุรี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 45 570108 รพ.ศรีเชียงใหม่', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 46 570114 มูลนิธิบ้านอารีย์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 47 570119 บ้านโยม คลอง 3', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 48 570125 วัดอโศการาม', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 49 570126 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 50 570201 ที่พักสงฆ์ หมู่บ้านลานทอง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 51 570203 บ้านโยม ลาดกระบัง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 52 570204 ตึก S31', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 53 570207 วัดป่าญาณสิริ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 54 570209 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 55 570211 DMG', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 56 570308 วัดทองเนียม', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 57 570309 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 58 570314 เดอะ สยาม เฮอริเทจ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 59 570315 บ้านโยม กัลปพฤกษ์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 60 570320 วัดป่ามณีกาญจน์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 61 570321 วัดป่ามณีกาญจน์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 62 570420 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 63 570510 สุพรรณบุรี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 64 570513 วัดศรีอภัยวัน วิสาขบูชา', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 65 570518 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 66 570520 ตึกไทยประกันชีวิต', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 67 570521 รพ.รามาธิบดี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 68 570523 มูลนิธิบ้านอารีย์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 69 570528 แกลง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 70 570531 ที่พักสงฆ์ หมู่บ้านลานทอง', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 71 570605 วัดอรัญบรรพต', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 72 570607 หมู่บ้านสีวลี', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 73 570608 รพ.วิชัยยุทธ', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 74 570614 วัดเขาตาเงาะอุดมพร', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 75 570624 รพ.เพชรบูรณ์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 76 570628 วัดป่าศิลาศรัทธาธรรม', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 77 570630 Creston hill resort', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 78 570704 ปปช.', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 79 570707 หมู่บ้านพฤกภิรมย์ รีเจนท์', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  { title: 'เล่ม 80 570711 วัดศรีอภัยวัน อาสาฬหบูชา', soundcloudUrl: 'YOUR_LAST_AUDIO_LINK_2' },
  
  // เพิ่มรายการอื่น ๆ
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

const lastDharmaList = ref(null);
let isLastDharmaListVisible = ref(false);

const toggleLastDharmaList = () => {
  isLastDharmaListVisible.value = !isLastDharmaListVisible.value;
  lastDharmaList.value.style.display = isLastDharmaListVisible.value ? 'block' : 'none';
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
  width: 80%;
  margin: 0 auto;
}

.dharma-list-item {
  text-align: left;
}

.dharma-title {
  font-size: 2rem;
  color: red;
  margin-bottom: 10px;
  cursor: pointer;
  display: block;
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
  background-color: rgb(168, 197, 195);
  color: #333;
}

.dharma-item {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}

.drive-download {
  text-align: left;
  width: 80%;
  margin: 20px auto;
}
</style>