<template>
  <div class="container">
    <h1 class="welcome-text">พระวิสุทธิญาณเถร (สมชาย ฐิตวิริโย)</h1>
    <div class="empty-box">
      <img src="/som_chai.jpg" class="image" />
      <h2 class="birth-title">อุปสมบท</h2>
      <p class="birth-detail">
        ท่านได้บรรพชาเมื่อวันที่ 5 มิถุนายน พ.ศ. 2487 ตรงกับวันขึ้น 15 ค่ำ เดือน 7 ปีวอก อายุ 19 ปี 
        ณ อุโบสถวัดเหนือ อำเภอเมืองร้อยเอ็ด จังหวัดร้อยเอ็ด โดยมีท่านเจ้าคุณ พระโพธิญาณมุนีเจ้าคณะจังหวัดร้อยเอ็ด ธรรมยุตเป็นพระอุปัชฌาย์ 
        ท่านได้ ถวายตัวเป็นลูกศิษย์หลวงปู่มั่น ภูริทตฺโต เมื่อปลายปี พ.ศ. 2487 ที่ วัดป่าบ้านหนองผือ ตำบลนาใน อำเภอพรรณานิคม จังหวัดสกลนคร
        ท่านได้ทำการอุปสมบท ณ พัทธสีมาวัดศรีโพนเมือง จังหวัดสกลนคร เมื่อวันที่ 23 มิถุนายน พ.ศ. 2489 
        โดยมีพระธรรมเจดีย์ (จูม พนฺธุโล) เป็นพระอุปัชฌาย์ หลวงปู่ฝั้น อาจาโร เป็นกรรมวาจาจารย์ หลวงปู่กงมา จิรปุญฺโญ 
        เป็นพระอนุสาวนาจารย์ ครูบาอาจารย์ที่กล่าวมาทั้งหมดล้วนแต่เป็นลูกศิษย์ของ หลวงปู่มั่นทั้งสิ้น โดยเฉพาะพระธรรมเจดีย์นั้นเป็นพระอุปัชฌาย์ 
        ของหลวงปู่ฝั้น อาจาโรอีกด้วย ดังนั้นจึงกล่าวได้ว่า หลวงปู่สมชาย ฐิตวิริโย เป็นทั้งลูกศิษย์ หลานศิษย์และเหลนศิษย์ของหลวงปู่มั่น 
        ภายหลังจากได้อุปสมบทเป็นพระภิกษุแล้ว หลังจากประพฤติปฏิบัติธรรม จนเกิดซาบซึ้งในพระศาสนาพอสมควรแล้ว 
        ท่านได้นำเอาธรรมะไปอบรมสั่งสอนประชาชนในท้องถิ่นเดิมของท่าน ปัจจุบันหันมานับถือพุทธศาสนาจนหมดสิ้น
      </p>
      

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">1. ประวัติหลวงปู่สมชาย ฐิตวิริโย</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">2. กฎเกณฑ์การทำสมาธิ</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList4">3. เหตุเสื่อมของกรรมฐาน</span>
        <ul ref="dharmaList4" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems4" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">4. พิจารณามูลฐานของกิเลส</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/10RcteDOmm7GrZ47FzW_dbGtfgUym-KYk?usp=sharing')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
      </div>

    </div>
  </div>
  <audio ref="audioPlayer" controls style="display: none;"></audio>
</template>

<script setup>

import { ref } from 'vue';

const dharmaList = ref(null);
let isListVisible = ref(false);

const dharmaList2 = ref(null);
let isListVisible2 = ref(false);

const dharmaList3 = ref(null);
let isListVisible3 = ref(false);

const dharmaList4 = ref(null);
let isListVisible4 = ref(false);



/* พิจารณามูลฐานของกิเลส */

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
  { title: '34. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '52. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '53. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '54. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
  
]);

/* ประวัติหลวงปู่สมชาย ฐิตวิริโย */

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
  
  
]);

/* กฎเกณฑ์การทำสมาธิ */

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
  
]);

/* เหตุเสื่อมของกรรมฐาน */

const dharmaItems4 = ref([
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




const toggleList = () => {
  isListVisible.value = !isListVisible.value;
  dharmaList.value.style.display = isListVisible.value ? 'block' : 'none';
};

const toggleList2 = () => {
  isListVisible2.value = !isListVisible2.value;
  dharmaList2.value.style.display = isListVisible2.value ? 'block' : 'none';
};

const toggleList3 = () => {
  isListVisible3.value = !isListVisible3.value;
  dharmaList3.value.style.display = isListVisible3.value ? 'block' : 'none';
};

const toggleList4 = () => {
  isListVisible4.value = !isListVisible4.value;
  dharmaList4.value.style.display = isListVisible4.value ? 'block' : 'none';
};

const goToDrive = (driveUrl) => {
  window.open(driveUrl, '_blank');
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