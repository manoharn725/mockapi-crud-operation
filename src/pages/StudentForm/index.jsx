import CreateForm from '../../components/CreateForm';
import './index.scss';
import { useState } from 'react';

const StudentForm = () => {
    const [editMode, setEditMode] = useState(false);
    return(
        <div className='student-form__container'>
            <h1>{editMode? 'Edit' : 'Add'} Student Details</h1>
            <CreateForm editMode={editMode} setEditMode={setEditMode}/>
        </div>
    )
}
export default StudentForm;