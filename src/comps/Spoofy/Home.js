// Spoofy home component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Page components
import Artist from "./Artist";

// Artist images
import starbomb from "../../assets/images/spoofy/artistCovers/Starbomb.png";
import ninjaSexParty from "../../assets/images/spoofy/artistCovers/NinjaSexParty.png";
import aviAvidan from "../../assets/images/spoofy/artistCovers/AviAvidan.png";

export default function Home(props) {
  return (
    <div id="spoofyHome">
      <Typography variant="h2" className={props.classes.title}>
        Home
      </Typography>

      <Typography variant="h5" className={props.classes.subtitle}>
        Artists
      </Typography>

      <Grid container direction="row" spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Artist
            name="Starbomb"
            src={starbomb}
            link="https://open.spotify.com/artist/1DLBs2535MM32RYqirYYY4"
          >
            Starbomb is an American musical-comedy group composed of Dan Avidan
            and Brian Wecht of musical-comedy duo Ninja Sex Party together with
            Flash animator and Internet personality Arin Hanson and "space rock
            masters" TWRP, a Canadian music group known for collaborations with
            NSP.
          </Artist>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Artist
            name="Ninja Sex Party"
            src={ninjaSexParty}
            link="https://open.spotify.com/artist/3jsyANBBy6gOZUSQhiGclx"
          >
            Ninja Sex Party is an American musical comedy duo consisting of
            singer Dan Avidan and keyboardist Brian Wecht.
          </Artist>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Artist name="Avigdor Avidan" src={aviAvidan}>
            Avigdor "Avi" Avidan is the father of Danny. He was born in Israel.
            Danny often tells stories about Avi and will imitate things he says
            in broken English often starting with "Hey, Dan" and always has a
            long "Ehhh" in the middle somewhere.
          </Artist>
        </Grid>
      </Grid>
    </div>
  );
}
