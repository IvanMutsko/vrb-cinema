export default function getDataFromLS(key) {
  const data = JSON.parse(localStorage.getItem(key)) || [];

  return data;
}
