import { useState } from "react";
import Item from "../Item/Item";

const Form = () => {

    console.log("form")

    return(
        
        <div className="form">
            <form action="">
                <input type="text" id="todo" placeholder="Create a new task to do"/>
                <button className="send">Send</button>
            </form>
            <div className="tasks">
                <h2>0 Task(s) left to do</h2>
                <ul className="list">
                    <Item />
                    <Item />
                    <Item />
                </ul>
            </div>
        </div>
    )
}

export default Form;