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

  // verify if opened are equal
  useEffect(() => {
    if(shownCount === 2){
      let opened = gridItems.filter(item => item.shown === true);
      if(opened.length === 2){
        if(opened[0].item === opened[1].item){
          // if both are equal, make every "shown" permanent
          let tmpGrid = [...gridItems];
          for(let i in tmpGrid){
            if(tmpGrid[i].shown){
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }

          setGridItems(tmpGrid);
          setShownCount(0);
        }else{
          // if they are NOT equal, close all "shown"
          setTimeout(()=>{
            let tmpGrid = [...gridItems];
            for(let i in tmpGrid){
              tmpGrid[i].shown = false;
            }

            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }

        setTurns(turns => turns + 1);
      }
    }
  }, [shownCount, gridItems]);

  // verify if all items are equal
  useEffect(()=>{
    if(turns > 0 && gridItems.every(item => item.permanentShown)){
      setPlaying(false);
    }
  }, [turns, gridItems]);

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

  const handleItemClick = (index: number) => {
    if(playing && index !== null && shownCount < 2){
      let tmpGrid = [...gridItems];

      if(tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false){
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }

      setGridItems(tmpGrid);
    }
  }

  return(
    <Styled.Container>
      <Styled.InfoArea>
        <InfoLabel label="Tempo" value={formatTimeElapsed(timeElapsed)}/>
        <InfoLabel label="Movimentos" value={turns.toString()}/>

        <Styled.Button onClick={resetAndCreateGrid}>Reiniciar</Styled.Button>
      </Styled.InfoArea>

      <Styled.GridArea>
        <Styled.Grid>
          {gridItems.map((item, index) => (
            <GridItem key={index} item={item} onClick={() => handleItemClick(index)}/>
          ))}
        </Styled.Grid>
      </Styled.GridArea>
    </Styled.Container>
  )
}

export default GameArea;