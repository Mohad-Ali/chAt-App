

 export const formatTime = (dateString) => {
 const date = new Date(dateString)
 const hours = padZero(date.getHours())
 const minutes =padZero(date.getMinutes())
 return `${hours}:${minutes}`
}

const padZero =(number)=>{
    return number.toString().padStart(2,"0")
}

// const date = new Date(dateString);
  
// const hours = date.getHours();
// const minutes = date.getMinutes();

// const formattedHours = hours < 10 ? `0${hours}` : hours;
// const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

// return `${formattedHours}:${formattedMinutes}`;