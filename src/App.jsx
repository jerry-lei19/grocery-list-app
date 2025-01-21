
import Recipe from "./Recipe";
function App() {
  // TODO: Add recipe object
const recipe = {
  title: 'Mashed potatoes',
  feedback: {
      rating: 2.8,
      reviews: 20
  },
  ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: '4 Tbsp butter', prepared: false },
      { name: '1/8 cup heavy cream', prepared: false },
      { name: 'Salt', prepared: true },
      { name: 'Pepper', prepared: true },
  ],
};
let ingreds=recipe.ingredients.map(function(item,index){
  return <li key={index} className={item.prepared?"prepared":"notprep"}>{item.name}</li>
})
  return ( 
    <div>
      <h1>Welcome to our recipe app</h1>
      <Recipe title={recipe.title} feed={recipe.feedback} ingredients={ingreds}/>
    </div>
   );
}

export default App;