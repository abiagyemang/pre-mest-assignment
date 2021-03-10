import NotificationComponent from './notificationcomponent'

function DetailComponent(props) {

    return (
        <div>

            <div>DetailComponent</div>
            <NotificationComponent 
                notificationFName={props.detailFName}
                notificationLName={props.detailLName} 
                notificationEmail={props.detailEmail}
                notificationNumber={props.detailNumber}
                notificationDateOfBirth={props.detailDateOfBirth}
            />
        </div>

    )
}

export default DetailComponent;