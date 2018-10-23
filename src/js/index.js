import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

//global state
const state = {}

const controlSearch = async () => {
  //get query from view
  const query = searchView.getInput();
  console.log(query)

  if(query) {
    // new search object and add to state
    state.search = new Search(query);

    // prepare UI for results
    searchView.clearInput();
    searchView.clearResults();

    //search for recipes
    await state.search.getResults();

    // render results on UI
    searchView.renderResults(state.search.result);
   
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
})

