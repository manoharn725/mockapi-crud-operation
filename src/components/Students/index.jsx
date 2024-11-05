import { useNavigate } from "react-router-dom";
import { useGetStudentsDataQuery } from "../../store/api/studentsApi";
import "./index.scss";

const Students = () => {
  const { data } = useGetStudentsDataQuery();
  const studentsList = data || [];
  console.log(studentsList);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate('/create-form/id');
  }
  return (
    <div className="students__list">
      {studentsList.length > 0 ? (
        studentsList.map((student) => (
          <div key={student.id} className="card">
            <p>Student Id:{student.id}</p>
            <p>
              Name:{student.firstName} {student.lastName}
            </p>
            <p>Email:{student.email}</p>
            <p>Phone Number:{student.phoneNumber}</p>
            <button onClick={handleEdit}>edit</button>
          </div>
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Students;
