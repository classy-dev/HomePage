import LargePizza from 'ComponentsFarm/pageComp/menu/table/LargePizza'
import Pasta from 'ComponentsFarm/pageComp/menu/table/Pasta'
import PersonalPizza from 'ComponentsFarm/pageComp/menu/table/PersonalPizza'
import Option from 'ComponentsFarm/pageComp/menu/table/Option'
import Topokki from 'ComponentsFarm/pageComp/menu/table/Topokki'
import Chicken from 'ComponentsFarm/pageComp/menu/table/Chicken'
import Side from 'ComponentsFarm/pageComp/menu/table/Side'
import Set from 'ComponentsFarm/pageComp/menu/table/Set'
import Drink from 'ComponentsFarm/pageComp/menu/table/Drink'
import Source from 'ComponentsFarm/pageComp/menu/table/Source'
import { css } from '@emotion/react'
import { Container } from 'ComponentsFarm/pageComp/menu/tableStyle'

function Table() {
  return (
    <Container><PersonalPizza /><LargePizza /><Pasta /> <Topokki /><Option /><Chicken /><Side /><Drink /><Set /><Source /></Container>
  )
}

export default Table