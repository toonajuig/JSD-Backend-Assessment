https://www.loom.com/share/a9ba076494a04cc0bbf1d95a2b5eb834

**1. What does each HTTP method in your API mean — GET, POST, PUT or PATCH, and DELETE? Why do we use different methods instead of just using POST for everything?**

*Your answer:*

แต่ละ method คือการ CRUD get = read post = create put/patch = update แก้ไข delete = การลบตรงๆตัวเลย

**2. What is `express.json()` and what would happen if you left it out?**

*Your answer:*

express.json() คือ middleware ที่แปลง JSON ที่ส่งมาใน request body
ให้กลายเป็น JavaScript object ที่อ่านได้ผ่าน req.body

ถ้าไม่มี express.json() แล้วส่ง POST พร้อม body มา
req.body จะเป็น undefined เพราะ Express ไม่รู้จะแปลง body ยังไง
ทำให้ไม่สามารถสร้างสินค้าใหม่ได้เลย

**3. What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.**

*Your answer:*

req.params ค่าที่อยู่ใน path เช่น /products/:id
  ตัวอย่าง: DELETE /products/1 → req.params.id = '1'

- req.query ค่าที่อยู่ใน URL หลัง ? 
  ตัวอย่าง: GET /products?name=key → req.query.name = 'key'

- req.body ค่าที่ส่งมาใน request body เป็น JSON
  ตัวอย่าง: POST /products ส่ง { name, price } มา → req.body.name

**4. What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.**

*Your answer:*

200 คือ ok 
201 คือ สร้างสำเร็จ 
400 คือ ข้อมูลส่งผิด 
404 คือ หาไม่เจอ 
500 คือ error

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

*Your answer:*

middleware คือการตั้งเงื่อนไขตรวจับ(function)ก่อนถึงก่อนที่จะรับหรือส่ง api ว่าสิ่งที่เรารับส่ง ถูกต้องต้องตามเงื่อนไขที่ middleware เขียนไว้รึป่าว

ตัวอย่างจาก code: request logger

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

ทุก request ที่เข้ามาจะถูก log ก่อนเสมอ แล้วค่อยไปถึง route

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

*Your answer:*

ถ้าเราลำดับ middleware ไม่ถูกหรือไม่มี อาจจะทำให้โปรแกรมเรา crash ได้ เหมือนใน ข้อ2ที่ express.json() แล้วส่ง POST พร้อม body มา
req.body จะเป็น undefined

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

*Your answer:*

เมื่อเราส่งคำขอไป http://localhost:3000/products 
middleware แรกจะเป็น express ที่แปลง json เป็น JS ก่อน 
middleware2 จะเป็นตัว console.log  request ที่เข้ามาก่อนไปถึง route 

พอถึง route แล้ว ก็จะมีการตรวจสอบชื่อสินค้าว่ามีอยู่แล้วไหม หรือใส่ราคาไวไหม ถ้าตรงตามเงื่อนไขก็รับrequest postที่ส่งเข้ามา push เข้า products array ถ้าไม่มีส่ง 400 กลับทันที

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

*Your answer:*

ตอบไปแล้วในข้อ1ครับ
Create เพิ่มสินค้าใหม่ POST   /products
Read ดึงสินค้า GET    /products
Update แก้ไขสินค้า PUT    /products/:id 
Delete ลบสินค้า DELETE /products/:id

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

*Your answer:*

ส่ง POST ข้อมูลไม่ครบ 400
GET /products/999 ไม่มีใน array  404
เกิด error ที่ไม่คาดคิดฝั่ง server  500

**10. What was the hardest part of building this API and what did you do to get past it?**

*Your answer:*
การคิดการคิด logic ในส่วน Middleware ไม่ค่อยแน่ใจว่าต้องเขียนดักยังไงให้ครอบคลุมปลอดถัย ไม่เกิดเป็นbug ทีหลัง


