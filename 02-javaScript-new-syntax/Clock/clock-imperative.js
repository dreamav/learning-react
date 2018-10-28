// Вывод показаний часов каждую секунду
setInterval(logClockTime,1000)

function logClockTime() {
    // Получение строки показания часов
    var time = getClockTime()

    // Очистка показаний консоли и вывод показаний часов
    console.clear();
    console.log(time);
}

function getClockTime() {
	// Получение текущего времени
    var date = new Date()
    var time = ""

    // Выстраивание последовательности показания часов
    var time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    // Преобразование показаний времени в человекопонятный вид
    if (time.hours == 12){
        time.ampm = "PM"
    }else if (time.hours > 12){
    	time.ampm = "PM"
    	time.hours -= 12
    }

    // Добавление 0 к часам чтоб получалось 2 цифры
    if(time.hours < 10){
    	time.hours = "0" + time.hours
    }
	// Добавление 0 к минутам чтоб получалось 2 цифры
    if(time.minutes < 10){
    	time.minutes = "0" + time.minutes
    }

	// Добавление 0 к секундам чтоб получалось 2 цифры
    if(time.seconds < 10){
    	time.seconds = "0" + time.seconds
    }

    // Вывод в формате чч:мм:сс AM/PM
    return time.hours + ":"
    	+ time.minutes + ":"
    	+ time.seconds + " "
    	+ time.ampm

}