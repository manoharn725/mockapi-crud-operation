import { useContext } from "react";
import EditModeContext from "./editModeContext";

export const useEditModeContext = () => useContext(EditModeContext);
