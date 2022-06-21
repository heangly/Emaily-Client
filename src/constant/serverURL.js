const environment = {
  Development: 'Development',
  Production: 'Production'
}

const runningEnvironment = environment.Development

const SERVER_PRODUCTION_BASE_URI = 'https://emaily-server-project.herokuapp.com'
const SERVER_DEVELOPMENT_BASE_URI = 'http://localhost:4000'

export const SERVER_BASE_URI =
  runningEnvironment === environment.Production
    ? SERVER_PRODUCTION_BASE_URI
    : SERVER_DEVELOPMENT_BASE_URI

export const SERVER_BASE_GRAPHQL_URI = SERVER_BASE_URI + '/graphql'
export const SERVER_GOOGLE_OAUTH_URI = SERVER_BASE_URI + '/auth/google'
