import React from 'react';

type PropsType = {
    data: DataPropsType
}

type DataPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    students: Array<string>
}

type TasksPropsType = {
    taskId: number
    title: string
    isDone: boolean
}


export const Tasks = (props: PropsType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map((el) => {
                    return (
                        <li><input type="checkbox" checked={el.isDone}/><span>{el.title}</span></li>
                    )
                })}
            </ul>
            <ul>
                {props.data.students.map((el) => {
                    return (
                        <li>{el}</li>
                    )
                })}
            </ul>
        </div>
    );
}
