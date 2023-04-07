declare global {
    namespace NodeJS {
      interface ProcessEnv {
        TZ: string
        PORT: number
        DOMAIN: string
        MONGO_URL: string
        SECRET_JWT: string
        ADMIN_LOGIN: string
        DOMAIN_EMAIL: string
        API_URL_GRAPH: string
        ADMIN_PASSWORD: string
        URLS_AUTHORIZED: string
        SECRET_KEY_CRYPTO: string
        GOOGLE_PRIVATE_KEY: string
        GOOGLE_ID_SPREADSHEET: string
        ACCESS_TOKEN_API_GRAPH: string
        PHONE_NUMBER_IDENTIFICATION: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL: string
        TOKEN_VERIFICATION_WEBHOOK_GRAPH: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL_USE: string
      }
    }
}

export {}