import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const AddContact = () => {
    const initialFieldValues = {
        fullName: "",
        email: "",
        phone: "",
        provider_id: -1
    };

    const [values, setValues] = useState(initialFieldValues);
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        console.log(values)
    };

    const handleSelectChange = (e) => {
        var { name } = e.target;
        var id = $(e.target).children(":selected").attr("id");
        console.log(id);
        setValues({
            ...values,
            [name]: id,
        });
        console.log(values)
    };

    const history = useHistory();

    const saveContact = async (e) => {
        e.preventDefault();
        const result = await axios
            .post("/contacts", values)
            .then(function (response) {
                if (response.data.status === 200) {
                    history.push({
                        pathname: "/",
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const fetchProviders = async () => {
        setLoading(true);
        const result = await axios.get("/allproviders");
        if (result.data.status === 200) {
            console.log(result.data.providers);
            setProviders((oldArray) => [...oldArray, result.data.providers]);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProviders();
    }, []);

    const mapiraj = () => {
        if (loading) {
            return <option>Choose providers</option>;
        } else {
            return providers.map((provider) =>
                provider.map((concrete) => (
                    <option key={concrete.id} id={concrete.id}>{concrete.fullname}</option>
                ))
            );
        }
    };

    return (
        <div>
            <h1>Add contact</h1>
            <form onSubmit={saveContact}>
                <div className="form-group">
                    <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="Enter full name"
                        required
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Enter phone"
                        required
                        value={values.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        name="provider_id"
                        onChange={handleSelectChange}
                    >
                        {mapiraj()}
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-success"
                        value="Add Contact"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddContact;
