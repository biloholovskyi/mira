import React from "react";

import {TabsList} from '../styled';

import SingleTab from '../singleTab/singleTab';

const CategoryTab2 = () => {

  return (
    <TabsList>
      <SingleTab/>
      <SingleTab/>
    </TabsList>
  )
}

export default CategoryTab2;