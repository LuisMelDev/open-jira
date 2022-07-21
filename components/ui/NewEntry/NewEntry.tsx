import { ChangeEvent, useState, useContext } from "react";
import { Button, Box, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "context";

export const NewEntry = () => {
    const { addEntry } = useContext(EntriesContext);

    const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState("");
    const [touched, setTouched] = useState(false);

    const handleInputChange = (e: ChangeEvent<{ value: string }>) => {
        setInputValue(e.target.value);
    };

    const onSubmit = () => {
        if (inputValue.trim().length <= 0) return;

        addEntry(inputValue);
        setTouched(false);
        setIsAdding(false);
        setInputValue("");
    };

    return (
        <Box
            sx={{
                mb: 2,
                px: 2,
            }}
        >
            {isAdding ? (
                <>
                    <TextField
                        fullWidth
                        sx={{
                            mt: 2,
                            mb: 1,
                        }}
                        placeholder="Nueva entrada"
                        autoFocus
                        multiline
                        label="Nueva entrada"
                        error={touched && inputValue.length === 0}
                        helperText={
                            touched &&
                            inputValue.length === 0 &&
                            "Campo obligatorio"
                        }
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={() => setTouched(true)}
                    />
                    <Box display="flex" justifyContent="space-between">
                        <Button
                            onClick={() => setIsAdding(false)}
                            variant="text"
                            color="error"
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={onSubmit}
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveOutlinedIcon />}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    onClick={() => setIsAdding(true)}
                    fullWidth
                    startIcon={<AddIcon />}
                    variant="outlined"
                >
                    Agregar Tarea
                </Button>
            )}
        </Box>
    );
};
