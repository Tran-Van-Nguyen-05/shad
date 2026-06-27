// nf_registration.js - Bypass Registration Check
let b;
try {
    b = JSON.parse($response.body);
} catch(e) {
    b = {};
}

// Đè toàn bộ response đăng ký
b = {
    "status": "success",
    "registrationComplete": true,
    "signupComplete": true,
    "membershipComplete": true,
    "accountComplete": true,
    "accountSetupComplete": true,
    "isRegistered": true,
    "isActivated": true,
    "isVerified": true,
    "requiresRegistration": false,
    "requiresSignup": false,
    "requiresPayment": false,
    "paymentRequired": false,
    "membershipStatus": "active",
    "accountStatus": "active",
    "subscriptionStatus": "active",
    "userStatus": "active",
    "onboardingComplete": true,
    "error": null,
    "errorCode": null,
    "message": "Registration complete"
};

$done({body: JSON.stringify(b)});
