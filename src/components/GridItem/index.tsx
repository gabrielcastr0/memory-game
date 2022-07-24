import { GridTypeItem } from '../../types/GridItemType'
import * as Styled from './styled'
import campeonatoBrasileiro from '../../assets/logo-teams/campeonato-brasileiro.svg'
import {items} from '../../data/items'

type Props = {
  item: GridTypeItem,
  onClick?: () => void;
}

const GridItem = ({item, onClick}: Props) => {

  return(
    <Styled.Container onClick={onClick} showBackground={item.permanentShown || item.shown}>
      {!item.permanentShown && !item.shown && (
        <Styled.Icon src={campeonatoBrasileiro}/>
      )}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <Styled.Icon src={items[item.item].icon}/>
      )}
    </Styled.Container>
  )
}

export default GridItem;