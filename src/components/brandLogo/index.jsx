import React from 'react';
import styled from 'styled-components';

import LogoImg from '../../images/logos/logo.png';

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.div`
    width: ${({ size }) => size ? size + 'px' : '4em'};
    height: ${({ size }) => size ? size + 'px' : '4em'};

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoTitle = styled.h2`
    margin: 0;
    font-size: ${({ size }) => size ? size + 'px' : '25px'};
    color: #fff;
    font-weight: 600;
`;

export function BrandLogo(props) {

    const { size } = props;

    return (
        <BrandLogoContainer>
            <LogoImage size={size}>
                <img src={LogoImg} alt='servycing logo' />
            </LogoImage>
            <LogoTitle size={size}>
                Servycing
            </LogoTitle>
        </BrandLogoContainer>
    )
}