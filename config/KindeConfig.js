import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';
import KindeConstants from '../constants/KindeConstants';

export const client = new KindeSDK(
    KindeConstants.KINDE_ISSUER_URL, 
    KindeConstants.KINDE_POST_CALLBACK_URL, 
    KindeConstants.KINDE_CLIENT_ID, 
    KindeConstants.KINDE_POST_LOGOUT_REDIRECT_URL
);