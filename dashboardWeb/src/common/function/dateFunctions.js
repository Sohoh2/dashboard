export const spliteDateNTime = (dateStr) => {

    const splited = dateStr && dateStr.split("T");
    const date = splited && splited[0];
    const timeSplit = splited ? splited[1].split(":") : "";
    console.log(timeSplit)
    const sec = timeSplit[2].split('.');
    const time = timeSplit && `${timeSplit[0]}:${timeSplit[1]}:${sec[0]}`;

    return {
        date,
        time
    }

}