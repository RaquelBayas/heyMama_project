import { useState } from 'react';
import Select from 'react-select';
import { findUser } from '../services/searchService';
import { useNavigate } from 'react-router-dom';


function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isSelectVisible, setIsSelectVisible] = useState(true); 
  const navigate = useNavigate();

  const handleProfileClick = (userId) => {
    navigate(`/profile/${userId}`);
    setIsSelectVisible(false); // Oculta el Select al seleccionar un usuario
  };

  const handleSearch = async () => {
    try {
      const response = await findUser(searchTerm);

      if (response.error) {
        setError(response.error);
        setSearchResults([]);
      } else {
        setError(null);
        setSearchResults(response.data);
        setIsSelectVisible(true); // Muestra el Select al recibir resultados
      }
    } catch (error) {
      console.error("Error en la búsqueda:", error);
      setError('Error while searching user');
      setSearchResults([]);
      setIsSelectVisible(true); // Muestra el Select en caso de error
    }
  };

  const dropdownOptions = searchResults.map((result) => ({
    value: result.user_id,
    label: `${result.username} - ${result.name} ${result.surname}`,
  }));

  return (
    <div className='relative mt-4'>
      <input
        type="search"
        name="search"
        id="search"
        className="z-0 flex h-10 pl-4 pr-8 mt-2 rounded shadow-lg w-80 mw68:w-64 mw45:w-60 focus:shadow justify-evenly focus:outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />

      {error && <p>{error}</p>}

      {isSelectVisible && searchResults.length > 0 && (
        <Select
          options={dropdownOptions}
          isSearchable={false}
          menuIsOpen={true}
          placeholder="Select a user..."
          onChange={(selectedOption) => handleProfileClick(selectedOption.value)}
        />
      )}
    </div>
  );
}

export default Search;

