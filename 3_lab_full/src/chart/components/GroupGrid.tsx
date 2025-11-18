import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import structures from "../../data";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { tGroup } from "../groupdata";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';

type GroupProps = {
 data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    // const rows: GridRowsProp = buildings;
    const columns: GridColDef[] = [
        { field: 'Группа', headerName: 'Группа', flex: 1 },
        { field: 'Минимальная высота', flex: 0.5 },
        { field: 'Максимальная высота', flex: 0.5 },
        { field: 'Средняя высота', flex: 0.5 },
    ];
    const rows: GridRowsProp = data.map(item => ({
    id: item.id, // DataGrid требует поле id
    Группа: item.Группа,
    "Минимальная высота": item["Минимальная высота"],
    "Максимальная высота": item["Максимальная высота"],
    "Средняя высота": item["Средняя высота"],
  }));

return (
<Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                showToolbar={true}
            />
        </Container>
);
}
export default GroupGrid;