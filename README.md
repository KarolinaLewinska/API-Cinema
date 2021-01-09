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
![moviesRoutes](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/movieRoutes.PNG) <br />
- **products** – baza z produktami do kupienia w kinie <br />
**/** - wszystkie produkty (**GET**) <br />
**/** - dodawanie produktu do bazy (**POST**) <br />
**/:productId** – szczegóły pozycji o podanym ID (**GET**) <br />
**/:productId** – aktualizacja pozycji w bazie o podanym ID (**PATCH**) <br />
**/:productId** – usunięcie pozycji z bazy o podanym ID (**DELETE**) <br />
![productsRoutes](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/productRoutes.PNG) <br />
- **purchases** – zakupy dokonane w kinie <br />
**/** - lista wszystkich dokonanych zakupów w kinie (**GET**) <br />
**/** - dodawanie zakupu do bazy (**POST**) <br />
**/:purchaseId** – szczegóły pozycji o ID (**GET**) <br />
**/:purchaseId** – aktualizacja pozycji w bazie o podanym ID (**PATCH**) <br />
**/:purchaseId** – usunięcie pozycji z bazy o podanym ID (**DELETE**) <br />
![purchasesRoutes](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/purchaseRoutes.PNG) <br />
- **users** – baza z użytkownikami mającymi dostęp do API <br />
**/** - lista wszystkich kont użytkowników <br />
**/signup** – rejestracja użytkownika <br />
**/:userId** – usunięcie konta  użytkownika <br />
**/login** – zalogowanie użytkownika <br />
![usersRoutes](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/usersRoutes.PNG) <br />
**Modele:** <br />
- **Movie** <br />
![movieModel](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/movieModel.PNG) <br />
- **Product** <br />
![productModel](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/productModel.PNG) <br />
- **Purchase** <br />
![purchaseModel](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/purchaseModel.PNG) <br />
- **User** <br />
![userModel](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/userModel.PNG) <br />
**Middleware:** <br />
- **uwierzytelnianie** <br />
![authMiddleware](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/authMiddleware.PNG) <br />

