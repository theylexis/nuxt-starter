import process from 'node:process'
import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
})

export type AuthSession = typeof authClient.$Infer.Session
export type AuthUser = typeof authClient.$Infer.Session.user
