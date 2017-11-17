import React from 'react'
import faker from 'faker'
import './index.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './Navigation'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Jumbotron} />
        <NavigationBar />
        <Jumbotron
          title={faker.name.title()}
          desc={faker.lorem.sentence()}
        />
        <Section
          sectionStyle='about'
          title={'About'}
          content={'All about us'}
        />
        <Section
          sectionStyle='service'
          title={'Services'}
          content={'Read about our services'}
        >
          <div className='service-card-container'>
            <ServicesCard
              title={'Video Webinars'}
              details={'Ichiban Video Webinars'}
            />

            <ServicesCard
              title={'Video Webinars'}
              details={'Ichiban Video Webinars'}
            />

            <ServicesCard
              title={'Video Webinars'}
              details={'Ichiban Video Webinars'}
            />

            <ServicesCard
              title={'Video Webinars'}
              details={'Ichiban Video Webinars'}
            />
          </div>
        </Section>
        <Section
          sectionStyle='product'
          title={'Products'}
          content={'Best selling products'}
        >
          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />

          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />

          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />

          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />
        </Section>
      </div>
    </Router>
  )
}

export default App
