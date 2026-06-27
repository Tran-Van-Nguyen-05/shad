// nf_catalog.js - Unlock Global Catalog
let b;
try {
    b = JSON.parse($response.body);
} catch(e) {
    b = {"items": []};
}

if (b.items && Array.isArray(b.items)) {
    b.items = b.items.map(function(item) {
        if (!item) return item;
        item.availability = {
            "isPlayable": true,
            "availableFrom": "2000-01-01",
            "availableTo": "2099-12-31",
            "countries": ["ALL"],
            "geoRestricted": false
        };
        item.maturity = {
            "rating": "ALL",
            "restricted": false,
            "bypassRequired": false
        };
        item.subtitleLanguages = [
            "en", "vi", "ko", "ja", "zh-Hans", "zh-Hant",
            "es", "fr", "de", "ar", "pt", "ru", "hi",
            "th", "it", "nl", "tr", "sv", "no", "da", "fi", "pl"
        ];
        item.audioLanguages = [
            "en", "vi", "ko", "ja", "zh", "es", "fr", "de",
            "ar", "pt", "ru", "hi", "th", "it", "nl", "tr"
        ];
        item.maxQuality = "2160p";
        item.hdrAvailable = true;
        item.dolbyAtmosAvailable = true;
        return item;
    });
}

b.totalItems = b.items ? b.items.length : 0;
b.hasMore = false;
b.catalogComplete = true;
b.globalCatalog = true;

$done({body: JSON.stringify(b)});
