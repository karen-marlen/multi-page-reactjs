import React from 'react';
import styled from 'styled-components';

import TopSectionBackgroundImg from '../../images/landing-page.png';
import TheBestSpecialistsImg from '../../images/work-on.png';

const TopSectionContainer = styled.div`
    width: 100%;
    height: 600px;
    background: url(${TopSectionBackgroundImg});
    background-position: 0px -150px;
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(38, 70, 83, 0.9);
    display: flex;
    flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StandoutImage = styled.div`
    width: 44em;
    height: 34em;

    img {
        width: 100%;
        height: 100%;
    }
`;

export function HomePage() {
    return  (
        <TopSectionContainer>
                <BackgroundFilter> 
                    <StandoutImage>
                        <img src={TheBestSpecialistsImg} alt='img work' />
                    </StandoutImage>
                </BackgroundFilter>
        </TopSectionContainer>
    );
}



