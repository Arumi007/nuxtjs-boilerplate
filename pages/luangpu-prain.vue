<template>
  <div class="container">
    <h1 class="welcome-text">หลวงปู่เปลี่ยน ปัญญาปทีโป</h1>
    <div class="empty-box">
      <img src="/pu_prain.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        พระอาจารย์เปลี่ยน ปญฺญาปทีโป เป็นพระภิกษุฝ่ายอรัญวาสี วัดอรัญญวิเวก สังกัดคณะสงฆ์ธรรมยุติกนิกาย
        <br><strong>กำเนิด</strong>
      </p>

      <p class="birth-detail">
      พระอาจารย์เปลี่ยน ปัญญาปทีโป นามสกุลเดิม วงษาจันทร์ เกิดเมื่อวันที่ 16 พฤศจิกายน พ.ศ. 2476 ตรงกับวันพฤหัสบดี ปีระกา 
      ณ บ้านโคกคอน ตำบลโคกสี อำเภอสว่างแดนดิน จังหวัดสกลนคร บิดาชื่อ กิ่ง มารดาชื่อ อรดี สกุลเดิม จุนราชภักดี บิดามารดาทำการค้าขาย 
      มีฐานะดี คุณตาเป็นกำนันอยู่ที่ตำบลโคกสี ชื่อ ขุนจุนราชภักดี และคุณยายรักท่านมากจึงรับท่านมาเลี้ยงดูตั้งแต่ยังเล็ก ๆ
      <br><strong>การบวช</strong>
      </p>

      <p class="birth-detail">
      พระอาจารย์เปลี่ยนเข้าพิธีอุปสมบทที่วัดธาตุมีชัย บ้านโคกคอน ตำบลโคกสี อำเภอสว่างแดนดิน จังหวัดสกลนคร เมื่อวันที่ 31 มีนาคม พ.ศ. 2502 พระอุปัชฌาย์ชื่อ พระครูอดุลย์สังฆกิจ พระกรรมวาจาจารย์ชื่อ พระครูพิพิธธรรมสุนทร ได้ฉายาว่า ปัญญาปทีโป
      </p>

      <p class="birth-detail">
      เนื่องจากวัดธาตุมีชัยเป็นวัดฝ่ายมหานิกาย ดังนั้น เมื่อพระอาจารย์เปลี่ยนบวชแล้วจึงย้ายไปอยู่วัดทุ่งสว่าง บ้านโคกคอน ตำบลโคกสี อำเภอสว่างแดนดิน จังหวัดสกลนคร ท่านมีความสบายกายสบายใจมากเพราะได้ปล่อยวางภาระต่าง ๆ ตั้งแต่การรับผิดชอบเงินทองจำนวนมาก 
      ทั้งของท่านเองและเงินฝากของผู้อื่น ความกังวลในการค้าขายให้กับครอบครัวและญาติพี่น้อง รวมทั้งการดูแลรักษาไร่นา วัวควาย และทรัพย์สมบัติอื่น ๆ ที่ท่านแบกอยู่ผู้เดียวมาตั้งแต่อายุ 12 ปี ครั้นบวชได้ 18 วัน โยมมารดาก็ขอให้ท่านสึก เพราะเลยกำหนดเวลาที่อนุญาตแล้ว แต่ด้วยความฝักใฝ่ในการศึกษาธรรมะของท่าน จึงได้ขอโยมมารดาบวชต่อให้ครบ 1 พรรษา
      <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%88%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99_%E0%B8%9B%E0%B8%8D%E0%B8%BA%E0%B8%8D%E0%B8%B2%E0%B8%9B%E0%B8%97%E0%B8%B5%E0%B9%82%E0%B8%9B" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ประวัติหลวงปู่เปลี่ยน</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList2">2. หลักธรรมเพื่อความสุข</span>
        <ul ref="dharmaList2" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems2" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList3">3. สมถะและวิปัสสนากัมมัฏฐาน</span>
        <ul ref="dharmaList3" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems3" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList4">4. ฝึกฝนอบรมจิตใจ</span>
        <ul ref="dharmaList4" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems4" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList5">5. การฝึกสติปัญญา</span>
        <ul ref="dharmaList5" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems5" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList6">6. ธรรมมานุปัสสนา</span>
        <ul ref="dharmaList6" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems6" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList7">7. จิตตภาวนา</span>
        <ul ref="dharmaList7" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems7" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList8">8. การทำความสงบภายใน</span>
        <ul ref="dharmaList8" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems8" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList9">9. มหัศจรรย์แห่งลมหายใจ</span>
        <ul ref="dharmaList9" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems9" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList10">10. ทุกขังอริยสัจจัง</span>
        <ul ref="dharmaList10" class="dharma-sublist">
          <li v-for="(item, index) in dharmaItems10" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1aZ-Geaa24AFb3FfZYrs_K_rrWnzMUO_T?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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


const dharmaItems = ref([
  { title: '1. ประวัติพระอาจารย์เปลี่ยน ปัญญาปทีโป', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. สวดมนต์-ทำวัตรเช้า วัดอรัญญวิเวก ( ต้นฉบับ )', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. สวดมนต์ ทำวัตรเย็น (ต้นฉบับ วัดอรัญญวิเวก)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems2 = ref([
  { title: '1. ชาติปิ ทุกฺขา ความเกิดเป็นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. การเกิด  ดับ กับธัมมจักรฯ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. สัตว์โลกทั้งหลายมีกรรมเป็นของ ๆ ตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การเข้าใจเรื่องต่าง ๆ ที่ได้เกิดมาตามอำนาจของกรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. การเวียนว่ายตายเกิดในวัฏสงสาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. สังขารทั้งปวงไม่เที่ยง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. บุคคลที่รู้แจ้งเท่านั้นจึงรู้ว่าขันธ์ ๕ เป็นภาระหนักจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. พิจารณารูปขันธ์นี้ให้เข้าใจตามเป็นจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. เพราะรู้จักทุกข์ จึงอยากพ้นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. การค้นคว้าหาเหตุแห่งทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การศึกษาสัจธรรมตามหลักพระพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ธรรมทั้งหลายมีใจเป็นใหญ่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ปัญญาเป็นแสงสว่างในโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. บูชาบุคคลที่ควรบูชา เป็นมงคลอันยิ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ผู้ไม่หวั่นไหวต่อโลกธรรม ๘', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ผู้ชนะตนได้แล เป็นเลิศในโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. อริยสัจ - ความจริง ๔ ประการ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ศีล สมาธิ ปัญญา มรรค ๘ ประการ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. สร้างหลักฐานให้ชีวิตด้วย ทาน ศีล ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อายตนะ ๑๒ เป็นของร้อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ตัณหายิ่งกว่าแม่น้ำ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. วิราคะธรรม นำความเบื่อหน่ายคลายความกำหนัดในขันธ์ ๕', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. การปฏิบัติบูชาเป็นมงคลอันเลิศ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ความสำคัญของอามิสบูชาและปฏิบัติบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ธรรมย่อมรักษาผู้ปฏิบัติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. พึงเลือกกรรมฐานให้ถูกจริต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. การปฏิบัติธรรมพึงให้เป็นไปตามลำดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. อาการของจิตที่สงบแต่ละขั้นตอน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. อุบายทำใจให้สงบเป็นสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. การฝึกปฏิบัติสมาธิอย่างกระทัดรัด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ฝึกใจให้มีสมาธิพลัง - ปัญญาพลัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. การปฏิบัติภาวนาเพื่อหาเหตุแห่งทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. การปฏิบัติเพื่อความดับทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. การระลึกถึงมรณานุสสติเพื่อเตรียมใจไม่ให้ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ความประมาทเป็นหนทางแห่งความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ผู้ไม่ประมาทอยู่ย่อมพ้นจากการกลัวความตายไปได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ให้กลัวการเกิด อย่ากลัวการตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. คนเราเกิดมา ตายแล้วไปไหน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
  
]);

const dharmaItems3 = ref([
  { title: '1. เริ่มต้นภาวนาสมถะกัมมัฏฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ธัมจักกับปวัตนสูตร ในวันเข้าพรรษา พศ 2521', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ปัจจยาการ ๑๒ ประการ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. เริ่มต้นภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ความเพียรฝึกสติปัญญาทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. เมตตาพรหมวิหาร ๔', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ความเพียร ๔  27 มิย 2523', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ทำความเพียรภาวนาเพราะอะไรจิตใจจึงไม่สงบ 9 กค 23', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. การได้เกิดเป็นมนุษย์เป็นของเกิดได้ยาก 16 กค 23', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ความงามสามอย่างเป็นเครื่องประดับของมนุษย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ขันติ ความอดทน 30 กค 2523', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. วิปัสสนาญาณ ๑๐ ประการ 18 สค 2523', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. แสวงหาทรัพย์ที่มีแก่นสารคือ อริยทรัพย์ 24 เมย 24', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. สัปปุริสธรรม 6 พค 2524', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อโศกํ นาม ไม่มีความโศกเศร้า 23 พค 2524', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ขันธ์ ๕ เป็นภาระหนัก 27 พค 2524', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ความเพียรในองค์มรรค เนื่องในวันเข้าพรรษา 16 สค 24', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ล่วงทุกข์ได้เพราะความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. การทำสมาธิเริ่มต้นจนถึงความสงบ 10 ตค 2524', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. สัมมาสังกัปโป(ความดำริชอบ) 25 กย 2525', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. การทำบุญและอานิสงค์การทอดกฐิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. รูปไม่ใช่ตัวตน 8 เมย 2525', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. พรหมวิหาร ๔ เทศน์ที่วัดดวงแข กทม  5 มีค 2525', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ทุกข์ สมุทัย นิโรธ มรรคโดยย่อ ๆ 7 พค 2525', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. การเริ่มต้นภาวนาสมถกัมมัฏฐาน 10 พค 2525', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. การขาดสติมีโทษ มีสติมีประโยชน์ อบรมคณะทหารอากาศ 31 ธค 24', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ความโกรธไม่ดี ใครฆ่าความโกรธได้มีความสุข 15 กย 2525', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. อสุภะกัมมัฏฐานแก้ราคะจริต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. การไม่ทำบาปทั้งปวง ยังกุศลให้ถึงพร้อม ทำจิตให้ผ่องแผ้ว 26 พย 24', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ใครไม่รักษาศีลมีโทษมีทุกข์  11 มค 2526', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ใครรักษาศีลได้มีความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. ทาน ศีล ภาวนา เทศน์ที่วัดประกริม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. ที่พึ่งในโลกนี้และโลกหน้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. การฝึกสติและอุบายทำสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. การสนทนาธรรมและฟังธรรมเป็นมงคล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. อายตนะภายนอก ภายในพิจารณาเพื่อรู้ตามความเป็นจริง 12 มิย 26', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. มาตาปิตุอุปฏฺฐานํ ปุตฺตทารสฺส สงฺคโห 12 พย 2526', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ความประมาทไม่ดี ความไม่ประมาทเป็นความดี 12 พย 2526', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ความเพียรเพื่อพ้นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. การตั้งตนไว้ชอบเพื่อประกอบคุณงามความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. การตั้งตนไว้ชอบ เทศน์ ณ วัดปลักกริม (สระน้ำ) 7 มิย 27', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ธมฺโมปทีโป พระธรรมเหมือนดวงประทีป 2 กย 2527', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. เทศนาเนื่องในวันออกพรรษา  9 ตค 2527', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. อายตนะ ๑๒ และสนทนาต่อ ที่วัดน้อย 15 ธค 2527', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. การเอาชนะตนเองและสนทนาต่อ 16 ธค 2527', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. สิ่งที่ควรบูชา และสิ่งที่ไม่ควรบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
  
]);

const dharmaItems4 = ref([
  { title: '1. ใดๆใจถึงก่อน สำเร็จแล้วด้วยใจ 12 ธ.ค.40', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ระลึกถึงความตาย (แสดงธรรมที่ป่าช้า) 21 ธ.ค.40', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. อบรมนักศึกษาพายัพและสนทนาต่อ 3 ม.ค.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. การได้เกิดเป็นมนุษย์เป็นผู้โชคดี 11 ก.พ.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. การแสวงหาทางพ้นทุกข์ 19 ก.พ.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. การฝึกจิตใจเป็นของดียิ่ง 5 มี.ค.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. จิตที่ฝึกดีแล้วนำสุขมาให้ ณ ถ้ำผาปล่อง 14 ส.ค.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. บุคคลล่วงทุกข์ได้เพราะความเพียรสี่อย่าง 19 ก.ย.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. พัฒนาแก้ไขใจตนเองให้ถูกต้อง 20 ก.ย.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. หาอุบายแก้ไขกิเลสในใจตนเอง 13 ต.ค.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. ปฏิบัติเพื่อขัดเกลากิเลสออกจากจิตใจ 3 พ.ย.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. พุทธศาสนาไม่ได้สอนคนให้เป็นคนโง่ 3 ธ.ค.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ผู้ปฏิบัติอย่าได้เป็นทุกข์เรื่องคนอื่น 17 ธ.ค.41', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. จงทำประโยชน์ตนและประโยชน์ท่านให้พร้อม 1 ม.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. มรณานุสสติ 16 ม.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ปฏิบัติกว่าจะรู้อยู่ฟากตาย 24 ม.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. มุ่งแสวงหาทางเดินที่ถูกต้อง 22 ก.พ.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. การพัฒนาแก้ไขใจของตนเอง 12 มิ.ย.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. ฝึกฝนอบรมจิตใจให้สงบเพื่อความสุข 11 มิ.ย.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ปรารถนาดีไม่ทำดีจะได้ดีจากที่ไหน 20 มิ.ย.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ปฏิบัติให้ได้ที่พึ่งของใจเพื่อความสุขและสนทนาธรรมต่อ 5 ก.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สิ่งใดเกิดขึ้นสิ่งนั้นเสื่อมไปสิ้นไป 27 ก.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ที่พึ่งที่อาศัยของกายของจิต 4 ส.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. คนไม่ฉลาดมีหรือไม่มีก็เป็นทุกข์ 11 ส.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. จิตสงบจึงพบความสุข 19 ส.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. เพียรฝึกฝนจิตใจให้สงบจากกิเลส 26 ส.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. การเลือกคบค้าสมาคม อบรมนักศึกษาม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. การเลือกคบค้าสมาคม อบรมนักศึกษาม.ช. 27 ส.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ศึกษาหลักพุทธศาสนาเพื่อพ้นทุกข์ 9 ก.ย.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. พิจารณาทุกข์ให้รู้แจ้งเพื่อละออกจากจิตใจ 17 ก.ย.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. เนกฺขมฺมสงฺกปฺโป อบรมพระนวกะ 1 ต.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. พิจารณาความเสื่อมไปของสังขาร 2 ต.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. การได้เกิดเป็นมนุษย์เป็นของยาก 9 ต.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ฝึกสติปัญญาให้รู้เท่าทันกลมายาของกิเลสที่เกิดขึ้นในปัจจุบัน 17 ต.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. แสวงหาคุณธรรมให้เป็นที่พึ่งของใจ วันออกพรรษา 24 ต.ค.42', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems5 = ref([
  { title: '1. กามคุณทั้ง 5 มีโทษ 17 มีค 2525', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ตามดูรู้จิตของตนเอง 25 มีค 2533', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. การทำความดีให้เป็นที่พึ่งของตนและสนทนาต่อ 20', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. หาอุบายทำจิตให้สงบเป็นสมาธิ 8 ตค 2534', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ความไม่เที่ยงของรูปร่างกาย ณ ถ้ำผาปล่อง 31 สค 25', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. แสงสว่างเสมอด้วยปัญญาไม่มีและสนทนาต่อ 3 กพ 36', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. โทษของอบายมุขทั้ง ๔ อย่างและการละเว้นได้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ตามดู รู้ทันความเคลื่อนไหวของจิต 27 พย 2532', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. คุณค่าที่ได้เข้ามาบวชในศาสนา อบรมพระนวกะ 25', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. การฝึกสติปัญญา ณ วัดบรมนิวาส 28 ตค 2527', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การสังเกตุดูจิตใจในปัจจุบันเรียกว่าความเพียร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. อตีตาธรรมเมา อนาคตาธรรมเมา ปัจจุปันนาธรรมโม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. การสร้างสติปัญญาให้รู้โลกเพื่อความสุข 2 เมย 25', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. การปฏิบัติตนให้ได้ที่พึ่งทางใจ 10 เมย 2535', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. การหาวิธีให้จิตหลุดจากกองทุกข์ 25 เมย 2535', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. การปฏิบัติเพื่อสร้างอาวุธเข้าสู่สงคราม 1 พค 25', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. สร้างสติปัญญามองดูกิเลสในจิตใจของตน 24 พค 2535', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. หาอุบายละมานะทิฏฐิออกจากจิตใจเพื่อความสุข 31', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. การได้มาบวชในพระพุทธศาสนาเป็นของยาก อบรมพร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. สนทนาธรรมเรื่องการดื่มสุรามีโทษและศีลห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. การหาอุบายสอนจิตให้อยู่อย่างสงบ 11 ตค 2535', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. วิธีพิจารณาดูอารมณ์ที่เกิดกับจิตเพื่อการแก้ทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ศีลเป็นพื้นฐานในการพ้นทุกข์ เนื่องในวันมาฆ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. สุขอื่นยิ่งกว่าจิตสงบไม่มี 20 เมย 2536', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. สนทนาเรื่องอิทธิบาทสี่ เป็นพื้นฐานของการทำงาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. การสร้างบุญทำทาน๑ การรักษาศีล๑ การภาวนา๑ คือ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. การอบรมจิตใจให้สงบ ณ วัดอโศการาม  2 กค 2532', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. สัมมาวายามะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. สัมมาอาชีวะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
]);

const dharmaItems6 = ref([
  { title: '1. 2528-01-21 ความโกรธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. 2528-07-31 ทุกข์ เนื่องในวันอาสาฬหบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. 2528-08-15 สมุทัยคือตัณหาเป็นแดนเกิดแห่งกองทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. 2528-12-27 ชำระจิตให้สะอาด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. 2529-01-17 ชำระจิตให้สว่างผ่องใส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. 2529-01-17 ผู้ปฏิบัติธรรมย่อมนำความสุขมาให้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. 2529-01-31 ความว่าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. 2529-08-16 การทำทาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. 2529-08-28 กายานุปสฺสนาสติปฏฺฐานํ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. 2529-09-17 ความประมาทมัวเมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. 2530-04-12 พิจารณาจิตในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. 2530-04-20 ธรรมมานุปัสสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. 2530-07-05 อบรมสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. 2530-07-25 สัมมากัมมันโต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. 2530-07-29 สัมมาวาจา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. 2530-08-17 สัมมาสมาธิ ความตั้งจิตไว้ชอบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. 2530-08-23 อินทรีย์ 5', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. 2530-08-31 ความเพียรแผดเผากิเลสให้เร่าร้อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. 2530-10-15 รูปไม่เที่ยง เป็นทุกข์ เป็นอนัตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. 2530-11-05 เวทนาในเวทนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. 2530-11-13 ความตายเป็นภัยต่อชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. 2531-02-24 การฝึกสติปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. 2531-03-18 สติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. 2531-07-21 เวทนานุปัสสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. 2531-10-03 วิธีทำจิตว่างวางจากภาระหนัก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. 2531-10-10 เข้าใจพระพุทธศาสนาหรือยัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. 2531-11-08 การฝึกสติสัมปชัญญะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. 2532-07-17 การปฏิบัติที่เป็นมัชฌิมา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. 2532-07-25 งานภายใน งานภายนอก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. 2532-08-09 ดับไฟราคะ โทสะ โมหะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. 2532-08-16 รู้เล่ห์มายาของกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. 2532-08-24 ความเพียร 4 ประการ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. 2533-04-23 การชำระกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. 2533-10-18 ปัญญาอย่างต่ำ กลาง สูงในการละกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. 2533-10-26 การทำพระนิพพานให้แจ้ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. 2533-11-17 ผู้ไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. 2533-11-25 ธรรมข้อปฏิบัติของมนุษย์ผู้ประเสริฐ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. 2534-06-26 อุบายหาทางพ้นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. 2534-08-17 การอบรมจิตในทางพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. 2534-08-17 รูปขันธ์นี้เป็นรังของโรค', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. 2548-09-01 แผ่เมตตา การทําบุญ ประเภทกฐิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems7 = ref([
   { title: '1. อริยทรัพย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. นางฟ้ากลับชาติมาเกิด แต่ไม่ยอมทำบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. นักปฏิบัติพึงเห็นตนเองเพื่อจะได้แก้ไขตนให้ถูกต้อง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ตัณหา 3', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. จิตที่สงบจึงรู้เห็นโทษของอารมณ์ทั้งปวง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. จิตตภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ฝึกสติสัมปชัญญะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. การภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. กิเลส เป็น กาฝากของใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ทำบุญใหญ่ด้วยการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การทำจิตให้ผ่องแผ้ว', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. กายนคร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ปฏิจจสมุปบาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ปฏิบัติอย่างไร ให้พบกับความสงบสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. อามิสสุขและนิรามิสสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. พลังจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. ธัมมจักกัปปวัตตนสูตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. ค้นคว้าเหตุที่ทำให้เกิดทุกข์และสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. การทำบุญและอานิสงส์การทอดกฐิน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. อย่าบังคับจิตเกินไป อานาปานสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อยากมีความสุข ให้ฝึกเอาชนะใจตนเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. กรรมชั่วนำสู่อบายภูมิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. เปรต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ใช้ตัณหาแก้ตัณหา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. พระไตรลักษณ์ (ถาม-ตอบ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. อยู่กันอย่างไรให้มีความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. อิทธิบาท 4', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ความโกรธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ความเป็นผู้ว่าง่ายสอนง่าย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. คนไม่ถูกนินทาไม่มีในโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. ความเพียร 4 อย่าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. เกิดมาเป็นมนุษย์พบพระพุทธศาสนาคือผู้ที่โชคดีมาก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. อุบายภาวนา คลายความทุกข์ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. ปรึกษาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. ควรฝึกฝนจิตใจให้รู้จักเบื่อหน่ายในวัฏฏสงสาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. คิดดี พูดดี ทำดี มีแต่ความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ตอบปัญหาเรื่องคนตาย ภาษาอีสาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. อุบายฝึกฝนจิตใจให้รู้จักเบื่อหน่ายในวัฏฏสงสาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. บุญย่อมเป็นที่พึ่งอาศัยของสัตว์ไปในโลกหน้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. พระโสดาบัน จะมาเกิดอีกกี่ชาติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. นรก สวรรค์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ธรรมทั้งเกิดและดับเพราะเหตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems8 = ref([
   { title: '1. ชาวพุทธกราบไหว้บูชาพญานาค ควรหรือไม่ต้องใช้ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. บุญ คือ อะไร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. การภาวนา หาทางพ้นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ทำจิตให้ว่างจากความยึดมั่นในสังขารทั้งปวง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. ทรัพย์อันประเสริฐ ที่ต้องรีบเร่งแสวงหา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. ทุกข์เพราะอยาก ยากเพราะไม่รู้จักพอ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ความเจริญและความเสื่อม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. การตั้งตนไว้ชอบนำแต่ความสุขมาให้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ชำระกิเลสสู่นิพพาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. การถวายสิ่งของแด่พระภิกษุสงฆ์ที่ญาติโยมควรปฏิบัติ ตอนที่ 2', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. การฝึกสมาธิให้จิตสงบพบความสุขที่แท้จริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. ขันธ์ 5', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. การฝึกวางใจให้เป็นกลาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ทุกข์ของการเวียนว่ายตายเกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. นั่งสมาธิ ภาวนา ทำไมจิตถึงไม่สงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. 2529-10-24 ความหลงผิดและหลงถูก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. 2530-08-09 สัมมาวายาโม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. 2530-11-15 ปัจจัยปัจเวกขณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. 2531-02-02 การทำความสงบภายใน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. 2531-05-15 สมมุติสัจจะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. 2532-09-20 ฌานกับอัปปนาสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. 2533-02-17 การสกัดกั้นและข่มกิเลสภายในจิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. 2533-04-01 เห็นจิตตนเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. 2548-09-18 แสวงหาความสุขให้ถูกทาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. 2548-09-26 บุญจากการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. 2548-10-18 ไพเราะในเบื้องต้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. 2548-10-26 ทุกข์ในการเวียนว่ายตายเกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. 2548-11-01 สิ่งทั้งหลายมีความเกิดดับเป็นธรรมดา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. 2548-11-09 การพัฒนาจิตของตนให้สูงขึ้นตามลำดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. 2548-11-24 สิ่งทั้งปวงตกอยู่ในไตรลักษณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. 2548-12-16 คบคนเช่นไรย่อมเป็นดั่งคนเช่นนั้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. 2548-12-30 หลงสิ่งไหนให้พิจารณาสิ่งนั้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. 2549-02-13 บุคคลล่วงทุกข์ได้ก็เพราะศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. 2549-05-05 ศึกษากายให้เข้าใจตามเป็นจริง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. 2549-05-12 บูชาบุคคลที่ควรบูชาเป็นมงคลอันอุดม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. 2549-05-20 ศึกษาจริตของตนให้เข้าใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. 2549-06-04 อุบายอบรมจิตให้สงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. 2554-05-13 ธรรมเมศนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. 2555-10-25 สนทนาธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. 2558-05-24 กรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. 2559-12-24 เทศน์วัดพระเจ้าตนหลวง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems9 = ref([
   { title: '1. การพัฒนาตนให้เข้ากับสังคม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ธรรมดาความถูกต้อง ก็ย่อมมาจากความผิดเสียก่อน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ฝึกจิตดีแล้วย่อมพ้นทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. มหัศจรรย์ของจิต มหัศจรรย์แห่งลมหายใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. มายาของกิเลสที่เกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. งาม 3 อย่าง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. สอนใจให้ฉลาดรู้อยู่อย่างสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. อบายภูมิ ๔', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. การพิจารณาดูมายาของกิเลสที่เกิดขึ้นกับจิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. ความสำคัญในการรักษาศีลของผู้ปฎิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. สอนใจให้รู้ธรรมชาติของโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. วิบากกรรมเก่า เห็นได้จากการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สังขารที่มีวิญญาณและไม่มีวิญญาณ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. วันคืนล่วงไปให้รีบพากันปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. สิ่งใดคือกำไรของชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. วิธีแก้ไขจิตใจให้ดำเนินไปในทางที่ถูกต้อง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. มหัศจรรย์ลมหายใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. การให้อภัยทาน นำความสุขมาให้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. สังขารเป็นทุกข์อย่างยิ่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. พิจารณาเวทนาในเวทนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ค้นหาตัวตนของเรา ต้องค้นหาจากที่ไหน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. สิ่งทั้งปวงมีความเกิดขึ้น ตั้งอยู่ แล้วดับไป', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. อานิสงส์บุญ จากการฟังธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. สพฺเพสงฺขารา อนิจฺจา ทุกฺขา อนตฺตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. ละโลภโกรธหลง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. มีลาภเสื่อมลาภ มียศเสื่อมยศ มีสุขมีทุกข์ มีนินทามีสรรเสริญ เป็นของธรรมดาในโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. สวรรค์ผู้บรรลุโสดาบัน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. สาเหตุที่ทำให้เกิดกิเลส', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. รีบเร่งสร้างบุญกุศล คุณงามความดี ก่อนความตายจะมาถึง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. ทุกสิ่งทุกอย่างลงสู่ไตรลักษณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. สิ่งสำคัญในชีวิตคือการฝึกจิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. อบรมการทำสมาธิเบื้องต้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. สังขารไม่เที่ยง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. สวรรค์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. สติ ปัญญา คือสิ่งสำคัญ สำหรับภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. ศึกษาธรรมเพื่อรู้จักแยกแยะทั้งสิ่งดีและไม่ดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ละกิเลสในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. ฝึกฝนอบรมจิตใจให้สงบเพื่อความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ดวรใช้เวลาที่เหลืออยู่ แสวงหาอริยทรัพย์ ทรัพย์ที่จะนำไปสู่สวรรค์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. มหัศจรรย์แห่งลมหายใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },

]);

const dharmaItems10 = ref([
   { title: '1. ธรรมะสอนใจพูดให้คิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '2. ผู้รักตนเพียรยกตนให้พ้นจากหล่ม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. ฝึกใจให้มีที่พึ่งของตน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. ความอัศจรรย์ของการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. พญานาคที่ป่าคำชะโนด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. พบพญานาค', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. อินทรีย์ 5', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. นรก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. ชีวิตคือการต่อสู้', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. จิตใจที่สงบแล้วจึงแสวงหาความสุขได้ถูกทาง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. เอาชนะตนเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. กิเลสตัณหา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. ขันธ์ห้าเป็นภาระหนัก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ธรรมทั้งเกิดและดับเพราะเหตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ความประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. จะทำอย่างไร ให้ได้บรรลุธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. การระลึกถึงมรณานุสติ เพื่อเตรียมใจไม่ให้ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. การฝึกสมถกรรมฐาน ตั้งแต่เริ่มต้นจนสำเร็จ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. การปรับปรุงตนเองให้ตื่นอยู่เพื่อการปฏิบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ผู้มีสติตามดูอารมณ์ที่เกิดดับอยู่ภายในจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. อริยสัจ4 (ทุกข์ สมุทัย นิโรธ มรรคโดยย่อ)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. ฝึกใจให้ฉลาดในการละเหตุให้เกิดทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. การภาวนาเพราะอะไรจิตใจจึงไม่สงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. เทศน์เนื่องในวันวิสาขบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. กายวิเวก จิตวิเวก อุปธิวิเวก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. ค้นหาเหตุผลเพื่อปลดเปลี้องทุกข์ออกจากใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ทุกขังอริยสัจจัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. ฝึกใจอย่างไรให้มีความสุข', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
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