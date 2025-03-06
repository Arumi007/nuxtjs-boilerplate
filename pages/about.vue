<template>
  <div class="container">
  <h1 class="welcome-text">เกี่ยวกับเรา</h1>

  <div class="page-box box">
      <nuxt-link to="/">
        <h2>หน้าเว็บ</h2>
      </nuxt-link>
    </div>

    <div class="next-page box">
      <nuxt-link to="/next-page">
        <h2>สารบัญ</h2>
      </nuxt-link>
    </div>

    <div class="support-box box">
      <a href="https://commerce.coinbase.com/checkout/e2355c57-625b-4cc9-b05c-55cba3248f3d" target="_blank">
        <h2>สนับสนุน</h2>
      </a>
    </div>

    <div class="info-box box">
      <div class="list-title">วัตถุประสงค์ในการจัดทำเว็บไซต์</div>
      <ul class="list">
        <li>เผยแผ่พระธรรมคำสอน:</li>
        <ul>
          <li>รวบรวมและเผยแพร่พระธรรมเทศนาของพระอริยสงฆ์ เพื่อให้คำสอนอันทรงคุณค่าเหล่านี้เข้าถึงผู้คนในวงกว้าง</li>
          <li>เป็นช่องทางในการสืบทอดและรักษาพระธรรมคำสอนให้คงอยู่สืบไป</li>
        </ul>
        <li>ส่งเสริมการศึกษาและปฏิบัติธรรม:</li>
        <ul>
          <li>เป็นแหล่งเรียนรู้ธรรมะที่สะดวกและเข้าถึงได้ง่ายสำหรับผู้ที่สนใจศึกษาและปฏิบัติธรรม</li>
          <li>เป็นแรงบันดาลใจให้ผู้คนนำหลักธรรมคำสอนไปประยุกต์ใช้ในการดำเนินชีวิตประจำวัน</li>
        </ul>
        <li>สร้างสังคมแห่งปัญญา:</li>
        <ul>
          <li>เป็นพื้นที่แลกเปลี่ยนความรู้และประสบการณ์ในการปฏิบัติธรรม</li>
          <li>ส่งเสริมการสร้างสังคมที่เต็มไปด้วยปัญญาและความเมตตาธรรม</li>
        </ul>
        <li>อนุรักษ์พระธรรมเทศนา:</li>
        <ul>
          <li>เนื่องจากเทคโนโลยีในปัจจุบันก้าวหน้าไปมาก การนำเทคโนโลยีมาใช้ในการอนุรักษ์พระธรรมเทศนาของครูบาอาจารย์จึงเป็นสิ่งสำคัญ</li>
        </ul>
        <li>เพิ่มเติม:</li>
        <ul>
          <li>เว็บไซต์นี้มุ่งหวังที่จะเป็นสะพานเชื่อมโยงผู้คนกับพระธรรมคำสอน เพื่อให้ทุกคนมีโอกาสเข้าถึงความสงบสุขและความเจริญทางจิตวิญญาณ</li>
          <li>เป็นการเผยแพร่พระธรรมเทศนาให้เข้าถึงคนรุ่นใหม่ด้วยเช่นกัน</li>
          <li>หมายเหตุ: โปรเจกต์นี้เป็นโปรเจกต์ที่จัดทำขึ้นเพื่อฝึกฝนและเรียนรู้การพัฒนาเว็บไซต์เป็นครั้งแรก</li>
        </ul>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.container {
  background-image: url('/lotus2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 180vh;
  position: relative;
}

.welcome-text {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Prompt', sans-serif;
  font-size: 5rem;
  text-align: center;
  color: yellow;
  white-space: nowrap; /* เพิ่ม white-space: nowrap; */
  width: 90vw; /* ปรับ width */
}

.info-box {
  position: absolute !important;
  top: 250px !important;
  left: 50% !important; /* เปลี่ยน left เป็น 50% */
  transform: translateX(-50%) !important; /* เพิ่ม transform: translateX(-50%) */
  width: 1500px !important;
  height: 1000px !important;
  padding: 20px;
  background-color: rgba(50, 105, 153, 0.8);
  border: 2px solid #87CEEB;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow-y: auto;
}

.list-title {
  font-family: 'Prompt', sans-serif;
  font-size: 2rem;
  color: #0077BE;
  text-align: center;
  margin-bottom: 20px;
}

.list-content {
  margin-top: 20px;
}

.list {
  list-style: none;
  padding: 20px;
  margin: 0;
}

.list li {
  font-family: sans-serif;
  font-size: 1.25rem;
  color: #333;
  padding: 8px 0;
  margin: 0;
  margin-bottom: 8px;
  border-bottom: 1px dashed #ccc;
}

.list li:last-child {
  border-bottom: none;
}


.box {
  width: 600px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute; /* เพิ่ม position: absolute; */
  top: 400px; /* ปรับ top (คำนวณจากความสูง .welcome-text และระยะห่าง) */
  left: 50%;
  transform: translateX(-50%);
}

.box:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.box a {
  text-decoration: none;
  color: #333;
}

.box h2 {
  font-size: 1.2rem;
}

.page-box,
.next-page,
.support-box {
  position: absolute;
  top: 150px; /* ปรับ top (คำนวณจากความสูง .welcome-text และระยะห่าง) */
  left: 50%;
  transform: translateX(-50%);
}

.page-box {
  left: 20%; /* ปรับ left */
  transform: translateX(-50%);
}

.next-page {
  left: 50%; /* ปรับ left */
  transform: translateX(-50%);
}

.support-box {
  left: 80%; /* ปรับ left */
  transform: translateX(-50%);
}

.box {
  width: 250px; /* ปรับ width */
  height: 60px; /* ปรับ height */
  margin: 10px;
}

.box h2 {
  font-size: 1.5rem; /* ปรับขนาดตัวอักษร */
}



/* หน้าจอขนาดเล็ก (390x844 px) */
@media (max-width: 767px) {
  .welcome-text {
    font-size: 2.5rem;
    width: 95vw;
  }

  .info-box {
    position: relative !important;
    top: 180px !important;
    left: 48.5% !important;
    transform: translateX(-50%) !important;
    width: 90% !important;
    height: auto !important; /* ปรับความสูงอัตโนมัติ */
    max-height: 2000px !important; /* กำหนดความสูงสูงสุด */
    padding: 15px !important;
    margin-bottom: 20px;
    overflow-y: auto !important; /* เพิ่ม scrollbar ถ้าเนื้อหาเกิน */
  }

  .list-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .list li {
    font-size: 1rem;
    padding: 5px 0;
    margin-bottom: 5px;
  }

  .page-box,
  .next-page,
  .support-box {
    top: 100px;
    width: 80px;
    height: 40px;
    font-size: 0.8rem;
  }

  .page-box {
    left: 15%;
  }

  .next-page {
    left: 50%;
  }

  .support-box {
    left: 85%;
  }

  .box {
    width: 90px;
    height: 40px;
    margin: 5px;
  }

  .box h2 {
    font-size: 0.8rem;
  }
}

/* หน้าจอขนาดกลาง (แท็บเล็ต 768x1024 px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .welcome-text {
    font-size: 3.5rem; /* ปรับขนาดตัวอักษรหัวข้อ */
    width: 90vw; /* ปรับความกว้าง */
  }

  .info-box {
    position: relative !important; /* เปลี่ยน position เป็น relative */
    top: 200px !important; /* ปรับตำแหน่งกล่องข้อความ */
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: 85% !important; /* ปรับความกว้างกล่องข้อความ */
    height: auto !important; /* ปรับความสูงอัตโนมัติ */
    max-height: 1500px !important; /* กำหนดความสูงสูงสุด */
    padding: 20px !important; /* ปรับ padding */
    margin-bottom: 30px; /* เพิ่ม margin ด้านล่างเพื่อเว้นระยะห่าง */
    overflow-y: auto !important; /* เพิ่ม scrollbar ถ้าเนื้อหาเกิน */
  }

  .list-title {
    font-size: 2rem; /* ปรับขนาดตัวอักษรหัวข้อวัตถุประสงค์ */
    margin-bottom: 20px; /* ปรับ margin ด้านล่าง */
  }

  .list li {
    font-size: 1.5rem; /* ปรับขนาดตัวอักษรรายการ */
    padding: 8px 0; /* ปรับ padding */
    margin-bottom: 8px; /* ปรับ margin ด้านล่าง */
  }

  .page-box,
  .next-page,
  .support-box {
    top: 120px; /* ปรับตำแหน่ง */
    width: 180px; /* ปรับความกว้าง */
    height: 50px; /* ปรับความสูง */
    font-size: 1.2rem; /* ปรับขนาดตัวอักษร */
  }

  .page-box {
    left: 15%; /* ปรับตำแหน่ง */
  }

  .next-page {
    left: 50%; /* ปรับตำแหน่ง */
  }

  .support-box {
    left: 85%; /* ปรับตำแหน่ง */
  }

  .box {
    width: 180px; /* ปรับความกว้าง */
    height: 50px; /* ปรับความสูง */
    margin: 10px; /* ปรับ margin */
  }

  .box h2 {
    font-size: 1.2rem; /* ปรับขนาดตัวอักษร */
  }
}

/* หน้าจอขนาดใหญ่พิเศษ (เดสก์ท็อปขนาดใหญ่กว่า 1440x900 px) */
@media (min-width: 1441px) {
}
</style>