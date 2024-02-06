class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
		this.regularTime = /^(?:0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
	}

	addClock(time, func) {
		
		if (typeof(func) != 'function' || !this.regularTime.test(time)) {
			throw new Error("Отсутствуют обязательные аргументы");
		}

		let haveTime = this.alarmCollection.find(alarms => alarms.time === time)
		if (haveTime) {
			console.warn('Уже присутствует звонок на это же время');
		};

		this.alarmCollection.push({time: time, callback: func, canCall: true});
	}

	removeClock(time) {

		this.alarmCollection = this.alarmCollection.filter(value => value.time != time);
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
			return;
		}
		
		this.intervalId = setInterval(() => 
		this.alarmCollection.forEach((alarm) => {
			if (alarm.time === this.getCurrentFormattedTime() & alarm.canCall === true) {
				alarm.canCall = false;
				alarm.callback();
			}
		}), 1000);
	}

	stop() {
		clearInterval(this.intervalId);
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
phoneAlarm.addClock("09:00", () => {
	return 1;
});
phoneAlarm.addClock("12:47", () => {
	return 2;
});
phoneAlarm.addClock("09:02", () => {
	return 3;
});

phoneAlarm.getCurrentFormattedTime();
phoneAlarm.removeClock();
phoneAlarm.start();