# jiffy
### By Winston Zirjacks

This app was built with create-react-app. It's a simple two-page vanilla React App that interacts with the Giphy API to either search for gifs, or to pull up a list of tending gifs.


## Features

#### Two "Pages"
Using React Router v4, I built out seperate paths for displaying trending/search content.

#### Displaying High Quality gifs only when needed
Gifs are displayed initially in their downsampled form to save on page load. Once a gif is clicked, content slides down displaying the title and (if applicable) author, while the downsampled Gif is replaced with a higher quality Gif.

Doing this takes a large load off of the browser and allows for CSS-based animations to run more smoothly.

#### Mosaic-esque Layout
Implemented using simple CSS. Specifically relying on Flexbox to achieve the column style layout. This is generally supported by modern browsers and, thanks to it's lack of reliance on javascript, doesn't put as much of a burden on the device to render. The downside is that things are set up in columns instead of packed rows, so instead of adding new content to the direct bottom of the layout, it's addition causes the layout itself to seemingly re-order.

#### CSS-based Animations
These animations function as UX enhancements - allowing focus to be directed towards actionable items (really, just the submit button) and for the loading status to be communicated visually.


## Notable deviations from the basic deliverable

#### Scroll-to-load Higher Order Component
Instead of simply adding in onScroll event listeners and callbacks to the creation of the GifGrid component, I opted to build this feature out as a higher order component to allow for more flexibility. Unfortunately, there is only really one usecase for scroll-to-load in this app, so this is a bit superfluous.

#### Not Forgetting that bandwidth is a thing
This includes debouncing scroll-to-load functionality along with only displaying downsampled gifs until content is engaged with.

#### Animations
Added in some fancy animations with CSS3. Most notable are making Gifs pop in and remain blurred until fully loaded.


## Possible Improvements (that are not addressed)

#### Unit Tests
I mean, Jest is included with create-react-app, right?

#### Improved Forms
I have neither fully implemented the "Rating" dropdown in either search form nor added the count option to the main search form. These are simple additions to make the app more usable.

#### State Management
Upon starting this project I figured that state would be relatively simple and the setup time for Redux would outweigh the benefits of using it. While I still believe that the app exists in a little bit of a grey area between applicable and not, adding in state management would make scalling and adding more involved features a lot more painless.

#### Webpack + SASS Modules + Babel
Using webpack to manage and minify assets would be nice, along with putting in some more work to properly modularize the CSS. This would make it more intuitive to mantain. On top of that, we utilize babel to make the limited ES6 I've used more compatible.

#### Node.js based backend
This would allow us to completely hide the API key (bad news bears, it's been public for most of the app's development) and prevent misuse by malicious parties. Currently, the ideal scenario for this project would be to store these keys in .env and then add it to the live site's setup as well. However, the assignment's requirement to be able to simply 'npm install' and 'npm run' requires us to expose this.

Along with API key related concerns, it would also allow us to throttle requests preventing any sort of API call limit overage. We could also cache trending gif sets.

