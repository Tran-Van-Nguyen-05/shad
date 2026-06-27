// nf_account.js - Netflix Ultimate Account Bypass
let b;
try {
    b = JSON.parse($response.body);
} catch(e) {
    b = {};
}

// Ghi đè toàn bộ response account
b = {
    "plan": {
        "planId": "premium_ultra_4k",
        "planName": "Premium Ultra",
        "maxResolution": "2160p",
        "hdr": true,
        "dolbyAtmos": true,
        "dolbyVision": true,
        "maxScreens": 99,
        "maxDownloads": 999,
        "offlineEnabled": true,
        "adFree": true,
        "price": 0,
        "currency": "USD",
        "billingPeriod": "lifetime",
        "status": "active"
    },
    "features": {
        "4k_uhd": true,
        "hdr10": true,
        "hdr10plus": true,
        "dolby_vision": true,
        "dolby_atmos": true,
        "spatial_audio": true,
        "download": true,
        "offline_viewing": true,
        "multiple_screens": true,
        "profiles": 10,
        "parental_controls": "disabled",
        "maturity_rating": "all",
        "skip_intro": true,
        "skip_recap": true,
        "playback_speed": true,
        "mobile_games": true,
        "interactive_content": true
    },
    "membershipStatus": "active",
    "subscriptionStatus": "active",
    "accountStatus": "active",
    "userStatus": "active",
    "isPremium": true,
    "isFreeTrial": false,
    "paymentRequired": false,
    "requiresPayment": false,
    "registrationComplete": true,
    "signupComplete": true,
    "membershipComplete": true,
    "accountSetupComplete": true,
    "isAccountComplete": true,
    "isRegistered": true,
    "isActivated": true,
    "isVerified": true,
    "requiresRegistration": false,
    "requiresSignup": false,
    "onboardingComplete": true,
    "country": "US",
    "region": "US",
    "language": "vi",
    "geolocation": {
        "country": "US",
        "region": "GLOBAL",
        "bypass_geo": true
    },
    "error": null,
    "errorCode": null,
    "status": "success"
};

$done({body: JSON.stringify(b)});
