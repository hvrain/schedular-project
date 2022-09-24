

export default function MonthSchedule(props) {
  const { title, body } = props;
  return (
    <div>
      <div>{title}</div>
      <ul>
        {body.map((item, index) => <li key={`Month${index}`}>{item.body}</li>)}
      </ul>
    </div>
  )
}