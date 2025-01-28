import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


export default function Search() {
  const querySearch = useLocation().search;
  const queryParams = new URLSearchParams(querySearch);
  const query = queryParams.get('q')?.toLowerCase(); 
   
  const url = 'http://localhost:3000/recipes';
  const { data, isLoading, error } = useFetch(url);

  
  const filteredData = data?.filter((recipe) =>
    recipe.title.toLowerCase().includes(query)
  );

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <div>
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((dat) => (
            <div key={dat.id}>
              <h1>{dat.title}</h1>
            </div>
          ))
        ) : (
          <h1>No results found</h1>
        )}
      </div>
    </div>
  );
}
