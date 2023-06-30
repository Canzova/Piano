const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbox input");


let allKeys = [];
// New Audio creates a new audio HTML element

// By default the audio src is a

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    // Passing audio src based on the key pressed
    audio.src = `tunes/${key}.wav`
    // Playing audio
    audio.play();
    // console.log(allKeys)

    // Getting clicked key element

    // The code is searching for an HTML element that has a data-key attribute with a value matching the variable key.

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");


    // Removing the active class after 150ms
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)

}


pianoKeys.forEach(key => {

    // Storing all the valid keywords
    allKeys.push(key.dataset.key);

    // In JavaScript, the "dataset" property is used to access custom data attributes defined in HTML using the "data-" prefix.

    // Here's a simple explanation:

    // When you want to associate additional data with an HTML element, you can use custom data attributes. These attributes start with "data-" followed by a name of your choice. For example, "data-key" or "data-color".

    // We can access the custom data provided into the HTMl Code by writing dataset."Prefix" which we have writeen in the html. 

    // In our case we had written data-key therefore we rae using .dataset.key

    // "key" is a variable that represents the current element being processed in each iteration of the loop.

    //  console.log(key.dataset.key);

    // Calling playTine Function withb passing data-key value as an argument


    // If you need to pass an argument to a function when assigning it as an event handler, you typically wrap it inside an anonymous function or an arrow function. This allows you to control when and how the argument is passed to the function.

    key.addEventListener("click", () => playTune(key.dataset.key))
})

const pressedKey = (e) => {
    // console.log(e);

    // e represents the key which we have clicked and depending upon that key we are callin the playaTune function with that argument

    // When the use click on the keyboard we get allot of details about it in the form of an array in concole. In that array there is an object named as key which represents which key we have been pressed

    // Play only when the user have clicked the valid key at keyboard
    if (allKeys.includes(e.key)) {
        playTune(e.key);
    }
}

// In the code snippet document.addEventListener("keydown", pressedKey);, "keydown" refers to an event that occurs when a key on the keyboard is pressed down.

document.addEventListener("keydown", pressedKey);

// Handling the volume button
const handleVolume = (e) => {

    // Passing the value of the silder as volume to the audio


    // In JavaScript, the target property is commonly used in the context of handling events. It represents the element on which the event originally occurred or was triggered. It allows you to access information about the specific element that triggered the event.

    // When an event occurs, such as a button click or a mouse movement, JavaScript generates an event object that contains various properties and methods related to that event. One of these properties is target.

    // To use the target property, you typically define an event handler function that is executed when the event is triggered. Within that event handler function, you can access the target property of the event object to retrieve the element that triggered the event.

    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume);


const showHideKeys = () => {
    // Togling the hiden class on each key
    // In pianokeys we have different keys


    // We are not using curley brackets here because the arrow have only single line of code
    
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);