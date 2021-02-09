import React, { useState, useEffect } from "react";
import ProviderOneContact from "./ProviderOneContact";
import ProviderContacts from "./ProviderContacts";
import {Link} from "react-router-dom";

const Provider = () => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showContacts, setShowContacts] = useState(false);
    const [contacts, setContacts] = useState([]);

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

    const fetchContacts = async (id) => {
        const result = await axios.get(`/providers/${id}`);

        if (result.data.status === 200) {
            setContacts((oldArray) => [...oldArray, result.data.contacts]);
        }
    };

    const getContacts = (id) => {
        fetchContacts(id);
        setShowContacts(true);
    };

    if (loading) {
        return <h1>Loading contacts...</h1>;
    }


    if (showContacts) {
        return contacts.map((contact) =>
            contact.map((concrete) => (
                <ProviderOneContact key={concrete.id} concrete={concrete} />
            ))
        );
    }

    return (
        <div className="jumbotron">
            <h1 className="display-3">Hello, user! You're welcome!</h1>
            <p className="lead">
                Please, choose your mobile operator to see al contacts belongs
                to that operator.
            </p>
            <hr className="my-4" />
            <p>All contact from choosen operator:</p>
            {providers.map((provider) =>
                provider.map((concrete) => (
                    <ProviderContacts
                        key={concrete.id}
                        concrete={concrete}
                        getContacts={getContacts}
                    />
                ))
            )}
        </div>
    );
};

export default Provider;
