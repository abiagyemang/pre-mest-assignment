
import DetailComponent from './detailcomponent'

function DashboardComponent(props){

    return(
      <div>

    <div>DashboardComponent</div>
    <DetailComponent 
    detailFName={props.dashboardFName}
    detailLName={props.dashboardLName} 
    detailEmail={props.dashboardEmail}
    detailNumber={props.dashboardNumber}
    detailDateOfBirth={props.dashboardDateOfBirth}
     />
     
     
      </div>
    )
}

export default DashboardComponent;