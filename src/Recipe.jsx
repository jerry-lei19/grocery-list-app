import "./App.css"
function Recipe(props) {
   
    return (  
        <div>
            <p>The title of the recipe is {props.title}</p> 
            <p className={(props.feed.rating)>=2&&"rates"}>it has {props.feed.reviews} reviews </p> 
            <ol>
            {props.ingredients}
            </ol>
        </div>
    );
}

export default Recipe;
