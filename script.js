    //------------------------------TRACK ARRAYS------------------------------//


    /*ARRAY 1. mainTacklistArr - This contains all tracks on NFSHP/HPR and their lengths in miles.
                               - If you wish to apply edits to how tracks are defined then make them here.
    */

                               mainTracklistArr = [
                                //Name,           Length (Miles),   Crossplay Issues,     Highway
                                ["Arms Race",               14.1,               "No",       "No"],
                                ["Barnstormer",              8.4,               "No",      "Yes"],
                                ["Blacklisted",             11.9,               "No",       "No"],
                                ["Calm Before the Storm",   16.5,               "No",       "No"],
                                ["Charged Attack",          15.3,          "Partial",       "No"], 
                                ["Close Call",              10.7,               "No",       "No"],
                                ["Coast to Coast",          12.3,          "Partial",       "No"],
                                ["Complete Control",         9.1,               "No",       "No"],
                                ["Cut to the Chase",        11.7,              "Yes",       "No"],
                                ["Dark Horse",               7.5,               "No",       "No"],
                                ["Dust Storm",              12.0,               "No",       "No"],
                                ["End of the Line",         16.6,          "Partial",       "No"], 
                                ["Escape to the Beach",      9.9,          "Partial",       "No"],
                                ["Extreme Truth",            6.8,               "No",       "No"],
                                ["Fast Track",               6.5,               "No",       "No"],
                                ["Fight or Flight",         14.5,               "No",       "No"],
                                ["First Offence",            7.6,               "No",       "No"],
                                ["Future Perfect",           7.6,               "No",       "No"],
                                ["Highway Battle",          14.9,          "Partial",       "No"], 
                                ["Hit the Beach",           10.8,              "Yes",       "No"],
                                ["Hunted",                  11.7,               "No",       "No"],
                                ["Into the Fire",            7.1,               "No",       "No"],
                                ["Lakeside Dream",          11.0,               "No",       "No"],
                                ["Law and Disorder",        10.6,          "Partial",       "No"],
                                ["Midnight Run",             6.6,               "No",       "No"],
                                ["No Substitute",            7.5,               "No",       "No"],
                                ["Ocean Blue",              12.9,              "Yes",       "No"],
                                ["Past Master",              6.4,               "No",       "No"],
                                ["Pedal to the Metal",       8.0,               "No",       "No"],
                                ["Porsche Patrol",          11.5,               "No",       "No"],
                                ["Previous Conviction",     10.5,               "No",       "No"],
                                ["Pushing the Envelope",    11.9,               "No",      "Yes"],
                                ["Razor's Edge",            10.6,               "No",      "Yes"],
                                ["Resisting Arrest",        13.2,               "No",       "No"],
                                ["Roadsters Reborn",         8.4,               "No",       "No"],
                                ["Rocket Science",           8.6,               "No",       "No"],
                                ["Rule of Law",             14.7,          "Partial",       "No"], 
                                ["Run to the Hills",        11.4,              "Yes",       "No"],
                                ["Sun, Sand and Supercars", 11.4,              "Yes",       "No"],
                                ["Sand Timer",              11.2,          "Partial",      "Yes"],
                                ["Self Preservation",       11.0,               "No",       "No"],
                                ["Shock and Awe",           10.6,              "Yes",       "No"],
                                ["Slide Show",               7.8,               "No",       "No"],
                                ["Snake Pit",               13.7,               "No",       "No"],
                                ["Snowblind",               12.4,               "No",       "No"],
                                ["Spirit of Performance",    6.7,               "No",       "No"],
                                ["Summit Assault",          12.6,               "No",       "No"],
                                ["Tough Justice",           12.5,               "No",       "No"],
                                ["Untouchable",             11.4,          "Partial",      "Yes"],
                                ["Wing and a Prayer",       12.7,               "No",       "No"],
                            ];
                        
                        
                        
                        
                            /* ARRAY 2 - customisedTrackArr - This array is populated with tracks based on the user input filters and values defined in the mainTrackArr.
                                                            - This array will wipe each time the tool runs so don't bother touching it.
                            */
                        
                            customisedTrackArr = [];
                            ignoredTrackArr = [];
                        
                        
                            /* ARRAY 3 - presetArrIRTFavs - This array is a pre-populated array for instant use.
                                                          - This array can be manually edited here if you wish to add or remove tracks.
                            */
                            presetArrIRTFavs = ["Snake Pit", 
                                            "Tough Justice", 
                                    "Calm Before the Storm", 
                                                "Snowblind", 
                                         "Resisting Arrest", 
                                        "Wing and a Prayer", 
                                          "Fight or Flight", 
                                               "Dust Storm", 
                                               "Close Call", 
                                                "Arms Race", 
                                           "Summit Assault", 
                                          "End of the Line", 
                                           "Charged Attack", 
                                           "Lakeside Dream", 
                                           "Highway Battle", 
                                              "Blacklisted",
                                           "Coast to Coast",
                            ];
                        
                            longTracks = ["Arms Race", "Blacklisted", "Calm Before the Storm",
                            "Dust Storm", "Fight or Flight", "Hunted",
                            "Lakeside Dream", "Porsche Patrol", "Resisting Arrest",
                            "Self Preservation", "Snake Pit", "Snowblind",
                            "Summit Assault", "Tough Justice", "Wing and a Prayer",
                        ];
                        
                            shortTracks = ["Close Call", "Complete Control", "Dark Horse",
                            "Extreme Truth", "Fast Track", "First Offence",
                            "Future Perfect", "Into the Fire", "Midnight Run",
                            "No Substitute", "Past Master", "Pedal to the Metal",
                            "Previous Conviction", "Roadsters Reborn", "Rocket Science",
                            "Slide Show", "Spirit of Performance",];
                        
                        
                        
                        
                        
                        
                        
                            //TOOL FUNCTIONS & VARIABLES
                        
                            //IF YOU WANT THE TOOL TO WORK AND YOU DON'T UNDERSTAND HOW THESE FUNCTIONS WORK THEN DO NOT TOUCH THEM!//
                        
                        
                        
                            //GLOBAL VARIABLES - Hold values for the amount of tracks and the filter options.
                            trackCountHolder = document.getElementById("trackCount").value;
                            trackSelectTypeHolder = document.getElementById("filterOrList").value;
                        
                            trackMinLengthHolder = document.getElementById("trackMinLength").value;
                            trackMaxLengthHolder = document.getElementById("trackMaxLength").value;
                        
                            cpiTracksHolder = document.getElementById("cpiTracks").value;
                            highwayTracksHolder = document.getElementById("highwayTracks").value;
                            trackListHolder = document.getElementById("presetLists").value;
                        
                        
                            //UPDATE FUNCTIONS
                            //1. updates the amount of tracks for the tool to randomise.
                            function trackCountUpdater(){
                                trackCountHolder = document.getElementById("trackCount").value;
                            }
                        
                            //2. updates the method the tracks are pooled.
                            function trackSelectMethodUpdater(){
                                trackSelectTypeHolder = document.getElementById("filterOrList").value;
                                hideShowUI();
                            }
                        
                            //FILTER UPDATE FUNCTIONS
                            //1. updates the users preference regarding track length.
                            function trackLengthUpdater(){
                                trackMinLengthHolder = document.getElementById("trackMinLength").value;
                                trackMaxLengthHolder = document.getElementById("trackMaxLength").value;
                            }
                            
                            //2. updates the users preference regarding track length.
                            function cpiTrackUpdater(){
                                cpiTracksHolder = document.getElementById("cpiTracks").value;
                            }
                            
                            //3. updates the users preference regarding track length.
                            function highwayTrackUpdater(){
                                highwayTracksHolder = document.getElementById("highwayTracks").value;
                            }
                        
                            //4. PRESET LIST FUNCTIONS
                            function presetListUpdater(){
                                trackListHolder = document.getElementById("presetLists").value;
                            }
                        
                            
                        
                        
                            //MAIN FUNCTION - This function runs when users click the "Randomise Tracks" button.
                            function mainFunction(){
                                document.getElementById("output1").innerHTML = "";
                                document.getElementById("output2").innerHTML = "";
                                document.getElementById("output3").innerHTML = "";
                                document.getElementById("output2Title").innerHTML = "Pooled Tracks";
                                document.getElementById("output3Title").innerHTML = "Ignored Tracks";
                        
                                console.log("Now listing user inputs:");
                                console.log("Track Count: " + trackCountHolder)
                                console.log("Track Min Length: " + trackMinLengthHolder);
                                console.log("Track Max Length: " + trackMaxLengthHolder);
                                console.log("Ghost Track Preference: " + cpiTracksHolder);
                                console.log("Highway Track Preference: " + highwayTracksHolder);
                                console.log("Preset List: " + trackListHolder);
                        
                                if(trackSelectTypeHolder == "Filter"){
                                    //Ensures trackListHolder is set to None to avoid running any preset lists.
                                    trackListHolder = "None";
                                    populatateArr();
                                    shuffleAgain();
                                }
                        
                                if(trackSelectTypeHolder == "List"){
                                    //Runs a check on the trackListHolder element. Forced value changes were braking usability.
                                    presetListUpdater();
                                    populateIgnoredArr(trackListHolder);
                                    if(trackListHolder == "None"){
                                        alert("It seems you haven't picked a preset list to use. Please select one and try again.");
                                    } else {
                                        shuffleAgain();
                                    }
                                    
                                }
                                
                            }
                        
                        
                            //SUB-FUNCTIONS//
                        
                            //Populates the target array with the relevent tracks as per user preferences.
                            function populatateArr(){
                        
                                //1. empty the array to ensure it's clean for population or repopulation
                                customisedTrackArr = [];
                                ignoredTrackArr = [];
                        
                                //All instances want any length of track
                                if(trackMinLengthHolder >= 6.4 && trackMaxLengthHolder >= 6.4){
                                    console.log("running - any track length variants....");
                                    if(cpiTracksHolder == "Yes" && highwayTracksHolder == "Yes"){
                                        console.log("running - ghosts allowed + highways allowed");
                                        for(i = 0; i < mainTracklistArr.length; i++){
                                            //Since ghosts and highways are allowed entirely, they don't need filtered by their column values.
                                            if(mainTracklistArr[i][1] >= trackMinLengthHolder && mainTracklistArr[i][1] <= trackMaxLengthHolder){
                                                customisedTrackArr.push(mainTracklistArr[i][0]);
                                            }
                                        }
                                        populateIgnoredArr();
                                    } else if(cpiTracksHolder == "Yes" && highwayTracksHolder == "No"){
                                        console.log("running - ghosts allowed + highways not allowed");
                                        for(i = 0; i < mainTracklistArr.length; i++){
                                            //Since highways are not allowed, the tracks that aren't defined as highway tracks are pooled.
                                            if(mainTracklistArr[i][1] >= trackMinLengthHolder && mainTracklistArr[i][1] <= trackMaxLengthHolder && mainTracklistArr[i][3] == "No"){
                                                customisedTrackArr.push(mainTracklistArr[i][0]);
                                            }
                                        }
                                        populateIgnoredArr();
                                    } else if(cpiTracksHolder == "No" && highwayTracksHolder == "Yes"){
                                        console.log("running - ghosts not allowed + highways allowed");
                                        for(i = 0; i < mainTracklistArr.length; i++){
                                            //Since ghosts are not allowed, only the tracks that are not defined as ghost in any form are pooled.
                                            if(mainTracklistArr[i][1] >= trackMinLengthHolder && mainTracklistArr[i][1] <= trackMaxLengthHolder && mainTracklistArr[i][2] == "No"){
                                                customisedTrackArr.push(mainTracklistArr[i][0]);
                                            }
                                        }
                                        populateIgnoredArr();
                                    } else if(cpiTracksHolder == "No" && highwayTracksHolder == "No"){
                                        console.log("running - ghosts not allowed + highways not allowed");
                                        for(i = 0; i < mainTracklistArr.length; i++){
                                            //Since ghosts and highways are not allowed, only the tracks that are not defined as ghosts in any form and tracks that are not defined as highway tracks are pooled.
                                            if(mainTracklistArr[i][1] >= trackMinLengthHolder && mainTracklistArr[i][1] <= trackMaxLengthHolder && mainTracklistArr[i][2] == "No" && mainTracklistArr[i][3] == "No"){
                                                customisedTrackArr.push(mainTracklistArr[i][0]);
                                            }
                                        }
                                        populateIgnoredArr();
                                    } else if(cpiTracksHolder == "Partial" && highwayTracksHolder == "Yes"){
                                        console.log("running - ghosts partially allowed + highways allowed");
                                        for(i = 0; i < mainTracklistArr.length; i++){
                                            //Since ghosts are only partially allowed and highways are allowed, only the tracks that are not defined "Yes" are pooled.
                                            if(mainTracklistArr[i][1] >= trackMinLengthHolder && mainTracklistArr[i][1] <= trackMaxLengthHolder && mainTracklistArr[i][2] != "Yes"){
                                                customisedTrackArr.push(mainTracklistArr[i][0]);
                                            }
                                        }
                                        populateIgnoredArr();
                                    } else if(cpiTracksHolder == "Partial" && highwayTracksHolder == "No"){
                                        console.log("running - ghosts partially allowed + highways not allowed");
                                        for(i = 0; i < mainTracklistArr.length; i++){
                                            //Since ghosts are only partially allowed and highways are not allowed, only the tracks that are not defined "Yes" are pooled and tracks that are not defined as highway tracks are pooled.
                                            if(mainTracklistArr[i][1] >= trackMinLengthHolder && mainTracklistArr[i][1] <= trackMaxLengthHolder && mainTracklistArr[i][2] != "Yes" && mainTracklistArr[i][3] == "No"){
                                                customisedTrackArr.push(mainTracklistArr[i][0]);
                                            }
                                        }
                                        populateIgnoredArr();
                                    }
                                } else if(trackMinLengthHolder <= 6.3 || trackMaxLengthHolder <= 6.3){
                                    alert("Seems a clown failed to read. Please enter a minimum track length of 6.4 miles or higher.");
                                }
                                
                            }
                        
                        
                            function populateIgnoredArr(listArray){
                        
                                simpleMainTrackArr = [];
                        
                                for(i = 0; i < mainTracklistArr.length; i++){
                                    simpleMainTrackArr.push(mainTracklistArr[i][0]);
                                }
                        
                                console.log(simpleMainTrackArr);
                        
                                if(trackSelectTypeHolder == "Filter"){
                                    const removeCommon = (simpleMainTrackArr, customisedTrackArr) => {
                                        const spreaded = [...simpleMainTrackArr, ...customisedTrackArr];
                                        return spreaded.filter(el => {
                                           return !(simpleMainTrackArr.includes(el) && customisedTrackArr.includes(el));
                                        })
                                    };
                        
                                    ignoredTrackArr = removeCommon(simpleMainTrackArr, customisedTrackArr);
                        
                                } else if(trackSelectTypeHolder == "List"){
                                    if(trackListHolder == "IRTFavs"){
                                        const removeCommon = (simpleMainTrackArr, presetArrIRTFavs) => {
                                            const spreaded = [...simpleMainTrackArr, ...presetArrIRTFavs];
                                            return spreaded.filter(el => {
                                               return !(simpleMainTrackArr.includes(el) && presetArrIRTFavs.includes(el));
                                            })
                                        };
                        
                                        ignoredTrackArr = removeCommon(simpleMainTrackArr, presetArrIRTFavs);
                                    } else if(trackListHolder == "shortTracks"){
                                        const removeCommon = (simpleMainTrackArr, shortTracks) => {
                                            const spreaded = [...simpleMainTrackArr, ...shortTracks];
                                            return spreaded.filter(el => {
                                               return !(simpleMainTrackArr.includes(el) && shortTracks.includes(el));
                                            })
                                        };
                                        
                                        ignoredTrackArr = removeCommon(simpleMainTrackArr, shortTracks);
                                    } else if(trackListHolder == "longTracks"){
                                        const removeCommon = (simpleMainTrackArr, longTracks) => {
                                            const spreaded = [...simpleMainTrackArr, ...longTracks];
                                            return spreaded.filter(el => {
                                               return !(simpleMainTrackArr.includes(el) && longTracks.includes(el));
                                            })
                                        };
                                        
                                        ignoredTrackArr = removeCommon(simpleMainTrackArr, longTracks);
                                    } else if(trackListHolder == "None"){
                                        alert("Please select a list.");
                                    }
                        
                                    
                                }
                                
                                //console.log(ignoredTrackArr);
                        
                                //Loops the array and displays the ignored tracks on screen.
                                counter = 0;
                                for(j = 0; j < ignoredTrackArr.length; j++){
                                    //console.log(j);
                                    document.getElementById("output3").innerHTML += ignoredTrackArr[j] + ", ";
                                    counter++;
                                    if(counter == 3){
                                        document.getElementById("output3").innerHTML += "<br>";
                                        counter = 0;
                                    }
                                }
                                
                                //Update some UI text.
                                if(ignoredTrackArr.length == 0){
                                    document.getElementById("output3").innerHTML = "No tracks ignored.";
                                }
                        
                                if(ignoredTrackArr.length == null || ignoredTrackArr.length == 0){
                                    document.getElementById("output3Title").innerHTML += " 0";
                                } else {
                                    //console.log(ignoredTrackArr.length);
                                    document.getElementById("output3Title").innerHTML += " " + ignoredTrackArr.length;
                                }
                                
                        
                            }
                        
                        
                        
                            //Lets the user reshuffle another 10 tracks without any page reloads.
                            function shuffleAgain(){
                                document.getElementById("output1").innerHTML = "";
                                document.getElementById("output2").innerHTML = "";
                                
                                //function is called and assigned to get_tracks
                                get_tracks = function (number) {
                                    if(trackListHolder == "IRTFavs"){
                                        return trackPicker(presetArrIRTFavs).slice(0,number);
                                    } else if(trackListHolder == "shortTracks") {
                                        return trackPicker(shortTracks).slice(0,number);
                                    } else if(trackListHolder == "longTracks") {
                                        return trackPicker(longTracks).slice(0,number);
                                    }else {
                                        return trackPicker(customisedTrackArr).slice(0,number);
                                    }
                                }
                        
                                //setup for better presentation on screen
                                trackPicks = get_tracks(trackCountHolder);
                                trackPicksEdits = trackPicks.splice(" ");
                        
                                //presents the 10 tracks on screen
                                for(i = 0; i < trackPicksEdits.length; i++){
                                    document.getElementById("output1").innerHTML += trackPicksEdits[i] + ", <br>";
                                }
                            }
                        
                            //Function to shuffle the array and return the amount of tracks the user defined.
                            function trackPicker(array){
                                console.log(array);
                        
                                //Prints the pooled array before it's randomised and filtered by track count.
                                if(trackSelectTypeHolder == "Filter"){
                                    counter = 0;
                                    for(j = 0; j < customisedTrackArr.length; j++){
                                        //console.log(j);
                                        document.getElementById("output2").innerHTML += customisedTrackArr[j] + ", ";
                                        counter++;
                                        if(counter == 3){
                                            document.getElementById("output2").innerHTML += "<br>";
                                            counter = 0;
                                        }
                                    }
                        
                                    document.getElementById("output2Title").innerHTML += " " + customisedTrackArr.length;
                        
                                } else if(trackSelectTypeHolder == "List"){
                                    counter = 0;
                                    for(j = 0; j < array.length; j++){
                                        //console.log(j);
                                        document.getElementById("output2").innerHTML += array[j] + ", ";
                                        counter++;
                                        if(counter == 3){
                                            document.getElementById("output2").innerHTML += "<br>";
                                            counter = 0;
                                        }
                                    }
                        
                                    document.getElementById("output2Title").innerHTML += " " + array.length;
                                }
                                
                                
                        
                        
                                for(i = 0; i <= trackCountHolder; i++){
                                    array.sort(() => Math.random() - 0.5);
                                    return array;
                                }
                            }
                        
                        
                            function hideShowUI(){
                                console.log(trackSelectTypeHolder);
                                if(trackSelectTypeHolder == "Filter"){
                                    document.getElementById("presetListsDiv").style.display = "none";
                                    document.getElementById("optionsDiv").style.display = "inline-block";
                                } else if(trackSelectTypeHolder == "List"){
                                    document.getElementById("presetListsDiv").style.display = "inline-block";
                                    document.getElementById("optionsDiv").style.display = "none";
                                }
                            }
                        
                            function openInstructions(){
                                document.getElementById("instructionsDiv").style.display = "inline-block";
                                document.getElementById("openInsButton").style.display = "none";
                                document.getElementById("closeInsButton").style.display = "inline-block";
                            }
                        
                            function closeInstructions(){
                                document.getElementById("instructionsDiv").style.display = "none";
                                document.getElementById("closeInsButton").style.display = "none";
                                document.getElementById("openInsButton").style.display = "inline-block";
                            }