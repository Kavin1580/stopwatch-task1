<!DOCTYPE html>: This declaration specifies that the document is an HTML5 document.

<html lang="en">: The opening tag for the HTML document, specifying that the language of the content is English.

<head>: This section contains metadata and links to external resources that help define the webpage.

<meta charset="UTF-8">: Specifies the character encoding for the document as UTF-8.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Sets the viewport properties for responsive design.
<link rel="stylesheet" href="stopwatch.css">: Links an external stylesheet (stopwatch.css) for styling the webpage.
<title>Stopwatch</title>: Sets the title of the webpage to "Stopwatch."
<body>: This is the main content of the webpage that users will see and interact with.

<div class="container">: A container to hold the stopwatch elements.
<h2>Stopwatch</h2>: A heading displaying the title "Stopwatch."
<div id="timer">00:00:00</div>: A <div> element with an id of "timer" that displays the current time in the format "00:00:00."
<button id="start">Start</button>: A button with an id of "start" that users can click to start the stopwatch.
<button id="stop">Stop</button>: A button with an id of "stop" that users can click to stop the stopwatch.
<button id="reset">Reset</button>: A button with an id of "reset" that users can click to reset the stopwatch.
<script src="stopwatch.js"></script>: This line includes an external JavaScript file (stopwatch.js) that likely contains the logic to control the stopwatch functionality.
<!--  -->
<!--  -->
Variable Declarations:

intervalId: Used to store the interval ID returned by setInterval to manage the timer update.
startTime: Represents the starting time of the stopwatch.
running: Keeps track of whether the stopwatch is currently running.
Element References:

timerElement: Represents the HTML element where the timer display will be updated.
startButton, stopButton, resetButton: References to the Start, Stop, and Reset buttons, respectively.
formatTime(seconds) Function:

Formats the given number of seconds into a string in the format "HH:MM:SS."
startTimer() Function:

Checks if the stopwatch is not already running.
Sets running to true.
Calculates the difference between the current time and the previously stored startTime to account for any paused time.
Sets up an interval using setInterval to call the updateTimer function every second.
stopTimer() Function:

Checks if the stopwatch is currently running.
Sets running to false.
Clears the interval using clearInterval.
resetTimer() Function:

Calls the stopTimer function to ensure the timer is stopped.
Resets startTime to 0.
Updates the timer display to show "00:00:00."
updateTimer() Function:

Calculates the current time and elapsed time since startTime.
Updates the timerElement content with the formatted elapsed time.
Event Listeners:

Attaches click event listeners to the buttons:
startButton: Calls the startTimer function on click.
stopButton: Calls the stopTimer function on click.
resetButton: Calls the resetTimer function on click.