# Cinema REST API Node.js
**Projekt na zaliczenie przedmiotu "Programowanie Ruby".** <br />
**Autorzy:** [Karolina Lewińska](https://github.com/KarolinaLewinska), [Justyna Gapys](https://github.com/justynagapys) <br />
**Grupa S22-32** <br />
**Tematyka API:** Kino <br />
**Język:** JavaScript <br />
**Baza:** MongoDB <br />
**Struktura projektu:** <br />
![structure](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/structure.PNG) <br />
**Schemat naszej aplikacji (ustawienia serwera):** <br />
- Routy, połączenie z bazą (hasło do bazy w zmiennej środowiskowej), obsługa błędów <br />
![serverConfig](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/serverConfig.PNG) <br />
**Schemat serwera:** <br />
![server](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/server.PNG) <br />
**Routy:** <br />
- **movies** – baza z filmami <br />
**/** - wszystkie filmy (**GET**) <br />
**/** - dodawanie filmu do bazy (**POST**) <br />
**/:movieId** – szczegóły pozycji o podanym ID (**GET**) <br />
**/:movieId** – aktualizacja pozycji w bazie o podanym id (**PATCH**) <br />
**/:movieId** – usunięcie pozycji z bazy o podanym id (**DELETE**) <br />
![movieRoutes](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/movieRoutes.PNG) <br />
