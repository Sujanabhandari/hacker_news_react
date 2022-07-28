import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRef } from 'react';
const SearchBar = ({post, setPosts}) => {

    const [query, setQuery] = useState("");

    const [search, setSearch] = useState("");

    const [isError, setIsError] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const btn = useRef(null);
    const input_field = useRef(null);

    useEffect(() => {
        const getNewStories = async () => {
          const url = `http://hn.algolia.com/api/v1/search?query=${search}&tags=story`;
          try {
            const response = await fetch(url);
            if (response.ok === false) {
              throw new Error("Response Error:" + response.text);
            }
            const json = await response.json();
            console.log(json)
            if(json.hits.length == 0) setIsError(true) 
            else setIsError(false) 
            setPosts(json.hits);
            // if(!json.hits) return  console.log("No post");
        
          } catch (err) {
            setIsError(true);
            console.error(err);
          }
        }
        getNewStories();
      }, [search]);

    
    
    const handleChange = e => {
        console.log(e.target.value);
        setQuery(e.target.value)

    }

    const handleSubmit = e => {
        console.log("handlesun" + query)
        setIsLoading(true);
        e.preventDefault();
        setSearch(query);
        setIsLoading(false)
        input_field.current.value = '';
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
          handleSubmit(e)
         
          }
    };

    return (
        <div className="input-group justify-content-md-center mt-2 gap-3">
            <div>
            {/* {isLoading && <ClipLoader size={50} />} */}
            </div>
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" onChange={handleChange}
                ref={input_field} onKeyPress={handleKeypress} />
            </div>
            <div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary" ref={btn}>
                    <i className="bi bi-search"></i>
                </button>
            </div>
            {/* {isError && <Error />} */}
        </div>
    )
}

export default SearchBar;