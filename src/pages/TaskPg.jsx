import TaskItem from "../componets/TaskItem";

const TaskPg = () => {
    return (
        <>
            <h1>Lista de Tareas</h1>
            <div className="container-tarjetas">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        </>
    );
};

export default TaskPg;
