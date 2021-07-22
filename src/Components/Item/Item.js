export default function Item(props) {
    // console.log(props)
    return (
        <li className="item">
            <div>{props.task}</div>
            <button onClick={() => props.complFunc(props.id)}></button>
        </li>
    )
}
