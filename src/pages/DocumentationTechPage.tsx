import { useEffect, useState } from "react";
import {
    Typography,
    Box,
    Drawer,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItemButton,
    ListItemText
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NavBar from "../components/NavBar";

interface DocFile {
    name: string;
    file: string;
}

interface DocList {
    [category: string]: DocFile[];
}

export default function DocumentationPage() {
    const [docList, setDocList] = useState<DocList>({});
    const [currentFile, setCurrentFile] = useState<string>("");
    const [currentContent, setCurrentContent] = useState<string>("");

    useEffect(() => {
        fetch("/docs/doc_list.json")
            .then((res) => res.json())
            .then((data: DocList) => {
                setDocList(data);
                const firstCategory = Object.keys(data)[0];
                const firstFile = data[firstCategory][0]?.file || "";
                setCurrentFile(firstFile);
            })
            .catch((err) => console.error("Erreur fetch JSON:", err));
    }, []);

    useEffect(() => {
        if (!currentFile) return;
        fetch(`/${currentFile}`)
            .then((res) => res.text())
            .then(setCurrentContent)
            .catch((err) => console.error("Erreur fetch MD:", err));
    }, [currentFile]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#1b1b1f", color: "white" }}>
            <NavBar />

            <Box sx={{ display: "flex", flexGrow: 1, mt: "64px", overflow: "hidden" }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 300,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: 300,
                            boxSizing: "border-box",
                            p: 2,
                            top: 64,
                            height: "calc(100vh - 64px)",
                            backgroundColor: "#161618"
                        }
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}>
                        Documentation
                    </Typography>

                    {Object.entries(docList).map(([category, files]) => (
                        <Accordion key={category} defaultExpanded sx={{ backgroundColor: "#1b1b1f", color: "#fff", mb: 1 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
                                <Typography sx={{ fontWeight: "bold" }}>{category}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {files.map((file) => (
                                        <ListItemButton
                                            key={file.file}
                                            selected={currentFile === file.file}
                                            onClick={() => setCurrentFile(file.file)}
                                            sx={{
                                                "&.Mui-selected": {
                                                    backgroundColor: "#333",
                                                    "&:hover": { backgroundColor: "#444" }
                                                }
                                            }}
                                        >
                                            <ListItemText primary={file.name || file.file} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Drawer>

                <Box sx={{ flexGrow: 1, overflowY: "auto", p: 4 }}>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            img: ({ ...props }) => (
                                <img {...props} style={{ maxWidth: "100%", borderRadius: "8px", margin: "16px 0" }} alt={props.alt} />
                            ),
                            h1: ({ ...props }) => <Typography variant="h3" gutterBottom {...props} />,
                            h2: ({ ...props }) => <Typography variant="h4" gutterBottom {...props} />,
                            h3: ({ ...props }) => <Typography variant="h5" gutterBottom {...props} />,
                            p: ({ ...props }) => <Typography variant="body1" paragraph {...props} />,
                            li: ({ ...props }) => <li className="ml-6" {...props} />,
                            pre: ({ ...props }) => <pre style={{ backgroundColor: "#98989f" }} {...props} />
                        }}
                    >
                        {currentContent}
                    </ReactMarkdown>
                </Box>
            </Box>
        </Box>
    );
}
