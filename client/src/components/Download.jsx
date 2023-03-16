import React from 'react';
import * as XLSX from "xlsx";
import * as fs from 'file-saver'
import {Button} from "@mui/material";
import {useFetchAllCoinsQuery} from "../redux/table/tableApiSlice";

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const Download = () => {
    const {data:coins} = useFetchAllCoinsQuery()
    const saveAsExcel = (buffer, filename) => {
        const data = new Blob([buffer], {type: EXCEL_TYPE})
        fs.saveAs(data, filename + new Date().getTime() + '.xlsx')
    }

    const downloadAsExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(coins)
        const workbook = {
            Sheets: {
                'data': worksheet
            },
            SheetNames  : ['data']
        }

        const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'})
        saveAsExcel(excelBuffer, 'crypto')
    }


    return (
        <div>
            <Button onClick={downloadAsExcel}>Download</Button>
        </div>
    );
};

export default Download;