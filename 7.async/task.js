class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, func) {
		let item = {
			time: time,
			callback: func,
			canCall: true
		};

		if (typeof(func) != 'function' || time === undefined || time == "") {
			throw new Error("Отсутствуют обязательные аргументы");
		}

		let searchTime = time;
		let haveTime = this.alarmCollection.find(city => city.time === searchTime)
		if (haveTime) {
			console.warn('Уже присутствует звонок на это же время');
		};

		this.alarmCollection.push(item);

	}

	removeClock(time) {

		if (time === undefined) {
			return 0;
		};

		this.alarmCollection = this.alarmCollection.filter(value => value.time > time);
	}

	getCurrentFormattedTime() {
		var time = new Date();
		return time.toLocaleString('ru-RU', {
			hour: 'numeric',
			minute: 'numeric',
			hour24: true
		});
	}

	start() {
		if (this.intervalId) {
			return 0;
		}
		this.alarmCollection.forEach((alarm) => {
			if (alarm.time === this.getCurrentFormattedTime() & alarm.canCall === true) {
				alarm.canCall = false;
				this.intervalId = alarm.callback();
				console.log(alarm);
			}
		})
	}

	stop() {
		clearInterval();
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => {
			alarm.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("09:00", function Print() {
	console.log("1")
});
phoneAlarm.addClock("22:03", function Print() {
	console.log("1")
});
phoneAlarm.addClock("09:02", function Print() {
	console.log("1")
});

phoneAlarm.getCurrentFormattedTime();
phoneAlarm.removeClock();