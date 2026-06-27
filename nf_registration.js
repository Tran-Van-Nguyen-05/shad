// nf_registration.js - Chan response dang ky
let b = JSON.parse($response.body);

// Ghi de moi thu lien quan den dang ky
b.registrationComplete = true;
b.signupComplete = true;
b.membershipComplete = true;
b.accountComplete = true;
b.isRegistered = true;
b.isActivated = true;
b.requiresRegistration = false;
b.requiresSignup = false;
b.requiresPayment = false;
b.paymentRequired = false;
b.membershipStatus = "active";
b.accountStatus = "active";
b.subscriptionStatus = "active";
b.status = "active";

$done({body: JSON.stringify(b)});