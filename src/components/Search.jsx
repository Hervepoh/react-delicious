import React , { useState } from 'react';
import styled from 'styled-components';
import  { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [input, setInput] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
        setInput('');
    }
    return (
        <SearchForm onSubmit={ handleSubmit }>
            <div>
                <FaSearch />
                <input type="text" name="input" onChange={ e=> setInput(e.target.value) } value={input} placeholder="Search a recipe an press enter to validate" />
            </div>
        </SearchForm>
    )
}

const SearchForm = styled.form`
    margin : 0rem 10rem;

    div{
        position : relative;
        width: 100%;
    }
    svg{
        position     : absolute;
        z-index : 10;
        left : 0rem;
        top : 50%;
        transform : translate(100%,-50%);
        color : white;
    }
    input{
        background: linear-gradient(35deg , #494949, #313131);
        color : white;
        font-size : 1.1rem;
        border: none;
        border-radius : 1rem; 
        padding : .8rem 3rem; 
        outline : none;
        width : 100%;
    }
`



export default Search;