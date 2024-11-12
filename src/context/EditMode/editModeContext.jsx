import { createContext, useState } from "react";

const EditModeContext = createContext();

export const EditProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const handleEditMode = (isEditMode) => {
    setIsEditMode(isEditMode)
  };
  return (
    <EditModeContext.Provider value={{ isEditMode, handleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export default EditModeContext;