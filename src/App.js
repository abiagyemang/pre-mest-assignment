
// import { getDefaultNormalizer } from '@testing-library/dom';
// import MasterComponent from  './MasterComponent';
// import ParentComponent from './parentcomponent';
import DashboardComponent from './Trial1/dashboardcomponent';
import NotificationComponent from "./Trial1/notificationcomponent"

function App() {
  return (
    <div>
     {/* <MasterComponent name="1" height="45"/>
     <MasterComponent name="2" height="67"/>
     <MasterComponent name="3" height="34"/>
     <MasterComponent name="4" height="30"/> */}


     {/* <ParentComponent Name= "abena" gender= "female" Age= "26"email= "abigailagyemang16@gmail.com" /> */}
     <DashboardComponent dashboardFName="Abigail"
      dashboardLName="Agyemang" 
      dashboardEmail="abigailagyemang16@gmail.com" 
      dashboardNumber="0201296609"
      dashboardDateOfBirth="06/08/1994"/>

    </div>
  );

}



export default App;
