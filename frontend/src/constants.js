export const REQUEST_STATE = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    OK: 'OK',
}
export const HTTP_STATUS_CODE = {
    UN_AUTHORIZED: 401,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    NOT_ACCEPTABLE: 406,
    Internal_Server_Error: 500,
}

export const HEADER_TEXT = {
    HEADER_TITLE: "Near-Eats",
    NOWLOCATION_BUTTON_LABEL: "",
    NOWLOCATION_MODAL_TITLE: "エリアの設定",
    NOWLOCATION_MODAL_SELECT_TEXT: "エリアの設定",
    PROFILE_TEXT: "プロフィール",
    SIGNIN_HEADER_LABEL: "ログイン",
    SOGNUP_HEADER_LABEL: "新規登録",
    NOTIFICATION_HEADER_TEXT: "お知らせ",
    NOTIFICATION_TASK_HEADER_TEXT: "通知",
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

export const SIGNUP_TEXT = {
    SIGN_UP_TITLE: "ユーザー作成",
    USER_NAME_TEXTFIELD_LABEL: "アカウント名",
    EMAIL_TEXTFIELD_LABEL: "メールアドレス",
    SIGN_UP_BUTTON_LABEL: "作成",
    SUCCESS_SIGNUP_MESSAGE: "メールを送信しました。認証コードを入力してください",
    USER_SIGNUP_ERROR: "ユーザーを新規作成できませんでした",
    EMAIL_TEXTFIELD_LABEL: "Email",
}

export const GUEST_ACTIVATE = {
    HEADER_TITLE: "認証コードを入力してください",
    TEXT_FIELD_LABEL: "認証コード",
    AUTH_CODE_HELPER_TEXT: "",
    SIGN_UP_LINK_TEXT: "メールが届かない方はこちら",
    SUBMIT_BUTTON_LABEL: "認証",
    COMPLETE_ACTIVATE_MESSAGE: "認証しました",
    ERROR_ACTIVATE_MESSAGE: "認証できませんでした",
}

export const PASSWORD_REGISTRATION = {
    HEADER_TITLE: "パスワードの設定",
    TEXT_FIELD_LABEL: "認証コード",
    PASSWORD_TEXTFIELD_LABEL: "パスワード",
    PASSWORD_CONFIRMATION_TEXTFIELD_LABEL: "パスワード確認用",
    SUBMIT_BUTTON_LABEL: "設定",
    COMPLETE_REGISTRATION_MESSAGE: "ユーザー登録完了しました",
    ERROR_PASSWORD_RAGISTRATION_MESSAGE: "パスワードを設定できませんでした",
}

export const SIGNIN_TEXT = {
    SIGN_IN_TITLE: "ログイン",
    EMAIL_TEXTFIELD_LABEL: "メールアドレス",
    PASSWORD_TEXTFIELD_LABEL: "パスワード",
    SIGN_IN_BUTTON_LABEL: "ログイン",
    FORGET_PASSWORD_LINK_TEXT: "パスワードを忘れた方はこちら",
    SIGN_IN_SUCCESS_MESSAGE: "ログインに成功しました",
    SIGN_IN_ERROR: "ログインできませんでした。メールアドレス、パスワードを再度入力してください",
}

export const PASSWORD_RESET_SEND_EMAIL_TEXT = {
    HEADER_TITLE: "パスワードの再設定",
    HEADER_TEXT: "登録されているメールアドレスを入力してください。認証コードを送信します。",
    EMAIL_TEXT_FIELD_LABEL: "登録されているメール",
    SUBMIT_BUTTON_LABEL: "送信",
    SEND_EMAIL_MESSAGE: "認証メールを送信しました",
    ERROR_ANOTHER_EMAIL_MESSAGE: "別のメールアドレスを入力してください",
    ERROR_SEND_EMAIL_MESSAGE: "メールの送信ができませんでした",
}

export const PASSWORD_RESET_AUTH_TEXT = {
    HEADER_TITLE: "パスワードを再設定しましょう！",
    NEW_PASSWORD_LABEL: "新しいパスワード",
    CONFIMATION_PASSWORD_LABEL: "確認用",
    SEND_EMAIL_LINK_TEXT: "メールを再送信する",
    SUBMIT_BUTTON_LABEL: "設定",
    COMPLETE_UPDATE_PASSWORD_MESSAGE: "パスワード変更完了",
}

export const SESSION_HEADER_TITLE = {
    SIGN_IN: "ログイン",
}

export const FOOD_HEADER_TITLE = {
    FOOD_INDEX: "近くの料理を検索",
    MYFOOD: "出品した料理一覧",
}

export const USER_HEADER_TITLE = {
    USER_INDEX: "---",
    USER_DETAIL: "ユーザーの詳細",
    USER_EDIT: "ユーザーの編集",
}

export const USER_EDIT = {
    TITLE: "ユーザー情報の編集",
    BTN_LABEL: "保存",
    NOWLOCATION_PLACEHOLDER_TEXT: "配達エリア",
    EDIT_ERROR: "変更できませんでした",
}

export const ORDER_HEADER_TITLE = {
    TASK_DETAIL: "Taskの詳細",
    ORDER_INDEX_TITLE: "注文履歴",
    ORDER_DETAIL_TITLE: "注文履歴の詳細",
}

export const USER_LABEL = {
    USER_NAME: "ユーザー名",
    USER_POINTLABEL: "ユーザーポイント",
    USER_LOCATION_LABEL: "ロケーション",
    USER_ADDRESS_LABEL: "住所",
    USER_MAIL_LABEL: "メールアドレス",
    USER_PASSWORD_LABEL: "パスワード",
}

export const FOOD_CREATE_TEXT = {
    HEADER_TITLE: "料理の作成",
    FOOD_NAME_LABEL: "料理名",
    FOOD_PRICE_LABEL: "価格",
    FOOD_DESCRIPTION_LABEL: "説明",
    LOCATION_PLACEHOLDER_TEXT: "地域",
    SAVE_BTN_LABEL: "作成",
    CANT_CREATE_FOOD: "作成できませんでした"
}

export const FOOD_DETAIL_TEXT = {
    EDIT_FOOD_LABEL: "編集する",
    DELETE_FOOD_LABEL: "削除する",
    DELETE_MODAL_TITLE: "料理を削除しますか？",
    DELETE_MODAL_TEXT: "",
    COMPLETE_DELETE_MESSAGE: "料理を削除しました",
    CANT_DELETE_MESSAGE: "削除できませんでした",
    BUY_FOOD_LABEL: "購入する",
    REGISTRATION_ADDRESS: "購入するために、住所を登録してください",
    BUY_FOOD_MODAL_TITLE: "この商品を購入しますか？",
    BUY_FOOD_MESSAGE: "購入しました",
    BUY_POINT_MODAL_TITLE: "ポイントが不足しています。ポイントを購入しましょう！",
    BUY_POINT_LABEL: "ポイント画面へ",
    LOCATION_TEXT: "提供地域：",
}

export const FOOD_EDIT_TEXT = {
    HEADER_TITLE: "料理の編集",
    FOOD_PHOTO_UPLOAD_TEXT: "画像をアップロード",
    FOOD_NAME_LABEL: "料理名",
    FOOD_PRICE_LABEL: "価格",
    FOOD_DESCRIPTION_LABEL: "説明",
    LOCATION_PLACEHOLDER_TEXT: "地域",
    SAVE_BTN_LABEL: "変更",
    CANCEL_BTN_LABEL: "キャンセル",
    NO_IMAGE_MESSAGE: "画像が設定されていません",
    CANT_CHANGE_UPLOAD: "変更できませんでした",
}

export const NOTFOUND_FOOD_TEXT = {
    NOT_UPLOAD_MYFOODS_TEXT: "料理がありませんでした",
    LETS_UPLOAD_FOOD_TEXT: "あなたの料理を投稿してみよう！",
    GOTO_FOOD_CREATE_BUTTON_LABEL: "料理を投稿する！",
}

export const TASK_INDEX_TEXT = {
    MYTASK_INDEX_TITLE: "Task一覧",
    NOT_EXIST_TASK_TEXT: "まだ注文されたことがありません",
    LETS_CREATE_FOOD_TEXT: "料理を投稿してあなたの料理を届けましょう！",
    GOTO_FOOD_CREATE_BUTTON_LABEL: "料理を投稿する！",
}

export const TASK_TEXT = {
    TASK_CREATE_TEXT: "注文受付日時：",
    TASK_UPDATE_TEXT: "配達完了日時：",
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
    COMPLETE_ORDER: "2",//取引完了
    ORDER_CANCEL: "3",//オーダーをキャンセル
    TASK_CANCEL: "4",//タスクをキャンセル
}

export const ORDER_STATUS_TEXT = {
    ORDER_STATUS_UNFINISHED_TEXT: "注文中",//0 注文者専用文字
    TASK_STATUS_UNFINISHED_TEXT: "未配達",//0 配達者専用の文字
    ORDER_STATUS_PENDINGEVALUATION_TEXT: "評価待ち",//1
    ORDER_STATUS_FINISHED_TEXT: "取引完了",//2
    ORDER_STATUS_ORDER_CANCEL_TEXT: "注文キャンセル",//3
    ORDER_STATUS_TASK_CANCEL_TEXT: "取引キャンセル",//4
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
    TITLE: "ポイント購入",
    NOW_POINT: "現在のポイント数",
    COMPLETE_BUY_POINT_TEXT: "ポイントを購入しました",
    NOT_COMPLETE_BUY_POINT_TEXT: "ポイントを購入できませんでした",
}

export const EDIT_EMAIL_TEXT = {
    HEADER_TITLE: "メールアドレスの変更",
    SUBMIT_BUTTON_LABEL: "変更する",
    NOW_EMAIL_LABEL: "現在のメールアドレス",
    NEW_EMAIL_LABEL: "新しいメールアドレス",
    SEND_EMAIL_TEXT: "認証メールを送信しました",
}

export const AUTH_CHANGE_EMAIL = {
    HEADER_TITLE: "認証コードを入力してください",
    TEXT_FIELD_LABEL: "認証コード",
    EDIT_EMAIL_LINK_TEXT: "メールが届かない方はこちら",
    SUBMIT_BUTTON_LABEL: "認証",
    COMPLETE_CHANGE_EMAIL_MESSAGE: "メールアドレス変更完了",
    ERROR_CHANGE_EMAIL_MESSAGE: "認証できませんでした",
}

export const EDIT_PASSWORD_TEXT = {
    HEADER_TITLE: "認証コードを送信します",
    NOW_EMAIL_LABEL: "登録されているメールアドレス",
    SUBMIT_BUTTON_LABEL: "送信",
    SEND_EMAIL_MESSAGE: "認証メールを送信しました",
    ERROR_BLANK_PASSWORD_MESSAGE: "パスワードを入力してください",
    ERROR_UNMATCHPASSWORD_MESSAGE: "確認用に同じパスワードを入力してください",
    ERROR_VALUATION_MESSAGE: "半角英数字で8から15文字で入力してください",
}

export const UPDATE_PASSWORD_TEXT = {
    UPDATE_PASSWORD_TITLE: "新しいパスワードを入力してください",
    NEW_PASSWORD_LABEL: "新しいパスワード",
    CONFIRMATION_LABEL: "確認用",
    EDIT_PASSWORD_LINK_TEXT: "認証できない方はこちら",
    UPDATE_PASSWORD_BUTTON_LABEL: "設定",
    COMPLETE_UPDATE_PASSWORD_MESSAGE: "パスワード変更完了",
}

export const NOTIFICATIONS_TEXT = {
    NOTIFICATIONS_TITLE: "お知らせ",
    NOT_NOTIFICATION_TEXT: "お知らせはありません",
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

export const VALUATION_ERROR = {
    NAME_VALUATION_ERROR: "名前を入力してください",
    NAME_MAX_ERROR: "名前は30文字以内で入力してください",
    USER_ADDRESS_BLANK_ERROR: "住所を入力してください",
    USER_ADDRESS_MAX_ERROR: "住所は1から44文字で入力してください",
    USER_CITY_BLANK_ERROR: "配達地域を選択してください",
    EMAIL_REGEXP_ERROR: "メールアドレスを入力してください",
    ERROR_BLANK_PASSWORD_MESSAGE: "パスワードを入力してください",
    ERROR_UNMATCHPASSWORD_MESSAGE: "確認用に同じパスワードを入力してください",
    ERROR_VALUATION_MESSAGE: "パスワードは半角英数字で8から15文字で入力してください",
    NO_IMAGE_ERROR: "画像が設定されていません",
    NO_FOOD_NAME: "料理名を入力してください",
    PRICE_ERROR: "1から99999の間で価格を設定してください",
    NO_DESCRIPTION_ERROR: "商品説明を入力してください",
    OVER_DESCRIPTION_ERROR: "商品情報は200文字以内で入力してください",
    NO_CITY: "提供地域を入力してください",
    ERROR_BLANK_FOOD_NAME_MESSAGE: "Foodの名前を入力してください",
    ERROR_REGEXP_FOOD_NAME_MESSAGE: "Foodの名前は30文字以内で入力してください",
    ERROR_BLANK_FOOD_PRICE_MESSAGE: "価格を入力してください",
    ERROR_REGEXP_PRICE_MESSAGE: "価格は半角数字で入力してください",
    ERROR_LIMIT_PRICE_MESSAGE: "価格は300～999999の間で設定してください",
    ERROR_BLANK_FOOD_DESCRIPTION_MESSAGE: "説明文を入力してください",
    ERROR_LENGTH_LIMIT_DESCRIPTION_MESSAGE: "説明文は200文字以内で入力してください",
}
