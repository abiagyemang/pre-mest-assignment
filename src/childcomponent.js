
function ChildComponent(props){

    return (
              <div>

            <div>ChildComponent</div>
            <h1>Name:{props.childName}</h1>
            <h2>Gender:{props.childGender}</h2>
            <h2>Age:{props.childAge}</h2>
            <h2>Email:{props.childEmail}</h2>

             </div>

    )
}

export default ChildComponent;