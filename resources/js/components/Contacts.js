import React, { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => {
        const result = await axios.get("/contact");

        if (result.data.status === 200) {
            setContacts((oldArray) => [...oldArray, result.data.contacts]);
            //moze i setContacts([...oldArray, result.data.contacts]); ali nije recommended, no wraper function
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []); // Likely ComponentDidMount

    const deleteContact = async (id) => {
        const result = await axios
            .delete(`/contact/${id}`)
            .then(function (response) {
                console.log("brisem");
                console.log(response.data);
                if (response.data.status === 200) {
                    fetchContacts();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        
        <div>
            {contacts.map((contact) =>
                contact.map((concrete) => (
                    <Contact
                        key={concrete.id}
                        concrete={concrete}
                        deleteContact={deleteContact}
                    />
                ))
            )}
            
        </div>
    );
};

export default Contacts;
