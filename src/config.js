const isDevelopment = import.meta.env.DEV

export const API_BASE_URL = isDevelopment 
  ? '/api' // In development, use relative URL (handled by Vite proxy)
  : 'https://ecolawnsdenver.com/api' // In production, use the full URL

export const API_ENDPOINTS = {
  SEND_EMAIL: `${API_BASE_URL}/send-email`,
  QUOTES: `${API_BASE_URL}/quotes`,
  HEALTH: `${API_BASE_URL}/health`
} 