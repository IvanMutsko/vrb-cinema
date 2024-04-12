export default function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${day} ${months[parseInt(month) - 1]} ${year}`;

  return formattedDate;
}
