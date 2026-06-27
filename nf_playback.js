// nf_playback.js - Mo khoa chat luong 4K HDR Dolby
let b = JSON.parse($response.body);
b.playback = {
  "quality": "2160p",
  "bitrate": 25000,
  "codec": "hevc",
  "hdr": "dolby_vision",
  "audio": "dolby_atmos",
  "drm": {
    "widevine": {
      "type": "permanent",
      "expiry": "2099-12-31T23:59:59Z"
    },
    "playready": {
      "type": "permanent"
    },
    "fairplay": {
      "type": "permanent"
    }
  },
  "options": {
    "skipIntro": true,
    "skipRecap": true,
    "skipCredits": true,
    "playbackSpeed": [0.5, 0.75, 1.0, 1.25, 1.5, 2.0],
    "autoPlay": true,
    "nextEpisode": true
  }
};
$done({body: JSON.stringify(b)});