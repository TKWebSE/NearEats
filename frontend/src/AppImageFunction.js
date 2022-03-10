import { BASE_URL } from "./urls/index";
// import { APPIMAGE_ERROR } from "./constants";

// export function PreviewImage() {

// }

// // 画像データを送信する
// export const handleCreatePost = async (e) => {
//   e.preventDefault()

//   const data = createFormData()

//   await createPost(data)
//     .then(() => {
//       setContent("")
//       setPreview("")
//       setImage(undefined)
//       handleGetPosts()
//     })
// }

// // FormData形式でデータを作成
// export function createFormData() {
//   const formData = new FormData()
//   if (state.food.image === null || state.food.image === undefined) {
//     throw VALUATION_ERROR.ERROR_VALUATION_MESSAGE
//   }
//   formData.append('food[image]', state.food.image)
//   // formData.append("content", content)
//   return formData
// }

//urlをバックエンドのものに成形する
export function changeImageURL(url) {
  let newUrl = url.substr(BASE_URL.length);
  // newUrl = newUrl.substr(0, newUrl.length - 4)
  console.log(BASE_URL + newUrl)
  return BASE_URL + newUrl
}
