declare global {
    namespace NodeJS {
      interface ProcessEnv {
        // Configuration
        TZ: string
        PORT: number
        DOMAIN: string
        EMAIL_FROM: string
        DOMAIN_EMAIL: string
        ROUTES_IGNORED: string
        DOMAIN_ASSETS_EMAIL: string
        // Security
        SECRET_JWT: string
        ADMIN_LOGIN: string
        ADMIN_PASSWORD: string
        URLS_AUTHORIZED: string
        SECRET_KEY_CRYPTO: string
        API_KEYS_AUTHORIZED: string
        // Services
        // # General
        MONGO_URL: string
        AWS_BASE_URL: string
        RESEND_API_KEY: string
        // # Google
        GOOGLE_SCOPES: string
        GOOGLE_PRIVATE_KEY: string
        GOOGLE_ID_SPREADSHEET: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL_USE: string
        // # Kommo
        URL_BOLD_API: string
        URL_GRAPH_API: string
        VERSION_BOLD_API: string
        ACCOUNTS_BOLD_API: string
        VERSION_GRAPH_API: string
        GRAPH_API_DATASET_ID_: string
        GRAPH_API_STATUS_IDS_: string
        GRAPH_API_ACCESS_TOKEN_: string
      }
    }
}

export {}