# Break
Take a Break! Sitting at a computer for long periods of time is harmful to your health.

## Inspiration
The use of tech in our everyday lives are increasing, as a result people today are less involved with physical activities and in-person social interactions than ever before, leading to a rise in health complications and mental issues.  Glued to their screens, rates in obesity, anxiety, and depression have steadily increased. A simple reminder to get up and step outside  may encourage a change in these habits. 

## What it does
Break is a Chrome Browser Extension that reminds you to take breaks from your computer. Set your desired time interval, 10 min, 30 min, 60 min, and Break will remind you to get up and walk around, grab some food, go outside!

## How we built it
After setting up the logistics to create a browser extension on Atom, we began by using JavaScript to set up a timer. We took the user input of their desired notification time interval, to create a timer. We then connected this to an alert function.

## Challenges we ran into
The main challenge we ran into was the idea of running a background for our browser extension. Ideally we would want our extension to work across the entire browser and have it run without having to have the extension opened. In addition, we discovered that alerts have very limited possibilities, so we tried to switch to using a modal or injecting an element instead. We were unable to accomplish both of these tasks because of time.

## Accomplishments that we're proud of
Overall we’re proud that we were just able to get a Chrome Extension working and get some actions working that went with the main idea of our project. This was the first time we made a Chrome Extension, so we had a hard time figuring everything out. In the end, however it was rewarding to see that we could even create and add an extension, considering that we knew nothing about it 24 hours before.

## What we learned
Through this experience of creating a Chrome Extension, we firstly learned how to create browser extensions. We used JSON for the first time to create the manifest file necessary to make this a workable extension. From there we learned a lot about the importance of persistence, constantly having to debug our code because of inexperience and to get around Chrome’s many limitations.

## What's next for Break
In the future, we hope get Break up and fully functioning to help prevent the greater community from developing health issues. Firstly we would fix the challenges mentioned earlier, adding a background and a better looking notification. Later on, we hope to connect our extension with data from local weather and events to remind users to go outside and see the sunset or head out for the parade that day.
