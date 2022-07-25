import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = () => {
    return (
        <div className="input-group justify-content-md-center">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" />
            </div>
            <div>
                <button type="button" className="btn btn-primary">
                <i className="bi bi-search"></i>
                </button>
            </div>
            
        </div>
    )
}

export default SearchBar;