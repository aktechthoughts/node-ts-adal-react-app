import { AdalConfig, AuthenticationContext } from 'react-adal';
// Endpoint URL
export const endpoint = 'XXXXX';
// App Registration ID
export const adalConfig: AdalConfig = {
  tenant: '0f3e274b-ba68-4b45-a014-04368d5c2207',
  clientId: 'e55f13c7-ab4e-4fe9-85ba-be7900308d34',
  endpoints: {
      api:endpoint
  },
  redirectUri: 'http://localhost:3000/',
 
  cacheLocation: 'localStorage'
};
export const authContext = new AuthenticationContext(adalConfig);


