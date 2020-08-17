import React,{useState, Fragment} from 'react'; 
import { Button, Modal, Form, Card, Table, Container, Row, Col } from 'react-bootstrap';



const AddProduct = ()=>{
    
    const [colorName, setColorName] = useState("");
    const [colorSize, setColorSize] = useState("");
    const [colorQuant, setColorQuant] = useState("");
    const [colorFile, setColorFile] = useState("");
    
    const AddedElement = ({name, file, size, quant}) => <div>
        <Card>
            <Card.Body className="card-body p-0">
                <Table responsive className="mb-0">
                   <thead>
                   <tr className="row">
                        <th className="p-2 col-xs-12 col-sm-3">
                            الاسم 
                        </th>
                        <th className="p-2 col-xs-12 col-sm-3">
                            الصورة
                        </th>
                        <th className="p-2 col-xs-12 col-sm-6">
                            الحجم
                        </th>
                    </tr> 
                   </thead>
                    
                    <tbody>
                    <tr className="row">
                        <td className="p-2 col-xs-12 col-sm-3">
                            {name} 
                        </td>
                        <td className="p-2 col-xs-12 col-sm-3">
                            {file}
                        </td>
                        <td className="p-2 col-xs-12 col-sm-6">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>الحجم</th>
                                        <th>الكمية</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{size}</td>
                                        <td>{quant}</td>
                                    </tr>
                                </tbody>
                                <Button variant="warning" className="p-2">
                                    اضافة حجم
                                </Button>
                            </Table>
                        </td>
                    </tr>    
                    </tbody>
                </Table>
                <Button variant="primary" className="m-2">
                    تعديل
                </Button>
                <Button variant="danger" className="m-2">
                    ازالة
                </Button>
            </Card.Body>
        </Card>
        </div>

    const [countColor, setCountColor] = useState(0);
    const [showColor, setShowColor] = useState(false);

    const handleClose = () => setShowColor(false);
    const handleShow = () => setShowColor(true);


    return (
    <div className="mt-2"> 
        <Container fluid>
            <Row className="mb-5">
                <Col xs={12}>
                    <Form>
                        <Card>
                            <Card.Header as="h5" className="p-2 text-right">
                                معلومات أساسية
                            </Card.Header>
                            <Card.Body className="card-body p-0">
                                <Table responsive className="mb-0">
                                    <tbody>
                                        <tr className="row">
                                            <td className="p-2 col-xs-12 col-sm-6">
                                                <Form.Group as={Row} controlId="name">
                                                    <Form.Label column sm="3">الاسم </Form.Label>
                                                    <Col sm="9">
                                                        <Form.Control type="text" required/>
                                                    </Col>
                                                </Form.Group>
                                            </td>
                                            <td className="p-2 col-xs-12 col-sm-6">
                                                <Form.Group as={Row} controlId="name">
                                                    <Form.Label column sm="3">الاسم </Form.Label>
                                                    <Col sm="9">
                                                        <Form.Control type="text" required/>
                                                    </Col>
                                                </Form.Group>
                                            </td>
                                            
                                        </tr>
                                        <tr className="row">
                                            <td className="p-2 col-xs-12 col-sm-6">
                                                <Form.Group as={Row} controlId="name">
                                                    <Form.Label column sm="3">الاسم </Form.Label>
                                                    <Col sm="9">
                                                        <Form.Control type="text" required/>
                                                    </Col>
                                                </Form.Group>
                                            </td>
                                            <td  className="p-2 col-xs-12 col-sm-6">
                                                <Form.Group as={Row} controlId="name">
                                                    <Form.Label column sm="3">الاسم </Form.Label>
                                                    <Col sm="9">
                                                        <Form.Control type="text" required />
                                                    </Col>
                                                </Form.Group>
                                            </td>
                                        </tr>
                                            
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Fragment>
                            { Array(countColor).fill(<AddedElement 
                                name={colorName}
                                file={colorFile}
                                size={colorSize}
                                quant={colorQuant}
                            />) }
                        </Fragment>
                        <Button variant="warning" onClick={handleShow}>اضافة لون</Button>
                        
                        <hr></hr>
                        <Button type="submit" variant="primary">اضافة المنتج</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        <Modal show={showColor} onHide={handleClose}>
            <Modal.Header closeButton  className="p-3">
                <Modal.Title>اضافة لون</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={() => {
                    handleClose();
                    setCountColor(countColor + 1);
                }}>
                <Form.Group controlId="formBasicName">
                    <Form.Label className="float-right">الاسم</Form.Label>
                    <Form.Control type="text" onChange={e => setColorName(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="float-right">الحجم</Form.Label>
                    <Form.Control type="text" onChange={e => setColorSize(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="float-right">الكمية</Form.Label>
                    <Form.Control type="text" onChange={e => setColorQuant(e.target.value)} required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="float-right">ضع صورة</Form.Label>
                    <Form.File id="fileControl" accept="image/*" onChange={e => setColorFile(e.target.value) } />
                </Form.Group>
                <Button variant="primary" type="submit">
                    حفظ اللون
                </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>

    );
}  

export default AddProduct