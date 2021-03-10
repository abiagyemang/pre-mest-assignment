
function ProfileComponent(props) {

    return (
        <div>

          <div>profilecomponent</div>
            <p> First name : {props.profileFName}</p>
            <p>Last name :{props.profileLName}</p>
            <p>Email :  {props.profileEmail}</p>
            <p>DateOfBirth: {props.profileDateOfBirth}</p>
            <p>number: {props.profileNumber}</p>

        </div>

    )
}

export default ProfileComponent;