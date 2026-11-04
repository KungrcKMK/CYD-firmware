---
name: KungRC Firmware Installer
description: แผนผังวงจรนีออนแผ่นเดียวที่มีกระแสไฟไหลจริง — สถานีแฟลชเฟิร์มแวร์ CYD บน kungrc.dev
colors:
  schematic-black: "#060709"
  grid-hairline: "#10141c"
  panel-surface: "#0a0d12"
  well-surface: "#0d1119"
  rule: "#1d2431"
  wire-off: "#2a3140"
  ink: "#e8ecf2"
  dim: "#8a94a2"
  dim-floor: "#768192"
  signal-vario: "#07e86a"
  signal-lap: "#05c7f2"
  signal-boat: "#ffa02e"
  signal-cnc: "#f95867"
  signal-rotary: "#c77dff"
- `--c-hud` `#e8f4ff` — Signal Ice: HUD NAV (โปรเจกต์ที่ 6, เพิ่ม 2026-11-05) — ขาวน้ำแข็งโทนเย็น สื่อ 'แสงบนกระจก' ของตัวผลิตภัณฑ์เอง
typography:
  display:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "clamp(2.4rem, 7vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.28em"
  headline:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    letterSpacing: "0.22em"
  title:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  body:
    fontFamily: "'Segoe UI', 'Noto Sans Thai', Tahoma, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.22em"
  data:
    fontFamily: "Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
rounded:
  none: "0"
spacing:
  module: "40px"
  gutter: "22px"
  frame-pad: "20px"
  panel-gap: "18px"
  panel-pad: "16px"
components:
  button-install:
    backgroundColor: "transparent"
    textColor: "{colors.signal-vario}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 10px"
  button-install-hover:
    backgroundColor: "{colors.signal-vario}"
    textColor: "{colors.schematic-black}"
  panel:
    backgroundColor: "{colors.panel-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.panel-pad}"
  station:
    backgroundColor: "{colors.schematic-black}"
    textColor: "{colors.dim}"
    rounded: "{rounded.none}"
    padding: "9px 18px"
  station-lit:
    backgroundColor: "{colors.schematic-black}"
    textColor: "{colors.ink}"
  link-frame:
    backgroundColor: "transparent"
    textColor: "{colors.dim}"
    rounded: "{rounded.none}"
    padding: "9px 16px"
---

# Design System: KungRC Firmware Installer

## Overview

**Creative North Star: "Kraftwerk Man-Machine — the live wiring schematic"**

ทั้งหน้าเว็บคือแผนผังวงจรนีออนแผ่นเดียวบนกระดาษดำสนิท: กริดโมดูลาร์ 40px มองเห็นทั้งหน้า, บัสเทาเส้นเดียวแตกเป็นสายสัญญาณ 5 สีลงโหนดหลอดไฟ แล้วไหลต่อเป็น flowline ผ่านทุกหมวดจนจบที่ขั้ว GND ท้ายหน้า ไม่มีการ์ดใดลอยอิสระ — ทุกแผงถูกเดินสายถึงกัน หมึกเดียวของระบบคือเส้นอีนาเมลเรียบ (flat สนิท ไม่มี texture, ไม่มี gradient บนขอบ UI): เทาสำหรับสายดับ, สีสัญญาณประจำโปรเจกต์สำหรับสายมีไฟ

บุคลิกคือเครื่องมือช่าง ไม่ใช่โบรชัวร์: ป้าย Orbitron tracked-caps กับเลขหมวดแบบปกอัลบั้ม (02, 03, 04), ตัวเลข/รหัสเป็น Consolas, เนื้อหาไทยเป็น sans สะอาดอ่านง่าย ทุก state เปลี่ยนแบบ "ไฟติด" — สว่างทันทีไม่มี fade โลกนี้ปฏิเสธผัง hero + การ์ดกริดลอยของหมวด dev-tool โดยตรง (ยืนยันใน direction contract)

**Key Characteristics:**
- พื้นดำสนิท (#060709) + กริดแฮร์ไลน์ 40px มองเห็นตลอด
- สีสัญญาณ 5 สีประจำโปรเจกต์ = เอกลักษณ์แบรนด์ (brand commitment ใน PRODUCT.md)
- มุมฉากทั้งระบบ ยกเว้นวงกลมหลอดสัญญาณ
- เงาเดียวที่มีคือแสงนีออนเรือง (glow) จากตัว element สีของมันเอง
- ไม่มี transition — ทุก state สลับแบบสวิตช์ไฟ

## Colors

พาเลตคือหมึกนีออนบนกระดาษแบบวงจร: ดำเกือบสนิทสามชั้น + เทาสายไฟ + สีสัญญาณอิ่ม 5 สี

### Primary (สีสัญญาณประจำโปรเจกต์ — ห้ามสลับเจ้าของ)
- **Signal Green / Vario** (`{colors.signal-vario}`): สายและแผง Variometer · และรับบทสีแอคทีฟของระบบ: `::selection`, `:focus-visible` outline, สถานีที่ผ่านแล้ว (.st.lit), ลิงก์ SHOPEE
- **Signal Cyan / Lap Timer** (`{colors.signal-lap}`): สายและแผง GPS Lap Timer · และเป็นสีลิงก์ข้อความกับ summary ทั่วทั้งหน้า
- **Signal Amber / Autopilot** (`{colors.signal-boat}`): สายและแผง Autopilot · และเป็นสีตัวอักษรใน `code`
- **Signal Red-Pink / CNC** (`{colors.signal-cnc}`): สายและแผง CNC Pendant
- **Signal Violet / Rotary** (`{colors.signal-rotary}`): สายและแผง Rotary Indexer

### Neutral
- **Schematic Black** (#060709): พื้นทั้งหน้า และสีตัวอักษรบนปุ่มที่ไฟเข้า (hover fill)
- **Grid Hairline** (#10141c): เส้นกริด 40px — จางกว่าทุกอย่าง มองเห็นแต่ไม่แย่งสายตา
- **Panel Surface** (#0a0d12): พื้นแผง/กรอบ — ทึบ บังกริดใต้แผง
- **Well Surface** (#0d1119): พื้นลึกสุดของ `code` และหัวตาราง
- **Rule** (#1d2431): เส้นกรอบพัก (แผงด้านที่ไม่ใช่สีสัญญาณ, เส้นตาราง, เส้นคั่น)
- **Wire Off** (#2a3140): สายดับ — บัสหลัก, st-wire, flowline, กรอบปุ่มรองที่ยังไม่ hover
- **Ink** (#e8ecf2): ตัวอักษรหลัก
- **Dim** (#8a94a2): ตัวอักษรรอง (tagline, meta, muted, หัวตาราง)
- **Dim Floor** (#768192): หรี่สุดที่ยังอ่านออก — เลขหมวดและ ⏚ GND เท่านั้น

### Named Rules
**The One-Project-One-Color Rule.** สีสัญญาณ 5 สีผูกกับโปรเจกต์ของตัวเองผ่าน `--pc` ต่อแผง ห้ามเอาสีของโปรเจกต์หนึ่งไปแต่งอีกโปรเจกต์ · บทระบบกลางที่ยืมสีไปใช้มีแค่ที่ build ใช้จริง: เขียว = active/focus/selection, ฟ้า = ลิงก์, อำพัน = code
**The Dead-Wire Rule.** ทุกอย่างที่ยังไม่มีไฟใช้ Wire Off (#2a3140) หรือ Rule (#1d2431) — สีสัญญาณปรากฏเฉพาะจุดที่ "มีไฟ": หัวแผง, สาย, โหนด, ปุ่ม, state ที่แอคทีฟ

## Typography

**Display Font:** Orbitron (self-hosted `orbitron.ttf`, weight 400–900, `font-display: swap`) with sans-serif fallback
**Body Font:** Segoe UI / Noto Sans Thai / Tahoma, sans-serif
**Label/Mono Font:** Consolas, monospace

**Character:** Orbitron tracked-caps คือเสียงเครื่องจักรของป้ายวงจร ใช้กับป้ายภาษาอังกฤษสั้นๆ เท่านั้น · เนื้อหาไทยทั้งหมดเป็น sans ระบบที่อ่านสบาย · ตัวเลขและรหัส (เวอร์ชัน, วันที่, พิน) เป็น Consolas

### Hierarchy
- **Display** (800, clamp(2.4rem, 7vw, 5.2rem), line-height 1, tracking .28em): KUNGRC masthead เท่านั้น
- **Headline** (700, 1.05rem, tracking .22em, caps): ชื่อหมวดใน `.shead` คู่เลขหมวด Dim Floor
- **Title** (700, 0.95rem, tracking .14em, caps, สี `--pc`): ชื่อโปรเจกต์บนแผง
- **Body** (400, 16px, 1.55): เนื้อหาไทย · ใน `.frame` จำกัด 70ch
- **Label** (700, 0.82rem, tracking .22em, caps): ปุ่ม INSTALL · ป้ายรองลดหลั่น .7–.8rem tracking .07–.3em (gh, use-chip, loom label)
- **Data** (400, 0.78rem, Consolas, `tabular-nums`): แถว meta เวอร์ชัน/วันที่, คอลัมน์พินในตาราง, ⏚ GND

### Named Rules
**The Tracked-Caps Label Rule.** Orbitron ใช้ได้เฉพาะตัวพิมพ์ใหญ่ภาษาอังกฤษแบบ tracked (≥ .07em) ความยาวสั้น ห้ามใช้พิมพ์ข้อความไทยหรือย่อหน้า
**The Live-Number Rule.** เลขที่มาจากข้อมูลจริง (เวอร์ชัน วันที่ ตัวนับ) อยู่ใน Consolas + tabular-nums เสมอ

## Layout

กระดาษวงจรแผ่นเดียว: `.wrap` กว้างสุด 1180px, gutter 22px, บนกริดพื้นหลัง 40px ที่มองเห็นทั้งหน้า · ลำดับแนวตั้ง: masthead → แถบสถานี 1-2-3 ร้อยด้วย `st-wire` → SVG loom (บัส→สาย 5 เส้นไล่เฉดหรี่→สว่าง→โหนด) → แผงโปรเจกต์ 5 คอลัมน์ gap 18px → หมวดถัดไปเชื่อมด้วย `flowline` (เส้นตั้ง 2px สูง 54px กึ่งกลาง) ลงถึง ⏚ GND ท้ายหน้า

Responsive: ≤1150px แผงเป็น 2 คอลัมน์ · ≤920px ซ่อน loom แล้วแต่ละแผงงอกสายหยด + โหนดของตัวเองด้านบน (`::before`/`::after`) แทน — metaphor ไม่ขาด · ≤640px คอลัมน์เดียว · ตารางกว้างอยู่ใน `.tablewrap` เลื่อนแนวนอนได้ ไม่ดันหน้า

## Elevation & Depth

ไม่มี drop shadow ในระบบนี้เลย ความลึกมาจากชั้นความทึบของพื้น (Schematic Black → Panel Surface → Well Surface) และความสว่างของเส้น `box-shadow`/`drop-shadow` ปรากฏเฉพาะบทเดียว: **แสงนีออนเรือง** — เบลอรอบตัว offset ศูนย์ สีเดียวกับ element ที่เปล่ง

### Shadow Vocabulary
- **station-lit glow** (`box-shadow: 0 0 12px #07e86a33`): สถานีที่ผ่านแล้ว
- **panel hover glow** (`box-shadow: 0 0 18px color-mix(in srgb, var(--pc) 22%, transparent)`): แผงถูกชี้/โฟกัส
- **button power-on glow** (`box-shadow: 0 0 20px var(--pc)`): ปุ่ม INSTALL ตอน hover/focus
- **lamp glow** (`filter: drop-shadow(0 0 4–10px var(--pc))`): ไอคอนแผงและโหนดหลอดสัญญาณ

### Named Rules
**The Lamp-Light Rule.** เงาทุกตัวคือแสงที่ element เปล่งออกมาเอง: offset 0 0, สีตามสีสัญญาณของเจ้าของ ห้ามมีเงาเทา เงาเฉียง หรือเงาบอกความสูง

## Shapes

มุมฉากทั้งระบบ — ไม่มี border-radius บนกล่อง ปุ่ม ตาราง หรือกรอบใดๆ เส้นกรอบหลักหนา 2px (แผง, ปุ่ม, สถานี, frame, หัวตาราง shop) เส้นรอง 1px (เซลล์ตาราง, use-chip, code) · แผงโปรเจกต์มีขอบบนเป็นสีสัญญาณของตัวเอง ที่เหลือเป็น Rule จนกว่าจะ hover · SVG icon ใช้ `stroke-linecap="square"` รักษาภาษามุมฉากถึงปลายเส้น · ข้อยกเว้นเดียวของโลกนี้: **วงกลมหลอดสัญญาณ** (โหนด r9→12 บน loom และจุดหยดบนจอแคบ) — วงกลมคือหลอดไฟ ไม่ใช่การ์ดมน

**The Right-Angle Rule.** กล่องทุกใบมุมฉาก วงกลมใช้ได้บทเดียวคือหลอดสัญญาณ/โหนดไฟ

## Components

### Buttons (INSTALL)
- **Shape:** มุมฉาก กรอบนีออน 2px สีสัญญาณประจำแผง เต็มความกว้างแผง
- **Primary:** พื้นโปร่ง ตัวอักษร Orbitron 700 / .82rem / tracking .22em สี `--pc`, padding 13px 10px, ข้อความ `INSTALL ▸`
- **Hover / Focus:** "ไฟเข้า" — เติมพื้นเป็น `--pc`, ตัวอักษรกลับเป็น Schematic Black, glow 0 0 20px · เปลี่ยนทันที ไม่มี transition
- **Secondary (`.gh` / link-frame):** กรอบ 2px Wire Off ตัวอักษร Dim → hover เปลี่ยนเป็นฟ้าทั้งกรอบและตัวอักษร (ไม่เติมพื้น)

### Chips
- **use-chip (`.use`):** กรอบ 1px `currentColor` สีสัญญาณของโปรเจกต์ Orbitron .7rem — ป้ายบอกว่าอะไหล่ใช้กับโปรเจกต์ไหนในตาราง PARTS
- **station (`.st`):** กรอบ 2px Wire Off ตัว Dim พื้นทึบ · state `.lit`: กรอบเขียว ตัว Ink เลขเขียว + glow — สถานะค้าง ไม่ใช่ hover

### Cards / Containers (แผงโปรเจกต์ `.panel`, กรอบหมวด `.frame`)
- **Corner Style:** มุมฉาก (0)
- **Background:** Panel Surface (#0a0d12) ทึบบนกริด
- **Border:** 2px Rule รอบตัว + ขอบบน 2px สีสัญญาณ (`--pc`) · hover/focus-within: กรอบทั้งใบเป็น `--pc` + panel glow และสาย+โหนดของแผงนั้นบน loom สว่างเต็ม เส้นอื่นหรี่ (opacity .3)
- **Internal Padding:** 16px (แผง) / 20px (frame)
- **Row Discipline (2026-11-05):** แผงเป็น subgrid 6 แถว (ชื่อ/คำโปรย/ปุ่ม INSTALL/เวอร์ชัน/โน้ต/ลิงก์พับ) — แถวเดียวกันตั้งตรงกันทุกแผงในแถบเดียวกัน · track ใช้ minmax(0,1fr) กันเนื้อหาดันแผงล้น · คำโปรยสั้นหนึ่งประโยค รายละเอียดอยู่ใน details "ความสามารถ"
- **แผงบนจอแคบ:** งอกสายหยด 3px + หลอดกลม 10px สี `--pc` เหนือแผงแทน loom

### Inputs / Fields
ไม่มีในระบบ — หน้าเดียวไม่มีฟอร์ม (ละไว้ตามจริง)

### Navigation (`.shead` + disclosure)
- หัวหมวด: เลขหมวด Orbitron สี Dim Floor (02, 03, 04) + ชื่อหมวดคาปส์ tracked + คำอธิบายไทย Dim ชิดขวา ใต้เส้น 2px Rule
- **Disclosure (`details`/`summary`):** ลูกศร `▸`/`▾` สี Wire Off นำหน้าข้อความฟ้า, เส้นคั่นบน 1px Rule — รายละเอียดเชิงช่างพับเก็บได้ ไม่บังทางแฟลช

### Signature: Loom + Current Pulse
SVG บัสเทา 4px แตกเป็นสายตั้ง 5 เส้น stroke เป็น linearGradient หรี่→สว่าง (จากเฉดมืดของสีตัวเองสู่สีเต็ม) ลงโหนด r9 · พัลส์แสง (`.pulse`, เส้นขาวนวล #eafff2 2px, `stroke-dasharray 26 600`) วิ่งด้วย `stroke-dashoffset` SMIL 3.2s วนเปลี่ยนสายทีละเส้นที่ขอบรอบ (`repeatEvent` — ไม่วาร์ปกลางทาง) · hover/focus แผง: พัลส์ล็อกที่สายนั้น เส้นหนาขึ้น 4→7 โหนด 9→12 + drop-shadow, เส้นอื่น opacity .3 · `prefers-reduced-motion: reduce` ซ่อนพัลส์ ทุกเส้นสว่างนิ่ง

**The Power-On Rule.** ไม่มี transition/slide/fade ที่ไหนเลยในระบบ — ทุก state เปลี่ยนแบบไฟติด (สลับค่าทันที) การเคลื่อนไหวเดียวที่อนุญาตคือพัลส์กระแสบนเส้น SVG

## Do's and Don'ts

### Do:
- **Do** ตีกรอบทุกแผง/ปุ่ม/สถานีด้วยเส้น 2px มุมฉาก และเดินสาย (st-wire / flowline / loom / สายหยด) เชื่อมทุกส่วนเข้าหากัน — ของใหม่ต้องต่อเข้าวงจร ไม่ลอย
- **Do** ใช้ `--pc` ของแผงเป็นแหล่งสีเดียวของ element ภายในแผงนั้น (หัว, ไอคอน, ปุ่ม, สายหยด)
- **Do** ให้ตัวเลขสด (เวอร์ชัน/วันที่/ตัวนับ) เป็น Consolas tabular-nums และปล่อยให้ JS เติมจากแหล่งจริง
- **Do** เขียนป้ายอังกฤษเป็น Orbitron tracked-caps + เลขหมวดสองหลัก และคำอธิบายไทยเป็น body sans ข้างกัน

### Don't:
- **Don't** ใช้ border-radius บนกล่องหรือปุ่มใดๆ — วงกลมสงวนไว้ให้หลอดสัญญาณ/โหนดเท่านั้น (The Right-Angle Rule)
- **Don't** ใส่เงาเทา เงาเฉียง หรือเงายกความสูง — box-shadow ต้อง offset 0 0 สีสัญญาณของเจ้าของเท่านั้น (The Lamp-Light Rule)
- **Don't** ใส่ transition, fade, slide หรือ easing — state สลับทันทีแบบสวิตช์ (The Power-On Rule)
- **Don't** สลับสีสัญญาณข้ามโปรเจกต์ หรือเพิ่มสี accent ที่หก (The One-Project-One-Color Rule — brand commitment)
- **Don't** วางการ์ดลอยอิสระแบบ hero + grid ของเว็บ dev-tool ทั่วไป — โลกนี้ปฏิเสธผังนั้นโดยสัญญา
