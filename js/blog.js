const db = firebase.firestore()
const collection = db.collection("articles")
const submitButton = document.getElementById("submit")
const textarea = document.getElementById("content-area")
const articles = document.getElementById("articles")

submitButton.addEventListener("click", () => {
  const data = {
    content: textarea.value,
    created_at: Date.now()
  }
  if (data.content) {
    collection.add(data)
      .then((_) => {
        const item = createItemElement(data.content)
        articles.insertBefore(item, articles.childNodes[0])
      })
      .catch((error) => {
        console.error("Error adding document: ", error)
      })
  }
})

collection.orderBy("created_at", "desc").get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.exists) {
        const item = createItemElement(doc.data().content)
        articles.appendChild(item)
      }
    })
  })

function createItemElement(value) {
  const item = document.createElement("li")
  item.classList.add("column")
  item.innerHTML = `
    <div class="box">
      <article class="media">
        ${value}
      </article>
    </div>`
  return item
}
