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
**Kontrolery:** <br />
- **movies.js metody:** <br />
a) **allMovies** - lista filmów, <br />
b) **newMovie** - dodawanie filmu do repertuaru, <br />
c) **movieDetails** - szczegóły pozycji w repertuarze o określonym ID, <br />
d) **movieUpdate** - aktualizacja danych dotyczących filmu, <br />
e) **movieDelete** - usuwanie filmu z bazy. <br />
![moviesController](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/moviesController.PNG) <br />
![moviesController2](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/moviesController2.PNG) <br />
- **products.js metody:** <br />
a) **allProducts** - lista produktów, <br />
b) **newProduct** - dodawanie produktu do bazy, <br />
c) **productDetails** - szczegóły produktu w bazie o określonym ID, <br />
d) **productUpdate** - aktualizacja danych dotyczących produktu, <br />
e) **productDelete** - usuwanie produktu z bazy. <br />
![productsController](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/productsController.PNG) <br />
![productsController2](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/productsController2.PNG) <br />
- **purchases.js metody:** <br />
a) **allPurchases** - historia dokonanych zakupów w kinie, <br />
b) **newPurchase** - dodawanie kolejnych zakupów do bazy, <br />
c) **purchaseDetails** - szczegóły zakupów o określonym ID, <br />
d) **purchaseUpdate** - aktualizacja danych dotyczących konkretnego zakupu, <br />
e) **purchaseDelete** - usuwanie danych dotyczących zakupu z bazy. <br />
![purchasesController](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/purchasesController.PNG) <br />
![purchasesController2](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/purchasesController2.PNG) <br />
- **users.js metody:** <br />
a) **allUsers** – lista wszystkich kont użytkowników mających dostęp do bazy, <br />
b) **newUser** – rejestracja użytkownika, <br />
c) **userDelete** – usunięcie konta użytkownika o określonym ID, <br />
d) **userLogin** – logowanie się do API. <br />
![usersController](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/usersController.PNG) <br />
![usersController2](https://github.com/KarolinaLewinska/CinemaAPI/blob/master/ReadmeIMG/usersController2.PNG) <br />
