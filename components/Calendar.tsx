'use client'
import { selectCalendarDate } from '@/redux/features/calendar/calendarSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React from 'react'
import Calendar from 'react-calendar'

type Props = {}

const CalendarComponent = (props: Props) => {
	const dispatch = useAppDispatch()
	const date = useAppSelector(selectCalendarDate)

	return (
		<div>
			<Calendar />
		</div>
	)
}

export default CalendarComponent
