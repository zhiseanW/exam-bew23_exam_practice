# Pokedex API Documentation

This API documentation provides an overview of the available endpoints, their query parameters, and example usage.

## Endpoints

### GET /pokemons

Retrieves a list of pokemons with optional filtering and search.

#### Query Parameters

-   `search` (optional): Keyword to search for in the pokemon names. Case-insensitive.
-   `type` (optional): Type to filter the pokemons by.

#### Response

-   Returns an array of pokemon objects matching the specified criteria.

```json
[
    {
        "name": "Pikachu",
        "type": "Electric",
        "level": 42
    },
    {
        "name": "Jolteon",
        "type": "Electric",
        "level": 45
    }
]
```

### GET /types

Retrieves a list of all unique pokemon types.

#### Response

-   Returns an array of type strings sorted alphabetically.

```json
["Electric", "Fairy", "Fighting", "Fire", "Ghost", "Grass", "Normal", "Poison", "Rock", "Water"]
```

## Examples

-   Get all pokemons:

    ```
    GET http://localhost:5000/pokemons
    ```

-   Search for pokemons with "char" in the name:

    ```
    GET http://localhost:5000/pokemons?search=char
    ```

-   Filter pokemons by the "Fire" type:

    ```
    GET http://localhost:5000/pokemons?type=Fire
    ```

-   Combine multiple parameters:

    ```
    GET http://localhost:5000/pokemons?search=vap&type=Water
    ```

-   Get all types:

    ```
    GET http://localhost:5000/types
    ```
