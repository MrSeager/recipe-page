import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, ListGroup, Row, Col } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgDish from './assets/images/image-omelette.jpeg';

const RecipePage = () => {
    AOS.init({
        duration: 700,
        delay: 300,
    });

    return (
        <Container className='py-lg-5 pt-0 pb-5'>
            <Container className='bg-white d-flex flex-column align-items-start gap-4 p-4 my-0 my-lg-4 rounded cs-w'>
                <Image data-aos="fade-down" fluid src={ImgDish} alt='dish' className='rounded w-100' />
                <h1 data-aos="fade-up" className='h1 mt-3 cs-f cs-fw-4 cs-fc'>Simple Omelette Recipe</h1>
                <p data-aos="fade-up" className='cs-fc-2 fs-6'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                <Container data-aos="fade-up" className='cs-bg rounded p-3'>
                    <h2 className='h5 cs-fw-6 cs-fc-3'>Preparation time</h2>
                    <ListGroup>
                        <ListGroup.Item className='border-0 cs-fc-2 cs-bg cs-lg-item p-0 ps-1'><b>Total:</b> Approximately 10 minutes</ListGroup.Item>
                        <ListGroup.Item className='border-0 cs-fc-2 cs-bg cs-lg-item p-0 ps-1'><b>Preparation:</b> 5 minutes</ListGroup.Item>
                        <ListGroup.Item className='border-0 cs-fc-2 cs-bg cs-lg-item p-0 ps-1'><b>Cooking:</b> 5 minutes</ListGroup.Item>
                    </ListGroup>
                </Container>
                <h3 data-aos="fade-up" className='h3 cs-f cs-fc-4'>Ingredients</h3>
                <ListGroup className='w-100'>
                    <ListGroup.Item data-aos="fade-up" className='border-0 cs-fc-2 cs-lg-item-2 p-0 ps-1'>2-3 large eggs</ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='border-0 cs-fc-2 cs-lg-item-2 p-0 ps-1'>Salt, to taste</ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='border-0 cs-fc-2 cs-lg-item-2 p-0 ps-1'>Pepper, to taste</ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='border-0 cs-fc-2 cs-lg-item-2 p-0 ps-1'>1 tablespoon of butter or oil</ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='border-0 cs-fc-2 cs-lg-item-2 p-0 ps-1'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</ListGroup.Item>
                </ListGroup>
                <h3 data-aos="fade-up" className='h3 cs-f cs-fc-4 cs-bt pt-4 w-100'>Instructions</h3>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item data-aos="fade-up" as="li" className='fw-bold border-0 cs-fc-4 p-0 d-flex flex-row'>
                        <p className='ms-3 fw-normal cs-fc-2'><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                        You can add a tablespoon of water or milk for a fluffier texture.</p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='fw-bold border-0 cs-fc-4 p-0 d-flex flex-row'>
                        <p className='ms-3 fw-normal cs-fc-2'><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.</p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='fw-bold border-0 cs-fc-4 p-0 d-flex flex-row'>
                        <p className='ms-3 fw-normal cs-fc-2'><b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
                        the eggs evenly coat the surface.</p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='fw-bold border-0 cs-fc-4 p-0 d-flex flex-row'>
                        <p className='ms-3 fw-normal cs-fc-2'><b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the 
                        middle, sprinkle your chosen fillings over one half of the omelette.</p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='fw-bold border-0 cs-fc-4 p-0 d-flex flex-row'>
                        <p className='ms-3 fw-normal cs-fc-2'><b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the 
                        fillings. Let it cook for another minute, then slide it onto a plate.</p>
                    </ListGroup.Item>
                    <ListGroup.Item data-aos="fade-up" className='fw-bold border-0 cs-fc-4 p-0 d-flex flex-row'>
                        <p className='mb-0 ms-3 fw-normal cs-fc-2'><b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</p>
                    </ListGroup.Item>
                </ListGroup>
                <h3 data-aos="fade-up" className='mb-0 h3 cs-f cs-fc-4 cs-bt pt-4 w-100'>Nutrition</h3>
                <p data-aos="fade-up" className='cs-fc-2 m-0'>The table below shows nutritional values per serving without the additional fillings.</p>
                <Container>
                    <Row data-aos="fade-up" className='w-100 px-4 pb-2'>
                        <Col xs={6} className='fs-6 cs-fc-2'>Calories</Col>
                        <Col xs={6} className='fw-bold fs-6 cs-fc-4'>277kcal</Col>
                    </Row>
                    <Row data-aos="fade-up" className='w-100 px-4 py-2 cs-bt'>
                        <Col xs={6} className='fs-6 cs-fc-2'>Carbs</Col>
                        <Col xs={6} className='fw-bold fs-6 cs-fc-4'>0g</Col>
                    </Row>
                    <Row data-aos="fade-up" className='w-100 px-4 py-2 cs-bt'>
                        <Col xs={6} className='fs-6 cs-fc-2'>Protein</Col>
                        <Col xs={6} className='fw-bold fs-6 cs-fc-4'>20g</Col>
                    </Row>
                    <Row data-aos="fade-up" className='w-100 px-4 py-2 cs-bt'>
                        <Col xs={6} className='fs-6 cs-fc-2'>Fat</Col>
                        <Col xs={6} className='fw-bold fs-6 cs-fc-4'>22g</Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

export default RecipePage;
