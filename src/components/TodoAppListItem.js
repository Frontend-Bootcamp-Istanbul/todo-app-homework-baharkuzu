import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";
import TodoAppDelete from "./TodoAppDelete";

const TodoAppListItem = ({content, id, completed, toggleTodo}) => {
    return (
        <table>
            <tr>
                <td style={{
                    textDecoration: completed ? "line-through" : "initial"
                }} onClick={() => toggleTodo(id)}> 
                {content}</td>
                <td><TodoAppDelete id={id}/></td>
            </tr>
        </table>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);