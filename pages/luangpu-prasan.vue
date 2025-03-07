<template>
  <div class="container">
    <h1 class="welcome-text">พระครูพิศาลปัญญาคม (หลวงปู่ประสาร ปัญญาพโล)</h1>
    <div class="empty-box">
      <img src="/pu_prasan.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        หลวงปู่ประสาร สุมโน มีนามเดิมว่า ประสาร เผ่าเพ็ง ต่อมาเปลี่ยนนามสกุลเป็น เผ่าพุทธ เกิดเมื่อวันที่ 16 มกราคม พ.ศ. 2473 ที่บ้านหนองเป็ด ตำบลหนองหิน อำเภอยโสธร จังหวัดอุบลราชธานี (ในขณะนั้น)
        หลวงปู่ประสารเป็นพระวิปัสสนาสายหลวงปู่มั่น ภูริทัตโต ท่านเป็นพระวิปัสสนารุ่นครูบาอาจารย์อาวุโส มีอัชฌาสัยอันนุ่มนวล เป็นที่เคารพศรัทธาของพุทธศาสนิกชนทั่วไป
        <br><strong>ปฏิปทาและคุณธรรม</strong><br>
      </p>

      <p class="birth-detail">
      หลวงปู่ประสารเป็นพระมหาเถระผู้มีภูมิลักษณะแช่มชื่นเบิกบาน สมถสันโดษ ยินดีในเสนาสนะอันสงัด ปรารภความเพียร ท่านมีเมตตาเอื้อเฟื้อ เป็นกันเอง เปิดเผย เข้าหาง่าย ไม่ถือชนชั้นวรรณะ
      <br><strong>ครูบาอาจารย์และสหธรรมิก</strong><br>
      </p>

      <p class="birth-detail">
      หลวงปู่ประสารเคยร่วมปฏิบัติธรรมกับครูบาอาจารย์หลายท่าน อาทิ หลวงปู่สุวัจน์ สุวโจ, หลวงปู่อ่อนสี สุเมโธ, และหลวงปู่บุญหนา ธมฺมทินโน
      <br><strong>ปัจจุบัน</strong><br>
      </p>

      <p class="birth-detail">
      ปัจจุบัน หลวงปู่ประสารดำรงตำแหน่งเจ้าอาวาสวัดป่าหนองไคร้ จังหวัดยโสธร
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
  width: 120%;

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