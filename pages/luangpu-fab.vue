<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่แฟ๊บ สุภัทโท</h1>
    <div class="empty-box">
      <img src="/pu_fab.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อของหลวงปู่แฟ๊บ สุภัทโท</h2>
      <p class="birth-detail">
        หลวงปู่แฟ๊บ สุภัทโท วัดป่าดงหวาย บ้านจาร ตำบลบ้านม่วง อำเภอบ้านม่วง จังหวัดสกลนคร 
        เกิดเมื่อวันอาทิตย์ที่ ๑ มกราคม พ.ศ.๒๔๖๕ ขึ้น ๑๕ ค่ำ เดือนยี่ ปีจอ ณ บ้านคำชะอี จังหวัดมุกดาหาร 
        ท่านเป็นผู้มีความเลื่อมใสศรัทธาในพระพุทธศาสนาตั้งแต่วัยเยาว์ มีโอกาสได้ฟังพระธรรมเทศนาและถวายงานต่างๆ 
        แด่องค์หลวงปู่เสาร์และหลวงปู่มั่น ได้ฝึกปฏิบัติจิตภาวนาเจริญในธรรมต่อเนื่องมาโดยลำดับ
        หลังจากภรรยาเสียงชีวิตลง เมื่อ พ.ศ. ๒๕๒๓ หลวงปู่ได้อุปสมบทเป็นพระภิกษุฝ่ายธรรมยุต เมื่อวันที่ ๕ กรกฎาคม พ.ศ.๒๕๒๕ 
        ณ วัดอรัญญิกาวาส อำเภอบ้านผือ จังหวัดอุดรธานี ท่านมีโอกาสได้ฟังพระธรรมเทศนา และเป็นลูกศิษย์ครูบาอาจารย์หลายรูป 
        เช่น หลวงปู่เทสก์ เทสรังสี หลวงปู่ชอบ ฐานสโม หลวงตามหาบัว ญาณสัมปันโน หลวงปู่หล้า เขมปัตโต ฯลฯ 
        ท่านเป็นผู้ที่มีจิตใจกล้าหาญ เด็ดเดี่ยว เข้มแข็ง อดทน ตั้งมั่นในการบำเพ็ญเพียร ปฏิบัติภาวนาเพื่อหาความหลุดพ้นทุกข์ในสามแดนโลกธาตุจนหายสงสัยในธรรมทั้งปวง ไม่ต้องการกลับมาเวียนว่ายตายเกิดในวัฏฏะสงสารอีกต่อไป
        หลวงปู่แฟ๊บ สุภัทโท เป็นผู้เปี่ยมล้นด้วยเมตตาบารมี ท่านได้ทำการก่อสร้างและบูรณะศาสนสถาน ศาลา เจดีย์ วิหาร ตลอดจนเมตตาสร้างโรงพยาบาล 
        พร้อมมอบพัสดุและครุภัณฑ์ต่างๆ แก่หน่วยงานหลายแห่ง อีกทั้งเป็นหนึ่งในกองทัพธรรมโครงการผ้าป่าช่วยชาติ 
        มีลูกศิษย์ทั้งพระสงฆ์และฆราวาสมาขอความเมตตาฟังพระธรรมเทศนา และแนวทางการฝึกปฏิบัติภาวนาเป็นจำนวนมาก 
        ท่านได้ละสังขารเมื่อวันที่ ๑ พฤศจิกายน พ.ศ.๒๕๕๓ สิริอายุรม ๘๐ ปี ๑๐ เดือน พรรษาที่ ๒๙ สามารถกล่าวได้ว่า หลวงปู่แฟ๊บ สุภัทโท 
        เป็นผู้สำเร็จกิจทั้งทางโลกและทางธรรมอย่างสมบูรณ์

      </p>
      
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">1. พระธรรมเทศนา โดย หลวงปู่แฟ๊บ สุภัทโท  ชุดที่ 1</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">2. พระธรรมเทศนา โดย หลวงปู่แฟ๊บ สุภัทโท  ชุดที่ 2</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1VoaArJMMHRQd9mimdb4fDq7A6y6zNwvO?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: '63. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '64. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '65. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '66. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '67. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '68. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '69. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '70. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '71. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '72. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '73. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '74. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '75. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '76. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '77. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '78. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '79. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '80. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '81. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '82. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '83. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '84. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '85. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '86. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '87. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '88. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '89. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '90. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '91. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '92. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '93. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '94. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '95. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '96. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '97. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '98. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '99. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '100. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '101. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '102. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '103. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '104. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '105. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '106. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '107. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '108. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' }, 
  { title: '109. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '110. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '111. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '112. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '113. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '114. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '115. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '116. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '117. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '118. bb', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
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