var menu = document.getElementById("menu");
var box = document.querySelector(".box");
var subbox = document.querySelector(".subbox");
var cancel = document.getElementById("cancel");
var dropdown = document.querySelector("#drop_down");
var topdown = document.querySelector("#top_down");
const col_1 = document.querySelector(".col-1");
const row_1_1 = document.querySelector(".row-1-1");
var box4 = document.querySelector(".box-items-4");
var box5 = document.querySelector(".box-items-5");
// const tryagain = document.getElementById("try-again");
// const display_div = document.querySelector(".internet-check");


menu.addEventListener("click", function () {
    box.style.display = "block";
    box.style.transition = "all 1s ease-in-out";
    box.style.transform = "translatey(-38%)";
    box.style.position = "fixed";
    box.style.width = "100%";
    box.style.zIndex = "1";
});

cancel.addEventListener("click", function () {
    box.style.display = "none";
    box.style.transition = "all 1s ease-in-out";
});

dropdown.addEventListener("click", function () {
    box4.style.display = "block";
    box4.style.transition = "all 1s ease-in-out";
    box5.style.display = "block";
    box5.style.transition = "all 1s ease-in-out";
    dropdown.style.display = "none";
    topdown.style.display = "block";
    var keyframes = [
        { transform: "translateY(-100%)" },
        { transform: "translateY(0px)" },
    ];

    var options = {
        duration: 1000,
        easing: "ease-in-out",
    };

    box4.animate(keyframes, options);
    box5.animate(keyframes, options);
});

topdown.addEventListener("click", function () {
    box4.style.display = "none";
    box4.style.transition = "all 1s ease-in-out";
    box5.style.display = "none";
    box5.style.transition = "all 1s ease-in-out";
    dropdown.style.display = "block";
    topdown.style.display = "none";
    var keyframes = [
        { transform: "translateY(0px)" },
        { transform: "translateY(-100%)" },
    ];
    var options = {
        duration: 1000,
        easing: "ease-in-out",
    };
    box4.animate(keyframes, options);
    box5.animate(keyframes, options);
});

// tryagain.addEventListener("click", function () {
//     location.reload();
// });

// function checkinternet(online) {
//     if (online) {
//         display_div.style.display = "none";
//         header.style.filter = "none";
//         navbar.style.filter = "none";
//         col_1.style.filter = "none";
//         row_1_1.style.filter = "none";
//         document.body.style.overflow = "auto";
//     } else {
//         display_div.style.display = "block";
//         document.body.style.overflow = "hidden";
//         header.style.filter = "blur(5px)";
//         navbar.style.filter = "blur(5px)";
//         col_1.style.filter = "blur(5px)";
//         row_1_1.style.filter = "blur(5px)";
//     }
// }

const searchbutton=document.querySelector("#search-button");
searchbutton.addEventListener("click",function(){
    window.location.href="show.html";
});



const contact=document.querySelector("#contact");
const contact_div=document.querySelector(".contact");
const contact_subdiv=document.querySelector("#contact-1");


contact.addEventListener("click",(e)=>{
    e.preventDefault();
    contact_div.scrollIntoView({behavior:"smooth"});
});


contact_subdiv.addEventListener("click",(e)=>{
    e.preventDefault();
    contact_div.scrollIntoView({behavior:"smooth"});
    box.style.display = "none";

});

function display_help(){
    const feedbackdiv=document.querySelector(".feedback-div");
    const topup=document.getElementById("topup");
    const help_close=document.getElementById("help_close");

    topup.addEventListener("click",function(){
        feedbackdiv.style.display="block";
        feedbackdiv.style.zIndex="99"
        document.body.classList.add("dontscroll");
        document.querySelector("header").style.opacity="0.4";
        document.querySelector(".navbar-1").style.opacity="0.4";
        document.querySelector(".navbar-2").style.opacity="0.4";
        document.querySelector(".box").style.opacity="0.4";
        document.querySelector(".col-1 h1").style.opacity="0.4";
        document.querySelector(".search-div").style.opacity="0.4";
        document.querySelector(".row-1-1").style.opacity="0.4";
        document.querySelector(".genere-section").style.opacity="0.4";
        document.querySelector(".how-row").style.opacity="0.4";
    });
    help_close.addEventListener("click",function(){
        document.body.classList.remove("dontscroll");
        document.querySelector("header").style.opacity="1";
        document.querySelector(".navbar-1").style.opacity="1";
        document.querySelector(".navbar-2").style.opacity="1";
        document.querySelector(".box").style.opacity="1";
        document.querySelector(".col-1 h1").style.opacity="1";
        document.querySelector(".search-div").style.opacity="1";
        document.querySelector(".row-1-1").style.opacity="1";
        document.querySelector(".genere-section").style.opacity="1";
        document.querySelector(".how-row").style.opacity="1";
        feedbackdiv.style.display="none";
    })

}
display_help();




// let booknames=[

// "The Underground Girls of Kabul",
// "The Vanishing Half",
// "The Weight of Ink",
// "The Wife Between Us",
// "The Wind-Up Bird Chronicle",
// "The Woman in the Window",
// "The Wonder",
// "Things Fall Apart",
// "To Kill a Mockingbird",
// "Transcendent Kingdom",
// "Untamed",
// "Where the Crawdads Sing",
// "White Teeth",
// "Wild",
// "A Gentleman in Moscow",
// "A Little Life",
// "A Long Petal of the Sea",
// "A Man Called Ove",
// "A Thousand Splendid Suns",
// "American Dirt",
// "An American Marriage",
// "Before We Were Yours",
// "Becoming",
// "Big Little Lies",
// "Born a Crime",
// "The Tattooist of Auschwitz",
// "The Testaments",
// "The Thirteenth Tale",
// "The Silent Wife",
// "The Immortalists",
// "The Goldfinch",
// "The Giver of Stars",
// "The Dutch House",
// "The Silent Patient",
// "The Night Circus",
// "The Girl with the Dragon Tattoo",
// "The Help",
// "The Hunger Games",
// "The Fault in Our Stars",
// "Gone Girl",
// "The Glass Castle",
// "The Kite Runner",
// "The Da Vinci Code",
// "The Silent Symphony",
// "The Enchanted Atlas",
// "Tales of the Midnight Sun",
// "Wandering Through Time",
// "The Quantum Paradox",
// "Dreams of Eternity",
// "The Alchemist's Legacy",
// "Chronicles of the Celestial Realm",
// "The Forgotten Heir",
// "Secrets in the Shadows",
// "The Sapphire Serpent",
// "Echoes of the Mind",
// "A Song for the Stars",
// "The Last Voyager",
// "Stolen Memories",
// "The Clockwork Conspiracy",
// "Whispering Winds",
// "In the Garden of Illusions",
// "Veil of Shadows",
// "Symphony of Stars",
// "The Hidden Oracle",
// "Shattered Reflections",
// "The Cursed Crown",
// "Chronicles of the Lost City",
// "The Glass Butterfly",
// "A Symphony of Souls",
// "The Celestial Key",
// "Beyond the Horizon",
// "Enigma of the Elders",
// "The Elemental Chronicles",
// "Serenade of Shadows",
// "Whispers in the Wind",
// "The Lunar Labyrinth",
// "Daughter of the Moon",
// "The Clockwork Garden",
// "The Starlight Sonata",
// "The Alabaster Oracle",
// "Sirens of the Deep",
// "Chronicles of the Nebula",
// "The Quantum Enigma",
// "Dreams of the Crystal Kingdom",
// "The Silent Scribe",
// "Shadows of the Starlight",
// "The Enchanted Forest",
// "The Lost Lullaby",
// "A Dance with Destiny",
// "The Celestial Codex",
// "Echoes from the Abyss",
// "The Secret Garden of Time",
// "Symphony of Secrets",
// "The Starlit Citadel",
// "Tales of the Astral Realm",
// "Whispers of the Enchantress",
// "The Timeless Tapestry",
// "The Sapphire Cipher",
// "Beneath the Celestial Veil",
// "The Lunar Lyric",
// "Shadows of the Siren",
// "The Clockwork Conundrum",
// "The Forgotten Symphony",
// "Secrets of the Celestial Archives",
// "Enchanted Echoes",
// "Chronicles of the Shattered Realm",
// "The Celestial Alchemist",
// "The Star-Crossed Chronicles",
// "Symphony of Sorcery",
// "Whispers of the Seraph",
// "Dreams of the Starborn",
// "The Alabaster Serenade",
// "Chronicles of the Crystal Citadel",
// "Veil of the Void",
// "The Lunar Lexicon",
// "The Cursed Codex",
// "Shadows of the Stargazer",
// "The Celestial Sentinel",
// "Echoes of the Ether",
// "The Clockwork Kingdom",
// "The Forgotten Frontier",
// "Secrets of the Starlit Spire",
// "Beneath the Lunar Lattice",
// "The Enchanted Elegy",
// "Shadows of the Shattered Scepter",
// "The Celestial Symphony",
// "The Quantum Quandary",
// "Whispers of the Whispering Willow",
// "The Clockwork Citadel",
// "Dreams of the Dimensional Drifter",
// "The Alabaster Anomaly",
// "Chronicles of the Echoing Abyss",
// "The Starlit Lullaby",
// "Shadows of the Celestial Empire",
// "The Lunar Labyrinthine",
// "Symphony of the Spheres",
// "The Silent Sovereign",
// "The Celestial Cipher",
// "Echoes of the Enchanted Isle",
// "Secrets of the Stargazer",
// "The Quantum Quill",
// "The Clockwork Constellation",
// "Dreams of the Dimensional Descent",
// "The Alabaster Arbiter",
// "Chronicles of the Celestial Sanctum",
// "The Starlit Symphony",
// "Whispers of the Wyrm",
// "A Symphony of Shadows",
// "The Enchanted Echo",
// "Tales of the Starlight Scribe",
// "The Quantum Quest",
// "Shadows of the Sapphire Serpent",
// "Echoes of the Elemental Empire",
// "The Silent Scepter",
// "Whispers of the Wyrmwood",
// "The Cursed Chronicle",
// "Symphony of the Celestial Scribe",
// "The Celestial Serpent",
// "Dreams of the Dark Moon",
// "The Alabaster Astral",
// "Chronicles of the Crystal Cavern",
// "The Clockwork Codex",
// "The Forgotten Frontier",
// "Secrets of the Starlit Spire",
// "Beneath the Lunar Lattice",
// "The Enchanted Elegy",
// "Shadows of the Shattered Scepter",
// "The Celestial Symphony",
// "The Quantum Quandary",
// "Whispers of the Whispering Willow",
// "The Clockwork Citadel",
// "Dreams of the Dimensional Drifter",
// "The Alabaster Anomaly",
// "Chronicles of the Echoing Abyss",
// "The Starlit Lullaby",
// "Shadows of the Celestial Empire",
// "The Lunar Labyrinthine",
// "Symphony of the Spheres",
// "The Silent Sovereign",
// "The Celestial Cipher",
// "Echoes of the Enchanted Isle",
// "Secrets of the Stargazer",
// "The Quantum Quill",
// "The Clockwork Constellation",
// "Dreams of the Dimensional Descent",
// "The Alabaster Arbiter",
// "Chronicles of the Celestial Sanctum",
// "The Starlit Symphony",
// "Whispers of the Wyrm",
// "A Symphony of Shadows",
// "The Enchanted Echo",
// "Tales of the Starlight Scribe",
// "The Quantum Quest",
// "Shadows of the Sapphire Serpent",
// "Echoes of the Elemental Empire",
// "The Silent Scepter",
// "Whispers of the Wyrmwood",
// "The Cursed Chronicle",
// "Symphony of the Celestial Scribe",
// "The Celestial Serpent",
// "Dreams of the Dark Moon",
// "The Alabaster Astral",
// "Chronicles of the Crystal Cavern",
// "The Clockwork Codex",
// "The Forgotten Frontier",
// "Secrets of the Starlit Spire",
// "Beneath the Lunar Lattice",
// "The Enchanted Elegy",
// "Shadows of the Shattered Scepter",
// "The Celestial Symphony",
// "The Quantum Quandary",
// "Whispers of the Whispering Willow",
// "The Clockwork Citadel",
// "Dreams of the Dimensional Drifter",
// "The Alabaster Anomaly",
// "Chronicles of the Echoing Abyss",
// "The Starlit Lullaby",
// "Shadows of the Celestial Empire",
// "The Lunar Labyrinthine",
// "Symphony of the Spheres",
// "The Silent Sovereign",
// "The Celestial Cipher",
// "Echoes of the Enchanted Isle",
// "Secrets of the Stargazer",
// "The Quantum Quill",
// "The Clockwork Constellation",
// "Dreams of the Dimensional Descent",
// "The Alabaster Arbiter",
// "Chronicles of the Celestial Sanctum",
// "The Starlit Symphony",
// ]
// const resultbox = document.getElementsByClassName("search-box")[0]; // Access the first element
// const search_box = document.getElementById("search-box");

// search_box.onkeyup = function () {
//     let res = [];
//     let input = search_box.value;
    

//     if (input.length) {
//         res = booknames.filter((key) => {
//             return key.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(res);
//     }
//     display(res);
// };

// function display(res) {
//     const cont = res.map((list) => {
//         return "<li>" + list + "</li>";
//     });
//     resultbox.innerHTML = "<ul>" + cont.join("") + "</ul>"; // Use join to convert the array to a string
// }






