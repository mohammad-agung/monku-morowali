var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKnowvURTD6Ekp0ikBKirBK3i60nVctIS2pJu6zbEhclTNbg5YhCVqo-vdZRpsfLXJODZ4tC8ZVEhS5-fEjsO-I",
    "privateKey": "PTsRf2CuX_tE0OrivPGesycbiqk2Zx9X_1A1bR5SHn0"
};


webPush.setVapidDetails(
    'mailto:codingmilenial2305@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/flM9UVCBLSY:APA91bFRbbIspKeIhrEmLd-IVNbMKQBs-6xZ2gKDUGAmOI373KvBgYdAByeodQWj3aN2B-IXX886kfNQSUlXfKp2ia3TiJp117oiwxlGizzmnItk4fF2qXSkN29Y3BJutd9zMtsMBr7P",
    "keys": {
        "p256dh": "BIUBZgx9HJJz6szE46MWBa/BtcbxZevAPfyFsMTvo/WCb49iJ4BUZAv/HRCBAqR/iLZ34PUXggm9Y0uqU5TyYXs=",
        "auth": "Svsf/bZgUTcNfcDihLtpBg=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '697242993270',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);
