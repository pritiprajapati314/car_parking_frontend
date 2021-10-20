import React from 'react';
import style1 from './UserProfile.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../FrontPage/Navbar';

const UserProfile = () => {

    return (
        <div id={style1.main}>
            <Navbar/>

            <Container>

                <div className={style1.empProfile}>


                    <Row>

                        <Col md="4" sm="4" >
                            <div className={style1.profileimg, style1.clm1}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" className="img-fluid" alt="" />
                                <div className={style1.file}>
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </Col>

                        <Col md='8' sm="6" classname="clms">
                            <div className={style1.profilehead}>
                                <h5>
                                    Kshiti Ghelani
                                </h5>
                                <h6>
                                    Member Since: 10/09/2021
                                </h6>
                                <h6>Last Login: 13/10/2021 at 05:01 PM</h6>


                            </div>
                        </Col>



                    </Row>







                    <Row>

                        <Col md="4">
                            <div className={style1.profilework, style1.clm1}>
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="Edit Profile" />
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="Add Vehicle" />
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="FeedBack" />
                                <input type="submit" className={style1.profileeditbtn} name="btnAddMore" value="Report an Issue?" />


                            </div>
                           
                        </Col>
                        

                        <Col md="8">

                            <Row>

                                <Col md="6" className={style1.profiletab}>
                                    <label>User Id</label>
                                </Col>
                                <Col className={style1.profiletab}>

                                    <p>Kshiti123</p>
                                </Col>

                            </Row>

                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Name</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>

                                    <p>Kshiti Ghelani</p>
                                </Col>

                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab} >
                                    <label>Email</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>

                                    <p>kshitighelani@gmail.com</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Phone</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                    <p>123 456 7890</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Profession</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                    <p>Web Developer and Designer</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Residential Address</label>
                                </Col>
                                <Col  className={style1.profiletab}>
                                    <p>Akriti City , Bhopal</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Registered Vehicle No.</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                    <p>MP04 HA XXXX</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className={style1.profiletab}>
                                    <label>Driving Licence Number</label>
                                </Col>
                                <Col md="6"  className={style1.profiletab}>
                                    <p>DL-90XXXXXXXXXXXX01</p>
                                </Col>
                            </Row>



                   
                        </Col>
                       
                        
                    </Row>



                </div>
            </Container>
        </div>



    );


}
export default UserProfile;
