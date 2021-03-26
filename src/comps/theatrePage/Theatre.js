import "../../assets/css/theatre.css";

import dan from "../../assets/putInDatabaseLater/pics/theatreAssets/dan_black.png";
import arin from "../../assets/putInDatabaseLater/pics/theatreAssets/arin_black.png";
import chairs from "../../assets/putInDatabaseLater/pics/theatreAssets/theatre_low_res_chairs.png";
import curtainLeft from "../../assets/putInDatabaseLater/pics/theatreAssets/curtain_left.png";
import curtainRight from "../../assets/putInDatabaseLater/pics/theatreAssets/curtain_right.png";

function Theatre() {
  return (
    <div class="display">
      <img alt="curtainLeft" class="curtainLeft" src={curtainLeft} />
      <img alt="curtainRight" class="curtainRight" src={curtainRight}></img>
      <img alt="dan" class="dan" src={dan} />
      <img alt="arin" class="arin" src={arin} />
      <img alt="chairs1" class="chairs1" src={chairs} />
      <img alt="chairs2" class="chairs2" src={chairs} />
    </div>
  );
}

export default Theatre;
/*

*/
