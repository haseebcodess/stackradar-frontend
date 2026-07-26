import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const api = axios.create({ baseURL: API_URL })

export async function fetchDemand() {
  const res = await api.get('/api/demand')
  return res.data
}

export async function fetchTrends(technologies: string[]) {
  const res = await api.post('/api/trends', { technologies })
  return res.data
}

export async function analyzeSkills(skills: string) {
  const res = await api.post('/api/skill-match', { skills })
  return res.data
}

export async function fetchBattles() {
  const res = await api.get('/api/battle')
  return res.data
}

export async function fetchTechs() {
  const res = await api.get('/api/techs')
  return res.data
}
