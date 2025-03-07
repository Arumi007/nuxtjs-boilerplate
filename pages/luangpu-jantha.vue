<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่จันทา ถาวโร</h1>
    <div class="empty-box">
      <img src="/pu_jan.jpg" class="image" />
      <h2 class="birth-title">ประวัติหลวงปู่จันทา ถาวโร</h2>
      <p class="birth-detail">
        หลวงปู่จันทา ถาวโร เป็นพระภิกษุฝ่ายอรัญวาสี ศิษย์ของพระอาจารย์มั่น ภูริทัตโต ท่านเป็นที่เคารพศรัทธาของพุทธศาสนิกชนทั่วไป และมีลูกศิษย์ลูกหาจำนวนมาก
      <br><strong>ชาติกำเนิด</strong>
      </p>

      <p class="birth-detail">
      หลวงปู่จันทา ถาวโร เกิดเมื่อวันเสาร์ที่ 10 กุมภาพันธ์ พ.ศ. 2465 
      มีชื่อจริงว่า นายจันทา ชัยนิด เป็นชาวร้อยเอ็ด 
      <br><strong>การอุปสมบท</strong>
      </p>

      <p class="birth-detail">
                หลวงปู่จันทาญัตติจากมหานิกายเป็นธรรมยุตเมื่อปี พ.ศ. 2493 
          เริ่มฝึกจิตกับหลวงปู่ทับ เขมโกในพรรษาแรก 
          <br><strong>ปฏิปทาและคุณธรรม</strong>
      </p>

      <p class="birth-detail">
          หลวงปู่จันทาได้ฝากตัวเข้ารับการฝึกอบรมจากพ่อแม่ครูอาจารย์หลายรูป อาทิ หลวงปู่บัว หลวงปู่ฝั้น อาจาโร หลวงปู่ขาว อนาลโย หลวงปู่หลุย จันทสาโร หลวงตามหาบัว ญาณสัมปันโน รูปที่ท่านอยู่อุปฐากนานที่สุดคือ หลวงปู่ขาว 
          เมื่อมาสู่สำนักถ้ำกลองเพลนั้น หลวงปู่ขาวให้อดนอน ผ่อนอาหาร เร่งความเพียร 
          ท่านเน้นการปลุกเสกตน เป็นสิ่งสำคัญมากสำหรับชาวพุทธ 
          เป็นพระที่บริสุทธิ์ ประพฤติดี ปฎิบัติชอบ ในสายพระอาจารย์มั่น
          <br><strong>สถานที่สำคัญ</strong>
      </p>

      <p class="birth-detail">
          วัดป่าเขาน้อย ตำบลวังทรายพูน อำเภอวังทรายพูน จังหวัดพิจิตร 
      <br><strong>มรณภาพ</strong>
      </p>

      <p class="birth-detail">
          หลวงปู่จันทา ถาวโร มรณภาพด้วยอาการสงบ เมื่อเวลา 06.00 น วันที่ 21 กุมภาพันธ์ พ.ศ. 2555 ด้วยโรคชรา
          <a href="https://www.web-pra.com/amulet/%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9B%E0%B8%B9%E0%B9%88%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B2-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2/history" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>
      
      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">1. รากฐานแห่งธรรม</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">2. เส้นทางพาเดิน</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList4">3. แนวทางนักปฏิบัติ</span>
        <ul ref="dharmaList4" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems4" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1SjvOXVhddkIGmPonVNxHxOg9LOiSH--w?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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

const dharmaList4 = ref(null);
let isListVisible4 = ref(false);

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

]);

/* หัวใจนักภาวนา */

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
  
]);

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