<template>
  <div class="container">
    <h1 class="welcome-text">พระสุธรรมคณาจารย์ (หลวงปู่เหรียญ วรลาโภ)</h1>
    <div class="empty-box">
      <img src="/pu_rian.jpg" class="image" />
      <h2 class="birth-title">ประวัติพระสุธรรมคณาจารย์ (หลวงปู่เหรียญ วรลาโภ)</h2>
      <p class="birth-detail">
        หลวงปู่เหรียญ วรลาโภ นามเดิมว่า เหรียญ ใจขาน หลวงปู่เหรียญท่านเกิด วันพุธที่ 8 เมษายน พ.ศ. 2455 ตรงกับวัดขึ้น 2 ค่ำ เดือนยี่ ปีชวด 
        ณ. บ้านหม้อ ตำบลบ้านหม้อ อำเภอศรีเชียงใหม่ จังหวัดหนองคาย โยมบิดา ชื่อ นายผา ใจขาน โยมมารดา ชื่อ นางพิมพา ใจขาน 
        หลวงปู่เหรียญ ฯท่านมีพี่น้องร่วมบิดามารดาเดียวกัน 7 คน หลวงปู่เหรียญฯ 
        ท่านเป็นบุตรคนที่ 2 บรรดาพี่น้องผู้ที่เกิดร่วมบิดามารดาเดียวกัน 6 คนนั้นได้เสียชีวิตตั้งแต่ยังเล็ก ๆ ทุกคน 
        เมื่อหลวงปู่เหรียญอายุได้ 10 ขวบโยมมารดาก็ถึงแก่กรรมจากไปเป็นการสูญเสียครั้งยิ่งใหญ่และครั้งแรกในวัยเด็ก 
        ครั้นอยู่ต่อมาไม่นานโยมบิดาก็ไปมีภรรยาใหม่ หลวงปู่เหรียญ ฯ จึงได้ย้ายมาอยู่กับโยมยายจนได้อายุ 13 ปี 
        และหลวงปู่ก็ได้เรียนหนังสือจนจบชั้น ป. 4 ระดับการเรียนอยู่ในเกณฑ์ที่ดีมาก หลวงปู่เหรียญฯ ดีใจมากที่โยมบิดาอนุญาตให้ไปบวชตามใจประสงค์ 
        อย่างแรงกล้า หลวงปู่เหรียญฯ ท่านได้เตรียมตัวบวชเป็นตาผ้าขาวก่อนเรียนท่องขานนาคฝึกข้อวัตรรักษาศีล 8 อยู่ 15 วันก็ได้อุปสมบท 
        ณ. พระอุโบสถวัดบ้านหงส์ทอง อำเภอท่าบ่อ จังหวัดหนองคาย มีท่านพระครูวาปีดิฐวัตรเป็นพระอุปัชฌาย์ ท่านพระอาจารย์พรหม เป็นพระกรรมวาจาจารย์ 
        เมื่อเดือน มกราคม พ.ศ. 2475 ในฝ่ายมหานิกาย
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">ธรรมะพิเศษหลวงปู่เหรียญ วรลาโภ</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 1</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 2</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList4">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 3</span>
        <ul ref="dharmaList4" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems4" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList5">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 4</span>
        <ul ref="dharmaList5" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems5" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList6">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 5</span>
        <ul ref="dharmaList6" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems6" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList7">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 6</span>
        <ul ref="dharmaList7" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems7" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList8">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 7</span>
        <ul ref="dharmaList8" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems8" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList9">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 8</span>
        <ul ref="dharmaList9" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems9" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList10">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 9</span>
        <ul ref="dharmaList10" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems10" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList11">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 10</span>
        <ul ref="dharmaList11" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems11" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList12">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 11</span>
        <ul ref="dharmaList12" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems12" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList13">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 12</span>
        <ul ref="dharmaList13" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems13" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList14">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 13</span>
        <ul ref="dharmaList14" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems14" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList15">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 14</span>
        <ul ref="dharmaList15" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems15" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList16">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 15</span>
        <ul ref="dharmaList16" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems16" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList17">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 16</span>
        <ul ref="dharmaList17" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems17" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList18">ธรรมเทศนาหลวงปู่เหรียญชุดที่ 17</span>
        <ul ref="dharmaList18" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems18" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1jvNqaFVnXfBCSC3sFgD2e0nu1Mx_vtlK?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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

const dharmaList5 = ref(null);
let isListVisible5 = ref(false);

const dharmaList6 = ref(null);
let isListVisible6 = ref(false);

const dharmaList7 = ref(null);
let isListVisible7 = ref(false);

const dharmaList8 = ref(null);
let isListVisible8 = ref(false);

const dharmaList9 = ref(null);
let isListVisible9 = ref(false);

const dharmaList10 = ref(null);
let isListVisible10 = ref(false);

const dharmaList11 = ref(null);
let isListVisible11 = ref(false);

const dharmaList12 = ref(null);
let isListVisible12 = ref(false);

const dharmaList13 = ref(null);
let isListVisible13 = ref(false);

const dharmaList14 = ref(null);
let isListVisible14 = ref(false);

const dharmaList15 = ref(null);
let isListVisible15 = ref(false);

const dharmaList16 = ref(null);
let isListVisible16 = ref(false);

const dharmaList17 = ref(null);
let isListVisible17 = ref(false);

const dharmaList18 = ref(null);
let isListVisible18 = ref(false);





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
  
]);

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
  
]);

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
]);

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
  
]);

const dharmaItems5 = ref([
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
  
]);

const dharmaItems6 = ref([
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

]);

const dharmaItems7 = ref([
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

]);

const dharmaItems8 = ref([
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

]);

const dharmaItems9 = ref([
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

]);

const dharmaItems10 = ref([
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
  
]);

const dharmaItems11 = ref([
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
]);

const dharmaItems12 = ref([
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
  
]);

const dharmaItems13 = ref([
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
  
]);

const dharmaItems14 = ref([
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

const dharmaItems15 = ref([
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
  
]);

const dharmaItems16 = ref([
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
  
]);

const dharmaItems17 = ref([
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
  
]);

const dharmaItems18 = ref([
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

const toggleList5 = () => {
  isListVisible5.value = !isListVisible5.value;
  dharmaList5.value.style.display = isListVisible5.value ? 'block' : 'none';
};

const toggleList6 = () => {
  isListVisible6.value = !isListVisible6.value;
  dharmaList6.value.style.display = isListVisible6.value ? 'block' : 'none';
};

const toggleList7 = () => {
  isListVisible7.value = !isListVisible7.value;
  dharmaList7.value.style.display = isListVisible7.value ? 'block' : 'none';
};

const toggleList8 = () => {
  isListVisible8.value = !isListVisible8.value;
  dharmaList8.value.style.display = isListVisible8.value ? 'block' : 'none';
};

const toggleList9 = () => {
  isListVisible9.value = !isListVisible9.value;
  dharmaList9.value.style.display = isListVisible9.value ? 'block' : 'none';
};

const toggleList10 = () => {
  isListVisible10.value = !isListVisible10.value;
  dharmaList10.value.style.display = isListVisible10.value ? 'block' : 'none';
};

const toggleList11 = () => {
  isListVisible11.value = !isListVisible11.value;
  dharmaList11.value.style.display = isListVisible11.value ? 'block' : 'none';
};

const toggleList12 = () => {
  isListVisible12.value = !isListVisible12.value;
  dharmaList12.value.style.display = isListVisible12.value ? 'block' : 'none';
};

const toggleList13 = () => {
  isListVisible13.value = !isListVisible13.value;
  dharmaList13.value.style.display = isListVisible13.value ? 'block' : 'none';
};

const toggleList14 = () => {
  isListVisible14.value = !isListVisible14.value;
  dharmaList14.value.style.display = isListVisible14.value ? 'block' : 'none';
};

const toggleList15 = () => {
  isListVisible15.value = !isListVisible15.value;
  dharmaList15.value.style.display = isListVisible15.value ? 'block' : 'none';
};

const toggleList16 = () => {
  isListVisible16.value = !isListVisible16.value;
  dharmaList16.value.style.display = isListVisible16.value ? 'block' : 'none';
};

const toggleList17 = () => {
  isListVisible17.value = !isListVisible17.value;
  dharmaList17.value.style.display = isListVisible17.value ? 'block' : 'none';
};

const toggleList18 = () => {
  isListVisible18.value = !isListVisible18.value;
  dharmaList18.value.style.display = isListVisible18.value ? 'block' : 'none';
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