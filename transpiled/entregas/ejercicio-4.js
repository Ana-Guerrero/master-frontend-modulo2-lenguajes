console.log("-----Ejercicios entregables 4: Read Book-----");
var titleHarryPotter = "Harry Potter y la piedra filosofal";
var titleCancionHieloYFuego = "Canción de hielo y fuego";
var titleDevastacion = "Devastación";
;
var books = [
    { title: titleHarryPotter, isRead: true },
    { title: titleCancionHieloYFuego, isRead: false },
    { title: titleDevastacion, isRead: true },
];
var isBookRead = function (books, titleToSearch) {
    var book = books.find(function (x) { return x.title === titleToSearch; });
    return book ? book.isRead : false;
};
console.log(titleDevastacion + " is book read:", isBookRead(books, titleDevastacion));
console.log(titleCancionHieloYFuego + " is book read:", isBookRead(books, titleCancionHieloYFuego));
console.log(titleHarryPotter + " is book read:", isBookRead(books, titleHarryPotter));
