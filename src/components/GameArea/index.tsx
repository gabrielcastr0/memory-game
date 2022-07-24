import { useEffect, useState } from 'react';
import { items } from '../../data/items';
import { formatTimeElapsed } from '../../helpers/formatTimeElapsed';
import { GridTypeItem } from '../../types/GridItemType';
import GridItem from '../GridItem';
import InfoLabel from '../InfoLabel';
import * as Styled from './styled';

const GameArea = () => {
  const [gridItems, setGridItems] = useState<GridTypeItem[]>([]);
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [turns, setTurns] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);

  useEffect(()=>{
    resetAndCreateGrid();
  }, []);

  useEffect(()=>{
    const timer = setInterval(() => {
      if(playing){
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  const resetAndCreateGrid = () => {
    // resetting
    setTimeElapsed(0);
    setTurns(0);
    setShownCount(0);

    let tmpGrid: GridTypeItem[] = [];

    // creating empty grid
    for(let i = 0; i < (items.length * 2); i++){
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    // putting items on grid
    for(let w = 0; w < 2; w++){
      for(let i = 0; i < items.length; i++){
        let pos = -1;
        while(pos < 0 || tmpGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2));
        }

        tmpGrid[pos].item = i;
      }
    }

    setGridItems(tmpGrid);

    // starting game
    setPlaying(true);
  }

  return(
    <Styled.Container>
      <Styled.InfoArea>
        <InfoLabel label="Tempo" value={formatTimeElapsed(timeElapsed)}/>
        <InfoLabel label="Movimentos" value="0"/>

        <Styled.Button onClick={resetAndCreateGrid}>Reiniciar</Styled.Button>
      </Styled.InfoArea>

      <Styled.GridArea>
        <Styled.Grid>
          {gridItems.map((item, index) => (
            <GridItem key={index} item={item}/>
          ))}
        </Styled.Grid>
      </Styled.GridArea>
    </Styled.Container>
  )
}

export default GameArea;