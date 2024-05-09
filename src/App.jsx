import Header from "./components/Header";
import Card from "./kit/Card/Card";

function App() {
   return (
      <div className="wrapper">
         <Header />
         <div className="px-10 py-8">
            <h1 className="title-1">Все кроссовки</h1>
            <div className="listing">
               <Card />
               <Card />
            </div>
         </div>
      </div>
   );
}

export default App;
