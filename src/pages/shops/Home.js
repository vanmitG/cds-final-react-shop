import React, { Component } from 'react'
import HeroBanner from "../../components/home/HeroBanner"
import BestSeller from "../../components/home/BestSeller"
import DealOfTheWeek from "../../components/home/DealOfTheWeek"
import FeatureCatergory from "../../components/home/FeatureCatergory"
import FeatureProducts from "../../components/home/FeatureProducts"
import LatesProduct from "../../components/home/LatesProduct"


export default class Home extends Component {
  render() {
    return (
      <div>
        {/* /TODO fix Hero Banner */}
        <HeroBanner />
        {/* TODO fix Hero Banner */}
        <LatesProduct />
        <FeatureProducts />
        <FeatureCatergory />
        <BestSeller />
        <DealOfTheWeek />
      </div>
    )
  }
}
