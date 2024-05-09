document.body.innerHTML = `
        <div class = "search-form">  
            <h2> Search a Show</h2>
            <input type ="Text"  id ="search" class = "add-user-name" placeholder = "enter a TV show name"/>
            <button onkeyup = "searchTvShow()">Search</button>
        </div>
    <section class ="shows-list">    
    </section>`;   





async function getAllShows(){
    const data = await fetch("https://api.tvmaze.com/shows",
      
        {method: "GET"    
    
    }
        ); // Return a Promise
    
    const shows = await data.json();

    const showContainer = document.querySelector(".shows-list");
            
    shows.forEach((show) => {
        showContainer.innerHTML += `
        <div class ="show-container">
        <div>
            <img class ="image" src = "${show.image.medium}" alt = "${show.id}" />  
        </div>                   
                <div class ="specs">
                    <p class ="show-name"> ${show.name}</p>
                    <p class ="show-network"> ${show.network.name}</p>
                    <p class ="show-summary"> ${show.summary}</p>
                    
                   
                </div>   
                
            </div>    
        `;
        
    });

    
    console.log(shows);
}
getAllShows();


async function searchTvShow(){
    const data = await fetch(
        "https://api.tvmaze.com/search/shows?q=friends"
    )
    const show = await data.json();
    console.log(show);

    const searchElement = document.querySelector("#search");
    searchElement.onkeyup = (e) => {
        searchTvShow(searchElement.value);
    };

}
searchTvShow();

