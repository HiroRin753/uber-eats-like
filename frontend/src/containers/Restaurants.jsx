import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components';//このようにすることで、styled-componentsを使うことができる

//apis
import { fetchRestaurants} from '../apis/restaurants'; 


//images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';

const HeaderWrapper = styled.div`
display: flex;
justify-content: flex-start;
padding: 8px 32px;
`;//ここではstyled.divでdivElementに対してスタイルをあてている。ここではページの一番上部にあるヘッダー全体を定義している

const MainLogoImage = styled.img`
height: 90px;
`;//ヘッダーのロゴ

const MainCoverImageWrapper = styled.div`
text-align: center;
`;

const MainCover = styled.img`
height: 600px;
`;//トップページ真中のメイン画像

export const Restaurants = () => {
  useEffect(() => {
    fetchRestaurants()
    .then((data)=>
    console.log(data)
    )
  },[])
  
    return(
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src = {MainLogo} alt = "main logo"/>
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src = {MainCoverImage} alt = "main cover"/>
      </MainCoverImageWrapper>
    </Fragment>
  )
}