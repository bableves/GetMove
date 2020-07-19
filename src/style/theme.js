import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: yellow[500],
    },
  },
});

export default theme;
