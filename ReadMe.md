# Project Rationale.

Working Link: https://thesuperolly.github.io/API-Sketch-Repo

GitHub Repo Link: https://github.com/thesuperolly/API-Sketch-Repo

My idea with this design was pretty simple. Create an interesting viewing experience using information gathered from significant years of my life. Taking inspiration from other visually dynamic displays of curated data, my initial design was based on a vertical timeline with plotted points representing different years. This design was changed to a horizontally plotted line to create a more easily responsive layout. It also made the display card contents clearer and easier to read.

Upon loading the page, an initial “loading state” call is made and loads the API data for the first timeline. Instead of calling random data, I chose instead to curate a selection of items to show. This led to four individual calls being made. After the initial loading call is made, the user is then able to click any one of the points on the plotted line to call the curated data from each selected year.

Another aspect I was hoping to include was a distance display. This would display a set location where the significant event of that year took place and then show the distance from the user's current location. This proved more difficult than initially intended as I am unfamiliar with both the browser API and how to plot latitudinal and longitudinal information. Thankfully I was able to research how to get it to display in time for submission, but I feel that is could be more elegant. This should be updated in future iterations.

The biggest hurdles in the process of creating this web app were my lack of knowledge of Javascript and API calls. This led me to create multiple calls of similar or identical data. The primary cause of this was in the calls to the MAAS APIs. I initially set a “for” loop to call all of the data to each of the cards using an array. However, I found that it moved through the loops to fast and dumped all the data in a single card. This is definitely an area I would like to address in a future iteration of this web app.

In the future, I would put more work into making the display of each card more visually dynamic. I would like to experiment with placing larger slab style typefaces and rotating text. Regarding the API function, I would like to create further user interactions. I would like to allow users to change and add more points to the timeline. To do this though, I would need to automate the retrieval of data from the API call, but other than that I feel it would be pretty simple to achieve.

Overall, I am happy with this as a simple sketch, but it would need much more work to be ready for production.