const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const parseDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return { year, month, day };
};

export function formatDate(value: string) {
  const { year, month, day } = parseDate(value);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

export function formatDateShort(value: string) {
  const { year, month, day } = parseDate(value);
  return `${String(day).padStart(2, "0")} ${MONTHS[month - 1].slice(0, 3).toUpperCase()} ${year}`;
}
