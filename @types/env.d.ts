declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TZ: string
        PORT: number
        DOMAIN: string
        MONGO_URL: string
        SECRET_JWT: string
        EMAIL_FROM: string
        ADMIN_LOGIN: string
        DOMAIN_EMAIL: string
        RESEND_API_KEY: string
        ADMIN_PASSWORD: string
        URLS_AUTHORIZED: string
        SECRET_KEY_CRYPTO: string
        GOOGLE_PRIVATE_KEY: string
        DOMAIN_ASSETS_EMAIL: string
        GOOGLE_ID_SPREADSHEET: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL_USE: string
      }
    }
}

export {}