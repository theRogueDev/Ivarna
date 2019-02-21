var mongoose = require('mongoose');

var hackathonSchema = new mongoose.Schema({
	status: String,
	order_id: String,
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	university: String,
	members: [ String ]
});

var codingCompetitionSchema = new mongoose.Schema({
	status: String,
	order_id: String,
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	university: String,
	members: [ String ]
});

var rcSportsSchema = new mongoose.Schema({
	status: String,
	order_id: String,
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [ String ]
});

var droneRaceSchema = new mongoose.Schema({
	status: String,
	order_id: String,
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [ String ]
});

var pubgSchema = new mongoose.Schema({
	status: String,
	order_id: String,
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [ String ]
});

var csGameSchema = new mongoose.Schema({
	status: String,
	order_id: String,
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [ String ]
})

var projectExpoSchema = new mongoose.Schema({
	status: String,
	order_id: String,
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [ String ]
});

module.exports = {
	hackathon: mongoose.model("HackathonModel", hackathonSchema, "hackathon"),
	landcircuit: mongoose.model("ExpoModel", projectExpoSchema, "expo"),
	counterstrike: mongoose.model('CounterStrikeModel', csGameSchema, "counterStrike"),
	pubg: mongoose.model('PubgModel', pubgSchema, 'pubg'),
	drone: mongoose.model('DroneRaceModel', droneRaceSchema, 'droneRaces'),
	landcircuit: mongoose.model('LandCircuitModel', rcSportsSchema, 'landCircuitRaces'),
	coding: mongoose.model('CodingCompetitionModel', codingCompetitionSchema, 'codingCompetition')
};

