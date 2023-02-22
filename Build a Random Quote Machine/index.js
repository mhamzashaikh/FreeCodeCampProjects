const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    },
};
let myContentData;
function data() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', options)
        .then(response => response.json())
        .then(response => {
            const randomIndex = Math.floor(Math.random() * 10);
            const myArr = response.quotes[randomIndex];
            console.log("ARR: ", myArr)

            // Putting content text in our HTML
            let authorName = document.getElementById("author-name");
            let myContent = document.getElementById("content");
            myContent.innerHTML = myArr.quote;
            authorName.innerHTML = "~" + myArr.author;


            myContentData = response.quotes
            console.log("data: ", myContentData)
        })
        .catch(err => console.error(err));

}
data();
console.log("data: ", myContentData)


