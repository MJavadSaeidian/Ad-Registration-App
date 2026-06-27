import { ThreeCircles } from "react-loader-spinner"


function Loader() {
  return (
    <ThreeCircles color="#304ffe" visible={true} wrapperStyle={{ margin: "auto" }} />
  )
}

export default Loader