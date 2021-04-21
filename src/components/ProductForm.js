import axios from 'axios';
import {React,useState} from 'react'
import {Form,Button} from "react-bootstrap";
import { connect, useDispatch } from 'react-redux';
import {addProduct} from "../actions/product";
import {APIUrls} from "../helper/urls";
// import axios from "axio";

function ProductForm() {

    const [title,setTitle] = useState('');
    const [qty,setQty] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState('');
     const [fileName,setFileName] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formdata = new FormData();

        formdata.append("title",title)
        formdata.append("qty",qty)
        formdata.append("description",desc)
        formdata.append("productImage",fileName)
        formdata.append("token_farmer",localStorage.getItem('token_farmer'))
        formdata.append("price",price);
        console.log("form Data>>>",formdata.get('title'));

        

        dispatch(addProduct(formdata));

        reset();

    }
    const reset = () =>{
        setTitle('')
        setQty('')
        setDesc('')
        setPrice('')
        setFileName(null)

    }

//     async function register(e){
//         e.preventDefault()
//         try {
//                 const formdata = new FormData()

//                 formdata.append("emailid",emailid)
//                 formdata.append("password",password)
//                 formdata.append("cpassword",cpassword)
//                 formdata.append("image",fileName)


//                 await axios.post("http://localhost:8000/auth/",formdata)

//         }
//         catch{
//             console.log('error')
//         }
// }



    const onchangeFile=(e)=>{
        setFileName(e.target.files[0]);
    }


    return (
        <div>
        <Form enctype="multipart/form-data" onSubmit={handleSubmit}>
            <h3 style={{color: "black"}}>ADD PRODUCT</h3>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter product name" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Qty</Form.Label>
            <Form.Control type="number" value={qty} onChange={(e)=> setQty(e.target.value)} placeholder="Enter Qty" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>price</Form.Label>
            <Form.Control type="number"  value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Enter price" />
            
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
             <Form.Control as="textarea" rows={3}   value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder="Enter Description"/>
         </Form.Group>

          <Form.Group>
          <input type='file'
          filename='image' 
          placeholder='choose image'
          onChange={onchangeFile}
          />
        </Form.Group> 

        {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
             <Form.Text className="text-muted">
                terms & conditions
             </Form.Text> 
        </Form.Group> */}
        <Button variant="primary" type="submit">
            Add 
        </Button>
    </Form>
        </div>
    )
}

export default ProductForm

