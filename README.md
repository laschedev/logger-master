
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>


# The Logger Master

Logger Master, çeşitli log seviyeleriyle mesajları renkli bir şekilde konsola yazdıran bir Node.js modülüdür.

## Kullanım

**Öncelikle, projenize The Logger Master modülünü eklemek için terminale aşağıdaki komutu girin:** ```npm install the-logger-master```


**Ardından, projenizin dosyasında Logger Master modülünü require edin ve kullanmaya başlayın:**

```javascript
const logger = require("logger-master");
// Örnek kullanım
logger.sendLog("Bu bir bilgilendirme mesajıdır.", "info");
logger.sendLog("Bu bir hata mesajıdır.", "error");
logger.sendLog("Bu bir uyarı mesajıdır.", "warn");
logger.sendLog("Bu bir debug mesajıdır.", "debug");
```

- Fonksiyonlar

  **sendLog(message, level)**
  Belirtilen mesajı belirtilen log seviyesinde konsola yazdırır.

  **message: Yazdırılacak mesaj.**
level: Log seviyesi. Varsayılan değer: "default". (Opsiyonel)

- Log Seviyeleri

   error: Hata mesajları için.

   warn: Uyarı mesajları için.

   info: Bilgilendirme mesajları için.

   debug: Hata ayıklama mesajları için.
