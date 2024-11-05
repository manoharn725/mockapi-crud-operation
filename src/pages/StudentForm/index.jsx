import CreateForm from '../../components/CreateForm';
import './index.scss';

const StudentForm = () => {
    return(
        <div className='student-form__container'>
            <h1>Add Student Details</h1>
            <CreateForm />
        </div>
    )
}
export default StudentForm;