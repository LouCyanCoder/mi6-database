import React, { useState, useEffect } from 'react';

export default function StatusFilter({ setSelectedStatus }) {

    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async () => {

        const response = await fetch('/api/statuses');
        const data = await response.json();

        setStatuses(data);
    }

    useEffect(() => {
        // do this when the component mounts
        loadStatuses();

    }, []);

    return (
        <div className='status-filter'>
            {
                statuses.map(status => (

                    <button
                        key={ status.id }
                        onClick={ () => setSelectedStatus(status.id) }
                    >
                        { status.name }
                    </button>

                ))
            }
        </div>
    )

}