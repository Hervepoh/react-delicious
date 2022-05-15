import styled from 'styled-components';

const Card = styled.div`
    min-height    : 25rem;
    border-radius : 2rem;
    overflow      : hidden;
    position      : relative;
    
    img {
        position      : absolute;
        top           : 0;
        left          : 0;
        width         : 100%;
        height        : 100%;
        border-radius : 2rem;
        object-fit    : cover;
    }
    p {
        position      : absolute;
        left          : 50%;
        bottom        : 0%;
        z-index       : 10;
        transform     : translate(-50%, 0%);
        width         : 100%;
        height        : 40%;
        text-align    : center;
        color         : white;
        font-weight   : 600;  
        font-size     : 1rem;  
        display        : flex;
        justify-content : center;
        align-items : center;
    }
`
export default Card;
