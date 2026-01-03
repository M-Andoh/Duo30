import { GlobalPlaySetting } from '@/types/GlobalPlaySetting';
import {
    Checkbox,
    Divider,
    Drawer,
    FormControlLabel,
    Stack,
    Typography,
} from '@mui/material';

type Props = {
    open: boolean;
    onClose: () => void;
    setting: GlobalPlaySetting;
    onChange: (setting: GlobalPlaySetting) => void;
};

type BooleanSettingKey = {
    [K in keyof GlobalPlaySetting]: GlobalPlaySetting[K] extends boolean
        ? K
        : never;
}[keyof GlobalPlaySetting];

export const GlobalPlaySettingDrawer = ({
    open,
    onClose,
    setting,
    onChange,
}: Props) => {
    const update = (key: keyof GlobalPlaySetting, value: boolean) => {
        onChange({ ...setting, [key]: value });
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Stack
                sx={{
                    width: 320,
                    px: 2, // 左右 padding
                    pb: 2, // 下 padding
                    pt: 10, // ★ 上だけ少し広め
                }}
                spacing={0.5}
            >
                {/* ===== セクション ===== */}
                <Typography variant="subtitle2">自動実行</Typography>

                <FormControlLabel
                    sx={{ m: 0 }}
                    control={
                        <Checkbox
                            size="small"
                            checked={setting.autoPlay}
                            onChange={(e) =>
                                update('autoPlay', e.target.checked)
                            }
                        />
                    }
                    label="自動実行"
                />

                {/* ===== セクション ===== */}
                <Typography variant="subtitle2">セクションの進め方</Typography>

                <FormControlLabel
                    sx={{ m: 0 }}
                    control={
                        <Checkbox
                            size="small"
                            checked={setting.repeatSection}
                            onChange={(e) =>
                                update('repeatSection', e.target.checked)
                            }
                        />
                    }
                    label="セクションを繰り返す"
                />

                <Divider sx={{ my: 0.5 }} />

                {/* ===== センテンス ===== */}
                <Typography variant="subtitle2">センテンスの進め方</Typography>

                <FormControlLabel
                    sx={{ m: 0 }}
                    control={
                        <Checkbox
                            size="small"
                            checked={setting.repeatSentence}
                            onChange={(e) =>
                                update('repeatSentence', e.target.checked)
                            }
                        />
                    }
                    label="センテンスを繰り返す"
                />

                <Divider sx={{ my: 0.5 }} />

                {/* ===== 自動再生 ===== */}
                <Typography variant="subtitle2">自動再生に含める</Typography>

                {(
                    [
                        ['playTitle', 'タイトル'],
                        ['playKeywords', '単語'],
                        ['playJapanese', '日本語'],
                        ['playEnglishNormal', '英語'],
                        ['playEnglishFast', '英語（速い）'],
                    ] as [BooleanSettingKey, string][]
                ).map(([key, label]) => (
                    <FormControlLabel
                        key={key}
                        sx={{ m: 0 }}
                        control={
                            <Checkbox
                                size="small"
                                checked={setting[key]}
                                onChange={(e) => update(key, e.target.checked)}
                            />
                        }
                        label={label}
                    />
                ))}
            </Stack>
        </Drawer>
    );
};
