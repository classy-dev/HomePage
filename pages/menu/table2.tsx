import LargePizza from 'ComponentsFarm/pageComp/menu/table2/LargePizza'
import Pasta from 'ComponentsFarm/pageComp/menu/table2/Pasta'
import PersonalPizza from 'ComponentsFarm/pageComp/menu/table2/PersonalPizza'
import Option from 'ComponentsFarm/pageComp/menu/table2/Option'
import Set from 'ComponentsFarm/pageComp/menu/table2/Set'
import Drink from 'ComponentsFarm/pageComp/menu/table2/Drink'
import Source from 'ComponentsFarm/pageComp/menu/table2/Source'
import Title from 'ComponentsFarm/pageComp/menu/table2/Title'
import { Container } from 'ComponentsFarm/pageComp/menu/tableStyle'

function Table() {
  return (
   <Container><PersonalPizza /><LargePizza /><Pasta /> <Option /><Drink /><Set /><Source /></Container>

  )
}

export default Table