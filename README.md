# Pervote (Personel Oylama Sistemi) | pervote-web

2019/2020 Kocaeli Üniversitesi Bilgisayar Mühendisliği Bölümü Bitirme Tezi Çalışmasıdır.

* 160202091 - Batuhan Subaşı
* 160202069 - Emre Altay

Bu repo web tarafını kapsamaktadır. Proje 3 farklı sistem üzerinden 3 repo halinde yürümektedir.

* [pervote-web](https://github.com/batuhansubasi/pervote-web)     - Frontend Web 
* [pervote-mobil](https://github.com/batuhansubasi/pervote-mobil) - Mobil Hybrit 
* [pervote-micro](https://github.com/batuhansubasi/pervote-micro) - Backend

**Web:** Admin yönetim tarafıdır. Yönetici, buradan kaydolur. Personelleri, departmanlarını oluşturur. Personellerin genel ve detaylı şekilde puan performansını görüntüler.

**Mobil:** Personelin sisteme giriş yaptığı kısımdır. Personeller şirket içi çalışanlarlaa beraber toplantılar oluşturur. Bu toplantılar sonucunda, toplantıya katılanlar birbirini oylar. Detaylı bilgileri girebileceği alan mevcuttur. 

**Micro:** Web ve mobil tarafın apilerinin ve bazı backend işlemlerinin yapıldığı taraftır.


## Nasıl Çalıştırılır?

**1-** Proje bilgisayarınıza buradan indirilmelidir.

**2-** İndirdiğiniz projenin dizinine gidin ve konsol ekranınızı açın.

```
$npm install
```

**3-** Projeyi başlatabilirsiniz.

```
$npm run
```

[*Projeye canlı olarak buradan erişilebilir.*](https://batuhansubasi.github.io/pervote-web/)
 
## Kullanılan Temel Teknolojiler

### React

UI için kullandığımız javascript kütüphanesi. Yeniden kullanılabilir özelliklerinden faydalandık. Virtual dom' a sahip olması vs. ilk kez web geliştiren bizler için etkileyici oldu. Genel yapıyı react kütüphanesi üzerinden yürüttük.

Öğrenelim ve uygulayalım diye; react-router-dom(switch, route, link, redirect vs.) kullanıldı.

### Redux

Oluşturmuş olduğumuz componentlerin statelerini, diğer componentlerden rahatça çekebilmek ve ortak havuz oluşturmak amacıyla kullandık. İlk amacımız ise tabiki uygulamak ve öğrenmek içindi. Bu uygulamada ise sisteme giren kullanıcı bilgisini ve giriş yapıp yapmadığı dair kontrol parametresi kullandık.

![image](https://user-images.githubusercontent.com/30631029/83916555-0f24a880-a77e-11ea-837b-e523c9bfd7ab.png)

Lokal çalışma üzerinden Redux Ekran Görüntüsü

### Material UI

* Verilerin girildiği tekil bazı kutucuklarda, (textfield)
* Componentlerin hazırlanmasını beklerken animasyonlarda, (loader)
* Verilerin gösterilmesini, eklenebilmesini, silinmesi sağlayan ve ekstra exitlere açık olan tablo yapısında,
* Kullanıcıyı uyarmak için ekranda gösterdiğimiz uyarı metinlerinde (alert) **Material UI** kullanıldı.

## Open-Source Kullanılan Kütüphaneler

* [**React Icons**](https://react-icons.github.io/react-icons/) - İkon görselleri için kullanıldı.

* [**Material UI Rating Lab**](https://material-ui.com/components/rating/) - Personellerin puanlarının görselleştirilmesinde kullanıldı.

* [**React Moment**](https://www.npmjs.com/package/react-moment) - Veritabanından gelen timestamps' ın formatı için kullanıldı.

* [**MaterialTable**](https://www.npmjs.com/package/material-table) - Personellerin tablo halinde listelenmesi, eklenmesi ve çıkarılması işlemleri yapıldı.

* [**reCAPTCHA**](https://developers.google.com/recaptcha/docs/v3) - Login olurken spamı engellemek için kullanıldı.

* [**react-loader-spinner**](https://www.npmjs.com/package/react-loader-spinner) - Personellerin puanlarının görselleştirilmesinde kullanıldı.

## Proje Dizini İçerisindeki Klasörler ve Dosyalar

pervote-web
 |-- src
      |-- actions 
           |-- index.js
      |-- components 
           |-- Banner.js
           |-- Hero.js
           |-- Navbar.js
           |-- Personnel.js
           |-- UserFunction.js
      |-- helpers
           |-- jwt.js
      |-- images
           |-- UserFunction.js
           |-- UserFunction.js
      |-- pages
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
      |-- reducers
           |-- UserFunction.js
           |-- UserFunction.js
           |-- UserFunction.js
      |-- UserFunction.js
      |-- UserFunction.js
      |-- UserFunction.js

## Uygulama Ekran Görüntüleri

![image](https://user-images.githubusercontent.com/30631029/83819475-a16f7280-a6d2-11ea-8c95-76b5a8b3e414.png)

**Ana Sayfa Ekranı:** Uygulama üzerinden adminin ve sistemin ne yapacağı hakkında bilgi veren giriş ekranıdır.

---

![image](https://user-images.githubusercontent.com/30631029/83914763-8fe1a580-a77a-11ea-82d8-d6d6cfd31553.png)

**Kaydolma Ekranı:** Sisteme üye olmak isteyen yönetici kaydolma ekranıdır.

---

![image](https://user-images.githubusercontent.com/30631029/83913954-f9f94b00-a778-11ea-9bcf-bac9a9b876c1.png)

**Giriş Ekranı:** Sisteme giriş yapacak olan yönetici giriş ekranıdır.

---

![image](https://user-images.githubusercontent.com/30631029/83914078-3462e800-a779-11ea-9508-1a8881cf9195.png)

**Admin Personel Yönetim Ekranı:** Personellerin resim, genel bilgi ve ortalama puanlarıyla beraber listelendiği, ekleme ve çıkarma seçeneklerinin olduğu ve ilgili personelin puan detaylarına gidebileceği işlevsellik bulunmaktadır.

---

![image](https://user-images.githubusercontent.com/30631029/83914174-607e6900-a779-11ea-8571-2b372cd630f5.png)

**İlgili Personelin Puan Detay Ekranı:** Personelin almış olduğu puanların, hangi toplantıda ve kim tarafından oy verildiğinin listelendiği ekrandır.

---

![image](https://user-images.githubusercontent.com/30631029/83914200-6bd19480-a779-11ea-98a1-fcb07811684c.png)

**Admin Departman Yönetim Ekranı:** Departmanların görüntülenmesi, eklenebilmesi ve çıkarabilmesini sağlayan yönetim ekranıdır.

---

## Yapılabilecekler

* name.com üzerinden domain alındı. (06 Mart) Şuan github page' den host yapılıyor. İleriye doğru kendi domain geçilebilir.
