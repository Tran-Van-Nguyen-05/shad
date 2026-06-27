// nf_geo.js - Gia lap vi tri My de mo khoa catalog US
let b = JSON.parse($response.body);
b = {
  "status": "success",
  "country": "US",
  "countryCode": "US",
  "region": "US",
  "continent": "NA",
  "ip": "157.240.0.0",
  "proxyDetected": false,
  "vpnDetected": false,
  "dnsDetected": false,
  "bypassGeo": true,
  "globalAccess": true,
  "catalogRegion": "US",
  "allRegions": [
    "US", "GB", "CA", "AU", "JP", "KR", "VN", "SG",
    "DE", "FR", "IT", "ES", "NL", "BR", "MX", "IN"
  ]
};
$done({body: JSON.stringify(b)});