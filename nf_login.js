// nf_login.js - Fake Login Success - Bypass Authentication
let b;
try {
    b = JSON.parse($response.body);
} catch(e) {
    b = {};
}

// Giả mạo response đăng nhập thành công với token hợp lệ
b = {
    "status": "success",
    "message": "Login successful",
    "authenticated": true,
    "loginSuccess": true,
    "isAuthenticated": true,
    "isLoggedIn": true,
    "loginRequired": false,
    "authRequired": false,
    "error": null,
    "errorCode": null,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5ldGZsaXggVXNlciIsImVtYWlsIjoidXNlckBuZXRmbGl4LmNvbSIsInBsYW4iOiJwcmVtaXVtX3VsdHJhIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.fake_signature",
    "authToken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5ldGZsaXggVXNlciIsImVtYWlsIjoidXNlckBuZXRmbGl4LmNvbSIsInBsYW4iOiJwcmVtaXVtX3VsdHJhIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.fake_signature",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5ldGZsaXggVXNlciIsImVtYWlsIjoidXNlckBuZXRmbGl4LmNvbSIsInBsYW4iOiJwcmVtaXVtX3VsdHJhIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.fake_signature",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5ldGZsaXggVXNlciIsImVtYWlsIjoidXNlckBuZXRmbGl4LmNvbSIsInBsYW4iOiJwcmVtaXVtX3VsdHJhIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.fake_signature",
    "userId": "123456789",
    "email": "user@netflix.com",
    "account": {
        "plan": "premium_ultra",
        "status": "active",
        "registrationComplete": true,
        "signupComplete": true,
        "membershipComplete": true,
        "paymentRequired": false,
        "country": "US"
    }
};

$done({body: JSON.stringify(b)});