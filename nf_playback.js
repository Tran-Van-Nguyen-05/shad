// nf_playback.js - Unlock 4K HDR Dolby Atmos Playback
let b;
try {
    b = JSON.parse($response.body);
} catch(e) {
    b = {};
}

b.playback = {
    "manifestUrl": b.playback?.manifestUrl || "",
    "quality": "2160p",
    "bitrate": 25000,
    "codec": "hevc",
    "hdr": "dolby_vision",
    "audio": "dolby_atmos",
    "drm": {
        "widevine": {
            "licenseUrl": b.playback?.drm?.widevine?.licenseUrl || "",
            "type": "permanent",
            "expiry": "2099-12-31T23:59:59Z"
        },
        "playready": {
            "licenseUrl": b.playback?.drm?.playready?.licenseUrl || "",
            "type": "permanent"
        },
        "fairplay": {
            "licenseUrl": b.playback?.drm?.fairplay?.licenseUrl || "",
            "type": "permanent"
        }
    },
    "options": {
        "skipIntro": true,
        "skipRecap": true,
        "skipCredits": true,
        "playbackSpeed": [0.5, 0.75, 1.0, 1.25, 1.5, 2.0],
        "autoPlay": true,
        "nextEpisode": true,
        "autoQuality": false
    }
};

$done({body: JSON.stringify(b)});
