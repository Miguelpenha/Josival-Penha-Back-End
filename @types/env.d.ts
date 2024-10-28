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
        AWS_BASE_URL: string
        RESEND_API_KEY: string
        ADMIN_PASSWORD: string
        ROUTES_IGNORED: string
        URLS_AUTHORIZED: string
        SECRET_KEY_CRYPTO: string
        GOOGLE_PRIVATE_KEY: string
        BETA_DASHBOARD_URL: string
        DOMAIN_ASSETS_EMAIL: string
        GOOGLE_ID_SPREADSHEET: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL: string
        GOOGLE_SERVICE_ACCOUNT_EMAIL_USE: string
        // Voiceflow
        VOICE_FLOW_DM_URL: string
        VOICE_FLOW_API_KEY: string
        VOICE_FLOW_VERSION_ID: string
        VOICE_FLOW_PROJECT_ID: string
        VOICE_FLOW_VERIFY_TOKEN: string
        VOICE_FLOW_WHATSAPP_TOKEN: string
        VOICE_FLOW_TRANSCRIPT_ICON: string
        VOICE_FLOW_WHATSAPP_VERSION: string
        // Kommo
        URL_BOLD_API: string
        URL_GRAPH_API: string
        VERSION_BOLD_API: string
        ACCOUNT_BOLD_API: string
        VERSION_GRAPH_AP: string
        ACCOUNTS_BOLD_API: string
      }
    }
}

export {}