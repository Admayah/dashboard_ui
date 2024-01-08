import "./App.css";
import DashboardAside from "./components/DashboardAside/DashboardAside";
import MainHeader from "./components/DashboardMainHeader/MainHeader";
import DashboardMenu from "./components/DashboardMenu/DashboardMenu";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <main>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{  display: "flex", width:"100%"  }}>
        <DashboardMenu />
        <DashboardAside />
        <MainHeader />
        </div>

        {/* <div style={{ display: "flex", border: "2px solid yellow" }}>
        <DashboardMenu />
        <div style={{display: "flex",padding: "30px"}}>
        <DashboardAside />
        <MainHeader />
        </div>
    
        </div> */}
      
        {/* <div style={{display: "flex", width:"100%"}}>
        <DashboardMenu />
        <DashboardAside />
        <div style={{display: "flex", flexDirection:"column", padding: "10px 30px"}}>
        <MainHeader />
        
        </div>
       
        </div> */}
        
      </div>
    </main>
  );
}

export default App;
