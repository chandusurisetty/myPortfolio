const h1 = document.querySelector("#jokebar")
const btn = document.querySelector(".btn")

const counter = document.querySelector("#JokeCounter")
let count = 1;

const makeJoke = async () => {
    count++;
    const joke = await jokeapi()
    h1.innerHTML = joke
    counter.innerHTML = count;

}



const jokeapi = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }

        const joker = await axios.get("https://icanhazdadjoke.com/?", config)
        return joker.data.joke
    }
    catch (e) {
        return "No Jokes Available"
    }

}
const startingJoke = async () => {
    h1.innerHTML = await jokeapi()
    counter.innerHTML = count
}
startingJoke()
btn.addEventListener("click", makeJoke)

// headers: {Accept: 'application/json