import { Box } from "@material-ui/core";
import { useState } from "react";
import BasicCRUD from "../components/BasicCRUD"
import Navbar from './NavBar';
import partParameters from "../data/partParameters";
import supplierParameters from "../data/supplierParameters";
import AddPart from "./AddPart";
import axios from 'axios'

function Body(props) {
    
    // Import Props
    const [currPage, setCurrPage] = useState("parts")
    const [reRender, setReRender] = useState(false);

    const conditionalBody = () => {

        switch(currPage) {
            case "parts":
                return <BasicCRUD 
                        fetchDataMethod={async () => { return await axios.get('/parts')}} 
                        itemParameters={partParameters}
                        addItemForm={<AddPart />} 
                        /> 
            case "suppliers":
                return <BasicCRUD
                        fetchDataMethod={async () => { return await axios.get('/suppliers')}}
                        itemParameters={supplierParameters}
                        addItemForm={<AddPart />} 
                        />
            default:
        }
    }
    
    return (<>
        <Navbar setPage={setCurrPage}/>
        <div>
            {currPage}
        </div>

        <Box width="95%">
            {conditionalBody()}
        </Box>
    </>)
}

export default Body;