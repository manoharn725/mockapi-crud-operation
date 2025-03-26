import { useEffect, useState } from "react";
import "./index.scss";
import {
  useAddStudentMutation,
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
} from "../../store/api/studentsApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEditModeContext } from "../../context/EditMode/useEditModeContext";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
}

const CreateForm = () => {
  const [user, setUser] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isEditMode, handleEditMode } = useEditModeContext();

  const { id } = useParams();
  const [addStudent] = useAddStudentMutation();
  const { data: studentById } = useGetStudentByIdQuery(id, { skip: !id });
  const [updateStudent] = useUpdateStudentMutation();

  const fieldType = [
    {
      label: "First Name",
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      isRequired: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      isRequired: true,
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Email",
      isRequired: true,
    },
    {
      label: "Phone Number",
      type: "number",
      name: "phoneNumber",
      placeholder: "Phone Number",
      isRequired: true,
    },
  ];

  useEffect(() => {
    if (studentById) {
      handleEditMode(true);
      setUser((prevUser) => ({ ...prevUser, ...studentById}));
    }
  }, [studentById, handleEditMode]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isEditMode && id) {
        await updateStudent({ id, ...user }).unwrap();
      } else {
        await addStudent(user).unwrap();
      }
      handleEditMode(false);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fieldType.map(
        ({ label, type, name, placeholder, isRequired }, index) => (
          <div key={index} className="form__row">
            <label htmlFor={name}>{label}</label>
            <input
              type={type}
              name={name}
              value={user[name] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              required={isRequired}
            />
          </div>
        )
      )}
      <div className="form__row">
        <button type="submit" value="Submit" disabled={isSubmitting}>
          {isEditMode ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};
export default CreateForm;
