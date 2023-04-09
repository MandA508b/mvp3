import React, {useEffect, useState} from 'react';
import {
    useChangeBlureFilterMutation,
    useChangeDirectionMutation, useChangeFilterMutation, useChangeVisibleFilterMutation,
    useCoinDirectionQuery, useCoinLimitQuery, useCoinTooltipQuery,
    useFilterCalculatingQuery, useProjectBlureFilterQuery, useProjectVisibleFilterQuery,
    useExcelValueQuery} from "../redux/table/tableApiSlice";
import {TableCell, TableRow, Checkbox} from "@mui/material/";

import {useSelector} from "react-redux";
import {selectCurrentGroup} from "../redux/groups/groupsSlice";
import ChangeTooltip from "./ChangeTooltip";
import ChangeLimit from "./ChangeLimit";
import ChangeExcelValue from "./ChangeExcelValue";

const Settings = ({show}) => {

    const [limits, setLimits] = useState({})

    const {data, isSuccess, isLoading} = useCoinDirectionQuery()
    const {data: vis, isSuccess: vss, isLoading: vsl} = useProjectVisibleFilterQuery()
    const {data: blr, isSuccess: bls, isLoading: bll} = useProjectBlureFilterQuery()
    const {data: ctt, isSuccess: cts, isLoading: ctl} = useCoinTooltipQuery()
    const {data: lim, isLoading: lml, isSuccess: lms} = useCoinLimitQuery()
    const {data: exv, isLoading: evl, isSuccess: evs} = useExcelValueQuery()

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
            await changeVisible({projectVisibleFilterData: res})
        } catch (e) {
            console.log(e)
        }
    }

    const handleChangeBlur = async (name, status) => {
        const res = {}
        res[name] = !status
        try {
            await changeBlur({projectBlureFilterData: res})
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (lms) {
            const newLim = {}
            Object.keys(lim[0]).forEach((name) => {
                newLim[name] = {min: lim[1][name], max: lim[0][name]}
            })
            setLimits(newLim)
        }
    }, [lms])



    if (!isSuccess || isLoading || fcl || !fcs || !vss || vsl || !bls || bll || !cts || ctl || !show || !lms || lml || !Object.keys(limits).length || !evs || evl) return null
    return (
        <>
            <TableRow sx={{bgcolor: '#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Reverse</TableCell>
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

            <TableRow sx={{bgcolor: '#ecf0f4'}}>
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
            <TableRow sx={{bgcolor: '#ecf0f4'}}>
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
            <TableRow sx={{bgcolor: '#ecf0f4'}}>
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
            <TableRow sx={{bgcolor: '#ecf0f4'}}>
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
            <TableRow sx={{bgcolor: '#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Limits</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "_id" && elem !== 'full_name' && elem !== 'name') {
                            return (
                                <TableCell key={elem} align="center">
                                    <ChangeLimit name={elem} limits={{...limits[elem]}}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>
            </TableRow>

            <TableRow sx={{bgcolor: '#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Row 3</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "_id" && elem !== 'full_name' && elem !== 'name') {
                            console.log(exv[0],1)
                            return (
                                <TableCell key={elem} align="center">
                                    <ChangeExcelValue name={'row_3'} data={{name:elem,value:exv[0][elem]}}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>
            </TableRow>
            <TableRow sx={{bgcolor: '#ecf0f4'}}>
                <TableCell></TableCell>
                <TableCell sx={{columnSpan: 2}} align={'left'}>Row 6</TableCell>
                {
                    Object.keys(group).map(elem => {
                        if (group[elem] && elem !== "_id" && elem !== 'full_name' && elem !== 'name') {
                            console.log({[elem]:exv[0][elem]})
                            return (
                                <TableCell key={elem} align="center">
                                    <ChangeExcelValue name={'row_6'} data={{name:elem, value:exv[1][elem]}}/>
                                </TableCell>
                            )
                        } else return null
                    })
                }
                <TableCell></TableCell>
            </TableRow>

        </>
    )
        ;
};

export default Settings;