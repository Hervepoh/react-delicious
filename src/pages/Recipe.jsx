import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/global/Button';

const Recipe = () => {

    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    let params = useParams();

    useEffect(() => {
        fetchDetails(params.id)
    }, [params.id])
    
    const fetchDetails = async (id) => {
        const check = localStorage.getItem(`recipe_${id}`);
        if (check) {
            setRecipe(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`)
            const data = await api.json();
            setRecipe(data);
            localStorage.setItem(`recipe_${id}`,JSON.stringify(data));
        }
    }


    
    return ( 
        <DetailWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={`${recipe.title}`} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={ ()=> setActiveTab('instructions') }>Instructions</Button>
                <Button className={(activeTab === 'ingredients') && 'active'} onClick={ ()=> setActiveTab('ingredients') }>Ingredients</Button>
                { (activeTab === 'instructions') && (<div><h3 dangerouslySetInnerHTML={ { __html: recipe.summary}}></h3><h3 dangerouslySetInnerHTML={ { __html: recipe.instructions}}></h3></div>) }
                { (activeTab === 'ingredients') && (<ul>{recipe.extendedIngredients.map(ingredient => (<li key={ingredient.id}>{ingredient.original}</li>))}</ul>) }

            </Info>
        </DetailWrapper>    
    )
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display:flex;
    h2{
        margin-bottom: 1.5rem;
    }
    ul{
        margin-top: 2rem;
    }
    li{
        font-size:1.2rem;
        line-height:2.5rem;
    }
    .active{
        background : linear-gradient(35deg,#494949,#313131);
        color : white;
        border-color: #494949;
    }
`
const Info = styled.div`
    margin-left: 5rem;
`
export default Recipe