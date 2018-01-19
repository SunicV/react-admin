import React from 'react'
import {Button, Input } from 'antd';
import {Item} from './item';
import './item.css';

let nextId = 1;

export default class Todo extends React.Component {
    // get todos from outer ReactDom.render..
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id : 0,
                    text: 'first todo',
                    completed: true
                }
            ],
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    addTodo(action) {
        const {todos} = this.state;
        let newTodos = todos.concat(...[action]);
        this.setState({
            todos: newTodos
            }
        )
    }

    editTodo(action) {
        if (action.type === 'EDIT_TODO') {
            const {todos} = this.state;
            let newTodos = todos.concat();
            newTodos[action.id] = action;
            this.setState({
                todos: newTodos
            });
            console.warn('setState in Todo..');
        }
        
    }

    handleChange(evt) {
        this.setState({
            input: evt.target.value
        })
    }

    render() {
        // must return (closed DOM)
        var {input} = this.state
        return (<div>
            <Input onChange={this.handleChange} value={input} className='input-txt' />
            <Button onClick = {() => {
                this.addTodo({
                    type: 'ADD_TODO',
                    text: input,
                    id: nextId ++,
                    completed: false
                });
                setTimeout(() => this.setState({input:""}),0)
            }}>
            ADD_TODO
            </Button>
            <ul className='ulist'>
                {this.state.todos.map(todo => {
                    return (
                       <Item key={todo.id} todo={todo}
                        onclick={()=>{
                            todo.type='EDIT_TODO';
                            todo.completed =!todo.completed;
                            this.editTodo(todo)
                        }}>
                        </Item>
                    )
                })}
            </ul>
        </div>)
    }
}
