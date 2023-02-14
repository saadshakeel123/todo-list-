import "./App.css"

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className=" input1 "
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg "
            id="btn1"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm;