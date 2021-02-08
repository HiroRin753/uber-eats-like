import React, { Fragment, useReducer, useEffect } from 'react';
import styled from 'styled-components';//このようにすることで、styled-componentsを使うことができる
import { Link } from "react-router-dom";

// components
import Skeleton from '@material-ui/lab/Skeleton';//これはスマホアプリやSPAでよく使われる「ロード状態」を表すUIパーツ

// apis
import { fetchRestaurants } from '../apis/restaurants';

// reducers
import {
  initialState,
  restaurantsActionTypes,
  restaurantsReducer,
} from '../reducers/restaurants';

// constants
import { REQUEST_STATE } from '../constants';

// images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';
import RestaurantImage from '../images/restaurant-image.jpg';

const HeaderWrapper = styled.div`

  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;//ここではstyled.divでdivElementに対してスタイルをあてている。ここではページの一番上部にあるヘッダー全体を定義している

const MainLogoImage = styled.img`
  height: 90px;//ヘッダーのロゴ
`;

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;//トップページ真中のメイン画像

const RestaurantsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;

const RestaurantsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 48px;
`;

const RestaurantsImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

const SubText = styled.p`
  color: black;
  font-size: 12px;
`;

export const Restaurants = () => {
  const [state, dispatch] = useReducer(restaurantsReducer, initialState);

  useEffect(() => {
    dispatch({ type: restaurantsActionTypes.FETCHING });//dispatchは引数にオブジェクトを一つだけとる。
    fetchRestaurants()
    .then((data) =>
      dispatch({
        type: restaurantsActionTypes.FETCH_SUCCESS,
        payload: {
          restaurants: data.restaurants
        }
      })
    )
  }, [])

  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      <RestaurantsContentsList>
        {
          state.fetchState === REQUEST_STATE.LOADING ?
            <Fragment>
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
              <Skeleton variant="rect" width={450} height={300} />
            </Fragment>//ロード中のスケルトンを表示し、ロードが完了したら：で次へ移行
          ://移行の意味
            state.restaurantsList.map((item, index) =>
              <Link to={`/restaurants/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                <RestaurantsContentWrapper>
                  <RestaurantsImageNode src={RestaurantImage} />
                  <MainText>{item.name}</MainText>
                  <SubText>{`配送料：${item.fee}円 ${item.time_required}分`}</SubText>
                </RestaurantsContentWrapper>
              </Link>
            )
        }
      </RestaurantsContentsList>
    </Fragment>
  )
}
