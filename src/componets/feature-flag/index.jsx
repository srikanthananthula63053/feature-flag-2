import { useContext } from "react"
import { FeatureFlagsContext } from "./context"
import Accordian from "../accordian";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";

export default function FeatureFlags(){

    const { loading, enabledFlags } = useContext(FeatureFlagsContext);
    
    const componentsToRender = [
        {
          key: "showAccordion",
          component: <Accordian/>,
        },
        {
          key: "showRandomColor",
          component: <RandomColor/>
        },
        {
          key: "showTicTacToe",
          component: <TicTacToe/>,
        }
    ]
    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
      }
    
      if (loading) return <h1>Loading data ! Please wait</h1>;
    
      return (
        <div>
          <h1>Feature Flags</h1>
          {componentsToRender.map((componentItem) =>
            checkEnabledFlags(componentItem.key) ? componentItem.component : null
          )}
        </div>
      );
}