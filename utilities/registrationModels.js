var mongoose = require('mongoose');

var hackathonSchema = new mongoose.Schema({
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	university: String,
	members: [{ firstName: String, lastName: String }]
});

var codingCompetitionSchema = new mongoose.Schema({
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	university: String,
	members: [{ firstName: String, lastName: String }]
});

var rcSportsSchema = new mongoose.Schema({
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [{ firstName: String, lastName: String }]
});

var droneRaceSchema = new mongoose.Schema({
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [{ firstName: String, lastName: String }]
});

var pubgSchema = new mongoose.Schema({
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [{ firstName: String, lastName: String }]
});

var csGameSchema = new mongoose.Schema({
	teamName: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [{ firstName: String, lastName: String }]
})

var projectExpoSchema = new mongoose.Schema({
	teamName: String,
	projectTitle: String,
	domain: String,
	abstract: String,
	size: Number,
	leaderName: String,
	email: String,
	phone: String,
	members: [{ firstName: String, lastName: String }]
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

