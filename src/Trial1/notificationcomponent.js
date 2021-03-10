import ProfileComponent from "./profilecomponent";

function NotificationComponent(props) {

  return (
    <div>
      <div>notificationcomponent</div>
      <ProfileComponent
        profileFName={props.notificationFName}
        profileLName={props.notificationLName}
        profileEmail={props.notificationEmail}
        profileNumber={props.notificationNumber}
        profileDateOfBirth={props.notificationDateOfBirth}
      />



    </div>

  )
}

export default NotificationComponent;