module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        const d = new Date(date);
        const formmatDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const formmatTime = `${hours}:${minutes}`;
        return `${formmatDate} at ${formmatTime}`;
    },
};