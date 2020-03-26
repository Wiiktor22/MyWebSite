import styled from 'styled-components';

const PageWrapper = styled.div`
    animation: .5s show ease-in;
    @keyframes show {
        from {
            transform: scale(.7);
        }
        to {
            transform: scale(1);
        }
    }
`;

export default PageWrapper;