import * as React from 'react';
import Pricing from '../common/Pricing'
import Categories from '../common/Categories'
import Hero from '../common/Hero'
import FormReservation from '../common/Forms/FromReservation'

export default function Landing() {
  return (
    <>
      <Hero />
      <FormReservation />
      <Categories />
      <Pricing />
    </>
  )
}
