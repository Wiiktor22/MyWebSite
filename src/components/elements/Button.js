import styled from 'styled-components';

const Button = styled.a`
    width: 100px;
    padding: 7px 0;
    border: none;
    border-radius: 5px;
    background-color: #39BAE9;
    font-size: 1.5rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: white;
    text-align: center;
    text-decoration: none;
    transition: .3s linear;
    margin-right: 20px;
    @media (min-width: 768px) {
        margin: 10px;
    }
    :hover {
        background-color: white;
        color: #39BAE9;
    }
`;

export default Button