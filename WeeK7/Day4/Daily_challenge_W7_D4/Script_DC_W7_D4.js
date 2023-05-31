// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
    }
  }
  
  
  // Instantiate a new Video instance and call the watch() method.
  
  const video = new Video("My Video", "Me", 100);
  console.log(video.watch());
  
  
  // => Me watched all 100 seconds of My Video!
  
  
  // Instantiate a second Video instance with different values.
  
  const video2 = new Video("Your Video", "You", 200);
  console.log(video2.watch());
  
  
  // => You watched all 200 seconds of Your Video!
  
  
  
  // se an array to store data for five Video instances (ie. title, uploader, time)
  // Think of the best data structure to save this information within the array.
  
  
  const videos = [
    new Video("Video 1", "Person 1", 100),
    new Video("Video 2", "Person 2", 200),
    new Video("Video 3", "Person 3", 300),
    new Video("Video 4", "Person 4", 400),
    new Video("Video 5", "Person 5", 500),
  ];
  
  
  // Loop through the array to instantiate those instances.
  
  
  for (const video of videos) {
    console.log(video.watch());
  }
  
  
  // =>
  
  // Person 1 watched all 100 seconds of Video 1!
  // Person 2 watched all 200 seconds of Video 2!
  // Person 3 watched all 300 seconds of Video 3!
  // Person 4 watched all 400 seconds of Video 4!
  // Person 5 watched all 500 seconds of Video 5!