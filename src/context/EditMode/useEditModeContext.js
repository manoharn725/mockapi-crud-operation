import { useContext } from "react";
import EditModeContext from "./EditModeContext";

export const useEditModeContext = () => useContext(EditModeContext);
