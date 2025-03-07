<template>
  <div class="container">
    <h1 class="welcome-text">พระโพธิธรรมาจารย์เถร วิ.(สุวัจน์ สุวโจ)</h1>
    <div class="empty-box">
      <img src="/pu_suwat.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
      พระโพธิธรรมาจารย์เถร วิ. มีนามเดิมว่า สุวัจน์ ทองศรี เกิดเมื่อวันที่ ๒๙ สิงหาคม พ.ศ. ๒๔๖๒ 
      ตรงกับวันศุกร์ ขึ้น ๔ ค่ำ เดือน ๑๐ ปีมะแม เป็นชาวตำบลตากูก อำเภอเมืองสุรินทร์ จังหวัดสุรินทร์ โยมบิดาชื่อ พ่อบุตร ทองศรี โยมมารดาชื่อ เเม่กึ่ง ทองศรี
      <br><strong>บรรพชาอุปสมบท</strong><br>
      </p>

      <p class="birth-detail">
      <strong>บรรพชา:</strong> เมื่อปี พ.ศ. ๒๔๘๑ ขณะมีอายุได้ ๑๙ ปี ได้บรรพชา ณ วัดกระพุมรัตน์ บ้านตากูก อำเภอเมืองสุรินทร์ 
      </p>

      <p class="birth-detail">
      <strong>อุปสมบท:</strong> เมื่อปี พ.ศ. ๒๔๘๒ อายุครบ ๒๐ ปี ณ วัดกระพุมรัตน์ บ้านตากูก ซึ่งเป็นวัดฝ่ายมหานิกาย โดยมี พระครูธรรมทัศน์พิมล (ด้น) 
      เจ้าอาวาสวัดศาลาลอย (เมื่อครั้งเป็นเจ้าคณะอำเภอสุรินทร์) เป็นพระอุปัชฌาย์ มีพระอาจารย์เคลือบ วัดดาวรุ่ง บ้านขาม เป็นพระกรรมวาจาจารย์ เเละพระอาจารย์อุเทน วัดกระพุมรัตน์ บ้านตากูก เป็นพระอนุสาวนาจารย์ ได้รับฉายาว่า "สุวโจ" 
      </p>

      <p class="birth-detail">
      <strong>ญัตติในคณะธรรมยุติกนิกาย:</strong> เมื่อปี พ.ศ. ๒๔๘๔ ณ วัดสุทธจินดา อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา 
      โดยมี พระธรรมฐิติญาณ (สังข์ทอง) เป็นพระอุปัชฌาย์ พระอาจารย์มหาปิ่น ปญฺญาพโล เป็นพระกรรมวาจาจารย์ พระอาจารย์ทองดี เป็นพระอนุสาวนาจารย์
      <a href="https://sangkhatikan.com/monk_view.php?ID=15397" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ความสำคัญของจิตภาวนา</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">2. การทำความเพียร</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">3. อุบายการฝึกจิต</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList4">4. แสงเทียนของชีวิต</span>
        <ul ref="dharmaList4" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems4" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList5">5. หลักเบื้องต้นของการภาวนา</span>
        <ul ref="dharmaList5" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems5" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList6">6. ปัญญาอบรมสมาธิ</span>
        <ul ref="dharmaList6" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems6" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList7">7. แนวทางปฏิบัติ</span>
        <ul ref="dharmaList7" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems7" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList8">8. จิตกับพุทโธ</span>
        <ul ref="dharmaList8" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems8" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList9">9. อารมณ์ของจิต</span>
        <ul ref="dharmaList9" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems9" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList10">10. อำนาจของสมาธิ</span>
        <ul ref="dharmaList10" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems10" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList11">11. พลังความเป็นหนึ่งของจิต</span>
        <ul ref="dharmaList11" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems11" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList12">12. การภาวนาดูจิต</span>
        <ul ref="dharmaList12" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems12" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList13">13. ความรู้ตัวและสติ</span>
        <ul ref="dharmaList13" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems13" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList14">14. ที่พึ่งอันสูงสุด</span>
        <ul ref="dharmaList14" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems14" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList15">15. ธรรมะปฏิบัติ</span>
        <ul ref="dharmaList15" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems15" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1PO0vyDpEps3oRp3yYrrocHqNP8OEdrCs?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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





const dharmaItems = ref([
  { title: '1. ความสุขที่แท้จริง การฝึกจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. แสงเทียนของชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ผลของกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ที่พึ่งอันสูงสุด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. อภิธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. รู้มากยากนาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. เมตตาธรรม (หลักการทำสมาธิ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. อคติ ๔', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ปัญญารอบรู้ในกองสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. หลักการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ที่ไหนมีรักที่นั่นมีทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ฟังด้วยความเคารพ สัมมาสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สมบัติของใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. นิวรณ์ห้าแก้ด้วย สติ สมาธิ ศรัทธา ปัญญา ความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สุขอื่นยิ่งกว่าความสงบไม่มี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. การภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ความสำคัญในการฝึกจิตภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ปฏิบัติให้ถึงความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อบรม กาย วาจา ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ธรรมคือสภาพทรงไว้ซึ่งความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. การภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. อะภิณ์หะปัจจะเวกขะณะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. กายะคะตาสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. มนุษย์สมบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. กายานุสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. หลักการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. งานพระราชทานเพลิงศพหลวงปู่สิม พุทธาจาโร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ลักษณะของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. อริยวงศาปฏิปทา สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. สัมมาทิฏฐิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. จิตตานุปัสสนาสติปัฏฐาน สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. สติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ทาน ศีล ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. หลักการทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ศีล สมาธิ ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. หลักความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ที่พึ่งคือความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. หลักปฏิบัติ-ที่พึ่งอันสูงสุด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. ความขยัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. การอยู่ร่วมกัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ความเกิดเป็นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ที่พึ่งของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems2 = ref([
   { title: '1. การทำความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. หลักการปฏิบัติเพื่อข้ามทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ที่พึ่งของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การทำบุญให้ทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ให้รู้กายเห็นกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. กรรมจำแนกสัตว์-กระแต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ดูกายในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ความไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. การปฏิบัติทางตรงที่สุด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ให้รู้กายเห็นกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. อริยมรรค', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ออกจากห้วงอวิชชาด้วยการฝึกอบรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. การปฏิบัติทางตรงที่สุด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ใช้ปัญญาปราบทิฏฐิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ความสงบอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ความสุขจากการทาน ศีล ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ปฏิบัติจิตภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. นั่งปางสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. การปฏิบัติวันนี้ให้ดีกว่าเมื่อวาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. กลิ่นของศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. สนทนาธรรม การแก้การสั่นขณะภาวนา-ให้มีสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ให้ศีลห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ให้พร...ติโรกุฑฑกัณฑะสุตตะคาถา อะยัญจะโขทักขิณาทินนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ให้พร...อัคคัปปะสาทะสุตตะคาถา อัคคะโต เวปะสันนานัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. หลักการทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. สนทนาธรรมหลักการทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. การเข้าและการออกจากสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. สนทนาธรรมหลักการทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. สติคุมจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. หลักยึดในการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. กำลังของใจที่สูงสุดคือปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. นักปฏิบัติ - ปัญญาอันชอบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ของแท้ของเทียม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. หาที่พึ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. การทำบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ให้ระลึกถึงความดีเพื่อดับความร้อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. อบรมใจให้รู้ความจริงในขันธ์ห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. ทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ยินดีในการปฏิบัติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. สังขารไม่เที่ยงเป็นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. อย่าส่งจิตออกนอกกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. ศีล - เจตนาละเว้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. จิตตั้งมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. กุศลเกิดขึ้นจากการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ความพอดี - ทางสายกลาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ปัญญาเกิดจากการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems3 = ref([
   { title: '1. ความไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ทำไมต้องปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. อุบายให้จิตสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ศีลานุสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ธรรม - อธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. จับจิตให้ได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. สิ่งประดับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ให้ระวังจิตในการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. การสร้างกำลังใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ความไม่ประมาท ๒', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ปิดประตูอายตนะทั้ง ๖', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. คบบัณฑิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อบรมจิตให้ฉลาด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ทำความคิดให้สมบูรณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ตักน้ำใส่ถังแตก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. อนุภาพของจิตที่สงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สุจริตธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. สัจธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อุบายอบรมจิตให้สงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อบรมใจให้ได้ญาณทัสนะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ตั้งศรัทธาให้เชื่อมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ความสำรวมระวังเกิดจากการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ความหมายของธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. รู้ความจริง-อริยสัจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. กรรมย่อมจำแนกสัตว์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. อุบายสอนจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. กำหนดูกายในการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ยึดพระพุทธเจ้าเป็นที่พึ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. รักษาจิตดวงเดียว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. สำรวมจิต-รักษาจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. กรรม-ผลของกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ครูบาอาจารย์เป็นของหายาก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. รู้เรื่องทุกข์ให้แจ้ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. กัลยาณมิตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. รักษาใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. สติ ๑', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. เชื่อกรรมและผลของกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. สติ ๒', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ที่พึ่งของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ละชั่ว-ทำดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. สุขสัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. พุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. ความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. กุศลกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. สนทนาธรรม-ตั้งจิตให้ชอบ ความคิดชอบ-ความดำริชอบ สำเร็จจา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ทำให้จิตว่าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems4 = ref([
   { title: '1. กรรมจำแนกสัตว์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. เจริญจิตภาวนาให้ใจสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. การทำบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. หลักการฟังธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พบความจริงที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ยินดีในการทำความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. การสมาทานศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ความสุขเกิดจากการทำบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ปัญหาทั้งหมดอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. การปฏิบัติอันสุดท้าย ดับเวทนา-สัญญา-ดับมโนสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ทุกข์ควรกำหนดรู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. หลวงปู่ฝั้น-การภาวนา เรื่องเด็กกับพุทโธ สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สนทนาธรรม-การสู้เวทนา สมมุติกับของจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. การฝึกจิต ความสุขอยู่ที่ใจสงบ สมบัติของจิต-ต้องฝึกหัด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. การฝึกจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. สนทนาธรรม-สมบัติของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ทานศีลภาวนา การฉันเนื้อสัตว์ ห้ามตัดต้นไม้ ห้ามขุดดิน กา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. แสงเทียนของชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อบรมภาวนาวัดถ้ำศรีแก้ว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems5 = ref([
   { title: '1. ความสุขยิ่งกว่าความสงบไม่มี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. สติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ปฏิบัติจิตภาวนาเพื่อหาที่พึ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การสร้างสถานที่ภาวนาได้ประโยชน์อะไรบ้าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. สะจิตตะมะนุรักขะถะ (จงตามรักษาจิตของตน)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. สถานการศึกษาพระพุทธศาสนาคือวัด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. สัจธรรมคือความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. จิตเป็นรากฐานของความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. พลังของจิตจากสติ-ความระลึก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ปฏิบัติที่ไหนก็ได้แต่การศึกษาต้องมีสถาบัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ความสำคัญในการศึกษาทรมานชฎิล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ความเคารพ ความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ความไม่ประมาทคือเครื่องประกันชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. พิจารณากายให้รู้ความเป็นจริงกายะคตาสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ความสงบเท่านั้นทำให้เกิดความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. จิตยึดมั่นในที่ใดภพก็เกิดที่นั้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ปฏิบัติบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ธรรมทั้งหลายเป็นคู่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. เจตนาละเว้นคือศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems6 = ref([
   { title: '1. ธรรมทั้งหลายเป็นคู่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ความสงบเป็นกำลังจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. อิทธิบาท ๔ ||', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ความรู้ตัว หลวงปู่ขาว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. การสร้างความดี นาคภูริทัต (มีกัณพละ ๕ รวมอยู่ด้วย)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. พละห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. สุสสูสัง ละภะเตปัญญัง (ฟังด้วยดีย่อมได้ปัญญา)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. การฝึกจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ทุกภัยในวัฏฏสงสาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ความทุกข์เกิดจากจิตไม่รู้ความจริง (อบรมจิตให้พ้นจากทุกข์)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ความสั่งสมบุญนำมาซึ่งความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. การฟื้นฟูเผยแพร่พระพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ศีลเป็นเครื่องประกันสังคมและชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. การพัฒนาจิตในทางธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อิทธิบาท ๔ |||', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. กัมมัง สัตเต วิภะชะติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. สัจจะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ยึดพระธรรมเป็นที่พึ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ที่พึ่งทางใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. มรรคเป็นเครื่องแต่งไม่ให้หลงในสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. มัชฌิมาปฏิปทา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ขั้นตอนของสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. สมาธิคือความตั้งใจมั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. การศึกษาอบรมทำให้คนแตกต่างกัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สัจจอธิษฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เราควรพอใจยินดีในการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. การภาวนาหาที่พึ่งทางจิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ความสุขในทางธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ปัญญาอบรมสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ปฏิบัติให้ถูกต้องจิตย่อมรู้เอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. พระพุทธ พระธรรม พระสงฆ์ เป็นที่พึ่งอันประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ภาวนาให้รู้กายในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ทวนกระแสของโลกตามทางของพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. วันอาสาฬหบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. วันเข้าพรรษา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. สติเข้าไปรู้จิตในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. จิตตังทันตังสุขาวะหัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. บารมีธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. สติรักษาจิตเพื่อให้เกิดสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. สมบัติของจิต-อริยทรัพย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. คนต่างกันเพราะจิตใจสะสมความดีไม่เหมือนกัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ฟังด้วยดี ย่อมได้ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ความสุขความทุกข์ประชุมอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. อาจารสัทธา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ทุกข์ควรกำหนดรู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. วันแม่-วันเฉลิมพระชนมพรรษาสมเด็จพระราชินีนาถ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. สติเหมือนดวงไฟเล็กๆส่องให้จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. ความจริงเป็นสิ่งไม่ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ปัญญารอบรู้ในกองสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  

]);

const dharmaItems7 = ref([
   { title: '1. ธรรมคือสภาวะทรงไว้แห่งความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ชำระจิตของตนให้ผ่องแผ้ว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. การฝึกสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การแสวงหาความสุขนอกตัวเหมือนความฝัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ธรรมทั้งหลายมาจากเหตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. แนวทางปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. พระพุทธเจ้าเป็นประทีปส่องทาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. การปฏิบัติให้มีสติรู้กายในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เชือกสามเส้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. หลักเบื้องต้นของการทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การภาวนาเพื่อแต่งใจให้เป็นมรรค', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. พระองค์ปฏิบัติแล้วจึงสอน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. บริกรรมพุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สร้างที่พึ่งทางใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อบรมใจให้รู้เหตุและผล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ความไม่ประมาท เป็นทางไม่ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. อชิตภิกษุ-พระศรีอริยเมตไตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ทุกข์ทั้งหลายมาจากเหตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ทุกคนแสวงหาความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ทุกข์ควรกำหนดรู้-เหตุแห่งทุกข์ตามความเป็นจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ความสำเร็จจากการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. อารักขกัมมัฏฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ความเคารพ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. หลักการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. พระธรรมย่อมรักษาผู้ปฏิบัติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. หลักการฟังธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ความบริสุทธิ์ต้องปฏิบัติคุ้มครองรักษา ปัจจัย ๔ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ทิฏฐชุกัมม์ (การทำความเห็นให้ตรง)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ออกจากโลก โดยใช้สติ สมาธิและปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ความสุขและทุกข์มีคุณค่าเสมอกันเป็นอริยสัจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ความรอบรู้ในกองสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ธัมมัสสวนมัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. หิริ(ความละอายใจ) โอตตัปปะ(ความกลัวบาป)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ความไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. จะพ้นทุกข์ได้เพราะความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ธรรมคือธรรมชาติที่เป็นความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. คำสอนของพระพุทธเจ้าเป็นแผนที่เดินทาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ฟังด้วยดีย่อมได้ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. สิ่งที่ทำให้คนต่างกันเพราะการอบรมและฝึกหัด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ทำลายรื้อถอนขันธ์ห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. อุชุจิตตัง-ทำใจให้ตรง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ทุกขัง อริยสัจจัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ธรรมทั้งหลายมีอยู่ในกายที่มีใจครอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ทุกข์เกิดจากอุปทานของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. เมื่อคนอื่นทำได้เราก็ควรจะทำได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. คำสอนของพระพุทธเจ้าเกิดจากการสร้างบารมีให้รู้ความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. การสวดใช้ภาษาบาลีเพื่อรักษาความเที่ยงตรงกับของเดิม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. การสวดมนต์ภาวนาเพื่อให้จิตตั้งอยู่ในบุญกุศล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ความไม่ประมาทเป็นทางไม่ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems8 = ref([
   { title: '1. สติเป็นองค์มรรคและโพชฌงค์องค์แห่งการตรัสรู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. มงคลขึ้นบ้านใหม่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ผู้ยินดีในธรรมเป็นผู้เจริญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. เมื่อใจดีแล้วทำอยู่ก็ดีพูดอยู่ก็ดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ทุกข์ทั้งหลายมาจากเหตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. การปฏิบัติธรรม คือปฏิบัติกายกับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ธรรมทั้งหลายเกิดจากเหตุ เวลาดับต้องดับที่เหตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ความบริสุทธิ์ของใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ท่านั่งสมาธิ-อบรมกาย-อบรมใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. เทวทูตสูตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. พระธรรมย่อมรักษาผู้ปฏิบัติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สิ่งอะไรเป็นอนัตตาสิ่งนั้นเราสลัดออกได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สำรวมทวารทั้งห้าเปิดประตูใจเพื่อให้มีการอบรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. เอาธรรมเป็นหลักในการฝึกจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ธรรมอยู่ในตัวของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ความดีเป็นที่พึ่งของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ขันตึจะ โสวะจัสสะตา และ สมะณานัญจะทัสสะนัง -ศิริมงคลสูตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ความดีทำให้เกิดสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สนทนาธรรม 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. จิตกับพุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ละอารมณ์หยาบที่เป็นทุกข์ เพื่อให้ถึงซึ่งความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ความอยากไม่มีที่สิ้นสุดไม่มีขอบเขต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. สนทนาธรรม เวรย่อมระงับด้วยการไม่จองเวร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ปัญญายะปะริสุชฌะติ(คนย่อมบริสุทธิ์ด้วยปัญญา)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ศาสนาชี้ลงที่การปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. สนทนาธรรม 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ความเสื่อมคุณธรรมทางจิตใจเป็นความเสื่อมอันยิ่งใหญ่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ปฏิจจสมุปบาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. สนทนาธรรม 4', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. วัฏสงสารไม่มีเบื้องต้นไม่มีเบื้องปลาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. สนทนาธรรม 5', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. วันวิสาขบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ตรวจดูภายนอกเพื่อเตรียมตัวปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. สนทนาธรรม 6', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. อวิชชาอยู่ที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ปฏิบัติธรรมคือปฏิบัติกายและใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ความเสื่อมคุณธรรมทางจิตใจเป็นความเสื่อมอันยิ่งใหญ่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. อบรมจิตใจให้ตรงตามทางของสมเด็จพระสัมมาสัมพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. สนทนาธรรม เรื่องศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. กำลังปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. ธรรมทั้งหลายมีใจเป็นหัวหน้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ความตั้งใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. สนทนาธรรม-สร้างรากฐานเป็นที่รองรับธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. อุปสรรคเป็นกำลังส่วนหนึ่งของการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. ตั้งจิตไว้ให้ชอบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. ใคร่ครวญให้ดีแล้วค่อยพูดค่อยทำ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. สนทนาธรรม การถือปัจจัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems9 = ref([
   { title: '1. ใจอยู่ในใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. อริยสัจ ๔', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. สติและปัญญาฝึกและอบรมจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. สนทนาธรรม สำเร็จในป่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. อารมณ์ของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ปฏิบัติบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. สร้างสถานที่อบรมจิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. กุสะลาธัมมา อะกุสะลาธัมมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. สนทนาธรรม เสขิยะนิกายต่างๆ เกิดขึ้น เพราะความเห็นไม่ตรง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. วิปัสนาปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. อริยสัจธรรมทั้ง ๔', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. การทำความดีเป็นสิ่งสำคัญมาก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ปัญญาเกิดจากการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. วัฏฏะวน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ปฏิปฏิบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ละความชั่วทำแต่ความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. สนทนาธรรม มรรค ๘ การปฏิบัติหายใจเร็วๆ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. มรรคภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. สัตว์ทั้งหลายเป็นไปตามกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. พ้นทุกช์ได้เพราะความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สติสังวร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. โลกกับธรรมต่างกันอย่างไร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. สนทนาธรรม2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สังขารา ปะระมา ทุกขา (สังขาร เป็นทุกข์อย่างยิ่ง)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ธรรมทั้งหลายสำเร็จมาจากใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ทาน ศีล ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ปฏิจจสมุปบาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ความดีความชั่วมาจากใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. กรรมเป็นของตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ปฏิบัติกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. สนทนาธรรม-เกี่ยวกับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. จิตที่ฝึกดีแล้ว ย่อมคุ้มครองรักษาเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. การพิจารณาทุกข์เวทนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สังโยชน์3 สักกายทิฏฐิ วิจิกิจฉา และสีลัพพถปรามาส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ที่พึ่งของเราคือพระพุทธ พระธรรม และพระสงฆ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ศีลและธรรมเป็นของคู่กัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ที่พึ่งอย่างประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ผู้ไม่ประมาทมีชีวิตเพียงวันเดียวก็ประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. อบรมกาย วาจา ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ธรรมทั้งหลายมาจากเหตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. บุญเกิดขึ้นจากการรักษาศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. หลวงปู่สุวัจน์ครบรอบ 70 ปี (ความทุกข์มาจากเหตุ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ธรรมภายใน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. สติปัญญาสัทธาความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ความพอดีเป็นทางสายกลาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. จิตเป็นสิ่งที่ประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. เมตตาตนเองก่อนเมตตาคนอื่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. เป็นห่วงตัวของเราเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems10 = ref([
   { title: '1. ฝึกจิตให้รู้จักเลือกอารมณ์ที่ดีมีประโยชน์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. เอกังจิตตัง (จิตดวงเดียว)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. พระพุทธศานาเป็นมรดกอันล้ำค่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ความไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ความสุขที่แท้จริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. พระธรรมเป็นที่พึ่งทางใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ปฏิบัติดีปฏิบัติถูกทาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. พิจารณากายในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. กายนี้มีทุกข์มาก.', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ความดีหรือไม่ดีเกิดจากจิตใจของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. จิตจะบริสุทธิ์ได้เพราะปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เราจะพ้นทุกข์ได้เพราะความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ความสุขอยู่ที่ความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อินทรีย์สังวร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. การสะสมบุญนำสุขมาให้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. เป็นผู้รู้เหตุและรู้จักผล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. รสพระธรรมชนะรสทั้งปวง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สนทนาธรรม-กรรมฐานห้า-พิจารณากาย ความรู้ตัวคุมสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. อบรมจิตใจให้ปฏิบัติถูกต้องตามธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ความสำคัญในการฝึกจิตภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ปฏิบัติให้ถึงความจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. การภาวนาคือการส่องดูใจของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. อภัยทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ปัญญารอบรู้ในกองสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ความสุขที่รั่วไหลตลอดเวลา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ที่พึ่งอันประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ทางปฏิบัติที่ถูกต้องชี้ลงที่กายวาจาใจของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. อำนาจของสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ทานศีลภาวนาวัตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. สอนตัวเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ความสุขระทม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. มนุษย์สมบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ปัญญารอบรู้ในกองสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ปัญญายะปะริสุชฌะติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สติและความรู้ตัว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. จิตนี้ฝึกและอบรมให้ฉลาดได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ประพฤติธรรมย่อมนำสุขมาให้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ความไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ความสุขที่แท้จริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. สัมมาทิฏฐิ สัมมาสังกับโป สนทนาธรรม-ขันธ์ห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. สนทนาธรรม-ตั้งสัจอธิษฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. มรรค๘ สัมมากัมมันโต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. มรรค๘ สัมมาวาจา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. มรรค๘ สัมมาอาชีโว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. สนทนาธรรม-ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. มรรค๘ สัมมาวายาโม (เพียรชอบ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. มรรค๘ สัมมาสติ (ระลึกชอบ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. มรรค๘ สัมมาสมาธิ (ตั้งใจชอบ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. สติพลัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ที่ใดมีรักที่นั่นมีทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems11 = ref([
   { title: '1. มรณานุสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. การอบรมจิตใจให้รู้ในไตรลักษณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. การทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. จะบริสุทธิด้วยปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. สนทนาธรรม-ตั้งสัจจะอธิษฐาน เอาชนะตัวเอง-ให้คนมานั่งเฝ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. สมาธิจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. อุบาสก อุบาสิกา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. รักษากาย วาจา ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ภาระหะเว ปัญจักขันธา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. อินทรีย์ ๕', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ศรัทธาและความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. เราจะพ้นทุกข์ได้เพราะความเพียรอันชอบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ของจริงกับของปลอม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. มรรค๘ ชี้ลงที่กายวาจาใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. จาคะ-เสียสละไม่มีทิฏฐิแอบแฝง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. จิตควรกำหนดรู้พร้อมด้วยคำบริกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. พิจารณาให้ถึงแก่นให้หลุดจากโลกธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ใช้สติความเพียร สมาธิ ตัดนิวรณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ธัมภายนอก ธัมภายใน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ที่พึ่งอย่างประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ความสุขมาในรูปความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. รูปนี้ไม่เที่ยงเป็นทุกข์เป็นอนัตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ปฏิบัติตามคำสอนของพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. คุณสมบัติของผู้ฉลาด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สิ่งที่หาได้ยาก ๔ อย่าง (พระพุทธเจ้า พระธรรม การบวช สัทธา)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. กุศลทั้งหลายเกิดขึ้นที่จิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ความทุกข์มาจากกิเลส คือความโลภ ความโกรธ ความหลง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. หลักการอบรมจิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. เข้าพรรษา 1990 หลักการภาวนา-พุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. กุสลาธรรม-อกุสลาธรรมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. พระพุทธเจ้าอยู่ป่าพิจารณาทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. การสะสมบุญย่อมทำสุขมาให้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. มนุษย์สมบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. การทำบุญให้ทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ธรรมมีอุปการะมากคือสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. พลังความเป็นหนึ่งของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ศีล สมาธิ ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. สนทนาธรรม-ใจดี.', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. ความเคารพ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. พลังแห่งศรัทธาและความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. สัจจะเป็นสิ่งไม่ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. จิตสงบความทุกข์ดับไป', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. อริยวงศ์ อริยะประเพณี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. เมตตาธรรม เบื้องต้นของการทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. มรรคาปฏิปทา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. ธรรมชาติของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. สนทนาธรรม-อาจารย์สมชาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. พละ ๕', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems12 = ref([
   { title: '1. ความสุขในทางธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. การอยู่ป่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ที่พึ่งอย่างประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. บุญกุศลรวมอยู่ที่ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. กายคตาสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. การบำเพ็ญคือการทำให้เต็ม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. สนทนาธรรม สงเคราะห์ตัวเองก่อน สอนคนอื่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. วันอาทิตย์คล้ายวันพระ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. มรณานุสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. เลือกทางที่ถูกแล้วปฏิบัติตาม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. สนทนาธรรม-เข้าพรรษา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. หลวงปู่ให้พร รัตนะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ทำวัตรเช้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ทำวัตรเย็น ธัมมจักกัปปวัตตนสูตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อภิณหปัจจเวกขณะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ความเกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ใจดีใจสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. บุญเป็นสื่อของความสุข วันอาทิตย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ความเชื่อมั่นในกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. สติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. หลักการพิจารณา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สนทนาธรรม-ความมหัศจรรย์ของจิต-ความสงบสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. การประพฤติปฏิบัติธรรมเพื่อให้ได้ความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. อริยสัจธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สนทนาธรรม-อนุภาพของความดี จากบุญกุศล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เวทนาขันธ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ศรัทธาขันติโสรัสจะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. เรียนรู้เรื่องทุกข์และสมุทัยเพื่อให้ถึงนิโรธและมรรค', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ไม่มีอะไรเกิดนอกจากทุกข์เกิด ไม่มีอะไรดับนอกจากทุกข์ดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. รักษากาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ทำงานเฉพาะอันเดียวคือ พุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. การปฏิบัติธรรมคือการปฏิบัติกายและใจ ทางออกจากทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. การปฏิบัติภาวนาเป็นปฏิปฏิบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. อวิชชาเป็นปัจจัยทำให้เกิดสังขาร-สังขารดับด้วยปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สร้างปัญญาให้รู้เท่าทันสังขาร(ดับ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. การภาวนาดูจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. อบรมจิตให้พ้นจากทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. การสำรวมกายวาจาใจทำความสุขมาให้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. หลักการภาวนา คือสร้างสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. สนทนาธรรม-พระภานิยะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. งานปฏิบัติเป็นงานที่เรียบร้อยสวยงามที่สุด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. งานทางพระพุทธศาสนามี ๔ อย่าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ความเพียรมีที่ไหนความสำเร็จย่อมมีที่นั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. เนกขัมมบารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. งานเพื่อออกจากทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. ทิฏฐิสมบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ความสงบคืออะไร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. บุญกิริยาวัตถุ ๖ อย่าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. สติสัมปชัญะมีอุปการะต่อการปฏิบัติมาก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ความรู้ตัวสำคัญมากในการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems13 = ref([
   { title: '1. ความสุขทางกายและความสุขทางใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. พุทธานุสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ความสงบเท่านั้นทำให้เกิดความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. หาทางออกจากทุกข์ โดยอบรมจิตใจให้ฉลาด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พลังอันสำคัญในการเดินทางคือความสงบของจิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. วิโมกข์ธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. อริยมรรค', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ธรรมทั้งหลายสำเร็จมาจากใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. อมตธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. หลักเบื้องต้นของการภาวนาต้องมีความเชื่อและความเคารพ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ความรู้ตัวและสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ฉลาดในการเข้าออกและประคองจิตในสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. การรู้ตัวพิจารณาตัวเองเป็นความรู้ที่ประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. การสวดมนต์ไหว้พระ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สัจจบารมี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. สนทนาธรรม-โอปนยิโก-รู้ตัว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. การปฏิบัติเพื่อดับทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ความดีและไม่ดีทางจิตใจเกิดจากเหตุไม่ใช่เกิดขึ้นลอยๆ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ความตั้งใจเป็นสิ่งสำคัญในการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. สนทนาธรรม-ภิกษุวางบาตรพระพุทธเจ้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. มัชฌิมาปฏิปทา (ทางสายกลาง)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สนทนาธรรม หลักการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. สร้างกุศล กิเลสหรืออกุศลที่อยู่ไม่ได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. อนุสติ ๑๐', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ความไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ความดีภายนอกภายในรวมกันเป็นพลัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ละชั่วทำดี ทำจิตของตนให้ผ่องแผ้ว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ที่พึ่งอันประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. อคติ ๔', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ธรรมานุธรรมปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. การภาวนาเป็นสมบัติแท้ของใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. พระบรมครู', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. การปฏิบัติต้องยึดพระพุทธเจ้าเป็นหลัก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ที่พึ่งของเราคือพระพุทธเจ้า พระธรรมและพระสงฆ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. การภาวนาวันนี้ให้มีอุบายดีกว่าเมื่อวาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. การสะสมบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. หลักการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ธรรมจักษุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. อารมณ์กับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. เป็นมิตรกับทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ความยินดีในธรรม ย่อมชนะความยินดีทั้งปวง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. เอกายามรรค-ทางอันเอก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. อุบายการปฏิบัติจิตภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. ความเพียรพยายาม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. การประพฤติปฏิบัติธรรมต้องมีศรัทธา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. กายในกาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. รู้เหตุและผล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ดูใจแต่งใจให้ดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
]);

const dharmaItems14 = ref([
   { title: '1. ปฏิบัติภาวนาให้รู้ธรรมเห็นธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. คำสอนของพระพุทธเจ้าเป็นประทีปส่องทาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. จิตคือธาตุอมตะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การปฏิบัติกิจสิ่งสุดท้าย (ดับสัญญาและเวทน-มโนสังขาร)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. โลกยังพร่อง อยู่เป็นนิจไม่รู้จักอิ่ม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ความทุกข์อยู่ที่ไหนความสุขที่แท้จริงอยู่ที่นั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ทุกข์ควรกำหนดรู้ (เกิดเองหายไปเอง)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. สนทนาธรรม-สติทำให้จิตกับทุกข์ถึงกัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. หลักการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. สนทนาธรรม-(โชธิก) เศรษฐี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. เวรย่อมระงับด้วยการไม่สร้างเวร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. นัตถิ สันติปะระมัง สุขัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. เทศน์ที่วัดเมตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ความตั้งใจมั่นอยู่ที่ไหนความสำเร็จอยู่ที่นั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ทำวัตรเช้า นำโดยมหาทวีสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ทำวัตรเย็น นำโดยหลวงปู่สุวัจน์ สุวโจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. พุทโธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ศีล ๕', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. หลักการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. การภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. อุโบสถศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ศีล-ถ้ำผาปล่อง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. อริยวงศาปฏิปทา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. อคติ ๔', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เมตตาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. การกราบ-นะโม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. รูป เสียง กลิ่น รส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ที่พึ่งอันสูงสุด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. สังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. การอบรมจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. อาจารย์ บุญเลิศ วันเกิดหลวงปู่สุวัจน์ ครบ ๘๒ ปี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
  
]);

const dharmaItems15 = ref([
   { title: '1. ผู้สมควรจะเป็นเจดีย์ของพี่น้องชาวไทย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ชีวประวัติย่อหลวงปูสุวัจน์ สุวโจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. จิตยึดมั่นในที่ใดภพก็เกิดที่นั่น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ทุกข์ภัยในวัฎฎสงสาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. มัชฌิมาปฎิปทา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. อารักขกัมมัฎฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ค่วามสุขและทุกข์มีคุณค่าเสมอกันเป็นอริยสัจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ความดีทำให้เกิดสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ความเสื่อมคุณธรรมทางจิตใจเป็นความเสื่อมอันยิ่งใหญ่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. จิตจะบริสุทธิ์ได้เพราะปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การภาวนาคือการส่องดูใจของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ความสุขที่แท้จริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. การอบรมจิตใจให้รู้ในไตรลักษณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. อารมณ์กับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. พุทธแท้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ทางพ้นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. การแก้นิวรณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. การพิจารณาธาตุ-กาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ธรรมะของพระอริยะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. การปฎิบัติอันสุดท้าย ดับเวทนา-สัญญา-ดับมโนสังขาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
 
  
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
  width: 150%;
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