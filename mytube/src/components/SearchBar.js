import React, {useEffect, useState} from 'react'
import { YOUTUBE_SEARCH_API_URL } from '../Utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchSuggestion } from '../Redux/Slices/SearchSuggestionsSlice';
import searchSuggestionConfigList from '../configs/searchSuggestionConfigList';

const SearchBar = () => {

  const searchCache = useSelector(store => store.searchSuggestions.searchSuggestions);

  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearchBoxFocused, setIsSearchBoxFocused] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {

    if(searchText === ""){
      setSearchSuggestions(searchSuggestionConfigList);
      return;
    }

    if(searchCache[searchText]){
      setSearchSuggestions(searchCache[searchText]);
      return;
    }

    const callSearchApi = setTimeout(async () => {
      const data = await fetch(YOUTUBE_SEARCH_API_URL+searchText);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      dispatch(setSearchSuggestion([searchText, json[1]]));
    }, 200);

    return () => clearTimeout(callSearchApi);
  }, [searchText])


  return (
    <div className='w-9/12 text-center relative'>
        {isSearchBoxFocused && <span className='absolute left-52 top-[10px]'> 🔍 </span>}
        <input type="text" className={`border-2 px-4 py-2 border-gray-300 w-[60%] rounded-l-full focus:outline-none focus:border-blue-300 ${isSearchBoxFocused ? "pl-12" : "pl-6"}`} value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsSearchBoxFocused(true)}
          onBlur={() => setIsSearchBoxFocused(false)}
        />
        <button className='border-2 border-gray-300 border-l-0 rounded-r-full px-6 py-2 hover:bg-slate-100'>🔍</button>
        {
          isSearchBoxFocused && searchSuggestions.length > 0 && (
            <div className='absolute z-400 w-[60%] ml-[185px] border-t-1 border bg-white shadow-xl rounded-lg'>
              <ul className='text-start my-2 bg-white'>
                {searchSuggestions.map((suggestion) => (
                  <li className='hover:bg-gray-100 rounded-md p-2 px-[20px] flex items-center'><span className='mr-2'>🔍</span> {suggestion}</li>
                ))}
              </ul>
            </div>
          )
        }
    </div>
  )
}

export default SearchBar