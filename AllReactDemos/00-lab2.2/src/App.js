import Header from "./component/Header";
import { Table } from "./component/SortedTable";

// import material table by npm commandsas follows
// 1.npm install @material-ui/core    2.npm install material-table


function App() {
  return (
    <div className="container">
      <Header/>
      <Table/>
    </div>
  );
}

export default App;
