import React, {Fragment} from 'react';

export const Foods = ({
  match //matchオブジェクト
 }) => {
  return (
    <Fragment>
      フード一覧
      <p>
      restaurantIdは {match.params.restaurantsId} です
      </p>
    </Fragment>
  )
}