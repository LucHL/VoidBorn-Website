import { Box, Typography, Button } from "@mui/material";
import NavBar from "../components/NavBar";

const LATEST_VERSION = "1.0.0";

export default function HomePage() {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "white" }}>
            <NavBar />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    minHeight: "80vh",
                    backgroundImage: "url('/images/home_background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    px: 2
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                    VOIDBORN
                </Typography>
                <Typography variant="h6" sx={{ mb: 4 }}>
                    Découvrez VoidBorn, un univers épique rempli de combat et de mystères.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: "bold" }}
                >
                    Dowload latest version (v{LATEST_VERSION})
                </Button>
            </Box>

            {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 8, gap: 6, flexWrap: "wrap" }}> */}
                {/* <Box sx={{ maxWidth: 300 }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>Gameplay immersif</Typography>
                    <Typography>Explorez un monde ouvert avec des mécaniques uniques et stratégiques.</Typography>
                </Box>
                <Box sx={{ maxWidth: 300 }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>Graphismes époustouflants</Typography>
                    <Typography>Profitez d’un univers visuellement riche et détaillé.</Typography>
                </Box>
                <Box sx={{ maxWidth: 300 }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>Histoire captivante</Typography>
                    <Typography>Plongez dans des quêtes et des récits qui vous tiendront en haleine.</Typography>
                </Box> */}
            {/* </Box> */}
        </Box>
    );
}
