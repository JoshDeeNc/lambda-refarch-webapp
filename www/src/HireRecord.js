import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

function HireRecord({ updateToDo, toDos }) {
    const id = /[^/]*$/.exec(window.location.href)[0];
    const hireRecord = toDos.find(item => item.id === id);
    const editField = async (event) => {
        document.getElementById('displayDiv').display = 'none';
        document.getElementById('editDiv').display = 'block';
    }

    return (
        <div>
            <div class="row">
                <div class="col-md-10">
                    <div id="panel-1" class="panel">
                        <div class="panel-hdr">
                            <h2>
                                Hire Details
                                        </h2>
                            <Button onClick={editField} type="button" class="btn btn-sm btn-outline-default waves-effect waves-themed mr-2">
                                <span class="fal fa-pencil mr-1"></span>
                                                    Edit
                                                </Button>
                        </div>
                        
                        <div class="panel-container show">
                            <div class="panel-content">

                                <form>
                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Student Name </label>
                                        <Input type="text" class="form-control" name="name" id="newToDoName"
                                        value="5" placeholder="name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Code</label>
                                        <Input type="text" name="code" id="newToDoCode" placeholder="code"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Instrument</label>
                                        <Input type="text" name="code" id="newToDoInstrument" placeholder="instrument"
                                        value={hireRecord.instrument}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Brand</label>
                                        <Input type="text" name="brand" id="newToDoBrand" placeholder="brand" 
                                        value={hireRecord.brand}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Rate</label>
                                        <Input type="text" name="rate" id="newToDoRate" placeholder="rate"
                                        value={hireRecord.rate}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Owner</label>
                                        <Input type="text" name="owner" id="newToDoOwner" placeholder="owner" 
                                        value={hireRecord.owner}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="simpleinput">Due Date</label>
                                        <Input class="form-control" id="newToDoDueDate" type="date" name="date" placeholder="dd/mm/yyyy" value={hireRecord.due}/>
                                    </div>

                                    <Button onClick={updateToDo} class="btn btn-lg btn-primary waves-effect waves-themed mr-2 " className="ml-1">Update</Button>
                                    <Link to="/"><Button class="btn btn-lg btn-default waves-effect waves-themed " className="ml-1">Cancel</Button></Link>




                                </form>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HireRecord;