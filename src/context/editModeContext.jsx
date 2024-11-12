import { createContext, useContext, useState } from "react";

const EditModeContext = createContext();

export const useEditModeContext = () => useContext(EditModeContext);

export const EditProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const handleEditMode = (isEditMode = null) => {
    {
      isEditMode === null
        ? setIsEditMode(isEditMode)
        : setIsEditMode((isEditMode) => !isEditMode);
    }
  };
  return (
    <EditModeContext.Provider value={{ isEditMode, handleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};
