var commonAnswers = ["northern cardinal", "dark-eyed junco", "white-throated sparrow", "eastern towhee"];
var birdPics = ["https://upload.wikimedia.org/wikipedia/commons/d/d8/Cardinalis_cardinalis_-Columbus%2C_Ohio%2C_USA-male-8_%281%29.jpg", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/dark_eyed_junco_10.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/white_throated_sparrow_2.jpg","https://www.allaboutbirds.org/guide/PHOTO/LARGE/eastern_towhee_11.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/yellow_warbler_raymondlee2.jpg","https://www.allaboutbirds.org/guide/PHOTO/LARGE/coye_joeldeyoung2.jpg"];

var userAnswers = [];
var pageTracker = -1;
var NOCA = "In the Spring and early Summer this bird is so aggressive at defending its territory that it will spend hours fighting off intruders without giving up. It will even attack its own reflection!";
var DEJU = "The oldest individual of this species was recorded as 11 years 4 months old upon its recapture and release.";
var WTSP = "This bird will occasionally mate with the dark-eyed junco to produce hybrids";
var EATO = "These birds are a common victim of a known brood parasite, the brown-headed cowbird. Cowbirds will lay their eggs in another species nest. The bird in this picture often cannot distinguish between their own offspring and a cowbird's, thereby wasting valuable resources and energy.";
var YEWA = "Unlike the unfortunate bird in the previous slide, when this bird is parasitized by the brown-headed cowbird it will simply build another nest right on top of the parasitized one!";
var COYE = "The males of this species arrive at their breeding grounds before the females. Once the females arrive males aggressively defend their territories. In one study, when researchers added a black mask onto a stuffed female the males attacked it as though it were another male.";
var CEDW = "";
var GRCA = "";
var AMRO = "";
var HETH = "";
var funFacts = [NOCA, DEJU, WTSP,EATO,YEWA,COYE,CEDW,GRCA,AMRO,HETH];

$("input").keypress(function(e){
	if(e.keyCode === 13){
		userAnswers.push($("input").val().toLowerCase());
		$("input").val("");
		loadNext();
	}
});

function loadNext(){
	
	pageTracker++;
	var curQuest = "#" + (pageTracker + 1).toString();
	var prevQuest = "#" + pageTracker.toString();
	$("img").attr("src",birdPics[pageTracker]);
	//$("#funFact p:").remove(text);
	var texted = funFacts[pageTracker]
	$("#funFact p:last").text(texted);
	$(curQuest).addClass('active');
	$(prevQuest).removeClass('active');
}

$(document).ready(function(){
	loadNext();
});