// nf_account.js - Bypass "Hoan tat dang ky tren web"
let b = JSON.parse($response.body);

// Ghi de toan bo thong tin tai khoan
b.plan = {
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
};

b.features = {
  "4k_uhd": true,
  "hdr10": true,
  "dolby_vision": true,
  "dolby_atmos": true,
  "download": true,
  "multiple_screens": true,
  "profiles": 10,
  "skip_intro": true,
  "playback_speed": true
};

// DAY LA DONG QUAN TRONG NHAT - DANH LUA APP RANG DA DANG KY XONG
b.membershipStatus = "active";
b.subscriptionStatus = "active";
b.isPremium = true;
b.isFreeTrial = false;
b.paymentRequired = false;
b.registrationComplete = true;
b.accountSetupComplete = true;
b.membershipComplete = true;
b.isAccountComplete = true;
b.signupComplete = true;
b.onboardingComplete = true;
b.requiresPayment = false;
b.requiresRegistration = false;
b.requiresSignup = false;
b.isRegistered = true;
b.isActivated = true;
b.isVerified = true;
b.accountStatus = "active";
b.userStatus = "active";

b.country = "US";
b.region = "US";
b.geolocation = {
  "country": "US",
  "region": "GLOBAL",
  "bypass_geo": true
};

$done({body: JSON.stringify(b)});
