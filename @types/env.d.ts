declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number
        DOMAIN: string
        MONGO_URL: string
        ADMIN_LOGIN: string
        DOMAIN_EMAIL: string
        ADMIN_PASSWORD: string
        URLS_AUTHORIZED: string
        SECRET_KEY_CRYPTO: string
      }
    }
}

export {}