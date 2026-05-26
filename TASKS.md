# Task List — Backend Assessment

## Phase 1: Project Setup
- [ ] 1.1 สร้าง folder โปรเจค และ `cd` เข้าไป
- [ ] 1.2 รัน `npm init -y` เพื่อสร้าง `package.json`
- [ ] 1.3 ติดตั้ง Express: `npm install express`
- [ ] 1.4 สร้างไฟล์ `index.js`
- [ ] 1.5 รัน server ด้วย `node --watch index.js` และเห็น log ใน terminal

## Phase 2: Server + Middleware พื้นฐาน
- [ ] 2.1 เขียน Express server ให้ listen บน port 3000
- [ ] 2.2 เพิ่ม `express.json()` middleware
- [ ] 2.3 เขียน custom middleware: request logger (log method + url ทุก request)
- [ ] 2.4 เพิ่ม error-handling middleware ไว้ท้ายสุด

## Phase 3: In-Memory Data + CRUD Routes
- [ ] 3.1 สร้าง array `products` เก็บ data ใน memory
- [ ] 3.2 `GET /products` — return สินค้าทั้งหมด (status 200)
- [ ] 3.3 `GET /products/:id` — return สินค้าชิ้นเดียว / 404 ถ้าไม่เจอ
- [ ] 3.4 `POST /products` — เพิ่มสินค้าใหม่ พร้อม generate id (status 201)
- [ ] 3.5 `PUT /products/:id` — อัปเดตสินค้า / 404 ถ้าไม่เจอ
- [ ] 3.6 `DELETE /products/:id` — ลบสินค้า / 404 ถ้าไม่เจอ

## Phase 4: Query String
- [ ] 4.1 เพิ่ม query string ใน `GET /products` อย่างน้อย 1 ตัว เช่น `?name=keyboard` (filter) หรือ `?sort=price`

## Phase 5: ทดสอบ Routes
- [ ] 5.1 สร้างไฟล์ `requests.http` สำหรับ REST Client
- [ ] 5.2 ทดสอบครบทุก route ว่า response ถูกต้อง (status code + body)

## Phase 6: my-understanding.md
- [ ] 6.1 copy `MY_UNDERSTANDING_TEMPLATE.md` → ตั้งชื่อใหม่เป็น `my-understanding.md`
- [ ] 6.2 ตอบคำถามทั้ง 10 ข้อด้วยคำพูดของตัวเอง

## Phase 7: GitHub + Video
- [ ] 7.1 สร้าง GitHub repo (public) และ push โค้ด
- [ ] 7.2 อัดวิดีโอ Loom (≤ 5 นาที) ตาม structure ที่กำหนด
- [ ] 7.3 paste Loom link ใน `my-understanding.md` แล้ว push อีกครั้ง
- [ ] 7.4 paste GitHub link ใน Google Sheet

---

## Stretch Goals (ทำถ้าเหลือเวลา)
- [ ] S1 Connect MongoDB Atlas + ใช้ Mongoose model แทน array
- [ ] S2 Validate request body — reject field ที่หายหรือ type ผิด ด้วย status 400
- [ ] S3 แยก routes ออกเป็น `routes/products.js` ใช้ `express.Router()`
