import { Link, useParams } from 'react-router-dom';
import React , { useState,useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from '../components/global/Wrapper';
import Grid from '../components/global/Grid';

function Searched() {
    const [searchedrecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    
    useEffect(() => {
        getSearched(params.search);

    }, [params.search])
    
    const getSearched = async (name) => {

        const check = localStorage.getItem(`recipe_${name}`); 
        if (check) {
            setSearchedRecipes(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`);
            const recipes = await api.json();
            localStorage.setItem(`recipe_${name}`,JSON.stringify(recipes.results));
            setSearchedRecipes(recipes.results);
        }
   
    }

    return (
        <Wrapper>
            <h3>{ params.search }</h3>
            <Grid>
                {   
                    searchedrecipes.map(recipe =>{ return (
                        <Card key={ recipe.id } >
                            <Link to={`/recipe/${recipe.id}`}>
                                <img src={ recipe.image } alt={ recipe.title }/>
                                <h4>{ recipe.title }</h4>
                            </Link>
                        </Card>);
                    }) 
                }
            </Grid>
        </Wrapper>
    );
}



const Card = styled.div`
    img {
        width         : 100%;
        border-radius : 2rem;
        object-fit    : cover;
    }
    a {
        text-decoration : none;
    }
    h4{
        text-align : center;
        padding : 1rem;
    }
`



export default Searched 