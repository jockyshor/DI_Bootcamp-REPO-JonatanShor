
      const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];


let mainpage = document.getElementById("main")




    

for (let robot of robots){
        
    

        let cardDiv = document.createElement("div");
        cardDiv.className = "col s12 m6 l4";
        cardDiv.style.marginBottom = "20px"

        let robotCard = document.createElement("div");
        robotCard.className = "card blue-grey darken-1";
        robotCard.style.height = "auto";
        robotCard.style.minHeight = "400px"
        cardDiv.appendChild(robotCard);

        
        let robotContent = document.createElement("div");
        robotContent.className = "card-content center-align white-text";
        robotContent.style.paddingTop = "10px"
        robotCard.appendChild(robotContent);




        let robotImage = document.createElement("img")
        robotImage.src = robot.image;
        robotImage.class = "cirle responsive-img"
        robotImage.style.width = "100%"; 
        robotImage.style.height = "auto";
        robotContent.appendChild(robotImage);

        let robotName = document.createElement("p");
        robotName.textContent = robot.name;
        robotName.style.fontSize = "clamp(1rem, 2vw, 1.5rem)"
        robotContent.appendChild(robotName);

        let robotUserName = document.createElement("h5");
        robotUserName.textContent= robot.username;
        robotUserName.style.fontWeight = "bold";
        robotUserName.style.fontSize = "clamp(1rem, 2vw, 1.5rem)";
        robotContent.appendChild(robotUserName);

        let robotEmail = document.createElement("p");
        robotEmail.textContent = robot.email;
        robotEmail.style.fontSize = "clamp(0.7rem, 2vw, 1rem)"
        robotContent.appendChild(robotEmail);

        mainpage.appendChild(cardDiv);
    }


function renderSpecificRobots(robotList){
    mainpage.innerHTML= "";
    for (robot of robotList){
        
    

        let cardDiv = document.createElement("div");
        cardDiv.className = "col s12 m6 l4";
        cardDiv.style.marginBottom = "20px";
        

        let robotCard = document.createElement("div");
        robotCard.className = "card blue-grey darken-1";
        robotCard.style.height = "auto";
        robotCard.style.minHeight = "400px"
        cardDiv.appendChild(robotCard);

        
        let robotContent = document.createElement("div");
        robotContent.className = "card-content center-align white-text";
        robotContent.style.paddingTop = "10px"
        robotCard.appendChild(robotContent);




        let robotImage = document.createElement("img")
        robotImage.src = robot.image;
        robotImage.class = "cirle responsive-img"
        robotImage.style.width = "100%"; 
        robotImage.style.height = "auto";
        robotContent.appendChild(robotImage);

        let robotName = document.createElement("p");
        robotName.textContent = robot.name;
        robotName.style.fontSize = "clamp(1rem, 2vw, 1.5rem)"
        robotContent.appendChild(robotName);

        let robotUserName = document.createElement("h5");
        robotUserName.textContent= robot.username;
        robotUserName.style.fontWeight = "bold";
        robotUserName.style.fontSize = "clamp(1rem, 2vw, 1.5rem)";
        robotContent.appendChild(robotUserName);

        let robotEmail = document.createElement("p");
        robotEmail.textContent = robot.email;
        robotEmail.style.fontSize = "clamp(0.7rem, 2vw, 1rem)"
        robotContent.appendChild(robotEmail);

        mainpage.appendChild(cardDiv);
    }

}

let searchBar = document.getElementById("search");
searchBar.addEventListener("input", (e) => {
    console.log(e.target.value)
    let searchedString = e.target.value.toLowerCase();

    if (searchedString.length = 0)return;

    const filteredRobots = robots.filter((robot) => {
        if (robot.name.toLowerCase().includes(searchedString) || robot.username.toLowerCase().includes(searchedString)|| robot.email.toLowerCase().includes(searchedString))
        return robot;
    });

    renderSpecificRobots(filteredRobots)
} 
)

