let url = $response.url;
let body = {};

try { body = JSON.parse($response.body); } catch(e) { body = {}; }

// Bypass all auth responses
body.plan = {"planId":"premium_ultra","maxResolution":"2160p","hdr":true,"dolbyAtmos":true,"maxScreens":99,"maxDownloads":999,"offlineEnabled":true,"adFree":true,"status":"active"};
body.features = {"4k_uhd":true,"hdr10":true,"dolby_vision":true,"dolby_atmos":true,"download":true,"multiple_screens":true,"profiles":10,"skip_intro":true};
body.membershipStatus = "active";
body.subscriptionStatus = "active";
body.accountStatus = "active";
body.registrationComplete = true;
body.signupComplete = true;
body.membershipComplete = true;
body.accountComplete = true;
body.paymentRequired = false;
body.requiresRegistration = false;
body.requiresSignup = false;
body.requiresPayment = false;
body.isAuthenticated = true;
body.isLoggedIn = true;
body.loginSuccess = true;
body.authenticated = true;
body.country = "US";
body.region = "US";
body.status = "success";
body.error = null;
body.token = "ok";
body.authToken = "ok";
body.accessToken = "ok";
body.onboardingComplete = true;
body.isRegistered = true;
body.isActivated = true;
body.isVerified = true;

if (url.includes('/catalog')) {
    if (body.items && Array.isArray(body.items)) {
        body.items = body.items.map(function(i) {
            if (i) { i.availability = {"isPlayable":true,"geoRestricted":false}; i.maturity = {"rating":"ALL","restricted":false}; }
            return i;
        });
    }
    body.hasMore = false;
}

if (url.includes('/playback')) {
    if (body.playback) {
        body.playback.quality = "2160p";
        body.playback.options = {"skipIntro":true,"skipRecap":true,"playbackSpeed":[0.5,0.75,1.0,1.25,1.5,2.0],"autoPlay":true};
    }
}

if (url.includes('/geo')) {
    body.country = "US";
    body.countryCode = "US";
    body.region = "US";
    body.proxyDetected = false;
    body.vpnDetected = false;
    body.bypassGeo = true;
}

$done({body: JSON.stringify(body)});