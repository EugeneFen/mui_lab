import buildings from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

interface HotelRow {
    'id': number;
    "Название отеля": string;
    "Рейтинг": string;
    "Оценка": string;
    "Количество отзывов": number;
    "Стоимость": number;
    "Тип комнаты": string;
    "Страна": string;
    "Город": string;
}

function BuildingsGrid() {
    const [rows, setRows] = useState<HotelRow[]>([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/'); // ← Новый URL!
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: HotelRow[] = await response.json();
                setRows(data);
            } catch (error) {
                console.error('Ошибка загрузки отелей:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, []);

    const columns: GridColDef[] = [
        { field: 'Название отеля', headerName: 'Название отеля', flex: 1 },
        { field: 'Рейтинг', type: 'string', flex: 0.5 },
        { field: 'Оценка', type: 'string', flex: 0.5 },
        { field: 'Количество отзывов', type: 'number', flex: 0.7 },
        { field: 'Стоимость', type: 'number', flex: 0.7 },
        { field: 'Тип комнаты', flex: 1 },
        { field: 'Страна', flex: 0.7 },
        { field: 'Город', flex: 0.7 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                loading={loading}
                showToolbar={true}
                pageSizeOptions={[10, 25, 50]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
            />
        </Container>
    );
}
export default BuildingsGrid;