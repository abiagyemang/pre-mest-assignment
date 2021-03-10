import ChildComponent from './childcomponent';
function ParentComponent(props){

    return(
      <div>

    <div>ParentComponent</div>
    <ChildComponent childName={props.Name} childGender={props.gender} childAge={props.Age}
     childEmail={props.email} />
     
     
      </div>
    )
}

export default ParentComponent;