import axios from 'axios';

export default class Search {
  constructor(query){
    this.query = query;
  }


  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = 'a22037d25fcaba874e4a559f03254286';
    const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${API_KEY}&q=${this.query}`);
    this.result = res.data.recipe;
    console.log(this.result)
  }
}

import axios from 'axios';


getResults('chicken');