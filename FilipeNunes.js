function Bookshelf(ownerName){
  this.favoriteBooks = [];
  this.ownerName = ownerName;
}

Bookshelf.prototype.addFavoriteBook = function(bookName){
  if (!bookName.includes("Great")) {
    this.favoriteBooks.push(bookName);
  }
}

Bookshelf.prototype.printFavoriteBooks = function(){
  console.log(`${this.ownerName}'s Favorite Books: ${String(this.favoriteBooks.length)}`);
  for (let bookName of this.favoriteBooks) {
    console.log(bookName);
  }
}

Bookshelf.prototype.sortFavoriteBooksByAlphabeticDescendingOrder = function(){
  this.favoriteBooks.sort((a, b) => b.localeCompare(a));
}

function CardBox(ownerName){
  this.favoriteBooks = [];
  this.ownerName = ownerName;

  Bookshelf.call(this, ownerName);
}

function loadBooks(Bookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      Bookshelf.addFavoriteBook(bookName);
    }
    Bookshelf.sortFavoriteBooksByAlphabeticDescendingOrder();
    Bookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf("Filipe");
loadBooks(myBooks);

var myCardBox = new CardBox("Phil");
loadBooks(myBooks);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
