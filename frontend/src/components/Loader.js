import React from 'react'
import{Button,Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
        <Button variant="primary" disabled style={{margin:'auto',display:'block'}}>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            Loading...
        </Button>
    )
}

export default Loader
