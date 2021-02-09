import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import axios from "axios";

const EditContact = ({match}) => {
    const initialFieldValues = {
        fullName: '',
        email:'',
        phone:''
    }

    const [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const history = useHistory();

    const updateContact = async (e) => {
        e.preventDefault();
        const id = match.params.id;
        const result = axios.put(`/contact/${id}`, values).then(function (response) {
            if(response.data.status === 200){
                history.push({
                    pathname: "/"
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const fetchContacts = async () => {
        const id = match.params.id;
        const result = await axios.get(`/contact/${id}/edit`);
        
        setValues({
            fullName: result.data.contact.fullname,
            email: result.data.contact.email,
            phone: result.data.contact.phone
        });
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div>
            <h1>Hello form</h1>
            <form onSubmit={updateContact} >
                <div className="form-group">
                    <input type="text" name="fullName" className="form-control"
                    placeholder="Enter full name" required
                    value={values.fullName}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input type="email" name="email" className="form-control"
                    placeholder="Enter email" required
                    value={values.email}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input type="text" name="phone" className="form-control"
                    placeholder="Enter phone" required
                    value={values.phone}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success"
                    value="Edit Contact"                   
                    />
                </div>
            </form>
        </div>
    )
}

export default EditContact
