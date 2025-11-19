import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function NavBar() {
    return (
        <AppBar position="fixed" elevation={0} color="info">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>VoidBorn</Typography>
                {/* <Box sx={{ display: "flex", gap: 2 }}>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/docs">Documentation</Button>
                    <Button color="inherit">Download</Button>
                </Box> */}
            </Toolbar>
        </AppBar>
    )
}
