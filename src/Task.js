export const Task = (props) => {
    return (
        <div>
           <p>
               {props.task}
               <button onClick={() => props.deleteTask(props.id)}>
                   <i className={"fa-solid fa-trash-can"}></i>
               </button>
           </p>
        </div>
    )
}