import useDuo30Index from '@/hocks/Duo30/useDuo30Index';
import { usePlayerStore } from '@/store/playerStore';
import { SkipNext, SkipPrevious } from '@mui/icons-material';
import {
    AppBar,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    Stack,
    Toolbar,
} from '@mui/material';

export const SentenceHeader = () => {
    const { sectionNo, sentenceNo, setSentenceNo, prevSentence, nextSentence } =
        usePlayerStore();

    const handleChange = (n: number) => {
        setSentenceNo(n);
    };

    const sentences = useDuo30Index();

    return (
        <AppBar position="sticky" color="inherit">
            <Toolbar>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    width="100%"
                >
                    <IconButton onClick={prevSentence}>
                        <SkipPrevious />
                    </IconButton>

                    <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                        <Select
                            value={sentenceNo}
                            onChange={(e) => handleChange(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            {sentences
                                ?.filter((s) => s.section_id === sectionNo)
                                ?.map((s) => (
                                    <MenuItem
                                        key={
                                            'Sentence' +
                                            ('000' + s.id).slice(-3)
                                        }
                                        value={s.id}
                                    >
                                        {'Sentence' + ('000' + s.id).slice(-3)}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>

                    <IconButton onClick={nextSentence}>
                        <SkipNext />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
