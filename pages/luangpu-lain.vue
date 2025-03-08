<template>
  <div class="container">
    <h1 class="welcome-text">พระสุธรรมคณาจารย์ (หลวงปู่เหรียญ วรลาโภ)</h1>
    <div class="empty-box">
      <img src="/pu_rian.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        พระสุธรรมคณาจารย์ หรือ หลวงปู่เหรียญ วรลาโภ มีนามเดิมว่า เหรียญ ใจขาน เกิดเมื่อวันที่ 8 มกราคม พ.ศ. 2455 ณ บ้านหม้อ ตำบลบ้านหม้อ อำเภอศรีเชียงใหม่ จังหวัดหนองคาย (ปัจจุบันคือ จังหวัดหนองบัวลำภู) บิดามารดาชื่อ นายผาและนางพิมพา ใจขาน
      </p>

      <p class="birth-detail">
      เมื่ออายุ 20 ปี ท่านได้ตัดสินใจอุปสมบท โดยได้รับการสนับสนุนจากอาจารย์บุญมา ฐิตเปโต และได้เข้าพิธีอุปสมบทในคณะธรรมยุติกนิกาย ณ วัดโพธิสมภรณ์ จังหวัดอุดรธานี ในปี พ.ศ. 2476
      <br><strong>การศึกษาและการปฏิบัติธรรม</strong><br>
      </p>

      <p class="birth-detail">
      พรรษาแรก ท่านจำพรรษา ณ วัดป่าสาระวารี จังหวัดอุดรธานี 
      </p>

      <p class="birth-detail">
      หลังจากออกพรรษา ท่านได้ออกธุดงค์ไปยังถ้ำผาปู่และถ้ำผาบิ้ง จังหวัดเลย
      </p>

      <p class="birth-detail">
      พ.ศ. 2477 ท่านกลับมาจำพรรษาที่วัดอรัญวาสี จังหวัดหนองคาย
      </p>

      <p class="birth-detail">
      พรรษาที่ 6 ท่านได้รับมอบหมายจากพระอาจารย์มั่น ภูริทัตโต ให้จำพรรษาที่อำเภอพร้าว จังหวัดเชียงใหม่ พร้อมกับพระอาจารย์เนียมและพระอาจารย์อ่อนศรี 
      </p>

      <p class="birth-detail">
      หลังจากออกพรรษา ท่านได้ออกธุดงค์บนเขาดอยพระเจ้ากับพระอาจารย์มั่นและพระรูปอื่น ๆ รวม 6 รูป 
      
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
  { title: '1. ชีวประวัติหลวงปู่เหรียญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. กรรมปางก่อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. หลวงปู่ออกบวช', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. หนาวใจเอาอะไรห่ม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. การภาวณาของหลวงปู่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ม้าอาชาไนย คนอาชาไนย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ควรถอนตนออกจากทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. จุดมุ่งหมายของการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ชีวิตจะพ้นภัยต้องอาศัยธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ให้เห็นโทษของ ราคะ โทษะ โมหะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การบำเพ็ญบารมีของพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. การได้พบพุทธศาสนาเป็นของยาก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems2 = ref([
   { title: '1. อุบายละสังขารรูปนาม - 5 กค 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. อนุบุพพิกถา - 5 กย 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. สติปัฏฐานสี่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. อานุภาพขันติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พิจารณารูปธรรม นามธรรม - 20 เมย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ธรรมสังเวชปฏิเสธตันหา - 29 เมย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. เกิดแล้วดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. จิตนี้เป็นของฝึกยาก - 18 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ธรรมบรรยายวันอุโบสถ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ฝึกตายก่อนตาย - 12 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. อุบายชำระจิต - 17 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ควรฝึกจิตอย่าให้เกาะของไม่เที่ยง - 13 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เทศน์อบรม - 16 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เจริญอสุภะ ชำระจิตด้วยศีล - 17 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. โทษของการไม่ฝึกจิต - 20 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. อุบายแก้ไขจริตนิสัยของตนให้ดีขึ้น - 20 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ธรรมเป็นเครื่องชำระจิตให้สะอาด - 21 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. เมียน้อย เมียหลวง - 3 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ไม่ยอมละ - 3 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ความเข้าใจในเรื่องพุทธศาสนา - 6 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อันตรายของภิกษุสามเณรผู้บวชใหม่สี่อย่าง - 7กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ธรรมย่อมรักษาผู้ประพฤติธรรม - 7 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. เทศน์อบรม - 7 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ข้อปฏิบัติในศาสนา - 9 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สอนให้รู้เท่าทันทุกข์ตามความเป็นจริง - 15 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. อย่าชิงสุกก่อนห่าม - 17 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. เตรียมพร้อมอยู่เสมอ - 22 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ปัญญาสอนจิต - 29 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. สอนให้ละชั่วทำความดี - 27 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. จงตั่งใจทำความเพียร - 20 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ให้เอาบุญเอาคุณเป็นเครื่องอยู่ - 31 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ขันติเป็นกำลังของนักพรต - 31 กค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ธรรมย่อมรักษาผู้ประพฤติธรรม - 1 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ธรรมเทศนาตอนเช้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สอนให้ละความเห็นผิด - 4 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ศรัทธาและปัจจัยแห่งชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. นิวรณ์เป็นธรรมเครื่องกั้นจิต - 10 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ชีวิตคือการต่อสู้ ศัตรูคือยากำลัง - 10 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. วิสัยนักปราชญ์ - 1 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ธรรมะบรรยาย - 18 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. อบรมภิกษุสามเณร - 18 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. โทษแห่งความรัก - 20 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems3 = ref([
  { title: '1. คำสอนประโยคสุดท้าย - 31 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ผู้ล่วงกามเสียได้เป็นสุขในโลก - 31 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. สติควบคุมจิต - 8 กย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เทศน์อบรม - 7 กย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. คุณสมบัติของอุบาสก 5 ประการ - 13 กย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. จิตที่สงบย่อมเกิดปัญญา - 15 กย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ธรรมเทศนา - 15 กย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. สอนให้รู้จักทำใจให้เป็นกลาง - 29 กย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เทศน์อบรม - 29 กย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ธรรมของจริงกับของไม่จริงเป็นของคู่กัน - 15 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ผู้รู้หาข้องไม่ - 15 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เทศน์อบรม - 16 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ความไม่เบียดเบียนกันเป็นธรรมอย่างยิ่ง - 16 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. พุทธศาสนาดีอย่างไร - 26 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. เทศน์อบรม - 27 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. จุดมุ่งแห่งการปฏิบัติธรรม - 28 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. เทศน์อบรม - 29 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. อุบายแห่งการฝึกจิตเพื่อรู้ยิ่ง - 9 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. คนสามบ้าน บุคคลหาได้ยาก - 10 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. สติกับจิตเป็นของมีกำลัง - 16 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. สติ กาย จิต - 17 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ธรรมวินัยเป็นของประเสริฐ - 19 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. หนอนในหลุมคูต - 20 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. คนพ้นโลก - 20 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. เทศน์อบรม - 20 พย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. การสำรวจให้ติดต่อกันไป - 1 พค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. การละกิเลสไปพร้อมกับการสร้างคุณธรรม - 2 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. อุบายการเจริญวิปัสนา - 5 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. เทศน์อบรม -  6 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. สุขกับสงบเป็นของคู่กัน - 16 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. มุ่งฝึกตนให้สงบ - 16 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. การอดทนเป็นอุปกรณ์แห่งการปฏิธรรม - 19 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. เทศน์อบรม - 19 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. สอนให้รู้จักวิธีฝึกฝนอบรมตน - 30 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. การเข้าไประงับแห่งสังขาร - 31 ธค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ละความยึดมั่น - 6 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. เทศน์อบรม - 20 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ข้อปฏิบัติของนักบวช - 11 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ข้อปฏิบัติขัดเกลากิเลส - 12 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. โทษของตัณหา - 15 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. เกิดมาเพื่ออะไร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. จิตเป็นสิ่งสำคัญที่ต้องฝึก - 27 พค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. วันอุโบสถ - 18 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. จงทำที่พึ่งให้แก่ตน - 20 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. รักษาใจ - 20 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. ควรปฏิบัติตนให้เป็นคนมักน้อยสันโดษ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. เทศน์อบรม - 11 กพ 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. การปฏิบัติธรรมเพื่อความก้าวหน้า - 14 กพ 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ทุกคนต้องมีสติสำรวมใจไว้ให้ดี - 14 กพ 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. คนโง่มีมากกว่าคนฉลาด - 13 พย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. โง่แกมหยิ่ง ฉลาดแกมโกง - 15 กพ 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '52. ชีวิตย่อมหมุนไปตามกรรม - 16 กพ 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '53. โอวาทย่อ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '54. เทศน์อบรม - 18 กพ 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '55. พหรมวิหารสี่ - 19 มีค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '56. ม้าอาชาไนย-คนอาชาไนย - 17 มีค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '57. อุบายวิธีทำใจให้สงบ - 19 มีค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems4 = ref([
  { title: '1. รู้แจ้งในกาย - 4 มีค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. เทศน์อบรม - 5 เมย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ตนแลเป็นที่พึ่งแห่งตน - 5 เมย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. สอนจิตให้รู้เท่าในธรรมทั้งหลาย - 6 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. สังขารทั้งหลายไม่ใช่ตัวตน - 4 เมย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ความสิ้นกามทั้งหลายเป็นสุขอย่างยิ่ง - 8 เมย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. สาราณิยธรรม 6 อย่าง - 10 เมย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. สะดุ้งต่อความตาย - 19 เมย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เทศน์อบรม - 19 เมย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. หลักการฝึกอบรมของพระศาสดา - 29 มิย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. มุ่งความสงบ - 30 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. โทษแห่งโทสะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. อบรบ ศีล สมาธิ ปัญญา - 2 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เทศน์อบรม - 14 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ข้อปฏิบัติธรรมสายกลาง - 3 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. อบรมจิตตภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. โอวาทอบรมภิกษุ-สมาเณร - 4 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สติปัฏฐานธรรม - 4 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. โอวาทอบรมพระภิกษุ-สามเณร - 6 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. โอวาทอบรมภิกษุ-สามเณร - 3 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. พึ่งสำรวมใจให้ต่อเนื่องกัน - 7 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สุขทุกข์อยู่ที่ใจดีหรือใจร้าย - 15 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ผู้ใดไม่สำรวมจิตย่อมก่อทุกข์ให้ตน - 20 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. อุบายฝึกจิต - 20 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. อบรมจิตภาวนา (ลักษณะของขันธ์ 5) - 30 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. กิเลส - 30 กค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. แก่นแห่งชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. แนะนำข้อปฏิบัติในการดำเนินชีวิต - 3 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. เมื่อไม่รู้มันก็พาเราหลง - 5 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ธาตุสี่ - 20 สค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ข้อปฏิบัติในพุทธศาสนา - 6 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. อุบายคลายอุปทาน - 7 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ความเพียรของมหาบุรุษ - 9 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. เพ่งจิตมาดูธรรมของจริง - 10 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. บุคคลไม่ฝึกจิต ย่อมอยู่เป็นทุกข์ - 16 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ควรถอนตนออกจากทุกข์ - 17 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. เราปฏิบัติธรรมเพื่อความรู้ยิ่งเห็นจริง - 29 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ชีวิตจะตกต่ำถ้าเอากิเลสเป็นผู้นำ - 3 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. อบรม (ความเคารพ) - 1 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. คุณเคยพิจารณาอย่างนี้ไหม - 5 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. ธรรมะเป็นเครื่องขจัดกิเลส - 4 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ความโลภ - 5 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ธาตุสี่ ขันข์ห้า - 6 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. เครื่องขัดเกลากิเลส - 8 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems5 = ref([
  { title: '1. พิจารณาธรรมของจริง - 9 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. สะสมบุญด้วยศีล สมาธิ ปัญญา - 25 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ร่างกายไม่ใช่ของเราควรอาศัยเขารีบสร้างบารมี - 13 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ก่อนตาย - 13 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. เพื่อจิตดวงเดียว - 14 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. เพื่อเตรียมตัวตายไว้เสมอ - 14 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. จะพ้นทุกข์ได้ต้องอาศัยตนเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. รักษาสัจจะความจริงใจ - 15 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. จงรักษาจิตให้หลุดพ้นจากอำนาจของกิเลส - 16 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ละความยึดมั่นถือมั่น - 20 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. โลกกับธรรมต้องดำเนินคู่กันไป - 11 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ปัญญาเป็นอริยสัจธรรม - 29 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. รูปขันธ์ - 29 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. รั้วกั้นความคะนองของจิต - 1 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ปาริสุทธิศิลสี่ - 8 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ตัดกระแสด้วยสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. คนประมาทเปรียบเหมือนคนตายแล้ว - 6 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ผู้มีศีลย่อมไม่ตกไปสู่ที่ชั่ว - 8 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. อนุภาพแห่งศีล - 4 ตค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อิทธิบาทสี่ - 5 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. หลักของพุทธศาสนา - 4 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ควรสำรวมจิต วางแล้วสบาย - 7 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ความพ้นภัยจากรูปนาม - 7 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. หว่านพืชเช่นไรย่อมได้ผลเช่นนั้น - 5 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. เทศน์อบรม - 9 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. กิเลสตัณหาพาท่องทุกข์ - 9 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. โทษของตันหา - 10 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. เทศน์อบรม - 10 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. มีทุกข์อยู่ไม่รู้จักทุกข์ - 15 ธค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. คนเราเร่าร้อนเพราะอะไร - 9 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. การสำรวมตน - 17 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ขันติธรรม - 26 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ยารักษาใจต้องรักษาด้วยธรรม - 22 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. เทศน์อบรม - 22 ตค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ลำพึงถึงขันธ์ห้า - 10 พย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. เกิดขึ้นแล้วดับไป', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. เทศน์ที่การไฟฟ้าฝ่ายผลิต - 15 พย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ปลงขันธ์ห้าภาระอันหนัก - 16 พย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. เทศน์อบรม - 17 พย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. มรดกอันลำค่าของผู้มีวาสนา - 18 พย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. เทศน์อบรม - 18 พย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. หลวงปู่บุญหนัก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ตามรอยพระศาสดา - 10 ธค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ข้อปฎิบัติให้ถึงความดับทุกข์ - 15 ธค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. เทศน์อบรม - 16 ธค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. งานทำบุญฉลองอายุครบ 76 ปี - 7 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ทวนกระแสเข้าภายใน - 9 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. คนเกียจคร้านเป็นมลทินของสังคม - 9 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ธรรมสังเวชปฏิเสธตันหา - 12 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ผู้รู้หาข้องไม่ - 17 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. เทศน์อบรม - 17 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '52. เรื่องจิตใจเราต้องปรับปรุงจึงดี - 17 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '53. รักษาจิตให้ดีอย่าให้มีอคติสี่ - 16 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems6 = ref([
  { title: '1. คนเขลาข้องอยู่-ผู้รู้หาข้องไม่ - 17 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. รักษาใจอย่าให้ลำเอี้ยง 4 อย่าง - 16 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ปุถุชนกับชนอริยะ - 19 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เราควรมุ่งขจัดภัยของจิต - 18 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. เทศน์อบรม - 19 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ทวนกระแสจิตไม่หลงติดสมมุติ - 20 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. บำเพ็ญคุณธรรม - 26 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ฝึกกรรมฐานทำจิตให้ว่าง - 28 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. อบรมพระ-เณร - 27 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. เทศน์อบรม - 9 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ผู้มีปัญญาย่อมแสวงหาแต่ทางที่ชอบ - 9 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ทำความพอให้เป็น - 13 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. วิธีพักจิต - 13 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ภาวนารู้เท่า - 14 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ฝึกจิตให้ฉลาด - 15 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. สังขารธรรมสมบัติโลก - 16 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ชำแหละกายรักษาจิต - 27 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ฝึกจิตพิจารณาตน - 16 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. สติและปัญญาตามรักษาจิต - 20 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. เห็นเองเป็นเอง - 20 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. เทศน์อบรม - 10 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. รักษาจิตอย่าให้ติดอยู่กับของไม่เที่ยง - 28 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. พิจารณากายในกาย - 1 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ธรรมทั้งหลายไม่ควรถือมั่น - 1 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สติควบคุมจิต - 2 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. บุคคล 4 จำพวก - 2 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. เทศน์อบรม - 3 มค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ฝึกจิตให้พิจารณาตน - 4 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ตรวจดูกายดูใจตนเอง - 5 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. พึงตนเอง - 16 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ควรพัฒนาชีวิตให้สูงขึ้น - 21 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. มืดและสว่าง - 17 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ภาระอันหนัก - 17 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. จริต 6 อย่าง - 4 เมย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. โอวาทว่าด้วยการคบ คิด ฝึก - 4 เมย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. อบรมจิตตภาวนา - 4 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ตามรักษาจิต อย่าให้ติดสมมุติ - 5 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ชีวิตกับที่พึง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. เทศน์อบรม - 5 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. อุบายคลายจริต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. เทศน์อบรม - 8 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ความอดทนเป็นตบะอย่างยิ่ง - 10 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. เทศน์อบรม - 11 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ทุกสิ่งทุกอย่างอยู่กับการกระทำ - 12 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. บารมี 10 ผู้เลิศทางโรคน้อย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. เทศน์อบรม - 19 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ผู้ไม่ภาวนาย่อมพาชีวิตให้ตกต่ำ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. กำหนดรู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. มุ่งความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. อุบายอบรมจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. บริวารของความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems7 = ref([
   { title: '1. ไม่เห็นทุกข์จะพ้นทุกข์ได้อย่างไร - 21 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. อุบายคลายความเร้าร้อนของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. อิทธิบาทธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เทศน์อบรม - 9 กย 2531', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ไม่ให้ส่งจิตไปออกข้างนอก - 15 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ธรรมทำให้ใกล้พระนิพาน - 6 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ธรรมที่ควรพิจารณา เนื่องๆ - 29 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. อุบายเจริญวิปัสสนาปัญญา - 29 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ปฏิบัติอย่างไรชื่อว่าปฏิบัติตรง - 30 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. เทศน์อบรม - 5 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ศัตรูของชีวิตคือจิตที่ไม่ได้ฝึก - 7 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. มันคือกิเลส - 7 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สร้างธรรมละกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อปริหานิยธรรม 7 อย่าง - 8 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. การรักษาศีลแปด - 14 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ให้รู้ธรรมของจริง - 14 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ธรรมเป็นคู่ปรับกับกิเลส - 16 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ธรรมย่อมรักษาผู้ประพฤติธรรม - 22 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. เทศน์อบรม - 22 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. จุดหมายปลายทาง - 30 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. เทศน์อบรม - 30 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ความเหนียวแน่นของกิเลส - 1 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. อุบายบังคับจิต - 30 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ฝึกจิตพิจารณากาย - 10 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. เกิดมาเพื่อะไร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. พิจารณาจึงเห็นได้ - 14 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. จิตที่ฝึกดีแล้วย่อมนำสุขมาให้ - 27 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. อบรมพระเณร - 15 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. เทศน์อบรม - 15 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. คณะธรรมทานทัวร์ - 15 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. พิจารณากายคลายอุปาทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ภาวนารู้เท่าชีวิต - 25 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ไม่ติดสมมุติ - 29 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ตามรอยนักปราชญ์ - 26 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ให้คิดพึงตนเอง - 28 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. เราควรฝึกฝน - 29 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. จะพ้นทุกข์ได้ต้องอาศัยฝึกจิต - 31 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. การปล่อยใจเป็นภัยของจิต - 29 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. การส่งจิตไปยึดสมบัติภายนอกเป็นทุกข์ - 1 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. เทศน์อบรม - 1 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. อย่าปล่อยชีวิตให้เสียเปล่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ธรรมกับชีวิต - 8 กย 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ผู้ปฏิบัติตนคือนักปฏิบัติธรรม - 14 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ตันหาพาท่องทุกข์ - 15 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. อคติธรรม 4 ประการ - 16 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. เทศน์อบรม - 16 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ควรทำความรู้แจ้งในกรรมและผลของกรรม - 23 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. จิตนี้ฝึกยากแต่ต้องฝึกจึงดีได้ - 24 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems8 = ref([
   { title: '1. บริหารขันธ์ - 27 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. อนิจจัง ทุกข์ขัง อนัตตา - 30 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. เทศน์อบรม - 30 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ตามรอย - 2 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พัฒนาจิตพิชิตความหลง - 3 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ตามรอยพระศาสดา - 4 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. จิตจะดีได้ต้องอาศัยปัญญาอบรม - 6 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ละความเห็นผิดทำความเห็นให้ถูก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ความคิดเป็นทานของคน - 5 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ยืมเขามาอย่าทำเล่น - 6 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. งานฝึกจิตเป็นกิจของผู้รู้ทั้งหลาย - 6 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ยืมเขามาถึงเวลาต้องคืนเขา - 17 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ชีวิตย่อมหมุนไปตามกรรม - 16 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เทศน์อบรม - 16 กพ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สร้างฐานของจิต - 30 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เทศน์อบรม - 30 กค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ภาวนารู้เท่าทุกข์ในขันธ์ - 9 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. เทศน์อบรม - 9 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. อุบายถอนตนออกจากวัฏฏะ - 15 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. เทศน์อบรม - 30 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ชีวิตในวัฏฏวน - 18 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. เหตุปัจจัยในวัฏฏวน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. กิเลสภัยของจิต 19 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ในพุทธศาสนานี้มุ่งสันติสุขให้แก่ชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. เทศน์อบรม - 25 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เพราะไม่รู้ธรรมของจริงจึงเที่ยวทุกข์ในสงสาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. เทศน์อบรม - 15 มค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ผู้ใดจักสำรวมจิตย่อมเห็นแจ้งในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. พิจารณาให้เห็นแจ้งในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. อุบายฝึกจิตให้เข็มแข็ง - 6 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ในหมู่มนุษย์ผู้ฝึกตนเป็นผู้ประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ความทุกข์ในชีวิตมีมากมาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. เทศน์อบรม - 16 ธค 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. การเพ่งพินิจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. เทศน์อบรม - 10 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. เทศน์อบรม - 13 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ทาสของตัณหา - 14 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ผู้ใดไม่สำรวมจิตชื่อว่าเป็นผู้ประมาท - 14 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. อุบายแก้ปัญหาชีวิต - 15 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. พลังห้า - 15 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. ผู้รู้ดีเป็นผู้เจริญ - 17 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. รู้เพื่อละ - 17 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. หยุดความคิดจิตสบาย - 20 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ตันหาพาก่อทุกข์ - 20 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. กรรมปางก่อน - 21 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. กรรมตบแต่ง - 11 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ประพฤติให้ตรงต่อธรรมต่อวินัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. เทศน์อบรม - 22 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ปมผลไม้ - 28 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. เทศน์อบรม -  10 สค 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. กรรมชั่วตามเผาผลาง - 30 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '52. ศึกษาให้รู้จริง - 31 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '53. กิเลสเผาวิญญาณ - 31 ตค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '54. เทศน์อบรม -  14 กย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '55. บาปบุญคุณโทษ - 16 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '56. วิธีปราบกิเลส - 12 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '57. อบรบจิตเจริญปัญญา - 17 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '58. เทศน์อบรม - 18 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '59. คนจะประเสริฐได้ก็เพราะมาละกิเลส - 18 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems9 = ref([
   { title: '1. เพียรละบาปบำเพ็ญบุญ - 19 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. เทศน์อบรม - 20 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. โลกหมุนวน - 20 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เมื่อไม่รู้มันก็พาเราหลง - 21 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ลักษณะตัดสินธรรมวินัย 8 ประการ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. เพียรสอดส่องมองย้อน - 27 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ทำอย่างไรจึงจะละกิเลสได้ - 27 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ศีลสังวร - 29 พย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ผู้อ่อนแอย่อมแพ้ขันธ์ห้า - 4 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ผู้เกียจคร้านย่อมอยู่เป็นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. แก่เจ็บตายไม่รู้สึกตน - 4 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. สติตั้งรู้แจ้งกลลวง - 9 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เดินสายกลางเพียรจ้องมองตน - 10 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ขันธ์ 5 อุปาทาน - 12 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ตกแต่งเรือนใจ - 13 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เกิดมาสร้างความดี - 13 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ชีวิตมีความทุกข์ - 25 ธค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ร้อนด้วยอะไร - 9 พค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. มัวเพลินไปทำไม ความตายอยู่ข้างหน้า - 2 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. เทศน์อบรม - 4 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. พุทธะเกิดแล้วอย่างนี้ - 3 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สิ่งจำเป็นต่อชีวิต - 5 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. คนใจเลื่อนลอยย่อมตกเป็นทาสของกิเลส - 4 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. การเจริญวิปัสสนา - 5 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. บวชหนีสงสาร - 5 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ทำความเห็นให้ถูกก่อนตาย - 9 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ข่าวจากยมบาล - 7 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ทุกข์สิ่งเสื่อมและดับไป - 9 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ข้อปฎิบัติไม่ผิด 3 อย่าง - 10 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. สัตว์หลงไม่รู้ความ - 16 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ให้มีคุณธรรมของนักบวช - 16 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. วันนี้ดีกว่าวันพรุ่งนี้ - 30 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ให้เรียนรู้ตัวเอง - 31 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ฝึกจิตให้ดี อัตตภาพนี้ไม่เที่ยง - 1 กพ 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ละความเห็นผิดทำความเห็นถูกต้อง - 2 กพ 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. อุบายฝึกจิต 3 อย่าง - 15 กพ 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ปลงธรรมสังเวช - 5 มีค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. อาศัยตัณหาละตัณหา - 6 มีค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ความสำรวมจิต - 7 มีค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. โทษของความรักความชัง - 8 มีค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. อบรมพระเณร - 8 มีค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. เหตุปัจจัยแห่งสังขารร่างกาย - 9 มีค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems10 = ref([
   { title: '1. ขันติธรรมเป็นเครื่องเผากิเลส - 9 มีค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. มักน้อยสันโดษเป็นปัจจัย ๔ เสียสละเป็นสมณะที่ดี 16', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ธรรมวินัย ๘ ประการ - 5 พค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ชีวิตคือการต่อสู้ - 2 เมย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. อบรมมาตุคาม การเรี่ยไร - 2 เมย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. จับให้มั่น คั้นให้ตาย สบายเอย - 3 เมย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. อย่าหลงผิดชีวิตจะเป็นหมัน - 14 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. เหตุปัจจัยของชีวิต - 15 เมย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ความดีคนดีทำง่าย - 19 เมย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. สุขทุกข์อยู่กับเหตุ - 20 เมย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ค่าของคนคือคนทำงาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เทศน์อบรม - 2 เมย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. วิสาขะฤกษ์ - 8 พค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ให้เคารพศีล วินัย เสียสละ - 7 พค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. คนเกียจคร้าน - 4 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ธรรมนาวา - 7 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. สังขารที่เที่ยงย่อมไม่มี - 11 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. เมื่อจิตไม่ดี ชีวิตก็เสียเปล่า - 14 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. เทศน์อบรม - 27 สค 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. เราปฏิบัติธรรมเพื่ออะไร - 12 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. เทศน์อบรม - 15 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ผู้ใคร่ครวญในธรรมเป็นผู้เจริญ - 16 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ผู้ชี้โทษเหมือนผู้ชี้ขุมทรัพย์ - 18 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. กิเลสมาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ขี้ไถทองคำ - 20 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เทศน์อบรม - 20 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ไม่ผิดศิลก็ไม่ผิดใจคน - 20 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ขี้ไถทองคำ ศิล สมาธิ ปัญญา - 20 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ธรรมเป็นไปเพื่อความเจริญฝ่ายเดียว - 27 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. เราปฏิบัติธรรมเพื่อชำระล้างกิเลส - 27 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ตามรอยพุทธกันเถอะ - 28 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. เทศน์อบรม - 17 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. การแสวงหาประโยชน์และความสุข - 28 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. สติสัมปชัญญะน้ำล้างความหลง - 29 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ข้อปฏิบัติของนักบวช - 5 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. สละชีวิตเพื่อรักษาศิล - 6 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. การฝึกจิตเพื่อชีวิตที่สูงขึ้น - 6 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. เครื่องกำจัดโณคของจิต - 7 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ความอ่อนน้อมเป็นคุณธรรมของนักบวช - 7 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. เมื่อไม่พิจารณาก็พาเราหลง - 8 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. สติควบจิตพิจารณษขันธ์ - 30 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ภัยร้ายในตัณหา - 18 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ความสุขที่ดวรแสวงหา - 20 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ความยึดถือเป็นทุกข์ - 19 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ทางไปสวรรค์ - 20 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. วันทำบุญอุทิศ - 20 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ให้เห็นเป็นสภาวะธาตุ สภาวะธรรม - 21 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. อบรบกายวาจาใจ - 21 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems11 = ref([
   { title: '1. เทศน์อบรม - 21 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ดับไฟ - 26 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. คนเกลียดคร้าน เอาแต่นอน อรัชชี กิเลส - 25 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ชีวิตขึ้นอยู่กับการกระทำ - 27 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พืช 2 ชนิดในจิตใจ - 30 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ธรรมวินัยเป็นอุบายกำจัดโรคของจิต - 17 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. เทศน์อบรม - 31 สค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. แสวงหาของอันมีชราทรุดโทรม - 3 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ดับไฟเผาวิญญาณ - 3 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. อุบายฝึกจิตไม่ให้ข้องในโลกนี้ - 4 กค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ชาติความเกิดเป็นทุกข์ - 5 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. การสั่งสมบุญกุศลนำไปซึ่งความสุข - 4 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สำรวมอินทรีย์หก - 13 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. จิตที่ฝึกดีชีวิตนี้ย่อมไม่มีปัญหา - 11 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ความเป็นมาและภัยของชีวิต - 14 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ความขยันหมั่นเพียรเป็นปัจจัยของความเจริญ - 14 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. เจริญปัญญาอบรมจิต - 15 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ตันหาเป็นเหตุ - 20 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. มุ่งความสงบพบสุข - 18 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ชี้ทางถูก ทางผิด - 19 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ตัณหาพาท่องทุกข์ - 20 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ความสุขทุกคนต่างแสวงหา - 23 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. บำเพ็ญทรัพย์ภายใน - 25 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ข้อวัตรปฏิบัติเบื้องต้นของชาวพุทธ - 27 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. พิจารณาทุกข์ในธาตุขันธ์ - 28 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ฝึกจิตพิจารณาขันธ์ 28 กย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ติดสูบบุหรี่ชั่วคราว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ผู้มีปัญญาพาชีวิตรอด - 2 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ฝึกตนให้ตื่นอยู่เสมอ - 3 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ตื่นจากความหลับ - 6 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. สภาพเหมือนกันแห่งสังขารทั้งหลาย - 9 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ฝึกจิตอย่าให้หลงให้เมา - 10 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ทางอันบริสุทธิ์ - 18 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. เหตุแห่งสุข เหตุแห่งทุกข์ - 19 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ผู้ฝึกดีแล้วย่อมสมควรแก่การงาน - 19 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. เพียรปล่อยวางของว่าง - 21 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. เทศน์อบรม - 26 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. พิจารณากาย - 22 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ใครทำใครได้ - 29 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ขึ้นชื่อว่าบาปแม้แต่น้อยก็มีทุกข์เป็นผล - 29 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. หมู่สัตว์มีราคะ โทสะ โมหะ เป็นโทษ - 2 พย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ผู้รู้ผู้หลง - 13 พย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. โลภโกรธหลง - 14 พย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. กิเลสเผาวิญญาณ - 15 พย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ราคะตัณหาพาท่องทุกข์ - 15 พย 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. เพียรสร้างความดี - 21 ธค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. เพียรเห็นทุกข์ภัยในกามทั้งหลาย - 15 ธค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. เพียรเผากิเลสบาปธรรม - 16 ธค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. เพียรเผากิเลสบาปธรรม - 4 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. เหตุแห่งทุกข์ - 8 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. จิตสร้างจิตหลง - 5 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems12 = ref([
   { title: '1. เทศน์อบรม -  5 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. กำหนดรู้อยู่กับปัจจุบันตัดอดีตอนาคต - 5 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. แสวงหาสุขในความวุ่นวาย - 6 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. หน้าที่สำคัญของชีวิต - 7 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ผู้มีปัญญาก็สามารถพาชีวิตให้พ้นทุกข์ได้ - 7 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. โทษของกาม - 5 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ผู้เห็นทุกข์ต้องลุกขึ้นภาวนา - 9 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. หาเลี้ยงทุกข์ - 9 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เพราะความไม่รู้ - 10 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. พระธรรมคุ้มครองผู้ปฏิบัติได้อย่างไร - 10 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ฝึกจิต - 11 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ฝึกปล่อยฝึกวาง - 11 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. มารห้า - 22 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. หนาวใจเอาอะไรห่ม - 18 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ตัณหาพาท่องทุกข์ - 21 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เทศน์อบรม - 6 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ให้รู้เท่าทันขันธมาร - 23 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ทุกข์สมุทัย - 4 กพ 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ผู้ประมาทย่อมไม่ทันต่อความหลง - 5 กพ 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. เห็นเกิดดับจึงต้องปราบกิเลส - 8 กพ 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. กิเลสเป็นศัตรูของชีวิตอันดี - 9 กพ 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. โยคีบุคคลผู้บำเพ็ญตะบะธรรม - 13 กพ 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ให้มีความละอายต่อบาป - 5 มีค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. เอาชนะตนให้ได้ - 8 มีค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. เทศน์อบรม -  5 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เนื้อนาบุญ - 8 มีค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ให้รู้เท่าอารมณ์กระทบจิต - 5 มีค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ปฏิบัติธรรมเพื่อพัฒนาชีวิตให้สูงขึ้น - 28 มีค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ผู้มีปัญญามุ่งละกิเลส - 30 มีค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ฝึกจิตให้อยู่เหนือโลกธรรมและบาปอกุศล - 2 เมย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. เทศน์อบรม - 3 เมย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. เหตุปัจจุบันของชีวิต - 4 เมย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ผู้อยู่ย่อมไม่มีที่พึ่งย่อมเป็นทุกข์ - 4 เมย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ให้พึ่งตนเอง - 4 มค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. คนบุญ - คนบาป - 2 พค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. อย่าพากันชอบบาป - 2 พค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. บุญให้มา - 3 พค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. งานอันบุคคลทำได้ยาก - 3 พค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. สงบกิเลส หมดเหตุแห่งทุกข์ - 19 พค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. เพียรฆ่ากิเลส หมดเหตุเกิดตาย - 20 พค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. การตายเป็นบ่อเกิดแห่งปัญญา - 19 พย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. บำเพ็ญอภัยทาน - 21 พย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. อบรมอินทรีย์ - 22 พค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ฝึกตายก่อนตาย - 12 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems13 = ref([
   { title: '1. ที่พึ่งอันแท้จริง - 13 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. มุ่งความสงบลบอุปาทาน 15 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ความสิ้นกิเลสเป็นคุณธรรมอันประเสริฐ - 27 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ให้เชื้อกรรมและผลของกรรม - 30 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พัฒนาจิตชีวิตจะดีขึ้น - 28 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. บารมีสิบ - 28 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. เอาสติดัดนิสัย - 29 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ความเสื่อมของนักบวช - 1 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. จิตนี้ต้องฝึก - 30 มิย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. สรีระยนต์ - 2 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. วินัยของพระภิกษุ สามเณร อุบาสกอุบาสิกา - 2 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. งานฝึกจิตพิชิตมาร - 3 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. พระอยู่ที่ไหน - 3 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สติปัฐานธรรม - 4 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. เทศน์อบรม - 4 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ข้อวัตรตัดกิเลส - 21 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ปล่อยวางวิญญาณหก - 13 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ที่พึ่งอันเกษมที่พึ่งอันอุดม - 16 สค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. อบรบบมอินทรีย์ - 18 สค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ผู้ฝึกตนแล้วย่อมอยู่เป็นสุข - 21 สค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. เราต้องปรับปรุงจิตใจให้เข้ากับธรรมะ - 10 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. กรรมดี กรรมชั่ว - 11 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ศีลบารมี - 12 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ที่พึ่งของชาวพุทธ - 11 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สติวินัยเป็นหลักใจของนักปฏิบัติ - 15 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ทางดำเนินของผู้มีปัญญา - 16 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. เพียรทางใจ - 17 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ตัณหาเหตุแห่งทุกข์ - 29 กค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. เมื่อศีลบริสุทธิ์ - 17 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ต้องการอิสระก็ต้องละกิเลส - 19 กย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ขึ้นชื่อว่าปุถุชนย่อมยื้อแย่งกัน - 17 ตค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. วันคืนล่วงไปๆ - 1 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. กิเลสเป็นของร้อน - 2 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ผู้อิ่มในธรรมย่อมไม่หวั่นไหว - 9 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. จุดมุ่งหมายของการฝึกจิตภาวนา - 14 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ฝึกใจอย่าให้น้อมใจไปในบาป - 12 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ดับธาตุ 4 หนีสงสาร - 16 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. อุบายกำจัดกิเลสออกจากใจ - 16 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems14 = ref([
  { title: '1. การเกิดบ่อยเป็นทุกข์บ่อยๆ - 17 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. วิธีฝึกสมาธิ - 5 มค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. วิถีของบุคลเป็นไปตามเหตุตามปัจจัย - 24 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การฝึกฝนอบรบจิตให้เป็นหน้าที่ของเรา - 24 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. วัฏฏะวนคนมีปัญญาย่อมไม่หลง - 28 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ทุกข์เป็นภัยของสัตว์โลก - 29 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. เพ่งเผากิเลส - 23 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. เมื่อตัณหาครอบงำแล้วย่อมข้องอยู่ - 29 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เปิดโลกธาตุให้จิตดู - 15 ตค 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. โลกหมุน - 7 พย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. หัดปลงหัดวาง - 7 พย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. อุบายถอนตนออกจากหล่มในวัฏฏสงสาร - 23 พย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เทศน์อบรม - 23 พย 34', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ให้เห็นโทษของกิเลสต่างๆ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สำรวจกิเลสในใจตนแล้วละเสีย - 6 มค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. พระธรรมทำใจให้บริสุทธิ์ - 13 กพ 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. พิจารณาให้เห็นไตรลักษณญาน - 12 กพ 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. อุบายทำจิตให้สงบ - 17 มีค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. เพราะหลงเหยื่อล่อจึงไม่เบื่อทุกข์ - 27 พค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. การใช้ปัญญาในทางพระพุทธศาสนา - 27 พค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ขันติธรรมกับความสามัคคี - 9 มิย 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. กฏธรรมดาของสัตว์ทั้งหลายย่อมไปตามกรรม - 10 มิย 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. อิทธิบาทธรรมทั้งสี่ - 16 กค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. เทศน์อบรม - 16 กค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สุขทุกข์อยู่ที่จิตดวงเดียว - 14 กค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. อบรมพระ เณร - 13 กค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ตายเพราะความรัก - 17 กค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. หลับน้อยตื่นนาน - 5 สค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ออกแสวงหาทางพ้นทุกข์ - 7 สค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. หอมด้วยศีลงามด้วยธรรม - 7 สค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. อิตถีมายากับเนกขัมมะบารมี - 8 สค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. บำเพ็ญประโยชน์สอนตัวเอง - 13 สค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ทุกข์หนอๆ - 8 สค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. โลกธรรมแปด - 27 สค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ที่พึงอันประเสริฐของผู้รักตน - 3 กย 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. สร้างฐานของชีวิต - 11 กย 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. แดนเกิดแห่งทุกข์ - 8 ตค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. เมื่อจิตสงบย่อมพบความจริง - 25 ตค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. จะเป็นสุขก็ต้องเอาทุกข์เป็นทุนไปก่อน - 20 ธค 33', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ปัญหาต่างๆของชีวิตเกิดจากกิเลส - 10 มค 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

  
]);

const dharmaItems15 = ref([
  { title: '1. กำลังใจเพื่อการเดินทาง - 10 กพ 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ให้ทุกข์แก่ท่านทุกข์นั้นถึงตัว - 1 มีค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. อบรมพระเณร - 1 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ชีวิตมีน้อยอย่าปล่อยให้สูญเปล่า - 2 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. เทศน์อบรม - 1 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. เตื่อนตนสอนจิตชีวิตใกล้ตาย - 2 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. กำลังในการละกิเลส - 21 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ผลของกุศลธรรมและอกุศลธรรม - 3 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ชีวิตมีน้อยอย่าปล่อยใจให้ไร้ที่พึ่ง - 6 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. สามัคคีธรรม - 6 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ธรรมะ คารวะ - 12 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เกิดแล้วตาย - 12 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. งานของอริยะคือเพรียรละกิเลส - 13 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ให้เวลาแก้ชีวิตบาง - 19 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ให้เห็นทุกข์ในชาติความเกิด - 20 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ชี้ผิดชี้ถูก - 20 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. คนประมาทเหมือนคนหลงทาง - 21 เมย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. อย่าเป็นเหยื่อของตัณหา - 22 พค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ผู้เห็นธรรมชื่อว่าผู้เห็นพระพุทธเจ้า - 18 มิย 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. สิ่งทั้งหลายเกิดมาแต่เหตุ - 18 กค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. สติใคร่ครวญเสียก่อนจึงค่อยพูด - 19 กค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ธรรมกระทบจิตผู้รู้ย่อมไม่หวั่นไหว - 20 กค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ติดสุขชั่วคราวย่อมเข้าถึงทุกข์ - 9 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. สว่างมาอย่ามืดไป - 10 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ให้รู้จักบุญคุณแล้วตอบแทน - 18 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. รู้เท่าหาย-รักษาจิต - 18 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ธรรมที่เป็นไปเพื่อความเจริญฝ่ายเดียว - 19 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. คุณธรรมบรรเทากิเลส - 19 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ภัยทั้งหลายเกิดจากใจของตนเอง - 20 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. คนใจลอยมีแต่คิด - 21 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ผู้ประมาทเหมือนคนตายแล้ว - 27 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ชีวิตนี้ไม่นานหนอ - 27 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. คนส่วนมากมักลืมตัว - 28 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ฝึกละกิเลส - 1 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ยุ่งเพราะยึด - 2 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ความสงบทางใจ - 1 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. พิจารณาความตายคลายอุปาทาน - 3 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. นั่งภาวนาสอนจิต - 15 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ทุกข์คนต้องพัฒนาตัวเอง - 16 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems16 = ref([
  { title: '1. โลกถูกความอยากผูกเอาไว้ - 22 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ชี้ทางบรรเทาทุกข์ - 30 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ชี้คุณชี้โทษของขันธ์ห้า - 13 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ฝึกจิตให้มีคุณธรรมเป็นเครื่องอยู่ - 13 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. คนบุญน้อยย่อมมีความสุขน้อย - 15 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. จิตสำคัญกว่าสิ่งอื่นใด - 30 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. เพียรละความชั่วออกจากตัว - 30 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. เอาบุญละกิเลส - 20 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. สติกั้นกระแสจิตอย่าติดข้องของไม่เที่ยง - 31 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. เอาทุกข์เป็นทุนเอาบุญเป็นกำไร - 31 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. เอาความดีเป็นเครื่องบรรเทาทุกข์ทางใจ - 6 พย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. การปฏิบัติธรรมเป็นสิ่งจำเป็นต่อชีวิต - 1 พย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. อย่าปล่อยปะละเลยใจตน - 2 พย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เทศน์อบรม - 30 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สร้างสติคุ้มครองจิต - 5 พย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เตือนสตินักบวช - 30 พย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. เครื่องอยู่ของใจ - 30 พย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สัจธรรม - 1 ธค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ไม่ละย่อมไม่สิ้นสุด - 2 ธค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ความจริงเป็นสิ่งสมมุติ - 3 ธค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ความประเสริฐสุดของพระพุทธศาสนา - 14 ตค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. เหตุและผล - 11 มค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. เทศน์อบรม - 12 มค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. บาปบุญเกิดที่ใจ - 7 มีค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. เราบวชแล้วต้องดำเนินให้ถูกทาง - 8 มีค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เกิดมาสร้างบารมี - 8 เมย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. วัฏฏะวน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ยึดสิ่งใดย่อมทุกข์กับสิ่งนั้น - 15 เมย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. อบรมเตือนสติพระ - 20 มิย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. อบรมเตือนสติพระ - 21 มิย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ทางสองสาย - 24 กค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. บวชแล้วทำอะไร - 24 กค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. จิตดูจิต - 5 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. จะพ้นทุกข์ทางใจได้อย่างไร - 6 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. คนเราพ้นทุกข์ไปไม่ได้เพราะความไม่รู้ - 8 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. เครื่องต้านทานกิเลส - 21 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ปัจจัยของชีวิต - 22 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems17 = ref([
  { title: '1. ทำไมต้องสำรวมจิต - 28 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. จิตอ่อนแอก็แพ้กิเลส - 29 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. จิตไม่ยอมอยู่กับทุกข์ - 29 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ฆ่าความโกรธ - 12 กย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. สติวนัย - 31 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. แนวทางอริยะ - 24 กย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. หลงสมบัติติดสุขชั่วคราว - 4 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. เพราะไม่รู้แจ้งในขันธ์ห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. นักบวชต้องเป็นนักเสียสละ - 6 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. เตือนสติพระ - 7 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. มนุษย์แสวงหาอะไร - 20 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. พิจารณาปัจจัยสี่ - 16 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เป็นลาภอันยิ่งแล้วที่ได้มาบวช - 25 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อุบายต่อสู้เพื่ออยู่ในพรหมจรรย์ - 30 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ผู้ใดสำรวมจิตได้ย่อมพ้นบ่วงแห่งมาร - 6 มค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. อย่าเห็นแก่ตัว - 25 มค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. เกิด-ดับ - 9 มีค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. อบรมศีลสามเณร - 25 มีค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. อย่าถือมงคลตื่นข่าว - 26 มีค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อุปนิสัยสืบต่อ - 26 มีค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ให้เห็นโทษของราคะโทสะโมหะ - 27 สค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. วิธีสำรวมจิต - 26 เมย 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ก้าวสู่ทางพ้นทุกข์ - 27 เมย 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. เอาธรรมนำชีวิต - 26 พค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. พิจารณาทุกข์ของชีวิต - 25 กค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. จิตนั้นผ่องใสแต่กิเลสทำให้เศร้าหมอง - 3 กค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ชีวิตจะตกตํ่าถ้าเอากิเลสนำทาง - 10 สค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. อุปาทานขันธ์ห้าเป็นตัวทุกข์ - 30 สค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ธรรมเครื่องบรรเทาทุกข์ - 7 กย 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. เทศน์อบรม - 6 กย 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ให้รักษาความสงบเครพในธรรม - 14 พค 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. โทษของบาปอานุภาพของบุญ - 19 กย 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. เตือนสติผู้ประฏิบัติธรรม - 13 ตค 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. เราปฏิบัติธรรมเพื่อละความยึดมั่นถือมั่น - 25 ตค 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. เทศน์อบรม - 26 ตค 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ธรรมทั้งหลายไม่ควรถือมั่น - 26 สค 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ผีที่แท้จริง - 10 พย 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems18 = ref([
  { title: '1. งานของนักบวช - 18 สค 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ผู้รู้ผู้แนะนำ - 10 พย 39', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. มีสติควบคุมจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เทศน์อบรม - 25 เมย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. แสวงโลกแสวงธรรม - 26 เมย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. อบรมพรมวิหาร - 14 มิย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. กิเลสทำให้จิตเร้าร้อน - 27 กพ 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. รู้ธรรมพ้นโลก - 15 กพ 40', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เมื่อจิตตั้งมั่นแล้วย่อมเห็นความเกิดดับ - 29 เมย 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. เทศน์อบรม - 28 สค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. วิธีฝึกตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เราบวชแล้วต้องเพรียรละกิเลส - 24 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เทศน์อบรม - 24 ตค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ใจอ่อนแอก็แพ้ขันธ์ห้า - 14 กย 35', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สติกำหนดระวังใจ - 13 ตค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เทศน์อบรม - 13 ตค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ต่างทำต่างไป - 17 สค 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. เอาความหลงแก้ความหลงไม่ได้ - 25 กค 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ชีวิตจะพ้นภัยถ้าอาศัยธรรมนำทาง - 12 กย 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ทางแห่งความดี - 14 กพ 40', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. บุญใดก็ไม่สู้ความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ปิดประตูอบาย - 22 ธค 40', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ไปดีไม่มีบาป - 18 กย 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ผู้มีปัญญาย่อมแสวงบุญ - 9 ตค 38', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ชาวพุทธควรมีปัญญา - 22 กย 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },  
    
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
  width: 100%;
}

.empty-box {
  position: absolute;
  top: 51%;
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