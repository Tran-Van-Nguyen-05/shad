// nf_account.js - Mo khoa goi Premium Ultra
let b = JSON.parse($response.body);
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
};
b.country = "US";
b.region = "US";
b.geolocation = {
  "country": "US",
  "region": "GLOBAL",
  "bypass_geo": true
};
b.membershipStatus = "active";
b.subscriptionStatus = "active";
b.isPremium = true;
b.isFreeTrial = false;
b.paymentRequired = false;
$done({body: JSON.stringify(b)});