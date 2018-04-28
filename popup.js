//getting the title 
var title = document.getElementsByTagName('title')[0].innerHTML.split(" ");
console.log(title);

// pre-defined arrays 
var Adult = ["porn","sex","fuck"];
var Love = ["love","hearts","valentine",""];
var Education = ["how to","learn"];

// adding arrays to chrome storage
/*
chrome.storage.sync.set({'Adult':Adult},function(){

	console.log("adult saved");

});

chrome.storage.sync.set({'Love':Love},function(){
	console.log("love saved");

});

chrome.storage.sync.set({'Education':Education},function(){

	console.log("education saved");

});*/

//setting up and storing variables for the analysing part

var adultCount =0
var loveCount =0;
var educationCount =0;

var count1 = 0;
var count2 = 0;


//analyzing part(should be right as functions just testing)
while (count1< title.length){
    count2 = 0
    while (count2 < Adult.length) {
        if (title[count1]==Adult[count2]){
            console.log("adult found")
        }
        else{
            
        }

        count2 +=1
    }
    count1 += 1
    
}

var count1 = 0;
var count2 = 0;


while (count1< title.length){
    count2 = 0
    while (count2 < Love.length) {
        if (title[count1]==Love[count2]){
            console.log("Love found");
        }
        else{
            
        }

        count2 +=1
    }
    count1 += 1
    
}

var count1 = 0;
var count2 = 0;

while (count1< title.length){
    count2 = 0
    while (count2 < Education.length) {
        if (title[count1]==Education[count2]){
            console.log("Edu found");
        }
        else{
            
        }

        count2 +=1
    }
    count1 += 1
    
}