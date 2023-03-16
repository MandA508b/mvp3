import React, {useEffect} from 'react';
import {
    useChangeBlureFilterMutation,
    useChangeDirectionMutation, useChangeFilterMutation, useChangeVisibleFilterMutation,
    useCoinDirectionQuery, useCoinTooltipQuery,
    useFilterCalculatingQuery, useProjectBlureFilterQuery, useProjectVisibleFilterQuery
} from "../redux/table/tableApiSlice";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {useSelector} from "react-redux";
import {selectCurrentGroup} from "../redux/groups/groupsSlice";
import Checkbox from "@mui/material/Checkbox";
import ChangeTooltip from "./ChangeTooltip";
const Settings = ({show}) => {
    const {data, isSuccess, isLoading} = useCoinDirectionQuery()
    const {data: vis, isSuccess: vss, isLoading: vsl} = useProjectVisibleFilterQuery()
    const {data: blr, isSuccess: bls, isLoading: bll} = useProjectBlureFilterQuery()
    const {data: ctt, isSuccess: cts, isLoading: ctl} = useCoinTooltipQuery()

    const {data: filterCalc, isSuccess: fcs, isLoading: fcl} = useFilterCalculatingQuery()

    const group = useSelector(selectCurrentGroup)
    const [changeReverse] = useChangeDirectionMutation()
    const [changeFilter] = useChangeFilterMutation()
    const [changeVisible] = useChangeVisibleFilterMutation()
    const [changeBlur] = useChangeBlureFilterMutation()

    const handleChangeReverse = async (name, status) => {
        const res = {}
        res[name] = !status
        try {
            await changeReverse({coinDirectionData: res})
        } catch (e) {
            console.log(e)
        }


    }
    const handleChangeFilter = async (name, status) => {
        const res = {}
        res[name] = !status
        try {
            await changeFilter({filterCalculatingData: res})
        } catch (e) {
            console.log(e)
        }
    }
    const handleChangeVisible = async (name, status) => {
        const res = {}
        res[name] = !status
        try {
            const req = await changeVisible({projectVisibleFilterData: res})
        } catch (e) {
            console.log(e)
        }
    }

    const handleChangeBlur = async (name, status) => {
        const res = {}
        res[name] = !status
        try {
            const req = await changeBlur({projectBlureFilterData: res})
        } catch (e) {
            console.log(e)
        }
    }


    if (!isSuccess || isLoading || fcl || !fcs || !vss || vsl || !bls || bll || !cts || ctl || !show) return null
    return (
        <>
            <TableRow sx={{bgcolor:'#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Reverse?</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "name" && elem !== 'full_name') {
                            return (
                                <TableCell key={elem} align="center">
                                    <Checkbox checked={data[elem]}
                                              onChange={e => handleChangeReverse(elem, data[elem])}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>

            </TableRow>

            <TableRow sx={{bgcolor:'#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Filter</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "name" && elem !== 'full_name') {
                            return (
                                <TableCell key={elem} align="center">
                                    <Checkbox checked={filterCalc[elem]}
                                              onChange={e => handleChangeFilter(elem, filterCalc[elem])}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>

            </TableRow>
            <TableRow sx={{bgcolor:'#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Visible</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "name" && elem !== 'full_name') {
                            return (
                                <TableCell key={elem} align="center">
                                    <Checkbox checked={vis[elem]}
                                              onChange={e => handleChangeVisible(elem, vis[elem])}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>

            </TableRow>
            <TableRow sx={{bgcolor:'#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Blur</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "name" && elem !== 'full_name') {
                            return (
                                <TableCell key={elem} align="center">
                                    <Checkbox checked={blr[elem]}
                                              onChange={e => handleChangeBlur(elem, blr[elem])}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>

            </TableRow>
            <TableRow sx={{bgcolor:'#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Tooltip</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "name" && elem !== 'full_name') {
                            return (
                                <TableCell key={elem} align="center">
                                    <ChangeTooltip name={elem} tt={ctt[elem]}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>

            </TableRow>

        </>
    );
};

export default Settings;