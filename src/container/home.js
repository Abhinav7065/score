import LinearStepper from "../pages/linearStepper";
import {CssBaseline,Container,Paper,Box} from "@material-ui/core";
import App from "../App";
function Home() {
    return(
        <>
        <CssBaseline/>
        <Container component={Box} p={4}>
            <Paper component={Box} p={3}>
                <LinearStepper />
            </Paper>
        </Container>
        </>
    );
}

export default Home;