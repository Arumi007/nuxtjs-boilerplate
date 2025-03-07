<template>
  <div class="container">
    <h1 class="welcome-text">พระอาจารย์ทองอินทร์ กุสลจิตฺโต</h1>
    <div class="empty-box">
      <img src="/pu_thongin.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>

      <p class="birth-detail">
        ตั้งแต่ปี พ.ศ. ๒๔๗๑ – ๒๕๔๖ รวมอายุ ๗๖ ปี พรรษา ๕๖
      พระนพีสีพิศาลคุณ อันเหล่าพระภิกษุ สามเณร และญาติโยมรู้จักดี ในนามพระอาจารย์มหาทองอินทร์ กุสลจิตฺโต หรือ พระครูสันตยาธิคุณ 
      ดำรงตำแหน่งเป็นเจ้าคณะจังหวัดเชียงใหม่ – ลำพูน – แม่ฮ่องสอน ธรรมยุต และเป็นเจ้าอาวาสวัดสันติธรรมซึ่ง 
      เป็นวัดราษฎร ์ตั้ง อยู่เลขที่ ๑๓ ถนนหัสดิเสวี ตำบลช้างเผือก อำเภอเมือง จังหวัดเชียงใหม่
      <br><strong>ชาติภูมิ</strong>
      </p>

      <p class="birth-detail">
      มีบ้านเกิดอยู่ที่จังหวัดเพชรบูรณ์ มีโยมบิดาชื่อ พรหมา แก้วตา โยมมารดาชื่อรินทร์ แก้วตา บิดามารดา มีอาชีพทำนาทำสวน ฐานะปานกลาง 
      และโยมปู่ชื่ออาจารย์ครูทน ซึ่งเป็นผู้เชี่ยวชาญ ในธรรมคำสั่งสอน ของพระพุทธศาสนา จึงได้ขนานนามว่า อาจารย์ครูทน
      </p>

      <p class="birth-detail">
      ท่านเกิดเมื่อ วันที่๙ เดือนกรกฎาคม พ.ศ. ๒๔๗๑ ตรงกับ วันจันทร์แรม๘ ค่ำเดือน ๘ ปีมะโรง ณ หมู่บ้านน้ำร้อน หมู่ที่ ๗ ตำบลนาป่า อำเภอเมือง จังหวัดเพชรบูรณ์ 
      โยมปู่ซึ่งได้เป็น ผู้เชี่ยวชาญ ในธรรมคำสั่งสอนของพระพุทธเจ้า ท่านได้บวช เรียนในพระพุทธศาสนา จึงได้ขนาน นามว่าอาจารย์ครูทนตั้งชื่อ ให้หลานชาย คนโตว่า ทองอินทร์ ท่านเป็นบุตรชายคนโต มีพี่น้อง ร่วมสายโลหิตรวม ๘ คนเป็นชาย ๕ หญิง ๓
      <a href="http://www.santidham.com/abotpic/napeesee/TI.html" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>




      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา พระอาจารย์ทองอินทร์ กุสลจิตฺโต</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1Eg9Cfq2j9CWL4ymH3gd9KkBiDgDdfFbZ?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '21. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
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