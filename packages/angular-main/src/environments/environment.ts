// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_USER_BASE_PATH: 'http://localhost:8090',
  API_ROLE_BASE_PATH: 'http://localhost:8090',
  API_USER_PROFILE_BASE_PATH: 'http://localhost:8090',
  API_USER_PERIOD_BASE_PATH: 'http://localhost:8090',
  API_SYSTEM_PERIOD_BASE_PATH: 'http://localhost:8090',
  API_MANUAL_PERIOD_BASE_PATH: 'http://localhost:8090',
  API_KEYS: 'KEY',
  API_VALUE: 'password',

  USER_MANAGEMENT_SERVICE_ENDPOINT: 'http://172.30.74.48:8443/user-management',
  AUTH_SERVICE_ENDPOINT: 'http://172.30.16.126:9080/api/v1',
  SAFE_BOX_MANAGEMENT_SERVICE_ENDPOINT: 'http://172.30.74.48:8443/safe-box-management',
  GENERAL_TRANSFER_SERVICE_ENDPOINT: 'http://172.30.74.48:8443/general-transfer'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
