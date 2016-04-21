var commonAnswers = ["northern cardinal", "dark-eyed junco", "white-throated sparrow", "eastern towhee"];
var birdPics = ["https://www.allaboutbirds.org/guide/PHOTO/LARGE/northern_cardinal_1.jpg", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/dark_eyed_junco_10.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/white_throated_sparrow_2.jpg","https://www.allaboutbirds.org/guide/PHOTO/LARGE/eastern_towhee_11.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/yellow_warbler_raymondlee2.jpg","https://www.allaboutbirds.org/guide/PHOTO/LARGE/coye_joeldeyoung2.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/cedar_waxwing_5.jpg","https://www.allaboutbirds.org/guide/PHOTO/LARGE/gray_catbird_2.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/american_robin_4.jpg", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/hermit_thrush_1.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/brown_creeper_4.jpg", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/house_wren_1.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/red_breasted_nuthatch_4.jpg", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/tufted_titmouse_4.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/black_capped_chickadee_3.jpg","https://www.allaboutbirds.org/guide/PHOTO/LARGE/barn_swallow_8.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/american_crow_8.jpg", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/blue_jay_3.jpg",
"https://www.allaboutbirds.org/guide/PHOTO/LARGE/pileated_woodpecker_reidbarclay.jpg", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/killdeer_3.jpg"];

var userAnswers = [];
var pageTracker = -1;
var NOCA = "In the Spring and early Summer this bird is so aggressive at defending its territory that it will spend hours fighting off intruders without giving up. It will even attack its own reflection!";
var DEJU = "The oldest individual of this species was recorded as 11 years 4 months old upon its recapture and release.";
var WTSP = "This bird will occasionally mate with the dark-eyed junco to produce hybrids.";
var EATO = "These birds are a common victim of a known brood parasite, the brown-headed cowbird. Cowbirds will lay their eggs in another species nest. The bird in this picture often cannot distinguish between their own offspring and a cowbird's, thereby wasting valuable resources and energy raising another bird's chicks.";
var YEWA = "Unlike the unfortunate bird in the previous slide, when this bird is parasitized by the brown-headed cowbird it will simply build another nest right on top of the parasitized one!";
var COYE = "The males of this species arrive at their breeding grounds before the females. Once the females arrive males aggressively defend their territories. In one study, when researchers added a black mask onto a stuffed female the males attacked it as though it were another male.";
var CEDW = "This bird specializes in eating fruit. Because they eat so much fruit when they encounter overripe berries they can become intoxicated.";
var GRCA = "This bird defends its territory in winter as well as summer and are known to sometimes destroy the eggs and nestlings of other woodland species.";
var AMRO = "This bird eats different food depending on the time of day, earthworms in the morning and fruit and berries later in the day. In the Fall and Winter they may become intoxicated off of honeysuckle berries.";
var HETH = "The male of this species will court the female by chasing her in circles.";
var BRCR = "This species eats mostly insects which it collects from tree trunks. It will start at the base of a tree, spiral its way up the trunk, then fly back down to start again.";
var HOWR = "This bird often adds spider egg sacks to its nesting materials. It is thought this is to help protect the nestlings from mites that parasitize the nest.";
var RBNU = "When building a nest this bird will collect resin from coniferous trees and plaster it around the entrance. It will also occasionally steal nesting material from the nests of other birds.";
var TUTI = "This bird will hoard food over the Fall and Winter. This can include seeds from a feeder where it will take one seed at a time, shell it and then hide it.";
var BCCH = "This bird has a very distinctive alarm call that other species recognize and will respond to.";
var BARS = "Juveniles of this species may help mated pairs by bringing food to their nest for new hatchlings to eat.";
var AMCR = "This is a very clever bird who has been seen using tools for foraging. Examples include shaping sticks to collect insects and dropping nuts into the streets and waiting for cars to crack them open.";
var BLJA = "The feathers of this bird are blue as a result of scattering light through modified cells on the feather barbs. The actual pigment in the featers is melanin.";
var PIWO = "When foraging this bird will dig out rectangular holes in trees that are so extensive that smaller trees may break.";
var KILL = "This bird defends its nest from predators by feigning a broken wing. The predator follows the \'injured\' bird away from the nest thinking it has found an easy meal.";

var funFacts = [NOCA, DEJU, WTSP,EATO,YEWA,COYE,CEDW,GRCA,AMRO,HETH,BRCR,HOWR,RBNU,TUTI,BCCH,BARS,AMCR,BLJA,PIWO,KILL];

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