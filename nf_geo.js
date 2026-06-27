// nf_geo.js - Spoof US Geolocation
let b;
try {
    b = JSON.parse($response.body);
} catch(e) {
    b = {};
}

b = {
    "status": "success",
    "country": "US",
    "countryCode": "US",
    "region": "US",
    "continent": "NA",
    "ip": "157.240.0.1",
    "proxyDetected": false,
    "vpnDetected": false,
    "dnsDetected": false,
    "torDetected": false,
    "relayDetected": false,
    "hostingDetected": false,
    "bypassGeo": true,
    "globalAccess": true,
    "catalogRegion": "US",
    "preferredCatalog": "US",
    "allRegions": [
        "US", "GB", "CA", "AU", "JP", "KR", "VN", "SG",
        "DE", "FR", "IT", "ES", "NL", "BR", "MX", "IN"
    ]
};

$done({body: JSON.stringify(b)});
