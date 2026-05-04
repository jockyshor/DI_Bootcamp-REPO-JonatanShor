/*Instructions
In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds)
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”
Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.
Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
Bonus: Loop through the array to instantiate those instances.
*/

class Video{
    constructor(title, uploader, time){
    this.title = title;
    this.uploader = uploader;
    this.time = time;
    }

    watch(){
        console.log(`“${this.uploader} watched all ${this.time} of ${this.title}!”`)
    }

};


let gradVid = new Video("Graduation Video","Jocky",60);
gradVid.watch();

let weedingVid = new Video("Weeding Video 2001", "Nahum", 120);

let upcomingVids = {
    hola:{title: "hola",
     uploader: "Aya",
     time: 35},
    batMitzva: {title: "batmitzva",
     uploader: "Adi",
     time: 50},
    myFirst: {title: "my first words",
     uploader: "Hili",
     time: 3},
    idkVid: {title: "Idk",
     uploader: "Osnat",
     time: 25},
    yaNoSe: {title: "yanose",
     uploader: "Liat",
     time: 100}
    }

Object.entries(upcomingVids).forEach((key, value)=>{
    upcomingVids[key] = new Video(value.title, value.uploader, value.time)
})
