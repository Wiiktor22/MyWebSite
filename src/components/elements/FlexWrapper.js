import styled from 'styled-components';

const FlexWrapper = styled.div`
    flex-wrap: wrap;
    @media (min-width: 768px) {
        display: -ms-flexbox;
        display: flex;
        justify-content: space-evenly;
        align-items: ${({projects}) => projects ? 'stretch' : 'center'};
    }
    @media (min-width: 1600px) {
        align-items: ${({skills}) => skills ? 'flex-start' : 'center'};
    }
`;

export default FlexWrapper;