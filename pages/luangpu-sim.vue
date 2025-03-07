<template>
  <div class="container">
    <h1 class="welcome-text">พระญาณสิทธาจารย์ (สิม พุทฺธาจาโร)</h1>
    <div class="empty-box">
      <img src="/pu_sim.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        พระญาณสิทธาจารย์ นามเดิมสิม วงศ์เข็มมา ฉายา พุทฺธาจาโร เป็นพระราชาคณะชั้นสามัญยก ฝ่ายวิปัสสนาธุระสายพระป่าในประเทศไทย 
        คณะธรรมยุติกนิกาย อดีตเจ้าอาวาสสำนักสงฆ์ถ้ำผาปล่อง อำเภอเชียงดาว จังหวัดเชียงใหม่ ศิษย์ของพระครูวินัยธร (มั่น ภูริทตฺโต)
        <br><strong>ชาติกำเนิด</strong><br>
      </p>

      <p class="birth-detail">
      พระญาณสิทธาจารย์ หรือ หลวงปู่สิม พุทฺธาจาโร ท่านเกิดเมื่อวันที่ 26 พฤศจิกายน พ.ศ. 2452 ตรงกับวันศุกร์ ขึ้น 14 ค่ำ เดือน 12 ปีระกา เวลา 20.00 น. ตรงกับปลายรัชสมัยพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว ที่บ้านบัว ตำบลสว่าง อำเภอพรรณานิคม จังหวัดสกลนคร บิดามารดาชื่อ นายสาน - นางสิงห์คำ วงศ์เข็มมา มีพี่น้องร่วมบิดามารดา 10 คน ท่านเป็นคนที่ 5
      <br><strong>อุปสมบท</strong><br>
      </p>

      <p class="birth-detail">
      เมื่อท่านอายุ 17 ปี ได้ขอบิดามารดาบรรพชาเป็นสามเณร ณ วัดศรีรัตนาราม ซึ่งเป็นวัดมหานิกาย ณ บ้านบัว นั้นเอง เมื่อวันที่ 8 กรกฎาคม พ.ศ. 2469 ตรงกับวันอาทิตย์ แรม 7 ค่ำ เดือน 8 ปีมะโรง โดยมีพระอาจารย์สีทอง เป็นพระอุปัชฌาย์
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%8C_(%E0%B8%AA%E0%B8%B4%E0%B8%A1_%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%BA%E0%B8%98%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B9%82%E0%B8%A3)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมะรวมลงที่ใจ</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">2. ภัยของนักภาวนา</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">3. หัวใจนักสู้กิเลส</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList4">4. เครื่องมือขัดเกลาจิต</span>
        <ul ref="dharmaList4" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems4" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList5">5. ทางสู่ความสำเร็จแห่งจิต</span>
        <ul ref="dharmaList5" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems5" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList6">6. ความเพียรเผากิเลส</span>
        <ul ref="dharmaList6" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems6" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList7">7. ธรรมะปัจจุบัน ณ จิต</span>
        <ul ref="dharmaList7" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems7" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList8">8. ปฏิบัติภาวนา</span>
        <ul ref="dharmaList8" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems8" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList9">9. พุทโธ ปัจจุบันธรรม</span>
        <ul ref="dharmaList9" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems9" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList10">10. ภาวนาเป็นยอดธรรม</span>
        <ul ref="dharmaList10" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems10" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList11">11. มรณะกรรมฐาน</span>
        <ul ref="dharmaList11" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems11" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList12">12. จิตตวิชา ความรู้ทางจิต</span>
        <ul ref="dharmaList12" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems12" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList13">13. การเจริญสติปัฏฐาน​4</span>
        <ul ref="dharmaList13" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems13" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList14">14. หลักการภาวนา</span>
        <ul ref="dharmaList14" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems14" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList15">15. บรรยาย - เร่งเพียรภาวนา</span>
        <ul ref="dharmaList15" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems15" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList16">16. ธรรมปฏิบัติ - หลักใหญ่ของการปฏิบัติภาวนา</span>
        <ul ref="dharmaList16" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems16" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList17">17. อุบายเริ่มตนภาวนา</span>
        <ul ref="dharmaList17" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems17" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList18">18. การสู้ด้วยภาวนา</span>
        <ul ref="dharmaList18" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems18" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList19">19. อบรมสมาธิภาวนา</span>
        <ul ref="dharmaList19" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems19" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList20">20. ธงชัยของการภาวนา</span>
        <ul ref="dharmaList20" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems20" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList21">21. สงครามแห่งวัฏสงสาร</span>
        <ul ref="dharmaList21" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems21" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList22">22. ภาวนาเพื่อพ้นตาย</span>
        <ul ref="dharmaList22" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems22" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1_OatFW3xT_BOXya6myF8fhCkzLh-cAHk?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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

const dharmaList19 = ref(null);
let isListVisible19 = ref(false);

const dharmaList20 = ref(null);
let isListVisible20 = ref(false);

const dharmaList21 = ref(null);
let isListVisible21 = ref(false);

const dharmaList22 = ref(null);
let isListVisible22 = ref(false);



const dharmaItems = ref([
  { title: '1. กระดูก 300 ท่อน 1 ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. กระดูก 300 ท่อน 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. กองทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ก้อนอสุภะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. กามคุณิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. กาย เวทนา จิต ธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. กายเป็นเพียงธาตุ 4', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. กายมีจิตครอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. การจดจําคําสั่งสอน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. การบูชาด้วยการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การปฏิบัติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. การภาวนาเบื้องต้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. การอดทนทำให้ได้ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. กำหนดเห็นความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. กิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. กิเลสเป็นของละได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. กิเลสเป็นปัจจัยให้เกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. กิเลสมาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. กิเลสมาร สังขารมาร ขันธมาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. กิเลสอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. กินแล้วนอนเหมือนสุกร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems2 = ref([
  { title: '1. เกิดมาได้อะไร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. เกิดมาเป็นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. เข้าถึงธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เข้าพรรษา ๙ ก.ค. ๒๒', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. เจตนาที่เป็นบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. เชือกผูกคอ - บอผูกศอก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. เดินทางผิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. เตือนใจให้มีสติทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เตือนจิตกิเลสที่ประมาทมัวเมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. เตือนตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. เตือนนักภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เทศน์วันปวารณาออกพรรษา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เพราะเชื่อกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เพียรปฎิบัติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. เมตตาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เลิกละบาปประกอบบุญ 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. เส้นทางสู่ความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. เห็นโทษในการเกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. เห็นแจ้งด้วยปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. เห็นมรณะภัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. เอาใจมาเก็บไว้ที่ปลอดภัย ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. เอาใจสอนใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. เอาใจภาวนา 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems3 = ref([
  { title: '1. เอาคุณพระพุทธเจ้ามารำลึกในใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. เอาอุบายสั่งสอนจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. เอาชนะกิเลสในใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เอาอุบายละกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. เอาตายสู้ 1', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. เอาตายสู้ 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. แก่นธรรมอยู่ในแก่นใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. แนวทางปฏิบัติ 15 มิ.ย. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. แนวทางฝึกฝนอบรมตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. แร่ทองคํา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. โมหะสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. โรคหัวใจอ่อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. โลกเรานี้ไม่เที่ยง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. โลกวิทู รู้แจ้งโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ใจเป็นกลาง ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ใจกลัวกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ใจดวงเดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ใจภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ใจสงบแล้วสบาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ในพรรษาฆ่ากิเลสให้ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ให้ใจอยู่กับพุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems4 = ref([
  { title: '1. ใจสงบแล้วเบิกบาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ให้ใจอยู่กับสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ให้จิตระลึกถึงลมเข้าออก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ให้นึกถึงความตายเสมอ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ให้นึกถึงคุณพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ให้วางเฉยเหมือนแผ่นดิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ไม่คิดอิจฉา พยาบาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ไม่ต้องรอพระศรีอารย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ไม้ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. กลัวความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. กายคตาสติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. การปฏิบัติบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. กิเลสไหม้กายวาจาจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. กิเลสคือความลุ่มหลงมัวเมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ของเก่าเข้าใจว่าของใหม่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ของกลางโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ของสมมุติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. คนตาบอดคลำช้าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ขัดจิตด้วยสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ขันธมาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. คนใจเบา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. คนจนใจ จนตัว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
    
]);

const dharmaItems5 = ref([
  { title: '1. คนตาบอดจูงคนตาบอด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ความเพียรคือทางสู่ความสำเร็จ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ความโกรธเหมือนไฟ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ความตายเตือนตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ความตายต้องเข้าถึงทุกคน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ความตายประมาทไม่ได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ความตายมีอยู่ตลอดเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ความทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ความประมาทมัวเมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ความสุขในพระนิพพาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. คุณงามความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. คุณพระเป็นที่พึ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. คุณพระรัตนตรัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. จงทำจิตใจให้แน่วแน่มั่นคง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. จงยกจิตใจให้สูงขึ้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. จงห่วงตนเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. จักรพัตราธิราช', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. จิต 2 ดวง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. จิตเป็นธาตุนามธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems6 = ref([
  { title: '1. ตนเป็นที่พึ่งแห่งตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ต้องรู้จักปล่อยว่าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ตั้งใจภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ตั้งใจมั่นไม่ย่อท้อ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ตั่งมั่นในธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ตั้งสติระวังจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ตัณหาไม่มีที่พอ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ตัณหาระงับสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ตัวกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ตาบอด - หูหนวก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ตามรู้อยู่ทุกลมหายใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ตายได้ตลอดเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ตายได้ทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ตายทุกวัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ตายมาจากเกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ตายอยู่ทุกขณะเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ถ้ำผาปล่องที่ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ทรมานจิตกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ทางพ้นทุกข์คือทางจิตทางใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ทางออกจากทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ทาน ศีล ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ทานบารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ทำแต่ความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems7 = ref([
  { title: '1. ทำใจให้เหมือนแผ่นดิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ทำใจให้นิ่งเป็นดวงเดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ทำใจให้มีความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ทำใจให้หนักแน่นเหมือนแผ่นดิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ทำจิตให้มีอารมณ์เดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ทำบุญวันเกิดหลวงปู่สิม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ทำอะไรต้องอาศัยศรัทธา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ที่นี่เป็นสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ทุกข์เป็นของจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ทุกขเวทนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ทุกข์ในกาย - จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ทุกข์ไม่ต้องบ่นอดทนเอา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ทุกขสัจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ทุกขังอริยะสัจจัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ทุกอย่างมีเกิดแล้วดับไป', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ทุกอย่างรวมลงที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ธรรมโอสถ - ยาพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ธรรมปฎิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ธรรมยังมีอยู่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ธรรมวันทอดกฐินปี 2526', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ธรรมวันออกพรรษา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ธรรมะมีอยู่ที่ปัจจุบัน ไม่ชัด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. นะโมเทอดทูนสูงสุด ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems8 = ref([
  { title: '1. นอนรอหาความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. นอนหลับก็ตายได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ปวารณาออกพรรษา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. นักภาวนากลัวตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. นั่งกรรมฐานอย่าท้อแท้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. นั่งอยู่ก็ตายได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. นิพพาน - พุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. นิพพานไม่มีข้องไม่มีเต็ม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. นิวรณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. นึกถึงความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. นึกถึงความตายทุกลมหายใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. บวชกาย บวชใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. บาปเหมือนไฟ บุญเหมือนนํ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. บาปบุญให้ผลตลอดเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. บารมี 10', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. บุญภาวนาคุณพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ปฏิบัติภายในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ปฏิบัติตามพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ปฏิบัติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ปฏิปทาของหลวงปู่มั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ประวัติถํ้าผาปล่อง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems9 = ref([
  { title: '1. ปล่อยให้จิตใจหลงตามกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ปฏิบัติให้รู้จริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ปฏิบัติไม่จริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ปัจจุบันธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ปัญญาเห็นแจ้งในสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ปัญญาบารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ป่าช้าในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ผู้ไม่ประมาทเป็นผู้เจริญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ผู้ประมาทเหมือนคนตาย ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. พญามัจจุราช', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. พระพุทธเจ้าเป็นผู้ประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. พระพุทธเจ้าสอนให้ทำ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. พระพุทธเจ้าสอนให้ละ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. พระพุทธเจ้าสอนให้ละทิ้ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. พระพุทธคุณ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. พระพุทธรูป', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. พระอริยะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. พละ 5', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. พิจารณากระดูก 300 ท่อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. พุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems10 = ref([
  { title: '1. พุทธเมตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. พุทธโอวาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. พุทธคุณ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. พุทโธให้อยู่ในใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พุทโธ - จิตผู้รู้ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. พุทโธอยู่ในใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. พุทโธอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. พุทโธใจเป็นใหญ่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ฟังแล้วต้องปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ฟังด้วยดีย่อมได้ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ภพ-ชาติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ภาวนาเตือนตนทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ภาวนาเป็นยอดธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ภาวนาแบบครั้งเดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ภาวนาในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ภาวนาให้ใจเหมือนแผ่นดิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ภาวนาให้จิตตั้งมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ภาวนาให้รู้แจ้ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ภาวนาก่อนตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ภาวนาฆ่ากิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ภาวนาจนเลยตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ภาวนาตายเตือนตนทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems11 = ref([
  { title: '1. ภาวนาทุกลมหายใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ภาวนาละความหลง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ภาวนาล้างใจให้สะอาด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ภาวนาสู้หนาว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ภาวนาที่ปัจจุบัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ภาวนารู้แจ้งในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. มรณะกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. มรณะ (3)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. มรณะกรรมฐาน 1', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. มรณะกรรมฐาน 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. มรณะกรรมฐาน 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. มรณะคือความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. มรณะภัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. มรรคผลนิพพานก็อยู่ในปัจจุบัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. มรรคผลนิพพานต้องทำเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. มัชฌิมาปฏิปทา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. มารกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. มีจิตใจเมตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. มีสมาธิตั้งมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. รวมเข้ามาภายใน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. รวมจิตใจให้เป็นดวงเดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems12 = ref([
  { title: '1. รวมจิตให้ตั้งมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. รวมจิตรวมใจเข้ามาภายใน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ร่างกายเป็นของเน่าเหม็น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. รีบเร่งภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. รุกขมูลร่มไม้เป็นเสนาสนะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. รู้แจ้งแล้วละ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. รู้จำเพาะจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. รู้ที่ไหนตั้งที่นั้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. รูป - นามไม่เที่ยง ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. รู้อยู่ที่กาย วาจา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ลมไม่เข้า ออก ก็ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ลิงหลงเงา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ลืมว่าเราไม่ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. วันคืนล่วงไปเราทำอะไรอยู่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. วิชาใจเป็นวิชาลึกลับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. วิริเยนทุกขมัตเจติ - ความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. วิริยะ-ขันติ-บารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ศรัทธา 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ศรัทธาความเชื่อ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ศรัทธาหัวเต่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. สงบในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สงบกายวาจาใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. สงบใจละความโกรธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems13 = ref([
  { title: '1. สติปัฎฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. สติปัฎฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. สติเฉพาะหน้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. สติมีความสัมผัสต่อการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. สมบัติของแผ่นดิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. สว่างด้วยปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. สอนเริ่มสนใจทำบุญภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. สอนใจตนเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. สอนให้สงบตั้งมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. สบายจิตก็รู้ ไม่สบายจิตก็รู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. สังขาร เกิด ดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. สัจจะอธิฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สุข - ทุกข์ให้ผลทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สุดยอดของศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สู้ความตายไม่ได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. หนีความเกิด แก่ เจ็บ ตาย ไม่ได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. หม้อไฟแดงอยู่ที่ปาก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. หลงไปตามอาการภายนอก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. หลงผิดคิดว่าเป็นตัวตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. หลบไม่พ้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. หลักใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems14 = ref([
  { title: '1. หลักการภาวนา 1', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. หลักการภาวนา 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. หลักการภาวนา 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. หลักอนิจจัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. หลับตานึกภาวนาในใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. อนัตตลักษณะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. อานาปานุสสติกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. อบรมธรรมะคณะผ้าป่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. อบรมสมาธิภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. อภัยทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. อย่าเลี้ยงกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. อย่าได้หลงใหลกับสิ่งใด ๆ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. อย่าท้อถอยกับความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อย่าประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อย่าประมาทในการสร้างความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. อย่าสำคัญผิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. อรหันต์ในปากเสือ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. อวิชชา-ตัณหา-อุปาทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. อิมิชาติ-หนอนกินคูถ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อุเบกขา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อุบายธรรมภาวนาละกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems15 = ref([
 { title: '1. ให้ใจอยู่กับสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. รีบเร่งภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ตายได้ทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ภาวนาก่อนตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. เห็นโทษในการเกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ภาวนาตายเตือนตนทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ทุกขเวทนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. กายคตาสติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. โลกเรานี้ไม่เที่ยง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. จิตไม่ปล่อยวาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ภาวนาที่ปัจจุบัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ให้วางเฉยเหมือนแผ่นดิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. รู้แจ้งแล้วละ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ภาวนาเตือนตนทุกเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สังขาร เกิด ดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. รู้อยู่ที่กาย วาจา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ตายอยู่ทุกขณะเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. กิเลสคือความลุ่มหลงมัวเมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. หลักใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. มรณะกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. สติมีความสัมผัสต่อการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ภาวนาล้างใจให้สะอาด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. สัจจะอธิฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. รู้ที่ไหนตั้งที่นั้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems16 = ref([
  { title: '1. อภัยทาน 6 ก.ย. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. อัฏฐิกัง กระดูก 300 ท่อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. กายเป็นเพียงธาตุสี่ - ไม้ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การจดจำธรรมคำสั่งสอน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ปรารภความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. มรณะภัย - หนาว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. บาป - บุญให้ผลตลอดเวลา - 23 ก.ค. 30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ภาวนาแบบครั้งเดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. คุณพระรัตนตรัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ไม่ตามใจกิเลส - 23 ส.ค. 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. คนตาบอด จูงคนตาบอด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ทิฏฐิของนักบวช - การพิจารณากาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. พระพุทธเจ้าออกบวช - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. หลักการปฏิบัติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. คนใจเบา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. พญามาร 15 ส.ค. 32 - ธรรมเพื่อความสุขใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. จิตหลงผิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. พระพุทธเจ้า 2 - 19 ก. ค 32 - สติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ความเพียร 1', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ปฏิปทาของพระพุทธเจ้า 31 ส.ค. 28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. กายเป็นเรือนของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. พุทธปฏิปทา - รวมลงที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ศรัทธา 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. สมถะภาวนา 26 ต.ค. 26 - กระแสของโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ตั้งใจทำจริงปฏิบัติจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. อบรมธรรมะคณะผ้าป่า - การปฏิบัติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ภาวนาล้างใจให้สอาด 16 ก. ย 26 - จิตโมหะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. วันคืนล่วงไปเราทำอะไรอยู่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ใจมีที่พึ่ง 11 ม.ค.29 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. โลกวิทู รู้แจ้งโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ตายทุกวัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. สมมุติสงฆ์ 5 ส.ค. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ทำจริงๆภาวนาจริงๆ 6 ก.ย. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. เทพเทวดามีจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ปัญญาเห็นแจ้งในสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. เรือนกายเรือนใจ 6 พ.ย. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ความเพียร 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ฟังแล้วจดจำนำไปปฏิบัติ - สัจจะบารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ใจกลัวกิเลส - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ดวงประทีปส่องทาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. ตั้งใจไว้ก่อน - ตายได้ตลอดเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. อุบายภาวนาละกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. เกิดมาเป็นทุกข์ 26 ก.พ. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ภาวนามัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ตั้งสติระวังจิต - ความตายเป็ยภัยอันใหญ่หลวง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. พุทโธ ใจเป็นใหญ่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ตัวมานะทิฏิ - 31 ก.ค. 25', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. นโมเทอดทูนสูงสุด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. โมหะสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ละกิเลสไม่ได้ตายเสียดีกว่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. บวชกาย บวชใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
    
]);

const dharmaItems17 = ref([
  { title: '1. ให้รู้ด้วยการภาวนา 23 ต.ค. 29 - 13 ส.ค. 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. กิเลสพันห้าตัณหาร้อยแปด24 ส.ค. 26 - 6 ธ.ค. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. จิต - สังขารจิต 4 ส.ค. 26 - มรรคผลนิพพานต้องทำเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. แนวทางปฏิบัติ 14 มิ. ย. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. อุบายเริ่มตนภาวนา 26 พ.ย. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. อบรมสมาธิภาวนา 1 7 เม.ย. 26 - 20 ก.พ. 21', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ฟังด้วยดีย่อมได้ปัญญา 27 มิ. ย. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. กิเลส 4 มิ. ย. 26 - 8 ก.ค. 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. จิตใจดวงผู้รู้อยู่ 3 พ.ย. 26 - อุบายสร้างสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. อุบายภาวนาเอาชนะกิเลส 31 ก.ค. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. มรณะกรรมฐาน 8 มิ. ย. 26 - ทุกข์เพราะยึดถือ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ตนเป็นที่พึ่งของตน - ธรรมปฏิบัติ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ใจบุญ - ใจบาป 6 ส.ค. 29 - 6 มี.ค. 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เอาตายสู้ 7 ก.ย. 28 - นิพพานอยู่ฝากตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อบรมสมาธิภาวนา 3 31 พ.ค. 26 - 23 ก.พ. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ผู้ประมาทเหมือนคนตายแล้ว - พระอริยะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ห้วงทุกข์ 31 พ.ค. 26 - 3 ก.ย. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. พุทธจิต จิตผู้รู้ จิตภาวนา 12 ม.ค.26 - 29 พ.ย. 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. พุทโธ - จิตผู้รู้ 8 เม.ย. 26 - 1 ก.ค. 28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ปฏิปทาของหลวงปู่มั่น 15 มิ. ย. 26 - 8 ก.ย. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. พุทโธอยู่ที่ใจ 6 ก.ย. 28 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. มรณะกรรมฐาน 13 ก.ค. 26 - ตรัสรู้ธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ความยึดถือ 31 มี.ค. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems18 = ref([
  { title: '1. มรรคผล นิพพานมีจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. พุทธเมตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ตนเป็นที่พึ่งแห่งตน (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. สู้ด้วยการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พระบาทสี่รอย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. มรรคผล นิพพานต้องทำเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. อุบายละความยึดถือ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. สุนัขหัวบาด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. อุบายสร้างสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. รู้กิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ต้องเด็ดเดี่วยเหมือนพระพุทธเจ้า - ความตายเลือกไม่ได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ของจริง - จิตตั้งมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ภาวนาขัดจิตขัดใจ - ภาวนาดูของปฏิกูล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อุธรรมเตือนใจ - ให้ทำให้ปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อรหันต์ในปากเสือ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. รู้เท่าทันมารกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ตั้งใจปฏิบัติเพื่อบรรลุธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สำเร็จเพราะความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. วิธีต่อสู้กิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ฐานที่ตั้งของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ทุกข์เป็นของจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ทรมานตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ทรมานตน 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ฟังเพื่อการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. หลักของศีล 8', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. บ่วงมาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. โลกนี้ไม่เที่ยง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. เพียรปฏิบัติภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ขัดจิตด้วยสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. พระนิพพานไม่มีเต็ม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. มรณะภัย 8', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ภาวนาให้ใจเหมือนแผ่นดิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. มดแดงไต่ขอบด้ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. มีสติเฉพาะหน้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สว่างปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. พุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ปาณาติปาตาเวรมณี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. จิตหลงกายเป็นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. อย่าอ้างกาลเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ในพรรษาให้ตั้งใจปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. อุทิศชีวิตเพื่อภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. กิเลสดองอยู่ในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ระลึกถึงคุณพระรัตนตรัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems19 = ref([
  { title: '1. การบูชาด้วยการภาวนา - 24 ส.ค. 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. โลกธรรม 8 4 ส.ค. 29 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ทานอันบริสุทธิ์ 6 ส.ค. 32- โอปนยิกธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. บทปฏิบัติภาวนา - ของจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. อาการ 32 - 18 ก.ค. 32 - พระศีรอารย์ 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. พุทโธฝึกสติ 6 เม.ย. 26 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. กายคตาสติภาวนา 1 - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. จิตผู้รู้ 5 ก.ย. 26 - อาการ 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ในพรรษาตั้งใจเสียใหม่ - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. หลงของเก่าว่าเป็นของใหม่ - ดวงตาเห็นธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. บารมี 10 25 ก.ย. 25 - ตัณหาระงับสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ความตายมีอยู่ตลอดเวลา - ธรรมปฏิบัติ1', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. แร่ทองคำ (1) 5 พ.ย. 26 - เสนาสนะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. เวสสันดร- บารมี 10- มัชฌิมาปฏิปทา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อบรมสมาธิภาวนา 2 เม.ย. 26 - วิปัสสนากรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. บุญเก่าหนุนบุญใหม่ - รู้แจ้งแล้วละ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. แร่ทองคำ (2) 5 พ.ย. 26 - เสนาสนะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ภาวนาไว้ก่อน - จิตติดกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ฟังดีมีปัญญา 18 มิ. ย. 28 - ฟังดีมีปัญญา 2 ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. จิตรู้แจ้งที่ปัจจุบัน 28 ก.ค. 28 - อาจารโปฏฐะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อาสาวกิเลส 20 พ.ย. 32 - หลงตามกิเลส ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. พระพุทธเจ้าสอนให้ทำให้ปฏิบัติ - ตั้งใจทำ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. สังขารเป็นตัวทุกข์ 23 ต.ค. 29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. กิมิชาติ - หนอนกินคูถ 6 ก.ย. 25 - พระพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems20 = ref([
  { title: '1. สุดยอดของการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. แจ้งที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ทุกอย่างเกิดขึ้นแล้วดับไป', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ทำจิตให้มีอารมณ์เดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ภาวนาในกาย วาจา จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. อุบายภาวนาทางจิต 31 สิงหาคม 2531', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. บุญอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. มรณะกรรมบาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. อนัตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. อริยสัจจัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. สงบที่จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. สิ่งไม่ดีให้เลิกละ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ภาวนาฆ่ากิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สอนใจตัวเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. มหาสติมหาพิจารณา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ทรมานตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ดี ชัว กิเลสพลิกแพลง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ประวัติถำผาปล่อง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. กาย เวทนา จิต ธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ฝึกจิตให้มีอุเบกขา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อุบายสร้างบารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. เข้าถึงด้วยการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. นักภาวนากลัวตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. พุทโธ การนึกถึงพระพุทธเจ้า 23 กันยายน 2526', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ดูมรณะกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. อสุภกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. วันวิสาขบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. สังโยชน์ 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ดับไฟกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. บารมี 10 เมตตาภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. เราต้องตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ใจวานร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. รวมจิตให้เป็นหนึ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ความอดทน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สังขารมาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. อุบายธรรมภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ร่างกายเป็นยาหม้อใหญ่ - อาการ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ทางรู้แจ้งเห็นจริง - ธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. การพิจารณากาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. หญ้าปรกตอ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. แนวทางฝึกฝนอบรมตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ภาวนาดูให้รู้แจ้ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. กลัวมารกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems21 = ref([
   { title: '1. สงครามภายใน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ทาน ศีล ภาวนา 6 ต.ค.28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. อานิสังส์ของการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ภาวนาในจิต 12 ต.ค.26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ตนเป็นที่พึ่งของตน 22 ก.ค.26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. พุทธจิตของพระพุทธเจ้า 26 ต.ค.26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ความสุขในนิพพาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. กรรมเป็นของๆตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. รู้แจ้งโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ลิงติดตัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. พระธรรมเตือนใจ 11 ต.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ธรรมะวันออกพรรษา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ชีวิตเกิดตายตลอดเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สัจจอธิษฐาน 25 พ.ย.31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สละชีวิตเป็นทาน 23 พ.ย.31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. พุทธโอวาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. มดแดงไต่ขอบด้ง 2 17 ก.พ.29 ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. บาปออย่าไปทำ 22 ส.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ปิดอายตนะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อบรมโยมกรุงเทพ 8 ต.ค.32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. สงบจึงเป็นสุข 5 ต.ค.32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ละกิเลสหรือเอากิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ชีวิตเป็นของน้อย 11 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. กรรมฐานห้า 11 มิย 32 ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. พรหมวิหารสี่ 14 ต.ค.24', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ผลคือความสุข 31 พ.ย.28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. จุดเริ่มแรกของนักบวช', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. เตือนใจให้มีสติทุกเวลา 12 ธ.ค. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. เคารพล้างกิเลส 9 ธ.ค. 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. 30โลกธรรม 26 ส.ค.28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. กิเลสเป็นของละได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. อย่าสำคัญผิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. พุทธคุณ 2 ต.ค.28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. อุเบกขา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. พุทธรัตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ธรรมปีติ- ยินดีในธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ผู้เข้าถึงศาสนา 6 พ.ย.28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ให้ลดละทิฏฐิมานะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ให้รู้ด้วยการกระทำ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. พุทโธอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. แก่นั่งง่วงนอน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. สมถะ วิปัสสนากรราฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ภาวนาดูมรณะกรรมฐาน 22 พ.ย.30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. อนาปานุสสติกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ภาวนาเอาใจสอนใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. ภาวนาให้จิตตั้งมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
    
]);

const dharmaItems22 = ref([
  { title: '1. การภาวนาไม่ใช่ของทำเล่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ชีวิตคือการต่อสู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ความเข้าใจในธรรม 9 ก.ย. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เกิดมาได้อะไร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ทำ พูด คิด 15 ส.ค.28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ทำจริงๆปฏิบัติจริงๆ 25 ก.ย. 28', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ภาวนาให้หลุดสมมุติโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ศรัทธาปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. สติ 31 ม.ค.31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ทางแก้กิเลส 28 ม.ค.31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ตั้งจิตไม่ย่อท้อ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เลิกละบาปประกอบบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สังขารเกิดดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อุบายธรรม 27 มิย 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. พระพุทธบาทสี่รอย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ทุกข์ไม่ต้องบ่นอดทนเอา 29 ส.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ละกิเลสตัณหา 4 ส.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. เตือนใจนักภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ทาน ศีล ภาวนา (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ตั้งใจให้ได้ทุกกาล 30 ก.ค.32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. บ้าแบกหิน 29 ก.ค.32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. อาการ 32 25 ก.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. กรรมฐานห้า 11 มิย 32', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. กาย ใจเป็นบุญ 27 เม.ย.24', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. พูดดี คิดดี ทำดี 17 มิย 24 ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ขันธมาร 21 ส.ค.27', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. นิวรณ์ห้า (1) 22 ส.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ความท้อถอย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. คายกิเลสคืนให้โลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. จิตหลงกายเป็นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. พุทธจิตห้าประการ (2) 15 ส.ค.31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. เวสสันดรบารมี (2) 18 ส.ค.31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ศีลวิสุทธิ 12 ต.ค.24', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. วางเฉยเหมือนแผ่นดิน 24 ก.ย. 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ปริยัติ ปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ที่เสื่อมที่เจริญของศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. บุญของการภาวนา 14 ส.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ความไม้ตั้งใจ 18 ต.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ดินพอกหางหมู 23 ก.ค.30', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. พระกรรมฐาน 29 ม.ค.29', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. ปัญญาบารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
    
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

const toggleList19 = () => {
  isListVisible19.value = !isListVisible19.value;
  dharmaList19.value.style.display = isListVisible19.value ? 'block' : 'none';
};

const toggleList20 = () => {
  isListVisible20.value = !isListVisible20.value;
  dharmaList20.value.style.display = isListVisible20.value ? 'block' : 'none';
};

const toggleList21 = () => {
  isListVisible21.value = !isListVisible21.value;
  dharmaList21.value.style.display = isListVisible21.value ? 'block' : 'none';
};

const toggleList22 = () => {
  isListVisible22.value = !isListVisible22.value;
  dharmaList22.value.style.display = isListVisible22.value ? 'block' : 'none';
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