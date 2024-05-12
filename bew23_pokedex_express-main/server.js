const express = require("express");
const app = express();
const cors = require("cors");

const pokemons = [
    { name: "Pikachu", type: "Electric", level: 42 },
    { name: "Charizard", type: "Fire", level: 50 },
    { name: "Squirtle", type: "Water", level: 15 },
    { name: "Bulbasaur", type: "Grass", level: 16 },
    { name: "Jigglypuff", type: "Fairy", level: 23 },
    { name: "Machop", type: "Fighting", level: 28 },
    { name: "Geodude", type: "Rock", level: 22 },
    { name: "Gyarados", type: "Water", level: 48 },
    { name: "Vaporeon", type: "Water", level: 45 },
    { name: "Jolteon", type: "Electric", level: 45 },
    { name: "Flareon", type: "Fire", level: 45 },
    { name: "Psyduck", type: "Water", level: 32 },
    { name: "Meowth", type: "Normal", level: 30 },
    { name: "Gengar", type: "Ghost", level: 58 },
    { name: "Onix", type: "Rock", level: 38 },
    { name: "Clefairy", type: "Fairy", level: 24 },
    { name: "Venusaur", type: "Grass", level: 52 },
    { name: "Blastoise", type: "Water", level: 52 },
    { name: "Nidoking", type: "Poison", level: 50 },
    { name: "Nidoqueen", type: "Poison", level: 50 },
];

// Middleware to parse JSON request bodies
app.use(express.json());

// setup cors
const corsHandler = cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true,
});

app.use(corsHandler);

// API route to retrieve all pokemons with filtering and search
app.get("/pokemons", (req, res) => {
    let filteredPokemons = [...pokemons];

    // Search by keyword in the name
    if (req.query.search) {
        const searchKeyword = req.query.search.toLowerCase();
        filteredPokemons = filteredPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchKeyword));
    }

    // Filter by type
    if (req.query.type) {
        const type = req.query.type;
        filteredPokemons = filteredPokemons.filter((pokemon) => pokemon.type === type);
    }

    res.status(200).send(filteredPokemons);
});

// API route to retrieve all types
app.get("/types", (req, res) => {
    const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];
    types.sort();
    res.status(200).send(types);
});

// default route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Pokedex API!");
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
