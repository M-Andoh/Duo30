import useDuo30Index from '@/hocks/Duo30/useDuo30Index';
import { usePlayerStore } from '@/store/playerStore';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
    AppBar,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    Stack,
    Toolbar,
} from '@mui/material';

export const SectionHeader = () => {
    const { sections, sectionNo, setSectionNo, prevSection, nextSection } =
        usePlayerStore();

    const handleChange = (n: number) => {
        setSectionNo(n);
    };

    const sentences = useDuo30Index();
    const sectionset = new Set<number>();

    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    width="100%"
                >
                    <IconButton onClick={prevSection}>
                        <ArrowBack />
                    </IconButton>

                    <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <Select
                            value={sectionNo}
                            onChange={(e) => handleChange(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            {sections?.map((s) => (
                                <MenuItem value={s}>
                                    {'Section' + ('00' + s).slice(-2)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <IconButton onClick={nextSection}>
                        <ArrowForward />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
