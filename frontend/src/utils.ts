export const dateToString = (date: Date): string => {
    const temp = new Date(date);
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        hour12: false,
        minute: '2-digit'
    });

    const[ { value: month },
         , { value: day },
         , { value: year },
         , { value: hour },
         , { value: minute }] = dateTimeFormat.formatToParts(temp);

    return `${day} ${month} ${year} ${hour}:${minute}`;
}