

export default function TodaySchedule(props) {
  const { title, body } = props;
  return (
    <div>
      <div>{title}</div>
      <ul>
        {body.map((item, index) => <li key={`Today${index}`}>{item.body}</li>)}
      </ul>
    </div>
  )
}