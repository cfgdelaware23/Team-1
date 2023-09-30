function Event() {
    return (
        <div> 
            <h2 className="event-name"> Event Title 1</h2>
            <p className="event-description"> Event Description</p>
            <p className="event-date"> Event Date</p>
            <p className="event-time"> Event Time</p>
        </div>

    );
  }
  
export default function EventList(){
    return (
        <Event />
    )
}