import React from 'react'
import { Divider } from '../../tools/desing'
import { secondary } from '../../utils/colors'

export const DividerC: React.FC = () => {
  return (
    <Divider style={{background:`${secondary}`, color:`${secondary}`}} type="vertical"/>
  )
}

