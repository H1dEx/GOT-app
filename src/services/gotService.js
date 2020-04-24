export default class GotService {
    constructor() {
        this._apiBase =  'https://anapioficeandfire.com/api'
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) throw new Error(`Could not fetch ${url}`, `received ${res.status}`);
        return await res.json();
    }

   getAllCharacters = async () => {
        const res = await this.getResourse('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character)
    }

    getAllBooks = async () => {
        const res = await this.getResourse('/books');
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const res = await this.getResourse(`/books/${id}`);
        return this._transformBook(res)
    }

    getAllHouses = async () => {
        const res = await this.getResourse('/houses');
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const res = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(res)
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse = (char) => {
        return {
            name: char.name,
            region: char.region,
            words: char.words,
            titles: char.titles,
            overlord: char.overlord,
            ancestralWeapons: char.ancestralWeapons
        }
    }

    _transformBook = (char) => {
        return {
            name: char.name,
            numberOfPages: char.numberOfPages,
            publiser: char.publiser,
            released: char.released
        }
    }

}

