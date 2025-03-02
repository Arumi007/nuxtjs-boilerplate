<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่บุญมา คัมภีรธัมโม</h1>
    <div class="empty-box">
      <img src="/pu_boonma.jpg" class="image" />
      <h2 class="birth-title">ชาติกำเนิด</h2>
      <p class="birth-detail">
        ชาติกำเนิด:
        หลวงปู่บุญมา คัมภีรธัมโม เกิดเมื่อวันจันทร์ที่ 1 ตุลาคม พ.ศ. 2471 ตรงกับวันแรม 3 ค่ำ เดือน 10 ปีมะโรง
        ภูมิลำเนาเป็นชาวอำเภอสว่างแดนดิน จังหวัดสกลนคร โดยกำเนิด
        ชื่อบิดา นายเข่ง ธิอัมพร มารดาชื่อ นางชาดา ธิอัมพร
        การอุปสมบท:
        อุปสมบทเมื่อวันที่ 10 กรกฎาคม พ.ศ. 2494 ขณะอายุได้ 24 ปี ณ วัดโพธิสมภรณ์ ตำบลหมากแข้ง อำเภอเมืองอุดรธานี จังหวัดอุดรธานี
        พระอุปัชฌาย์ : พระธรรมเจดีย์ (จูม พันธุโล) วัดโพธิสมภรณ์
        พระกรรมวาจาจารย์ : พระครูสมุห์สวัสดิ์
        พระอนุสาวนาจารย์ : -
        การศึกษาและปฏิบัติธรรม:
        เคยศึกษาปฏิบัติธรรมกับหลวงปู่ขาว อนาลโย หลวงปู่ชอบ ฐานสโม หลวงปู่บุญมี ฐิตปุญโญ (พระราชญาณมุนี วัดป่าประชานิยม) หลวงปู่คำดี ปภาโส
        และเป็นสหธรรมิก หลวงปู่ คำบุ ธัมมธโร ร่วมธุดงค์ปลีกวิเวกไปด้วยกันหลายจังหวัด
        จนกระทั่งในปี พ.ศ.2524 ได้จำพรรษา ณ วัดหนองกุง (วัดป่าสีห์พนม) จนถึงปัจจุบัน
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">ธรรมเทศนา ของหลวงหลวงปู่บุญมา คัมภีรธัมโม</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
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
  font-size: 2rem;
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
  width: 25%;
  height: 10%;
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
  display: flex; /* เพิ่มบรรทัดนี้ */
  align-items: flex-start; /* เพิ่มบรรทัดนี้ */
}

.dharma-title {
  font-size: 2rem;
  color: red;
  margin-bottom: 20px;
  cursor: pointer;
}


/* เพิ่มบรรทัดนี้ */
.dharma-list:nth-child(2) {
  margin-top: 40px; /* ปรับค่า margin-top ตามต้องการ */
}

.dharma-sublist {
  list-style: none;
  padding: 10px;
  margin-top: 5px;
  display: none;
  border: 1px solid #ccc; /* เพิ่มเส้นขอบ */
  border-radius: 5px; /* เพิ่มขอบมน */
  max-height: 200px; /* กำหนดความสูงสูงสุด */
  overflow-y: auto; /* เปิดใช้งานการเลื่อน */
}

.dharma-item {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}

</style>