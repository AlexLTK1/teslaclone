import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <container>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          />
        <Section 
          title="Model Y"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model X"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
           title="Lowest Cost Solar Panels in America"
           description="Money-Back gurantee"
           backgroundImg="solar-panel.jpg"
           leftBtnText="Order Now"
           rightBtnText="Learn More"
        />
        <Section
           title="Accessories"
           description=""
           backgroundImg="accessories.jpg"
           leftBtnText="Shop Now"
        />
    </container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`