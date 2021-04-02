// Spoofy radio component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Page components
import Album from "./Album";

const AlbumData = require("../../assets/putInDatabaseLater/spoofy/albums.json");

export default function Radio(props) {
  const Albums = AlbumData.map((data) => {
    return {
      name: data.name,
      artist: data.artist,
      link: data.link,
      image: process.env.PUBLIC_URL + "/spoofy/albumCovers/" + data.image,
    };
  });

  return (
    <div id="spoofyRadio">
      <Typography variant="h2" className={props.classes.title}>
        Radio
      </Typography>

      <Typography variant="h5" className={props.classes.subtitle}>
        Recommended Stations
      </Typography>

      <Grid container direction="row" spacing={4}>
        {Albums.map((album, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Album
              name={album.name}
              artist={album.artist}
              src={album.image}
              link={album.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
