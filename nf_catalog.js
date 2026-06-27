// nf_catalog.js - Mo khoa toan bo danh muc toan cau
let b = JSON.parse($response.body);
if (b.items && Array.isArray(b.items)) {
  b.items = b.items.map(function(i) {
    i.availability = {
      "isPlayable": true,
      "availableFrom": "2000-01-01",
      "availableTo": "2099-12-31",
      "countries": ["ALL"],
      "geoRestricted": false
    };
    i.maturity = {
      "rating": "ALL",
      "restricted": false,
      "bypassRequired": false
    };
    i.subtitleLanguages = [
      "en", "vi", "ko", "ja", "zh-Hans", "zh-Hant",
      "es", "fr", "de", "ar", "pt", "ru", "hi",
      "th", "it", "nl", "tr", "sv", "no", "da", "fi", "pl"
    ];
    i.audioLanguages = [
      "en", "vi", "ko", "ja", "zh", "es", "fr", "de",
      "ar", "pt", "ru", "hi", "th", "it", "nl", "tr"
    ];
    i.maxQuality = "2160p";
    i.hdrAvailable = true;
    i.dolbyAtmosAvailable = true;
    return i;
  });
}
b.totalItems = b.items.length;
b.hasMore = false;
b.catalogComplete = true;
$done({body: JSON.stringify(b)});