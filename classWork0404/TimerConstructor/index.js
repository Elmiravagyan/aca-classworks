class Timer {
	constructor(time) {
		this.time = time;
		this.intervalId = '';
	}
	startTimer() {
		this.intervalId = setInterval(() => {
			this.minutes = parseInt(this.time/60, 10);
			this.seconds = parseInt(this.time%60, 10);
			this.minutes < 10 ? `0${this.minutes}` : this.minutes;
			this.seconds < 10 ? `0${this.seconds}` : this.seconds;
			if(--this.time < 0) {
				alert("Վերջ ախպեր");
				clearInterval(this.intervalId);
			}
			console.log(`${this.minutes}-${this.seconds}`);
		}, 1000);
	}
	pauseTimer() {
		clearInterval(this.intervalId);
	}
	resetTimer() {
		clearInterval(this.intervalId);
		this.time = 0;
		this.seconds = "00";
		this.minutes = "00";
	}
}

let timer = new Timer();

