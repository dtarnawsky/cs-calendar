import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cs.calendar',
  appName: 'cs-calendar',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
