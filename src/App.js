import Head from "./components/header";
import back  from "./assets/bac.jpg";

function App() {
  return (
   <>
   <div style={{background: `url(${back}) no-repeat center fixed`}}>
    <Head/>
   </div>
   </>
  );
}

export default App;
