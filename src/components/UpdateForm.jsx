import "./App.css"

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return(
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className=" input1 "
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg  mr-20"
            id="btn1"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-light"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;