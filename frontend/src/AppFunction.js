

//UTCをJSTに変換し、フォーマットする
export function changeJSTDate(date) {
  const newDate = new Date(date)

  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()

  const dayOfWeek = '日月火水木金土'.charAt(newDate.getDay());

  const hour = (`0` + (newDate.getHours())).slice(-2)
  const minute = (`0` + (newDate.getMinutes())).slice(-2)
  return `${year}/${month}/${day} (${dayOfWeek}) ${hour}:${minute}`;
}

