import { useState } from "react";
import "./index.scss";
import { useAddStudentMutation } from "../../store/api/studentsApi";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [addStudent]  = useAddStudentMutation();
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
    setPhoneNumber(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({firstName, lastName, email, phoneNumber})
    navigate('/')
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
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          required
        />
      </div>
      <div className="form__row">
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </div>
    </form>
  );
};
export default CreateForm;
