declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_NAME: string
      DATABASE_NAME: string
      DATABASE_USERNAME: string
      DATABASE_PASSWORD: string
      DATABASE_HOST:string
      ENVIROMENT:  'DEVELOPMENT' | 'PRODUCTION'
      PORT_APP: number
      JSON_SECRET_WEB_TOKEN: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}