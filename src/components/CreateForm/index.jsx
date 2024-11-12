import { useEffect, useState } from "react";
import "./index.scss";
import {
  useAddStudentMutation,
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
} from "../../store/api/studentsApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEditModeContext } from "../../context/EditMode/useEditModeContext";

const CreateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isEditMode, handleEditMode } = useEditModeContext();

  const { id } = useParams();
  const [addStudent] = useAddStudentMutation();
  const { data: studentById } = useGetStudentByIdQuery(id, { skip: !id });
  const [updateStudent] = useUpdateStudentMutation();

  useEffect(() => {
    if (studentById) {
      handleEditMode(true);
      setFirstName(studentById.firstName || "");
      setLastName(studentById.lastName || "");
      setEmail(studentById.email || "");
      setPhoneNumber(studentById.phoneNumber || "");
    }
  }, [studentById, handleEditMode]);

  const navigate = useNavigate();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (event) => {
    //just for reference
    setLastName(event.target.value); //just for reference
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(Number(e.target.value)); //you can use + symbol instead of Number
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { firstName, lastName, email, phoneNumber };
    if (isEditMode) {
      await updateStudent({ id, ...studentData });
    } else {
      await addStudent(studentData);
    }
    handleEditMode(false);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__row">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
          required
        />
      </div>
      <div className="form__row">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
          required
        />
      </div>
      <div className="form__row">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        />
      </div>
      <div className="form__row">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          required
        />
      </div>
      <div className="form__row">
        <button type="submit" value="Submit" onSubmit={handleSubmit}>
          {isEditMode ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};
export default CreateForm;
