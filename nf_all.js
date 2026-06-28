// nf_all.js - Ultimate bypass
let url = $response.url;
let body = {};

try { body = JSON.parse($response.body); } catch(e) { body = {}; }

// Fake account info
body.plan = {"planId":"premium_ultra","planName":"Premium Ultra","maxResolution":"2160p","hdr":true,"dolbyAtmos":true,"dolbyVision":true,"maxScreens":99,"maxDownloads":999,"offlineEnabled":true,"adFree":true,"price":0,"currency":"USD","billingPeriod":"lifetime","status":"active"};
body.features = {"4k_uhd":true,"hdr10":true,"dolby_vision":true,"dolby_atmos":true,"spatial_audio":true,"download":true,"offline_viewing":true,"multiple_screens":true,"profiles":10,"parental_controls":"disabled","skip_intro":true,"skip_recap":true,"playback_speed":true};
body.membershipStatus = "active";
body.subscriptionStatus = "active";
body.accountStatus = "active";
body.userStatus = "active";
body.isPremium = true;
body.isFreeTrial = false;
body.paymentRequired = false;
body.requiresPayment = false;
body.registrationComplete = true;
body.signupComplete = true;
body.membershipComplete = true;
body.accountSetupComplete = true;
body.isAccountComplete = true;
body.accountComplete = true;
body.isRegistered = true;
body.isActivated = true;
body.isVerified = true;
body.requiresRegistration = false;
body.requiresSignup = false;
body.onboardingComplete = true;
body.authenticated = true;
body.isAuthenticated = true;
body.isLoggedIn = true;
body.loginSuccess = true;
body.country = "US";
body.region = "US";
body.language = "vi";
body.status = "success";
body.message = "OK";
body.error = null;
body.errorCode = null;
body.token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ1c2VyQG5ldGZsaXguY29tIiwicGxhbiI6InByZW1pdW1fdWx0cmEiLCJleHAiOjk5OTk5OTk5OTl9.fake";
body.authToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ1c2VyQG5ldGZsaXguY29tIiwicGxhbiI6InByZW1pdW1fdWx0cmEiLCJleHAiOjk5OTk5OTk5OTl9.fake";
body.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ1c2VyQG5ldGZsaXguY29tIiwicGxhbiI6InByZW1pdW1fdWx0cmEiLCJleHAiOjk5OTk5OTk5OTl9.fake";
body.geolocation = {"country":"US","region":"GLOBAL","bypass_geo":true};
body.catalogRegion = "US";

// Catalog
if (url.includes('/catalog')) {
    if (body.items && Array.isArray(body.items)) {
        body.items = body.items.map(function(i) {
            if (i) { i.availability = {"isPlayable":true,"geoRestricted":false}; i.maturity = {"rating":"ALL","restricted":false}; i.maxQuality = "2160p"; }
            return i;
        });
    }
    body.hasMore = false;
    body.catalogComplete = true;
}

// Playback
if (url.includes('/playback')) {
    if (!body.playback) body.playback = {};
    body.playback.quality = "2160p";
    body.playback.bitrate = 25000;
    body.playback.hdr = "dolby_vision";
    body.playback.audio = "dolby_atmos";
    body.playback.options = {"skipIntro":true,"skipRecap":true,"skipCredits":true,"playbackSpeed":[0.5,0.75,1.0,1.25,1.5,2.0],"autoPlay":true,"nextEpisode":true};
}

// Geo
if (url.includes('/geo')) {
    body.country = "US";
    body.countryCode = "US";
    body.region = "US";
    body.proxyDetected = false;
    body.vpnDetected = false;
    body.bypassGeo = true;
    body.globalAccess = true;
}

$done({body: JSON.stringify(body)});
