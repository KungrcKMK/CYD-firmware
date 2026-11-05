---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Scope

หน้าเดียว `index.html` (kungrc.dev) — โหมด Persuade: ผู้มาใหม่ต้องแฟลชสำเร็จเร็วสุด · คงฟังก์ชันเดิมครบ: esp-web-install-button ×6, เวอร์ชัน/วันที่จาก manifest, คู่มือแบบ dialog ×17, ตารางต่อสาย, ร้านค้า Shopee, ผังพิน, เคส 3D · ไม่มีตัวนับ interest (ผู้ใช้สั่งถอดถาวร 2026-11-05)

## Direction contract

THESIS: ทั้งหน้าคือจอแสดงเหตุการณ์ชนอนุภาค (collider event display) ของสถานีแฟลช KungRC — การแฟลชเฟิร์มแวร์หนึ่งครั้งคือหนึ่ง "เหตุการณ์ชน": บอร์ด CYD คือจุดชนกลางวงแหวน detector, เฟิร์มแวร์ 6 ตัวคือ track 6 สีที่พุ่งออกมา · ปฏิเสธ hero+การ์ดกริดลอยของหมวด dev-tool และปฏิเสธผังวงจรนีออน Kraftwerk เดิม (anti-reference — ไม่มีกริด 40px, ไม่มีกรอบนีออนมุมฉาก, ไม่มี glow แบบหลอดไฟ)

OWN-WORLD: สุญญากาศน้ำเงินดำ #070b12 ไร้กริด · โครง detector เป็นเหล็กน้ำเงินนิวทรัล #223244/#3a5a7a (วงแหวน, เส้นแบ่ง, กรอบแผง 1px) · track และทุกจุด "มีสัญญาณ" ใช้สีประจำโปรเจกต์ 6 สี (เขียว/ฟ้า/อำพัน/แดงชมพู/ม่วง/ขาวน้ำแข็ง) · ตัวรอง text-steel #a7b3c2 · Orbitron tracked-caps สำหรับป้ายอังกฤษ, Segoe/Noto Thai สำหรับเนื้อไทย, Consolas tabular สำหรับเลขสดทุกตัว · ป้ายข้อมูลตรึงด้วย leader line จุดกลม · แผงเป็น instrument readout: พื้น #0b1018 กรอบ 1px เหล็ก มุมเหลี่ยมเล็กน้อย แถบสี track ด้านซ้าย

STORY: เข้าใจใน 3 วิ: นี่คือสถานีแฟลชเฟิร์มแวร์ CYD → เห็น track สีพุ่งจากบอร์ดกลางวงแหวนไปยังเฟิร์มแวร์ของตัว → ทำตาม RUN 01-02-03 (เสียบ USB → เลือก → INSTALL) → เชื่อเพราะเลขเวอร์ชัน/วันที่เป็น readout สดจาก manifest → ลึกลงไป ตารางสาย/คู่มือ/ร้านค้าเขียนในภาษา detector เดียวกัน

FIRST VIEWPORT (1440×900): ซ้ายบน KUNGRC (Orbitron ใหญ่) + บรรทัดรอง CYD FIRMWARE STATION · ใต้ลงมาแถว RUN 01 เสียบ USB / 02 เลือกเฟิร์มแวร์ / 03 กด INSTALL เป็น readout strip · กลางจอ: SVG event display — วงแหวน detector ซ้อนหลายชั้น จุดชนกลางคือบอร์ด, track 6 สีโค้งออกครบ 6 เส้น แต่ละเส้นมี leader line ชี้ลงหัวแผงของตัว · ใต้ event display: แผง 6 ใบแถวเดียว (ชื่อสี track, เวอร์ชัน+วันที่ tabular, ปุ่ม INSTALL กรอบสีประจำตัว) — ปุ่มทั้ง 6 อยู่เหนือ fold

FORM: challenger จากแคตตาล็อก scientific-notation-particle-detector-event-display — ผู้ใช้กด Adopt anyway เหนือใบ assigned (Shadow Board) · seed:a8f4ac69ced8e425

SIGNATURE INTERACTION + MOTION: hover/focus แผงหรือ track → track นั้น isolate: เส้นหนาขึ้น สว่างเต็ม เส้นอื่นหรี่ opacity .25 และแผงของมันติดขอบสี · โหลดหน้าครั้งแรก track วาดตัวเองออกจากจุดชน (stroke-dashoffset ~1.2s) ครั้งเดียวแล้วนิ่ง · prefers-reduced-motion: ไม่มีวาด ทุกเส้นนิ่งเต็ม

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
