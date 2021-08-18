

//UTCをJSTに変換し、フォーマットする
export function changeJSTDate(date) {
  const newDate = new Date(date)
  
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDay()

  const dayOfWeek = '日月火水木金土'.charAt(newDate.getDay());

  const hour = newDate.getHours()
  const minute = newDate.getMinutes()
  return `${year}/${month}/${day} (${dayOfWeek}) ${hour}:${minute}`;
}