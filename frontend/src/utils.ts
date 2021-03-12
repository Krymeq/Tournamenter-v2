export const dateToString = (date: Date | undefined): string => {
    if (!date) return "";
    const temp = new Date(date);
    const dateTimeFormat = new Intl.DateTimeFormat('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        hour12: false,
        minute: '2-digit'
    });

    const[ { value: day },
         , { value: month },
         , { value: year },
         , { value: hour },
         , { value: minute }] = dateTimeFormat.formatToParts(temp);

    return `${day} ${month} ${year}, ${hour}:${minute}`;
}