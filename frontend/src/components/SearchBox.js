import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

const SearchBox = ({history}) => {

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        }
        else{
            history.push('/')
        }
    }

  return (
  
        <Form onSubmit={submitHandler} >
            <Row>
                <Col md={9}>
                    <Form.Control type='text' name='q' 
                        onChange = {(e)=>setKeyword(e.target.value)} 
                        placeholder='Search Products...' 
                        className='p-2 mr-sm-2 ml-sm-5'>
                    </Form.Control>
                </Col>
                <Col md={3}>
                <Button type='submit' variant='outline-success' className='p-2'>
                    Search
                </Button>
                </Col>
            </Row>
        </Form>
  
    
  )
}

export default SearchBox
