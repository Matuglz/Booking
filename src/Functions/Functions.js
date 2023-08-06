import data from '../data/books.json'

export function pedirLibros() {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export const pedirItemPorIsbn = (isbn) => {
    return new Promise((resolve, reject) => {
      let books = []
      data.library.forEach(bookObj => books.push(bookObj.book))
      const item = books.find((el) => Number(el.isbn) === Number(isbn))
      if (item) {
        resolve(item)
      } else {
        reject({
          error: "No se encontró el producto"
        })
      }
    })
  }
  