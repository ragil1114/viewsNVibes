const db = require('../config/connection');
const { Tours } = require('../models');

db.once('open', async () => {
    await Tours.deleteMany({});

    // create user data
    const toursData = [];
    const seedTourId = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    const seedTourGuide = ["Brad", "Elmer", "Rahil", "Hibo", "Bob", "Robert", "Rob", "Jane", "Alex", "Brent", "Bruce", "Pam",
        "Henry", "Tyler", "Steve", "Kim"]
    const seedTourDestination = ["San Antonio", "San Antonio", "San Antonio", "San Antonio",
        "San Francisco", "San Francisco", "San Francisco", "San Francisco",
        "New York", "New York", "New York", "New York",
        "Houston", "Houston", "Houston", "Houston"]
    const seedTourName = ["Explore the RiverWalk", "Walk the Riverwalk", "The Historic Alamo", "The Forts of Tejas",
        "The Streets of San Fran", "See Chinatown!", "Trolley Adventure", "Escape Alcatraz",
        "Inside Wall Street", "Remembering 9/11", "Broadway Spectacular", "Ellis Island & the Statue of Liberty",
        "Reliant Stadium Tour", "Exploring the Tunnels", "Museum Extravaganza", "Oil, Oil, Oil"]
    const seedImage = ["Brad.avif", "Elmer.avif", "Rahil.avif", "Hibo.avif", "Bob.avif", "Robert.avif", "Rob.avif", "Jane.avif", "Alex.avif", "Brent.avif", "Bruce.avif", "Pam.avif",
        "Henry.avif", "Tyler.avif", "Steve.avif", "Kim.avif"]
    const seedDescription = ["The River Walk Walking Tour is a 3 hour walking tour of the San Antonio River Walk.  The tour stops every 15 minutes to refill on margaritas and sample some of the best food San Antonio has to offer.",
        "This wonderful River Walk Tour is a 2 hour cart tour of the San Antonio River Walk.  The tour hits all the beautiful and fun sites of the San Antonio River Walk.",
        "Learn all about the Alamo including what lead up to the battle and, in defeat, its significance in the the Texas War for Independence",
        "This bus and walking tour takes our guests thru all four of the major missions and forts that surround the San Antonio area.",
        "A challenging bicycle riding tour of the hills of San Francisco.  Come ride with us!",
        "Eat great food and learn about a significant regional culture.  This immersive bus and walking tour takes you to several major China Town stops.",
        "Ride the historic San Francisco trolleys!",
        "Can you escape? Visit Alcatraz Island.  This tour will take you to the island by ferry where you will be lead by an experienced guide thru the historic prison complex.",
        "The best walking tour of Wall Street.  See behind the scenes of the New York Stock Exchange",
        "Visit the hallowed grounds of the 9/11 Memorial.",
        "A walking tour of the many venues of Broadway.  Conclude the tour with a 3-hour play.",
        "Visit Ellis Island and the Statue of Liberty.  Tours start at the Ellis Island immigration building and concludes with a boat trip around the the Statue of Liberty.",
        "A two-hour behind the scenes look into Reliant Stadium.  You may even get to talk to a player or coach.",
        "Did you know Houston has an extensive entertainment and cuisine underground.  Come explore with use!",
        "Tour the world-renowned museums of Houst, Texas!",
        "Houston is the center of the worlds oil.  Let us walk you thru the Petroleum Museum and show you how oil became such of big part of Texas"
    ]

    for (let i = 0; i < 16; i += 1) {
        // console.log (seedTourId[i], seedTourGuide[i], seedTourDestination[i], 
        // seedTourName[i], seedImage[i], seedDescription[i]);
       const tourId = seedTourId[i];
       const tourGuide = seedTourGuide[i];
       const tourDestination = seedTourDestination[i];
       const tourName = seedTourName[i];
       const image = seedImage[i];
       const description = seedDescription[i];
       toursData.push({ tourId, tourGuide, tourDestination, tourName, image, description} );

    };
    await Tours.collection.insertMany(toursData);

    

    // console.log('all done! Here is what was created: ', createdTours);
    console.log('all done!');
    process.exit(0);
});