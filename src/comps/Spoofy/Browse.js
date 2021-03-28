// Spoofy browse component

// Material UI components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Page components
import Album from "./Album";

const AlbumData = require("../../assets/putInDatabaseLater/spoofy/albums.json");

export default function Browse(props) {
  const Albums = AlbumData.map((data) => {
    return {
      name: data.name,
      artist: data.artist,
      link: data.link,
      image: process.env.PUBLIC_URL + "/spoofy/albumCovers/" + data.image,
    };
  });

  return (
    <div id="spoofyBrowse">
      <Typography variant="h2" className={props.classes.title}>
        Browse
      </Typography>

      <Typography variant="h5" className={props.classes.subtitle}>
        Albums
      </Typography>

      <Grid container direction="row" spacing={4}>
        {Albums.map((album, i) => (
          <Grid key={i} item sm={12} md={6} lg={3}>
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
