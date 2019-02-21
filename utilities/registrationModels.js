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
	HackathonModel: mongoose.model("HackathonModel", hackathonSchema, "hackathon"),
	ExpoModel: mongoose.model("ExpoModel", projectExpoSchema, "expo"),
	CounterStrikeModel: mongoose.model('CounterStrikeModel', csGameSchema, "counterStrike"),
	PubgModel: mongoose.model('PubgModel', pubgSchema, 'pubg'),
	DroneRaceModel: mongoose.model('DroneRaceModel', droneRaceSchema, 'droneRaces'),
	LandCircuitModel: mongoose.model('LandCircuitModel', rcSportsSchema, 'landCircuitRaces'),
	CodingCompetitionModel: mongoose.model('CodingCompetitionModel', codingCompetitionSchema, 'codingCompetition')
};

