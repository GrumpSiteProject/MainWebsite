import "../../css/theatre.css"
import dan from "../../putInDatabaseLater/pics/theatreAssets/dan_black.png"
import arin from "../../putInDatabaseLater/pics/theatreAssets/arin_black.png"
import chairs from "../../putInDatabaseLater/pics/theatreAssets/theatre_low_res_chairs.png"
import curtainLeft from "../../putInDatabaseLater/pics/theatreAssets/curtain_left.png"
import curtainRight from "../../putInDatabaseLater/pics/theatreAssets/curtain_right.png"

function Theatre() {

    return (
        <div class="display">
                <img class="curtainLeft" src={curtainLeft} />
                <img class="curtainRight" src={curtainRight} ></img>
                <img class="dan" src={dan} />
            <img class="arin" src={arin} />
            <img class="chairs1" src={chairs} />
            <img class="chairs2" src={chairs} />
        </div>
    )
}

export default Theatre
/*

*/