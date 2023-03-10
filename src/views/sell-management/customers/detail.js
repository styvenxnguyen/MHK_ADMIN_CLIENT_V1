import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ButtonLoading } from '../../../components/Button/LoadButton'

const FormsElements = () => {
  const [validated, setValidated] = useState(false);
  const [validatedTooltip, setValidatedTooltip] = useState(false);
  const [supportedCheckbox, setSupportedCheckbox] = useState(false);
  const [supportedRadio, setSupportedRadio] = useState(false);
  const [supportedSelect, setSupportedSelect] = useState(0);
  const [supportedFile, setSupportedFile] = useState(0);
  const [showLoader, setShowLoader] = useState(false)

  const [data, setData] = useState(
    {
      user_name: '',
      user_type: '',
      user_code: '',
      user_group: '',
      user_phone: '',
      user_email: '',
      user_password: '',
      user_region: '',
      user_commune: '',
      user_address: '',
      createdAt: '',
      updatedAt: ''
    }
  )
  

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      user_name: data.user_name,
      user_type: data.user_type,
      user_code: data.user_code,
      user_group: data.user_group,
      user_phone: data.user_phone,
      user_email: data.user_email,
      user_password: data.user_password,
      user_region: data.user_region,
      user_commune: data.user_commune,
      user_address: data.user_address,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    };
    axios.post('http://localhost:5000/mhk-api/v1/user/create-customer', customerData).then((response) => {
    setData({
      user_name: '',
      user_type: '',
      user_code: '',
      user_group: '',
      user_phone: '',
      user_email: '',
      user_password: '',
      user_region: '',
      user_commune: '',
      user_address: '',
      createdAt: '',
      updatedAt: ''
    });
    setShowLoader(true);
    setTimeout(()=> {
      setShowLoader(false);
      sweetSuccessAlert()
    },3000) 
    })
  };

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  const handleSubmitTooltip = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedTooltip(true);
  };

  const supportedSelectHandler = (event) => {
    setSupportedSelect(parseInt(event.target.value));
  };

  const supportedFileHandler = (event) => {
    setSupportedFile(!!event.target.value);
  };

  const sweetSuccessAlert = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire('','L??u kh??ch h??ng m???i th??nh c??ng','success')
  }


  return (
    <React.Fragment>
      <Button variant="danger" className="mb-3" href="/app/sell-management/customers">
        Quay l???i danh s??ch kh??ch h??ng
      </Button>

      <Row>
        <Col sm={12} lg={8}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">
                Th??ng tin c?? nh??n
                
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Form>
                    <Form.Group controlId="nameCustomer">
                      <Form.Label>T??n kh??ch h??ng</Form.Label>
                      <Form.Control name="user_name" value={data.user_name} onChange={handleChange} type="text" placeholder="Nh???p t??n kh??ch h??ng" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="idCustomer">
                    <Form.Label>M?? kh??ch h??ng</Form.Label>
                    <Form.Control name="user_code" value={data.user_code} onChange={handleChange} type="text" placeholder="Nh???p m?? kh??ch h??ng" />
                  </Form.Group>
                  <Form.Group controlId="phoneCustomer">
                    <Form.Label>S??? ??i???n tho???i</Form.Label>
                    <Form.Control name="user_phone" value={data.user_phone} onChange={handleChange} type="text" placeholder="Nh???p s??? ??i???n tho???i" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Khu v???c</Form.Label>
                    <Form.Control name="user_region" value={data.user_region} onChange={handleChange} as="select">
                      <option>Ch???n T???nh/Th??nh ph??? - Qu???n/Huy???n</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Nh??m kh??ch h??ng</Form.Label>
                    <Form.Control name="user_group" value={data.user_group} onChange={handleChange} as="select">
                      <option>Ch???n nh??m kh??ch h??ng</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="emailCustomer">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="user_email" value={data.user_email} onChange={handleChange} type="email" placeholder="Nh???p ?????a ch??? email" />
                  </Form.Group>
                  <Form.Group controlId="strictCustomer">
                    <Form.Label>Ph?????ng x??</Form.Label>
                    <Form.Control name="user_commune" value={data.user_commune} onChange={handleChange} as="select">
                      <option>Ch???n Ph?????ng/X??</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm={12} lg={12}>
                  <Form.Group controlId="addressCustomer">
                    <Form.Label>?????a ch???</Form.Label>
                    <Form.Control name="user_address" value={data.user_address} onChange={handleChange} as="textarea" rows="3" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Th??ng tin kh??c</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="staffCb">
                  <Form.Label>Nh??n vi??n ph??? tr??ch</Form.Label>
                  <Form.Control as="select">
                    <option>Ngh??a</option>
                    <option>Tu???n</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>M?? t???</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="tag">
                  <Form.Label>Tag</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={8}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Th??ng tin b??? sung</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group controlId="dobCustomer">
                      <Form.Label>Ng??y sinh</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="faxCustomer">
                      <Form.Label>S??? fax</Form.Label>
                      <Form.Control type="text" placeholder="Nh???p s??? fax" />
                    </Form.Group>
                    <Form.Group controlId="websiteCustomer">
                      <Form.Label>Website</Form.Label>
                      <Form.Control type="text" placeholder="Nh???p t??n mi???n Website" />
                    </Form.Group>
                    <Form.Group controlId="websiteCustomer">
                      <Form.Label>T???ng chi ti??u</Form.Label>
                      <Form.Control type="text" placeholder="Nh???p t???ng chi ti??u" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="sexCustomer">
                    <Form.Label>Gi???i t??nh</Form.Label>
                    <Form.Control as="select">
                      <option>Kh??c</option>
                      <option>Nam</option>
                      <option>N???</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="taxIdCustomer">
                    <Form.Label>M?? s??? thu???</Form.Label>
                    <Form.Control type="text" placeholder="Nh???p m?? s??? thu???" />
                  </Form.Group>
                  <Form.Group controlId="taxIdCustomer">
                    <Form.Label>C??ng n???</Form.Label>
                    <Form.Control type="text" placeholder="Nh???p c??ng n??? kh??ch h??ng" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ top: '-130px' }} sm={12} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">C??i ?????t n??ng cao</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label className="ml-3" sm={12}>
                      <strong style={{ color: 'black' }}>??p d???ng ??u ????i</strong>
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Check
                        className="mt-2"
                        type="radio"
                        label="Theo nh??m kh??ch h??ng"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        className="mt-2"
                        type="radio"
                        label="Theo kh??ch h??ng"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </Form>
            </Card.Body>
          </Card>
          <ButtonLoading text={'L??u kh??ch h??ng m???i'} loading={showLoader} type="submit" onSubmit={handleSubmit} disabled={showLoader}></ButtonLoading>
          {/* <Button onClick={(e) => handleSubmit(e)}>L??u kh??ch h??ng m???i</Button> */}
        </Col>
      
      </Row>
    </React.Fragment>
  );
};

export default FormsElements;
