var formattedName = HTMLheaderName.replace("%data%", "Liyu Qin");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", "(858)200-6554");
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", "qinliyu1990@gmail.com");
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", "@qqqlllyyyy");
$("#topContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", "San Diego");
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", "images/photo.jpg");
$("#header").append(formattedPic);




var education = {
	"schools" : [
	{
		"name" : "UCSD",
		"location" : "San Diego",
		"degree" : "MA",
		"major" : ["Applied Mathematics"],
		"dates" : "09/2012 - 09/2014",
		"url" : "http://www-en.hnu.edu.cn/"
	},
	{
		"name" : "Hunan University",
		"location" : "Changsha",
		"degree" : "BA",
		"major" : ["Mathematics"],
		"dates" : "09/2008 - 06/2012",
		"url" : "http://ucsd.edu/"
	}],
	"onlineCourses" : [
	{
		"title" : "Intro to CS",
		"school" : "Udacity",
		"dates" : "09/2014"
	},
	{
		"title" : "Programming Foundamentals with Python",
		"school" : "Udacity",
		"dates" : "09/2014"
	}]
};

var projects = {
	"projects" : [
	{
		"title" : "Effects of Milnacipran Treatment on Pain Processing in Fibromyalgia",
		"dates" : "03/2014",
		"description" : "Examine the efficacy of Milnacipran, a serotonin norepinephrine reuptake inhibitor (SNRI) used in the clinical treatment of fibromyalgia.",
		"images" : [
		    "images/01.jpg",
		    "images/02.jpg",
		    "images/03.jpg"
		    ]
	},
	{
		"title" : "Effects of Enteral Feeding Algorithm",
		"dates" : "04/2014",
		"description" : "Compare the percentage of adequacy of nutrition and percentage of adequacy of protein intake by diagnosis category at baseline and after the enteral feeding algorithm.",
		"images" : [
		    "images/04.jpg",
		    "images/05.jpg"
		    ]
	}]
};

var bio = {
	"name" : "James",
	"age" : 32,
	"welcomeMessage": "Climb mountains not so the world can see you, but so you can see the world.",
	"skills" : [
	    "Mathmatics", "Java", "Statistics", "Web Development"
	],
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "650-555-5555",
		"twitter" : "@johndoe",
		"email" : "qinliyu@gmail.com",
		"location" : "San Francisco"
	},
	"bioPic" : "images/fry.jpg"
};

var work = {
	"jobs" : [
    {
    	"title" : "biostatistician",
    	"employer" : "UC Health Care",
    	"location" : "San Diego",
    	"dates" : "03/2014 - 10/2014",
    	"description" : "Involved in a variety of projects and provided statistical consulting services.  Drafted and presented statistical reports."
    },
    {
    	"title" : "teaching assistant",
    	"employer" : "UCSD",
    	"location" : "San Diego",
    	"dates" : "01/2013 - 04/2014",
    	"description" : "Assisted the teaching on multivariate calculus, analytic geometry and probability theory."
    }]
}

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);

var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill1);
var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill2);
var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill3);
var formattedSkill4 = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill4);


work.display = function(){
	for (job in work.jobs) {
	//Create new div for work experience
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
  }
};

work.display();

education.display = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[0]);
		$(".education-entry:last").append(formattedMajor);
	}
}
education.display();

education.displayonline = function(){
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLonlineStart);
    for (course in education.onlineCourses){
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".online-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".online-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".online-entry:last").append(formattedDates);

	}
}
education.displayonline();

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	} 
}; 
projects.display();


$("#mapDiv").append(googleMap);


var formattedMobile = HTMLmobile.replace("%data%", "(858)200-6554");
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", "qinliyu1990@gmail.com");
$("#footerContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", "@qqqlllyyyy");
$("#footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", "San Diego");
$("#footerContacts").append(formattedLocation);
