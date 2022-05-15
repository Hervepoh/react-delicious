import React , { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Link,useParams } from 'react-router-dom';
import Wrapper from '../components/global/Wrapper';
import Grid from '../components/global/Grid';

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    
    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])
    
    const getCuisine = async (name) => {

        const check = localStorage.getItem(`cuisine_${name}`);
        if (check) {
            setCuisine(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}`);
            const recipes = await api.json();
            localStorage.setItem(`cuisine_${name}`,JSON.stringify(recipes.results));
            setCuisine(recipes.results);
        }
   
    }

    return (
        <Wrapper>
            <h3>{ params.type }</h3>
            <Grid 
                animate={{ opacity:1 }}
                initial={{ opacity:0 }}
                exit={{ opacity:0 }}
                transition={{ duration:0.5 }}
            
            >
                {   
                    cuisine.map(recipe =>{ return (
                        <Card key={ recipe.id } >
                            <Link to={`/recipe/${recipe.id}`}>
                            <img src={ recipe.image } alt={ recipe.title }/>
                            <h4>{ recipe.title }</h4>
                            </Link>
                        </Card>
                  
                        );
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


export default Cuisine;
