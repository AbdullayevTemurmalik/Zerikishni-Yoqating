# BMW M-Series 3D Ultimate Driving & Racing Simulator Pro 🏎️💨

Ushbu loyiha **100% Frontend (Static Web)** texnologiyalari (Three.js WebGL, Web Audio API, Tailwind CSS) asosida yaratilgan **Triple-A (AAA)** darajadagi zamonaviy 3D poyga simulyatoridir.

---

## 🎯 Asosiy xususiyatlar va yangilanishlar

1. **Haqiqiy Pro Balonlar va M-Diska Tizimi:**
   * Balonlar oldinga va orqaga harakatga mos ravishda aylanish o'qi bo'yicha silliq aylanadi (wobble xatosi yo'q).
   * 5-tarmoqli M-Competition sport qotishma disklari, markaziy BMW emblemasi va ichki teshikli metall tormoz disklari.
   * Tormoz supportlari (qizil/oltin rangli Brembo M-Caliper) balon ichida qimirlamay turadi, diska esa uning ichidan aylanib o'tadi.
   * Drift vaqtida haqiqiy qarama-qarshi rul burilishi (counter-steer).
   * Joyida turib gaz va tormozni bosganda — **Burnout** rejimi (orqa g'ildiraklar shiddat bilan aylanadi, tutun chiqadi va shinalar ovozi eshitiladi).

2. **Mukammal Fizika va 8-Bosqichli Transmissiya:**
   * Tezlikka qarab 1-dan 8-bosqichgacha ketma-ket uzatmalar qutisi (Sequential Transmission).
   * Uzatma almashganda egzozdan o't chaqnashi va ovozli "pop-pop" portlashlari (Exhaust Crackle).
   * Turbo Blow-Off Valve (BOV): Yuqori aylanishlarda (RPM) gaz qo'yib yuborilganda siqilgan havo chiqish ovozi ("psshh-cht-cht").
   * Orqaga harakat (R uzatmasi): Tormozni bosib turganda mashina to'xtab, orqaga silliq harakatlanadi, oq orqa faralar yonadi va rul teskari kinematika bo'yicha boshqariladi.
   * To'qnashuv fizikasi: Mashinalar yoki to'siqlarga urilganda zarba kuchi bilan kamera titrashi (Impact Shake).

3. **Yuqori Tezlik Vizual Effektlari (Speed Warp FX):**
   * 140 km/soat dan oshganda yoki Nitro yoqilganda avtomobil atrofida koinot tezlik chiziqlari (Speed Streaks) paydo bo'ladi.
   * Dinamik kamera ko'rish burchagi (FOV): 62° dan 78° gacha kengayib, yuqori tezlik hayajonini beradi.

4. **O'yin rejimlari va 2-Kishilik Split-Screen:**
   * **Magistral (Highway):** Ko'p qatorli harakat, yaqin o'tib ketish (Near-Miss Shashka), oltin darvozalar.
   * **Stadion:** 3 aylanali AI botlar bilan chempionat poygasi va real vaqt reytingi (1 / 6 o'rin).
   * **Drift City:** 360° erkin shahar, tramplinlar, parvoz qilish va sakrash fizikasi.
   * **Time Attack:** Vaqtga qarshi poyga (+9 soniya bonus darvozalari).
   * **2-Kishilik Ekran (Split-Screen):** Bitta kompyuterda ikkita do'st bir vaqtda poyga o'ynashi mumkin (WASD vs Strelkalar).

5. **100% Frontend — Hech qanday Python yoki server kerak emas!**
   * Vercel, GitHub Pages yoki oddiy kompyuterda bevosita brauzerda ishlaydi.

---

## 🎮 Boshqaruv tugmalari

| Funksiya | 1-O'yinchi (WASD) | 2-O'yinchi (Split-Screen) |
| :--- | :--- | :--- |
| **Gaz / Tezlanish** | `W` yoki `↑` | `↑` (Yuqori strelka) |
| **Tormoz / Orqaga (R)** | `S` yoki `↓` | `↓` (Pastki strelka) |
| **Burilish (Rul)** | `A` / `D` | `←` / `→` |
| **Qo'l tormozi (Drift)** | `SPACE` (Probel) | `NUMPAD 0` yoki `/` |
| **Nitro (Super Tezlanish)** | Chap `SHIFT` | O'ng `SHIFT` yoki `ENTER` |
| **Burnout (Shina qizdirish)** | `W` + `S` yoki `W` + `SPACE` | `↑` + `↓` |
| **Kamera almashtirish** | `C` (Orqa / Kapot / Kinematik) | `C` |
| **Ob-havo** | `V` (Shom / Tun / Quyosh) | `V` |
| **Faralar** | `H` | `H` |
| **M-Strob chiroqlar** | `M` | `M` |
| **Slow-Mo (Sekinlashtirish)**| `F` | `F` |
| **Mashinani tiklash** | `R` | `R` |
| **Pauza / Sozlamalar** | `` ` `` (Tilda / Backtick) yoki `ESC` | `` ` `` yoki `ESC` |

---

## 🚀 Kompyuterda ishga tushirish

1. Shunchaki [`index.html`](index.html) faylini sichqoncha bilan **2 marta bosing**.
2. Yoki Windows'da [`start.bat`](start.bat), Mac/Linux'da [`start.sh`](start.sh) faylini bosing.

---

## 🌐 GitHub va Vercel-ga yuklash (Deploy qilish)

Siz o'z GitHub repozitoriyangiz havolasini olganingizdan so'ng:

```bash
git init
git add .
git commit -m "BMW M-Series 3D Pro Simulator - Complete Frontend Release"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NOMI.git
git push -u origin main
```

Keyin [Vercel.com](https://vercel.com) saytiga kirib, ushbu GitHub repozitoriyangizni **Import** qilasiz va **Deploy** tugmasini bosasiz. 15 soniyada tayyor bo'ladi!
