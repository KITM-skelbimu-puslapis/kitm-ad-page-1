# KITM Skelbimų Puslapis

Sveiki atvykę į KITM Skelbimų Puslapio projektą! Šioje repozitorijoje yra pilna internetinė aplikacija skelbimams valdyti, sukurta kaip dalis KITM mokymo programos. Ji apima tik front-end komponentą ir naudoja Firebase duomenų bazę.

## Turinys

- [Projekto Apžvalga](#projekto-apžvalga) 
- [Funkcijos](#funkcijos) 
- [Technologijos](#technologijos) 
- [Reikalavimai](#reikalavimai) 
- [Diegimas](#diegimas) 
- [Naudojimas](#naudojimas) 
- [Prisidėjimas](#prisidėjimas)

### Projekto Apžvalga

KITM Skelbimų Puslapis yra platforma skelbimams pateikti ir valdyti. Ji siūlo patogią sąsają skelbimams kurti, peržiūrėti, redaguoti ir trinti. Projektas skirtas pademonstruoti pilną aplikacijos vystymo procesą naudojant modernias interneto technologijas.

### Funkcijos

-   **Naudotojo Autentifikacija**: Registracija ir prisijungimas, norint valdyti skelbimus.
-   **Skelbimų Kūrimas**: Naujo skelbimo pateikimas su detalėmis kaip pavadinimas, aprašymas ir nuotrauka.
-   **Skelbimų Peržiūra**: Naršymas ir skelbimų paieška.
-   **Skelbimų Redagavimas ir Šalinimas**: Esamų skelbimų valdymas.
-   **Skelbimų Kategorijų Valdymas**: Esamų skelbimų kategorijų redagavimas ir trynimas bei naujų pridėjimas.
-   **Prisitaikantis Dizainas**: Optimizuota darbui tiek staliniuose, tiek mobiliuosiuose įrenginiuose.

### Technologijos

-   **Front-end**:
    -   JavaScript
    -   SCSS
    -   Laravel-mix standalone modules
    -   Bootstrap
-   **Duomenų Bazė**:
    -   Firebase

### Reikalavimai

Prieš pradedant, įsitikinkite, kad jūsų sistemoje įdiegta:

-   [Node.js](https://nodejs.org/ "https://nodejs.org/") 
-   [npm](https://www.npmjs.com/ "https://www.npmjs.com/") (ateina kartu su Node.js)

### Diegimas

#### 1\. Nukopijuokite Repozitoriją

```
git clone https://github.com/KITM-skelbimu-puslapis/kitm-ad-page-1.gitcd kitm-ad-page-1
```

#### 2\. Įdiekite Priklausomybes

Patikrinkite `package.json` failą, kad įsitikintumėte, jog yra visos reikalingos priklausomybės, ir įdiekite jas:

```
npm install
```

### Naudojimas

#### Vietinės Versijos Paleidimas

Paleiskite svetaine vystymo režimu:

```
npx mix watch
```

Aplikacija bus pasiekiama adresu <http://localhost:3000>.

### Prisidėjimas

Prašome vadovautis šiais žingsniais:

1.  Padarykite fork'ą šioje repozitorijoje.
2.  Sukurkite naują šaką (`git checkout -b feature/JūsųFunkcija`).
3.  Padarykite savo pakeitimus.
4.  Įvykdykite pakeitimus (`git commit -m 'Pridėjote funkciją'`).
5.  Stumkite į šaką (`git push origin feature/JūsųFunkcija`).
6.  Sukurkite pull request'ą.

Įsitikinkite, kad jūsų kodas atitinka projekto kodavimo standartus ir įtraukia atitinkamus testus.

