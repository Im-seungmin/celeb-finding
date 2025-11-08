import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 4000

// 1) 데이터 읽기
const raw = fs.readFileSync(path.join(__dirname, '../data/celebrities.json'), 'utf-8')
const celebrities = JSON.parse(raw)

app.use(cors())
app.use(express.json())

// 2) API
app.get('/celebrities', (req, res) => {
  res.json(celebrities)
})

app.post('/match', (req, res) => {
  const user = req.body

  const scored = celebrities.map((celeb) => {
    let score = 0

    if (user.name && celeb.name && celeb.name.includes(user.name)) score += 20

    if (user.birthday && celeb.birthday) {
      const uMonth = user.birthday.slice(5, 7)
      const cMonth = celeb.birthday.slice(5, 7)
      if (uMonth === cMonth) score += 10
    }

    if (user.bloodType && celeb.bloodType && user.bloodType === celeb.bloodType) {
      score += 15
    }

    return { ...celeb, score }
  })

  scored.sort((a, b) => b.score - a.score)

  res.json({
    best: scored[0] || null,
    top5: scored.slice(0, 5)
  })
})

// 3) 정적 파일 서빙
app.use(express.static(path.join(__dirname, '../dist')))

// 4) 마지막 처리: 위에서 못 받은 건 전부 React로
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`)
})
