import React from "react";

import {TabsList} from '../styled';

import SingleTab from './singleTab/singleTab';

const AllCategoryTab = () => {

  return (
   <TabsList>
     <SingleTab/>
     <SingleTab/>
     <SingleTab/>
   </TabsList>
  )
}

export default AllCategoryTab;