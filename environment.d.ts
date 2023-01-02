declare namespace NodeJS {
    export interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
        readonly API_APP_URL: string;

    }
}