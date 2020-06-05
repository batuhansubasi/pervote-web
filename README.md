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

```
Give examples
```

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

*Initial work*

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Kullanılan Temel Teknolojiler

### React

### Redux

### Material UI

Textfield, loader, table, alert

## Open-Source Kullanılan Kütüphaneler

* [**React Icons**](https://react-icons.github.io/react-icons/) - İkon görselleri için kullanıldı.

* [**Material UI Rating Lab**](https://material-ui.com/components/rating/) - Personellerin puanlarının görselleştirilmesinde kullanıldı.

* [**React Moment**](https://www.npmjs.com/package/react-moment) - Veritabanından gelen timestamps' ın formatı için kullanıldı.

* [**MaterialTable**](https://www.npmjs.com/package/material-table) - Personellerin tablo halinde listelenmesi, eklenmesi ve çıkarılması işlemleri yapıldı.

* [**reCAPTCHA**](https://developers.google.com/recaptcha/docs/v3) - Login olurken spamı engellemek için kullanıldı.

* [**react-loader-spinner**](https://www.npmjs.com/package/react-loader-spinner) - Personellerin puanlarının görselleştirilmesinde kullanıldı.

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
