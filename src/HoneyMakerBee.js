class HoneyMakerBee extends Bee {
	constructor () {
		super();
		this.age = 10;
		this.honeyPot=0;
		this.job='make honey';
	}
	makeHoney(){
		this.honeyPot++;
	}
	giveHoney(){
		this.honeyPot--;
	}
}