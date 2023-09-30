export default function Event(title, description, date, time) {
  return (
    <div>
      <h2 className="event-name">{title}</h2>
      <p className="event-description">{description}</p>
      <p className="event-date">{date}</p>
      <p className="event-time">{time}</p>
    </div>
  );
}
