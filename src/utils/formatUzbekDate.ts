export function formatUzbekDate(dateString: string) {
  const uzbekWeekDays = [
    'Yakshanba', // Sunday
    'Dushanba', // Monday
    'Seshanba', // Tuesday
    'Chorshanba', // Wednesday
    'Payshanba', // Thursday
    'Juma', // Friday
    'Shanba', // Saturday
  ]

  const uzbekMonths = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr',
  ]

  const date = new Date(dateString)

  const day = String(date.getDate()).padStart(2, '0') // Extract day
  const month = uzbekMonths[date.getMonth()] // Get month in Uzbek
  const year = date.getFullYear() // Get year
  const weekDay = uzbekWeekDays[date.getDay()] // Get day of the week in Uzbek

  return `${day}-${month} ${year}, ${weekDay}`
}
