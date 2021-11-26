export const REQUEST_STATE = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    OK: 'OK',
}
export const HTTP_STATUS_CODE = {
    UN_AUTHORIZED: 401,
    UNPROCESSABLE_ENTITY: 422,
    NOT_ACCEPTABLE: 406,
}

export const MESSAGE_TEXT = {
    SUCCESS_SIGNUP_MESSAGE: "新規登録できました。ログインしてみましょう！",
}

export const ERROR_MESSAGE = {
    USER_SIGNUP_ERROR: "ユーザーを新規作成できませんでした",
    USER_SIGNIN_ERROR: "ログインできませんでした。メールアドレス、パスワードを再度入力してください",
}

export const HEADER_TEXT = {
    HEADER_TITLE: "Near-Eats",
    NOWLOCATION_BUTTON_LABEL: "",
    NOWLOCATION_MODAL_TITLE: "エリアの設定",
    NOWLOCATION_MODAL_SELECT_TEXT: "エリアの設定",
    PROFILE_TEXT: "プロフィール",
    SIGNIN_HEADER_LABEL: "ログイン",
    SOGNUP_HEADER_LABEL: "新規登録",
    SIGNOUT_TEXT: "ログアウト",
}

export const DRAWER_TEXT = {
    FOOD_INDEX_TEXT: "TOPページ",
    FOOD_CREATE_TEXT: "料理の作成",
    MY_FOOD_TEXT: "MyFoods",
    TASK_TEXT: "MyTask",
    PROFILE_TEXT: "プロフィール",
    ORDER_TEXT: "注文履歴",
    BUY_POINT_TEXT: "ポイント購入",
    SETTING_TEXT: "設定",
}

export const HOME_TEXT = {
    HOME_TITLE: "Near-Eats",
    SUB_TITLE: "地域の家庭料理をあなたの食卓に",
    SIGNIN_BUTTON_LABEL: "ログイン",
    SOGNUP_BUTTON_LABEL: "新規登録",
    BUYER_TITLE: "地域の家庭料理を楽しめる",
    BUYER_TEXT: "お近くにお住まいの方の料理を楽しむことができます。世界に一つだけの料理を味わってみませんか？",
    SELLER_TITLE: "あなたの料理を販売",
    SELLER_TEXT: "あなたが作った料理を配達し販売することができます。あなたの家のキッチンから始めてみませんか？",
    HOWTO_TITLE: "あなたのキッチンから料理を届けるには？",
    HOWTO_UPLOAD_TITLE: "1.料理を出品する！",
    HOWTO_UPLOAD_TEXT: "あなたの料理をアプリ上に出品しましょう。写真が命です。",
    HOWTO_GETTASK_AND_COOK_TITLE: "2.料理が購入されたら、調理！",
    HOWTO_GETTASK_AND_COOK_TEXT: "料理が購入されたら、さっそく調理していきましょう。使い捨ての容器に盛り付けることをお勧めします。",
    HOWTO_DELIVER_FOOD_TITLE: "3.所定の場所までお届け！",
    HOWTO_DELIVER_FOOD_TEXT: "アプリの表示に沿って、完成した料理を配達しましょう。",
}

export const SESSION_HEADER_TITLE = {
    SIGN_IN: "ログイン",
}

export const FOOD_HEADER_TITLE = {
    FOOD_INDEX: "近くの料理を検索",
    MYFOOD: "出品した料理一覧",
    FOOD_CREATE: "料理の作成",
    FOOD_DETAIL: "料理の詳細",
    FOOD_EDIT: "料理の編集",
}

export const USER_HEADER_TITLE = {
    USER_INDEX: "---",
    USER_DETAIL: "ユーザーの詳細",
    USER_CREATE: "ユーザー作成",
    USER_EDIT: "ユーザーの編集",
}

export const ORDER_HEADER_TITLE = {
    MYTASK_INDEX_TITLE: "Task一覧",
    TASK_DETAIL: "Taskの詳細",
    ORDER_INDEX_TITLE: "注文履歴",
    ORDER_DETAIL_TITLE: "注文履歴の詳細",
}

export const USER_LABEL = {
    USER_NAME: "ユーザー名",
    USER_POINTLABEL: "ユーザーポイント",
    USER_LOCATION_LABEL: "ユーザーロケーション",
    USER_ADDRESS_LABEL: "住所",
    USER_MAIL_LABEL: "メールアドレス",
    USER_PASSWORD_LABEL: "パスワード",
}

export const NOTFOUND_FOOD_TEXT = {
    NOT_UPLOAD_MYFOODS_TEXT: "まだ料理を投稿したことがありません",
    LETS_UPLOAD_FOOD_TEXT: "最初の1品目を投稿してみましょう！",
    GOTO_FOOD_CREATE_BUTTON_LABEL: "料理を投稿する！",
}

export const TASK_TEXT = {
    TASK_CREATE_TEXT: "注文受付日時：",
    TASK_UPDATE_TEXT: "配達完了日時：",
    NOT_EXIST_TASK_TEXT: "まだ注文されたことがありません",
    LETS_CREATE_FOOD_TEXT: "料理を投稿してあなたの料理を届けましょう！",
    TASK_FINISH_BUTTOM_LABEL: "配達完了！!",
    TASK_CANCEL_BUTTOM_LABEL: "キャンセルする",
    TASK_FINISH_MODALTITLE: "配達完了しましたか？",
    TASK_FINISH_MODAL_TEXT: "この料理のステータスを配達完了にします",
    TASK_CANCEL_MODAL_TITLE: "提供をキャンセルしますか？",
    TASK_CANCEL_MODAL_TEXT: "この料理の取引をキャンセルします",
    ORDER_INFO_TEXT: "届け先",
}

export const ORDER_TASK_STATUS_NUMBERS = {
    TASK_UNFINISHED: "0",//未配達
    ORDER_WATINGE_VALUATION: "1",//評価待ち
    TASKFINISH: "2",//配達済み
    ORDER_CANCEL: "3",//オーダーをキャンセル
    TASK_CANCEL: "4",//タスクをキャンセル
}

export const ORDER_TEXT = {
    NOT_EXIST_TASK_TEXT: "注文した商品はありません",
    LETS_CREATE_FOOD_TEXT: "どんな商品を見てみましょう！！",
    ORDER_CANCEL_TEXT: "",
    ORDER_CANCEL_BUTTON_LABEL: "キャンセルする",
    ORDER_VALUATION_TEXT: "評価をして取引完了させましょう！",
    FINISHTASK_BUTTON_LABEL: "取引完了！",
    ORDER_CANCEL_MODAL_TITLE: "注文をキャンセルしますか？",
    ORDER_CANCEL_MODAL_TEXT: "注文を破棄して、取引を中断します。",
}

export const SETTING_TEXT = {
    BUY_USER_POINT_LINK_TEXT: "ポイント購入",
    EDIT_USER_INFO_LINK_TEXT: "ユーザー情報の編集",
    EDIT_EMAIL_LINK_TEXT: "メールアドレスの設定",
    EDIT_PASSWORD_LINK_TEXT: "パスワードの設定",
    LOGOUT_LINK_TEXT: "ログアウト",
    DELETE_USER_LINK_TEXT: "アカウントの削除",
    DELETE_USER_MODAL_TITLE: "アカウントを削除しますか？",
    DELETE_USER_MODAL_TEXT: "一度削除したアカウントを復旧することはできません",
    DELETE_USER_VERIFICATION_MODAL_TITLE: "本当にアカウントを削除しますか？",
    DELETE_USER_VERIFICATION_MODAL_TEXT: "",
}

export const BUY_POINT_MENU_TEXT = {
    NOW_POINT: "現在のポイント数",
}

export const EDIT_EMAIL_TEXT = {
    HEADER_TITLE: "メールアドレスの変更",
    SUBMIT_BUTTON_LABEL: "変更する",
}

export const EDIT_PASSWORD_TEXT = {
    HEADER_TITLE: "パスワードの変更",
    SUBMIT_BUTTON_LABEL: "変更する",
}

export const NOTFOUND_ORDER_TEXT = {
    NOT_EXIST_ORDER_TEXT: "注文した料理はありません",
    LETS_ORDER_TEXT: "料理を見てみましょう！！",
    GOTO_FOOD_INDEX_BUTTON_LABEL: "料理を探す！",
}

export const MODAL_BUTTON_LABEL = {
    MODAL_OK: "OK",
    MODAL_NG: "キャンセル",
}
