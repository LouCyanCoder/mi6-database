import React, { useEffect, useState } from 'react';

export default function PeopleList({ search_term, selected_status }) {

    const [data, setData] = useState([]);

    const loadData = async () => {
        // prepare the URL
        //           /api/request?search=james&status=1
        const url = '/api/request?search=' + encodeURIComponent(search_term) + '&status=' + encodeURIComponent(selected_status);

        // make a fetch request onto that URL
        const response = await fetch(url);
        if (Math.floor(response.status / 100) !== 2) { // response code is something else than 2xx
            alert('Communication problem, please try again.');
        }

        // parse the response as JSON
        const data = await response.json();

        // change the state of this component, using the new data
        setData(data);
    }

    useEffect(() => {

        loadData();

    }, [search_term, selected_status]);

    return (
        <div className="people-of-interest__list">

            <ul>

                {
                    data.map(person => (

                        <li key={ person.id } className="people-of-interest__person">
                            { person.name }
                        </li>

                    ))
                }

            </ul>

        </div>
    )

}