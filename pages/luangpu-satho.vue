<template>
  <div class="container">
    <h1 class="welcome-text">พระอาจารย์ ชยสาโร ภิกขุ</h1>
    <div class="empty-box">
      <img src="/pu_satho.jpg" class="image" />
      <h2 class="birth-title">ประวัติโดยย่อของพระอาจารย์ ชยสาโร ภิกขุ</h2>
      
      <p class="birth-detail">
        พระพรหมพัชรญาณมุนี มีนามเดิมว่า ฌอน ไมเคิล ชิเวอร์ตัน ฉายา ชยสาโร สถานพำนักสงฆ์บ้านไร่ทอสี จังหวัดนครราชสีมา 
        เป็นพระภิกษุชาวอังกฤษผู้ซึ่งถ่ายทอดความลึกซึ้งทางธรรมฉบับภาษาไทยได้อย่างสละสลวยและเป็นที่ประทับใจต่อพุทธศาสนิกชนทั่วโลก
      <br><strong>การแสวงหาสัจธรรม</strong>
      </p>

      <p class="birth-detail">
      เมื่อไม่มีบุคคลใดสามารถให้คำตอบแก่ท่านได้ ท่านจึงเริ่มอ่านหนังสือต่างๆมากมายหลากหลาย จนกระทั่งพบคำสอนขององค์สมเด็จพระสัมมาสัมพุทธเจ้า 
      จึงเกิดความเลื่อมใสศรัทธาว่าเป็น "สัจธรรมความจริง" ที่กำลังแสวงหาอยู่ จึงสนใจการฝึกจิตและศึกษาหาความรู้ทางพุทธศาสนาตั้งแต่อยู่ในวัยรุ่น 
      ซึ่งเป็นสาเหตุสำคัญให้ท่านเริ่มทำงานเก็บเงินและออกเดินทางหาประสบการณ์ในประเทศต่าง ๆ อาทิ ประเทศอิหร่านซึ่งลำบากมาก ถึงขนาดที่ว่าเคยโดนซ้อม 
      แต่ท่านก็ไม่ย่อท้อจนมีคนชวนท่านไปอยู่ที่บ้านเพื่อให้สอนภาษาอังกฤษให้แลกกับการให้ที่พักและอาหาร หรือเมื่อครั้งท่านไปประพฤติตนเป็นฤๅษีที่อินเดีย 
      แต่สุดท้ายก็มีเหตุจากปัจจัยภายนอกทำให้ท่านต้องเดินทางกลับ ท่านเดินทางไปทั่ว จนแน่ใจว่าการศึกษาและปฏิบัติธรรม 
      อันเป็นหนทางที่ต้องการแทนการเรียนต่อในมหาวิทยาลัย โดยท่านใช้เวลาค้นหาสิ่งที่ท่านต้องการตั้งแต่อายุ 17 ปี ใช้เวลา 2 ปี จนเมื่อ พ.ศ. 2521 
      ท่านได้พบและเริ่มปฏิบัติกับพระอาจารย์สุเมโธ (พระชาวต่างชาติรูปแรกที่เป็นลูกศิษย์ของหลวงพ่อชา สุภทฺโท) ที่วิหารแฮมสเตด ประเทศอังกฤษ 
      และได้ถือเพศเป็นอนาคาริก (ปะขาว) อยู่กับท่านพระอาจารย์สุเมโธ ถือศีล 10 เป็นเวลา 1 พรรษา แล้วเดินทางมายังประเทศไทย
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B8%AB%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%8A%E0%B8%A3%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B8%A1%E0%B8%B8%E0%B8%99%E0%B8%B5_(%E0%B8%8C%E0%B8%AD%E0%B8%99_%E0%B8%8A%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B9%82%E0%B8%A3)#%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">1. พระธรรมเทศนา โดย หลวงปู่ชยสาโร ภิกขุ  ชุดที่ 1</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">2. พระธรรมเทศนา โดย หลวงปู่ชยสาโร ภิกขุ  ชุดที่ 2</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1AI9JD01uxwEymRKTQnaLjreOPEZcUPrA?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
      </div>

    </div>
  </div>
  <audio ref="audioPlayer" controls style="display: none;"></audio>
</template>

<script setup>

import { ref } from 'vue';

const dharmaList2 = ref(null);
let isListVisible2 = ref(false);

const dharmaList3 = ref(null);
let isListVisible3 = ref(false);


/* ประวัติหลวงพ่อพุธ ฐานิโย */

const dharmaItems2 = ref([
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
  
]);

/* ทางพ้นทุกข์ */

const dharmaItems3 = ref([
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
  { title: '34. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

/* หัวใจนักภาวนา */



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