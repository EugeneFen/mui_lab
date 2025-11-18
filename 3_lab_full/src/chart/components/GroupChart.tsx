import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { useState } from 'react';
import SettingChart from "./SettingChart";
import { LineChart } from '@mui/x-charts/LineChart';

type GroupChartProps = {
    data: {
        id: number;
        Группа: string | number;
        "Минимальная высота": number;
        "Максимальная высота": number;
        "Средняя высота": number;
    }[];
};

function GroupChart({ data }: GroupChartProps) {

    const chartSetting = {
        yAxis: [
            {
                label: 'Высота (м)',
                // Отдвигаем подпись оси Y на 10px влево
                tickLabelStyle: { transform: 'translateX(-10px)' },
            },
        ],
        height: 400,
        margin: { left: 60 },
    };

    const [series, setSeries] = useState({
        'Максимальная высота': true,
        'Средняя высота': false,
        'Минимальная высота': false,
    });

    let seriesY = Object.entries(series)
        .filter(item => item[1] == true)
        .map(item => {
            return { "dataKey": item[0], "label": item[0] }
        });

    const [isBar, setIsBar] = useState(true);

    const showBarLabels = seriesY.length === 1;

    return (
        <Container maxWidth="lg">
            {isBar ? (<BarChart
                dataset={data}
                xAxis={[
                    {
                        scaleType: 'band',
                        dataKey: 'Группа', // Ось X — значения группировки
                    },
                ]}
                series={seriesY}
                slotProps={{
                    legend: {
                        position: { vertical: 'bottom', horizontal: 'center' },
                    },
                }}
                {...chartSetting}
                {...(showBarLabels && { barLabel: 'value' })}
            />
           ) : ( <LineChart
                dataset={data}
                xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                series={seriesY}
                slotProps={{
                    legend: {
                        position: { vertical: 'bottom', horizontal: 'center' },
                    },
                }}
                {...chartSetting}
            />)}
            <SettingChart series={series} isBar={isBar} setSeries={setSeries} setIsBar={setIsBar}/>
        </Container>
    );
}
export default GroupChart;