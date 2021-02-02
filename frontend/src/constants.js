export const REQUEST_STATE = { //定数なので、すべて大文字で定数名を定義しています。大文字の変数名(定数名)にすることで、この値が普遍、で代入不可であることを明示しています。
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',//REQUEST_STATEはAPIリクエスト中に画面がいまどういう状態なのか？を知るための状態です。REQUEST_STATE.LOADINGであればAPIリクエスト中としてローディング(くるくる回るUI)を出せますし、REQUEST_STATE.OKであれば成功したアラートを出すこともできます。
  OK: 'OK',
}

export const HTTP_STATUS_CODE = {
  NOT_ACCEPTABLE: 406,
}