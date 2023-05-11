import Header from "./Header";
import Main from "./Main";
import Main2 from "./Main2";
function App() {
  return (
    <div className="container">
      <Header  title="React Prop & State Project"
               description=" React props is just a JavaScript object which can be passed from parent component to child  component and props are readonly we can't modify the props also called immutable.
               State is also simple JavaScript object which can store data related to every component. For state modification we have to use React.useState function for functional component. For the class component their is a different thing."
               />
               <Main/>
               <Main2/>
    </div>
  );
}

export default App;
