<template>
  <div class="container">
    <h1 class="welcome-text">พระครูสุทธิธรรมรังษี (เจี๊ยะ จุนฺโท)</h1>
    <div class="empty-box">
      <img src="/pu_Jia.jpg" class="image" />
      <h2 class="birth-title">ประวัติ พระครูสุทธิธรรมรังษี (เจี๊ยะ จุนฺโท)</h2>
      <p class="birth-detail">
        พระเดชพระคุณหลวงปู่เจี๊ยะ จุนฺโท พระอริยเจ้าผู้เด็ดเดี่ยวอาจหาญในสายกรรมฐานของท่านพระอาจารย์มั่น ภูริทตฺโต 
        ท่านได้รับการยกย่องจากท่านพระอาจารย์มั่นว่า “เป็นผ้าขี้ริ้วห่อทอง” อุปนิสัยของท่านเป็นคนตรงไปตรงมา มีปฏิปทายอมหักไม่ยอมงอ 
        ท่านสละอวัยวะ ทรัพย์และชีวิตเพื่อธรรม เป็นผู้มีความกตัญญูกตเวที จงรักภักดีต่อท่านพระอาจารย์มั่น ยิ่งกว่าชีวิต 
        ท่านได้รับความไว้วางใจจากท่านพระอาจารย์มั่น ให้เดินทางไปเฝ้าอุปัฏฐากหลวงปู่เสาร์ ซึ่งอาพาธหนักถึงนครจำปาศักดิ์ประเทศลาว จนกระทั่งหลวงปู่เสาร์มรณภาพ
        ประวัติ ปฏิปทา คติธรรม ของท่านอาจแตกต่างจากพระกรรมฐานรูปอื่นในแง่ปลีกย่อย ท่านไม่กว้างขวางเรื่องปริยัติธรรมภายนอก รอบรู้เฉพาะเรื่องจิตตภาวนา 
        อันเป็นธรรมภายใน ท่านปฏิบัติลำบากแต่รู้เร็ว คำสอนของท่านก็เป็นประเภทปัจเจกะ มุ่งเน้นทางด้านจิตใจเป็นส่วนใหญ่ประกอบกับท่านมีบารมีธรรมที่บ่มบำเพ็ญมาแต่ชาติปางก่อนเป็นสิ่งช่วยเกื้อหนุนอยู่อย่างลึกลับ 
        การปฏิบัติของท่านจึงนับว่ารู้ธรรมเร็วในยุคปัจจุบัน ท่านจึงเป็นแบบอย่างทางสงบแก่โลกที่ระงมปนเปื้อนไปด้วยกองทุกข์นานัปการ 
        ท่านสอนให้พวกเรามองอะไร ไม่ควรมองแต่ด้านเดียว การมองอะไร ไม่เพียงใช้สายตาเป็นเครื่องตัดสินเท่านั้น แต่ต้องใช้แววตาคือ ปัญญา 
        เพราะผู้ปฏิบัติธรรมไม่ควรมองข้ามปมคำสอน เพียงเพราะสายตาเท่านั้น ควรพิจารณาให้ถ้วนถี่ เปรียบเสมือนดวงอาทิตย์ที่สอ่งแสงสว่างแก่โลก 
        ย่อมไม่ละเลยทั้งกอไผ่และภูผา หลวงปู่เจี๊ยะท่านจึงเป็นผู้มีจิตอิสระมานานไม่เกี่ยวเกาะยึดติดพัวพันในบุคคล กาล สถานที่ 
        การปฏิบัติของท่านมุ่งเน้นที่ผลการปฏิบัติมากกว่ารูปแบบแห่งการปฏิบัติ เพราะนี่เป็นนิสัยสะท้านโลกาและปฏิปทาที่เป็นปัจจัตตัง 
        ยากที่ใครๆ จะเลียนแบบได้ หลวงตามหาบัว ญาณสมฺปนฺโน ได้กล่าวยกย่องชมเชยในคุณธรรมว่า “พระอาจารย์เจี๊ยะ เป็นผ้าขี้ริ้วห่อทอง 
        เป็นเพชรน้ำหนึ่งที่หาได้โดยยากยิ่ง” (จากหนังสือ 28 พระอรหันต์แห่งกรุงรัตนโกสินทร์)

      </p>
      
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">1. พระธรรมเทศนา โดย หลวงปู่เจี๊ยะ จุนฺโท ชุดที่ 1</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">2. พระธรรมเทศนา โดย หลวงปู่เจี๊ยะ จุนฺโท ชุดที่ 2</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
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
  width: 30%;
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