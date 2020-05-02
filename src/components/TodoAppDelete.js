import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteTodo} from "../redux/actions";


const TodoAppDelete = ({id, deleteTodo}) => {
    return(
        <div>
            <button onClick={() => deleteTodo(id)}>Sil</button>
        </div>
    );
};

const mapDispatchToProps = {
    deleteTodo: deleteTodo
};

export default connect(null, mapDispatchToProps)(TodoAppDelete);