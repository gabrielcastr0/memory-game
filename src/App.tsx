import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import GameArea from "./components/GameArea";
import Header from "./components/Header";
import { items } from "./data/items";
import { GridTypeItem } from "./types/GridItemType";
import GridItem from "./components/GridItem";

const App = () => {
  return(
    <main>
      <Header />
      <GameArea/>
      <Footer />
    </main>
  )
}

export default App;