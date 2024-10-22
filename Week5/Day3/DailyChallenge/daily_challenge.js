// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
// 1. Create a class named Video. The class should be constructed with the following parameters:
//    - title (a string)
//    - uploader (a string, the person who uploaded it)
//    - time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
//      “uploader parameter watched all time parameter of title parameter!”

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.

const video1 = new Video("Video1", "Mary", 100);
const video2 = new Video("Video2", "Frank", 200);

video1.watch();
video2.watch();
