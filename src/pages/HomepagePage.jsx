import React, { useEffect } from 'react'
import ShopByCategory from '../components/ShopByCategory'
import Bestsellers from '../components/Bestsellers'
import axios from 'axios';

const HomepagePage = () => {

  return (
    <div>
      <ShopByCategory />
      <Bestsellers />
    </div>
  )
}

export default HomepagePage
