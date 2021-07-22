import { useState } from "react";
import Item from "../Item/Item";
import {v4 as uuidv4} from 'uuid'

const Form = () => {

    const [dataArr, setDataArr] = useState([
    ])

    const [stateInput, setStateInput] = useState();

    const completedTask = (id) => {
        const filteredState = dataArr.filter(item => {
            return (
                item.id !== id
            )
        })
        setDataArr(filteredState)
    }

    const linkedInput = (e) => {
        // console.log(e.target.value)
        setStateInput(e.target.value)
    }

    const addToDo = (e) => {
        e.preventDefault();

        const newArr = [...dataArr]

        const newToDo = {};
        newToDo.txt = stateInput;
        newToDo.id = uuidv4()

        if (newToDo.txt.length > 0){
            newArr.push(newToDo);
        } else {} 

        setDataArr(newArr)
        setStateInput('')
    }

    return(
        
        <div className="form">
            <form onSubmit={(e) => addToDo(e)}>
                <input type="text" id="todo" placeholder="Create a new task to do" value={stateInput} onInput={(e) => linkedInput(e)}/>
                <button className="send">Send</button>
            </form>
            <div className="tasks">
                <h2>{dataArr.length} Task(s) left to do</h2>
                <ul className="list">
                    {dataArr.map((item) => {
                        // console.log(item.id)
                        return (
                            <Item key={item.id} task={item.txt} id={item.id} complFunc={completedTask}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Form;