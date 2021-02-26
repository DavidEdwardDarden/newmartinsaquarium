import { Location } from "./Location.js";
import { getLocation } from "./LocationData.js";


/** Define the steps that need to be taken
 1. Get the array of Fish
 2. Get a reference to the location on the DOM where you want to display the list of fish
 3. Declare a variable to hold on to fish HTML representations
 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
 4. Finally set the dom equal to the variable containing the fish html representations
 **/

export const LocationList = () => {
    // 1. Get the array of Fish
    const allLocations = getLocation();
    // 2. Get a reference to the location on the DOM where you want to display the list of fish
    const DOMLocation = document.querySelector("#fishList");
    // 3. Declare a variable to hold on to fish HTML representations
    let locationHTMLRepresentations = "";
    // 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation

    for (const oneThingFromALocation of allLocations) {
        //do something with the oneThingFromTheSea
        locationHTMLRepresentations += Location(oneThingFromALocation);
    }


    DOMLocation.innerHTML += `${locationHTMLRepresentations}`;
    console.log("locationHTMLRepresentations", `${locationHTMLRepresentations}`);
}