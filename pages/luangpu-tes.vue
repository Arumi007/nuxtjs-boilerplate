<template>
  <div class="container">
    <h1 class="welcome-text">พระราชนิโรธรังสี (เทสก์ เทสรํสี)</h1>
    <div class="empty-box">
      <img src="/pu_tes.jpg" class="image" />
      <h2 class="birth-title">ชีวประวัติโดยย่อ</h2>
      <p class="birth-detail">
        พระเทพวิสุทธิมงคล หรือ หลวงปู่ศรี มหาวีโร เป็นพระเถระฝ่ายวิปัสสนาธุระ ศิษย์พระอาจารย์มั่น ภูริทัตโต อดีตเจ้าอาวาสวัดประชาคมวนาราม
        <br><strong>ชาติกำเนิด</strong><br>
      </p>

      <p class="birth-detail">
        นามเดิมของท่านชื่อ ศรี เกิดในสกุลปักกะสีนัง เมื่อวันที่ 3 พฤษภาคม พ.ศ. 2460 ตรงกับวันศุกร์ เดือนหก ปีมะเมีย ที่บ้านขามป้อม อำเภอวาปีปทุม จังหวัดมหาสารคาม โยมบิดาชื่อนายอ่อนสี โยมมารดาชื่อนางทุม ปักกะสีนัง
        <br><strong>บรรพชาอุปสมบท</strong><br>
      </p>

      <p class="birth-detail">
        ด้วยความเลื่อมใสศรัทธาในพระพุทธศาสนา ท่านได้บรรพชาอุปสมบทเมื่อปี พ.ศ. 2488 
        ณ พัทธสีมาวัดราษฎร์รังสรรค์ บ้านป่ายาง อำเภอเมืองร้อยเอ็ด จังหวัดร้อยเอ็ด โดยมีพระโพธิญาณมุนี (ดำ โพธิญาโณ) เจ้าคณะจังหวัดร้อยเอ็ด (ธรรมยุต) เป็นอุปัชฌาย์ ได้รับฉายาทางพระพุทธศาสนา เป็นมคธว่า "มหาวีโร"
      </p>

      <p class="birth-detail">
        พรรษาแรกในชีวิตสมณะผู้ละวาง ท่านได้พำนักศึกษาปฏิบัติธรรมอยู่กับท่านพระอาจารย์คูณ อุตตโม วัดประชาบำรุง มหาสารคาม ปีต่อมา พ.ศ. 2489 ท่านได้จาริกไปจำพรรษาที่วัดป่าแสนสำราญ อำเภอวารินชำราบ จังหวัดอุบลราชธานี มีโอกาสศึกษาปฏิบัติธรรม เจริญวิปัสสนากับท่านพระอาจารย์สิงห์ ขันตยาคโม ซึ่งเป็นศิษย์สำคัญของท่านพระอาจารย์มั่น ภูริทัตโต
        <a href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5_(%E0%B8%A8%E0%B8%A3%E0%B8%B5_%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B5%E0%B9%82%E0%B8%A3)" target="_blank"><strong>อ่านข้อมูลเพิ่มเติม</strong></a>
      </p>

      

      <div class="dharma-list">
        <span class="dharma-title" @click="toggleList">1. ธรรมเทศนา</span>
        <ul ref="dharmaList" class="dharma-sublist">
        <li v-for="(item, index) in dharmaItems" :key="index" class="dharma-item" @click="goToSoundCloud(item.soundcloudUrl)">{{ item.title }}</li>         
        </ul>
      </div>

      <div class="dharma-list">
        <span class="dharma-title" @click="goToDrive('https://drive.google.com/drive/folders/1kq53H0jb5UcuVL6B-SNlzmb189uFGy3t?usp=drive_link')">ดาวน์โหลดรวมพระธรรมเทศนา </span>
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
  { title: ' 1. ไตรสรณคมน์', soundcloudUrl: 'OUR_AUDIO_LINK_1' },
  { title: '2. เเนวปฏิบัติพระพุทธศาสนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '3. งามในกาย ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '4. นักรบ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '5. สติรักษาจิต ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '6. บังสุกุล ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '7. ภาวนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '8. ฝึกหัดจิต ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '9. จับหลักปฏิบัติ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '10. กรรม ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '11. แยบคายในการภาวนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '12. จับหลักในการเข้าถึงหนึ่ง ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '13. สรุปธาตุขันธ์ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '14. ธาตุสี่ สรีรยนต์ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '15. ขันธ์ห้าเป็นภาระอย่างยิ่ง  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '16. ปฏิจจสมุปบาท ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '17. อิทธิบาทสี่  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '18. สมมติ บัญญัติ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '19. รูปธรรม นามธรรม  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '20. ขันธ์ห้า  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '21. ฝึกหัดกรรมฐาน ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '22. กลั่นกรองธรรมออกจากโลก ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '23. ของดีจากของไม่ดี ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '24. ความยาก 4 ประการ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '25. มาร ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '26. วิธีรักษาจิต  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '27. ของดีสองอย่าง ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '28. สติรักษาจิต ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '29. ฝึกสมาธิโดยบริกรรมพุทโธ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '30. กิเลส ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '31. วิปัสสนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '32. มรรค (1) ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '33. มรรค (2) ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '34. พุทธคุณ (1)  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '35. พุทธคุณ (2)  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '36. เยกโลกออกจากธรรม  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '37. ฟังเทศน์ ฟังธรรม ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '38. สติรักษาจิต (1) ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '39. ธรรมญาณสมาธิ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '40. ความฉลาดในความโง่  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '41. ธรรม (1)  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '42. ขุมทรัพย์ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '43. ธาตุ (ธาตุวัฏฐาน) ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '44. พุทธศาสนามีคุณค่ามหาศาล ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '45. พระพุทธศาสนากับสังคม ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '46. วันอาสาฬหบูชา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '47. ไว้อาลัียพระอาจารย์ฝั้น  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '48. ความเข้าใจในธรรม ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '49. สติ สมาธิ ปัญญา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '50. ใจ (1) ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '51. โอวาทปาฏิโมกข์ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '52. หลักการฟังธรรมเทศนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '53. ต้นไม้พุทธศาสนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '54. เเนวปฏิบัติพุทธศาสนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '55. มนุษย์มีหลายประเภท  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '56. ไตรสรณคมน์ (2)  ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '57. การให้ทานเเละรักษาศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '58. หลักพระพุทธศาสนาสอนให้เข้าถึงใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '59. สติปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '60. รื้อถอนภพ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '61. บุญบาปเกิดที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '62. นิวรณ์ห้า (1)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '63. นิวรณ์ห้า (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '64. วิธีภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '65. ตั้งสติพิจารณากายกับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '66. มารห้า (1)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '67. หลักปฏิบัติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '68. ความปลอดโปร่ง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '69. การรักษาศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '70. ขั้นตอนของพระพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '71. การกำหนดรู้ทุกข์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '72. ลักขโมย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '73. ไตรลักษณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '74. ความเพียรสี่ประการ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '75. ขี้ขโมย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '76. ธรรมเป็นของเก่า ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '77. อานาปานสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '78. อุปมานุสสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '79. โลกธาตุ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '80. ชีวิตเป็นของน้อยนิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '81. ความเสื่อมสูญของชีวิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '82. อนัตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '83. การทำความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '84. กรรม (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '85. ความงามในพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '86. มนุษย์สมบัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '87. ฝังรากพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '88. จิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '89. จิตที่ควรชมเเละขนาบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '90. ที่พึ่งที่อาศัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '91. มรณานุสติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '92. ผลของการปฏิบัติ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '93. รู้โลกให้เป็นธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '94. ธรรมอาศัยคงามสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '95. ความตื่น (ปีใหม่)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '96. อวิชชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '97. เครื่องเปรียบเทียบในการบัญญัติ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '98. ศีล สมาธิ ปัญญา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '99. คุณพระพุทธ (1) วันวิสาขบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '100. คุณพระธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '101. คุณพระพุทธ (2) วันวิสาขบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '102. คุณพระรัตนตรัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '103. วิธีหาจิต (1)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '104. สังวร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '105. เมตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '106. อารมณ์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '107. ธัมมจักกัปปวัตตนสูตร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '108. ธาตุสี่ (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '109. จิตใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '110. ความประมาทเเละไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '111. หิริ-โอตตัปปะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '112. ความเกิดดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '113. ใจ (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '114. ความแก่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '115. ศรัทธา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '116. กัมมัฏฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '117. ความเกิดความดับ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '118. เบื้องต้นการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '119. ต้นตอสมาธิภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '120. ธรรมของเก่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '121. ขันธโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '122. ปฏิบัติปฏิเวธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '123. วิธีปฏิบัติเบื้องต้น (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '124. การเเจกอักขระพยัญชนะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '125. วิธีภาวนา (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '126. ศรัทธาเเละความไม่ประมาท', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '127. คนสี่เหล่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '128. วิธีหาจิต (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '129. พิจารณาความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '130. หลักการฟังธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '131. การศึกษาพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '132. วันอาสาฬหบูชา (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '133. มะม่วงหวาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '134. เริ่มต้นกันใหม่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '135. เบื้องต้นการทำคุณงามความดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '136. ธาตุสี่ (3)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '137. วิธีหาจิต (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '138. วิธีหัดสมาธิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '139. บันได 3 ขั้น', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '140. บันได', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '141. คุณานิสงส์ของการทำบุญ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '142. วันมาฆบูชา (1)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '143. กรรม (3)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '144. ขันธ์ห้า (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '145. หลักการภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '146. หลักปฏิบัติ (ออกพรรษา)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '147. แก่นของการปฏิบัติ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '148. ธรรม (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '149. หลักปฏิบัติพระพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '150. ตื่นหาธรรม (ปีใหม่)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '151. มาฆบูชา (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '152. โพธิปักขิยธรรม 37', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '153. มูลกรรมฐาน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '154. เพียรไม่ให้ความชั่วเกิด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '155. ศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '156. ธรรมฝั่งอยู่ในโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '157. ขันธโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '158. อายตนะ 6', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '159. ธรรมเกิดจากความสงบ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '160. พิจารณาความตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '161. การค้ากำไรหรือขาดทุน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '162. อนิจจัง ทุกขัง อนัตตา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '163. สภาวะธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '164. เปลือกของพระพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '165. จับกิเลส ใช้กิเลส ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '166. มารห้า (2) ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '167. เปลือก กระพี้ แก่นของพุทธศาสนา ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '168. ศีล 5', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '169. คูหาใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '170. ศีลอยู่ที่ตัวของเรา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '171. เราเป็นหนี้ของโลก', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '172. ศีลธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '173. การสร้างพระ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '174. มัคคสมังคี ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '175. ยินดีพอใจในวิสัยมาร', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '176. พละห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '177. ทุกข์ (1)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '178. พุทธศาสนาสอนที่ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '179. สติปัฏฐานสี่', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '180. ธาตุสี่ (4)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '181. หลักศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '182. บูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '183. ทุกข์ (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '184. สมุทัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '185. นิโรธ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '186. แก่ เจ็บ ตาย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '187. สัจจธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '188. สุขภาพกาย ใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '189. หลักในการละชั่วทำดี', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '190. มหากรุณาธิคุณ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '191. วันเกิดพระอาจารย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '192. รูปนาม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '193. ไฟราคะ โทสะ โมหะ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '194. โครงการปฏิบัติธรรม', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '195. ความสงบ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '196. วันวิสาขบูชา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '197. ทำไมพระพุทธเจ้าสอนให้ภาวนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '198. เหตุ-ปัจจัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '199. ธรรมสอนที่กายกับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '200. ทาสพระรัตนตรัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '201. วิธีเข้าถึงพระรัตนตรัย', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '202. จุดเดิมของพระพุทธศาสนา', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '203. พิษเกิดจากกายกับใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '204. ไตรภูมิ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '205. อัปปมัญญา 4 ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '206. แนวปฏิบัติธรรมของเก่า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '207. รวมใจ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '208. การเร่ร่อนของจิต', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '209. ประโยชน์ของขันธ์ห้า', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '210. วันออกพรรษา (1)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '211. ทาน ศีล', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '212. ลิงติดตัง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '213. สัมมัปปธาน 4', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '214. อายตนะภายนอกภายใน', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '215. พิจารณาการแปรสภาพ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '216. สติปัฏฐานสี่ ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '217. หลักในการดูของละเอียด', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '218. วันเกิดพระอาจารย์', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '219. วันออกพรรษา (2)', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '220. อายตนะ 6', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '221. สังคายนาตัวเอง', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  { title: '222. หนี้พระคุณ', soundcloudUrl: 'YOUR_AUDIO_LINK_1' },
  
  // เพิ่มรายการอื่น ๆ
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
  font-size: 2.5rem;
  text-align: center;
  color: yellow;
}

.empty-box {
  position: absolute;
  top: 53%;
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
  height: 25%;
  display: block;
  margin: 0 auto;
}

.birth-title {
  font-size: 2rem;
  margin-top: 20px;
  color: red;
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
  background-color:rgb(168, 197, 195); /* สีพื้นหลัง LightSteelBlue */
  color: #333; /* สีตัวอักษรสีเทาเข้ม */ 
}

.dharma-item {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 5px;
}

</style>