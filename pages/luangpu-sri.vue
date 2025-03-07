<template>
  <div class="container">
    <h1 class="welcome-text">พระเทพวิสุทธิมงคล (ศรี มหาวีโร)</h1>
    <div class="empty-box">
      <img src="/pu_sri.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
      พระเทพวิสุทธิมงคล หรือ หลวงปู่ศรี มหาวีโร เป็นพระเถระฝ่ายวิปัสสนาธุระ ศิษย์พระอาจารย์มั่น ภูริทัตโต อดีตเจ้าอาวาสวัดประชาคมวนาราม <br><br>
      <strong>ชาติกำเนิด</strong> <br>
      </p> 
      <p class="birth-detail">นามเดิมของท่านชื่อ ศรี เกิดในสกุลปักกะสีนัง เมื่อวันที่ 3 พฤษภาคม พ.ศ. 2460 ตรงกับวันศุกร์ เดือนหก ปีมะเมีย ที่บ้านขามป้อม อำเภอวาปีปทุม จังหวัดมหาสารคาม โยมบิดาชื่อนายอ่อนสี โยมมารดาชื่อนางทุม ปักกะสีนัง <br><br>
      <strong>บรรพชาอุปสมบท</strong> <br>
      </p> 
      <p class="birth-detail">
      ด้วยความเลื่อมใสศรัทธาในพระพุทธศาสนา ท่านได้บรรพชาอุปสมบทเมื่อปี พ.ศ. 2488 ณ พัทธสีมาวัดราษฎร์รังสรรค์ บ้านป่ายาง อำเภอเมืองร้อยเอ็ด จังหวัดร้อยเอ็ด โดยมีพระโพธิญาณมุนี (ดำ โพธิญาโณ) เจ้าคณะจังหวัดร้อยเอ็ด (ธรรมยุต) เป็นอุปัชฌาย์ ได้รับฉายาทางพระพุทธศาสนา เป็นมคธว่า "มหาวีโร" <br><br>
      พรรษาแรกในชีวิตสมณะผู้ละวาง ท่านได้พำนักศึกษาปฏิบัติธรรมอยู่กับท่านพระอาจารย์คูณ อุตตโม วัดประชาบำรุง มหาสารคาม ปีต่อมา พ.ศ. 2489 ท่านได้จาริกไปจำพรรษาที่วัดป่าแสนสำราญ อำเภอวารินชำราบ จังหวัดอุบลราชธานี มีโอกาสศึกษาปฏิบัติธรรม เจริญวิปัสสนากับท่านพระอาจารย์สิงห์ ขันตยาคโม ซึ่งเป็นศิษย์สำคัญของท่านพระอาจารย์มั่น ภูริทัตโต 
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5_(%E0%B8%A8%E0%B8%A3%E0%B8%B5_%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B5%E0%B9%82%E0%B8%A3)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา ของหลวงปู่ศรี</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/160s31AN0Tt8tMnmOneG3ERPcoHjhmBJM?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '55. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '56. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '57. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '58. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '59. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '60. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '61. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '62. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
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