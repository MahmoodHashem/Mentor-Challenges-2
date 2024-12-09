import { useContext } from "react"
import FormContext from "../context/FormContext"


console.log(FormContext)

const useForm = () => useContext(FormContext)


 export default useForm
