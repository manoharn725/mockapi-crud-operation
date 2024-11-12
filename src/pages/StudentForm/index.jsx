import CreateForm from "../../components/CreateForm";
import { useEditModeContext } from "../../context/EditMode/useEditModeContext";
import "./index.scss";

const StudentForm = () => {
  const { isEditMode } = useEditModeContext();
  return (
    <div className="student-form__container">
      <h1>{isEditMode ? "Edit" : "Add"} Student Details</h1>
      <CreateForm />
    </div>
  );
};
export default StudentForm;
