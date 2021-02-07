import React from 'react'
import styled from 'styled-components'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CloseIcon from '@material-ui/icons/Close'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

const Wrapper = styled.div`
    display: flex;
    display: inline-block;

    .date-and-time__name {
        display: inline-block;
        padding: 16px;
        flex: 1;

        > * {
            pointer-events: none;
        }
    }

    .calendar-picker-label {
        
    }

    .calendar__icon {
        color: var(--grey);
        vertical-align: middle;
        font-size: 19px !important;
        margin-bottom: 4px;
    }

    .date-and-time-picker__container {
        position: absolute;
        top: -165px;
        left: -51px;
        width: Calc( 100% + 100px);
        background-color: white;
        z-index: 3;
    }

    .date-and-time-picker__header {
        text-align: center;
        margin: 40px 35px 30px 35px;
        font-size: 27px;
    }

    .calendar-picker__icon {
        vertical-align: middle;
        font-size: 19px !important;
        margin-bottom: 4px;
    }

    .calendar-picker__icon-arrow {
        color: var(--grey);
        float: left;
        margin: -18px;
        padding: 20px;
        font-size: 33px;
    }

    .calendar-picker__icon-close {
        color: var(--grey);
        float: right;
        font-size: 40px;
        margin: -23px;
        padding: 20px;
    }

    .date-and-time-picker__name {
        display: inline-block;
        flex: 1;
    }

    // datepicker overrides
    
        .MuiPickersDatePickerRoot-toolbar {
            display: none;
        }

        .MuiPickersCalendarHeader-transitionContainer {
            height: 30px;
        }

        .MuiPickersSlideTransition-transitionContainer > * {
            font-size: 27px;
        }

        .MuiIconButton-root {
            padding: 0;
            font-size: 50px;
        }
        
        .MuiIconButton-root {
            font-size: 50px;
        }

        .MuiPickersToolbar-toolbar {
            background-color: white;
        }
        
        .MuiPickersToolbarText-toolbarTxt {
            color: rgb(27 27 27 / 54%);
        }

        .MuiPickersToolbarButton-toolbarBtn {
            width: 100%;
        }

        .MuiPickersBasePicker-pickerView {
            margin: 0 auto;
            max-width: none;
            min-width: none;
        }

        .MuiPickersCalendarHeader-switchHeader {
            // width: 165px;
            width: 305px;
            color: var(--orange);
            margin: 0 auto;

            .MuiSvgIcon-root {
                fill: inherit;
                font-size: 50px;
                margin-top: 8px;
            }
        }

        .MuiPickersDay-daySelected {
            background-color: var(--purple);
        }

        .MuiPickersCalendar-transitionContainer {
            margin-top: 50px;
            min-height: 290px;
        }

        .MuiPickersDay-day {
            margin: 10px;
        }

        .MuiPickersCalendarHeader-dayLabel {
            color: var(--purple);
            font-weight: 600;
            width: 52px;
            font-size: 18px;
            margin-top: 40px;
        }

        .MuiTypography-colorInherit {
            width: 55px;
            font-size: 18px;
            font-weight: 600;
        }

        .MuiPickersCalendarHeader-daysHeader {
            margin-top: 12px;
        }
    
    .arrival-time__options-line-break {
        background-color: var(--purple);
        border: 1px solid var(--purple);
        max-width: 310px;
        position: absolute;
        width: 100%;
        left: 18%;
    }

    .line-break__top {
        top: 115px;
    }

    .line-break__bottom {
        top: 175px;
    }

    .arrival-time__container {
        text-align: center;
        position: relative;
    }

    .arrival-time__label {
        color: var(--orange);
        text-align: center;
        font-size: 27px;
    }

    .arrival-time__options-container {
        max-height: 65px;
        overflow-y: scroll;
        margin: 15px auto;
        max-width: 400px;
        padding: 70px 0;
    }

    .arrival-time__option {
        color: var(--lightGrey);
        padding: 20px 0;
    }

    .arrival-time__option-chosen {
        color: rgb(0,0,0);
    }
    
    .arrival-time-buttons__before {
        margin-top: 50px;
        box-shadow: 0 2px 3px 1px var(--lightGrey);
    }

    .arrival-time-buttons__container {
        padding: 25px;
        display: flex;

        .arrival-time-button__clear {
            flex: 1;
            font-size: 24px;
            cursor: pointer;
            text-decoration: underline;
        }

        .arrival-time-button__done {
            width: 120px;
            background-color: var(--orange);
            padding: 5px 10px;
            text-align: center;
            border-radius: 5px;
            color: rgb(255, 255, 255);
            font-size: 24px;    
        }
    }
`

const DateAndTime = ({ className }) => {

    const [dateAndTime, setDateAndTime] = React.useState('Date and Time');
    const [isPickerOpen, setIsPickerOpen] = React.useState(false);

    const [selectedDate, setNewDate] = React.useState(new Date());
    const [arrivalTime, setArrivalTime] = React.useState(1);

    const availableReservationTimes = [
        {
            id: 1,
            time: '13:45'
        },
        {
            id: 2,
            time: '14:00'
        },
        {
            id: 3,
            time: '14:45'
        },
        {
            id: 4,
            time: '15:00'
        },
        {
            id: 5,
            time: '18:00'
        },
    ]

    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    const arrivalTimeRef = React.useRef(null);

    var scrollTop = 70;
    
    const handleScroll = (e) => {
        const newScrollTop = e.target.scrollTop;

        if (newScrollTop > scrollTop) {
            scrollTop += 70;
        } else if (newScrollTop < scrollTop) {
            scrollTop -= 70;
        }

        e.target.scrollTop = scrollTop;
        
        const children = arrivalTimeRef.current.children;
        
        for ( let i = 1; i < children.length - 1; i++) {
            children[i].setAttribute('class', 'arrival-time__option');
            children[i].setAttribute('value', false);
        }
        
        const index =  Math.floor(scrollTop / 70) + 1;
        
        children[index].classList += ' arrival-time__option-chosen';
        children[index].setAttribute('value', true);
    }

    const handleArrivalTimeSet = () => {
        const children = arrivalTimeRef.current.children;
        
        for ( let i = 1; i < children.length - 1; i++) {
            if (children[i].attributes[1]) {
                if ( children[i].attributes[1].nodeValue === 'true' ) {
                    setArrivalTime(i);
                    setIsPickerOpen(false);
                }
            } else {
                setArrivalTime(1);
                setIsPickerOpen(false);
            }
        }
    }

    React.useEffect(() => {
        if(arrivalTimeRef.current){
            arrivalTimeRef.current.removeEventListener('scroll', handleScroll);
            arrivalTimeRef.current.addEventListener('scroll', handleScroll); 
        }
    }, [isPickerOpen])

    return (
        <Wrapper className={className}>
            <div className='date-and-time__name' onClick={() => {setIsPickerOpen(true)}}>
                <CalendarTodayIcon className='calendar__icon'/>
                <label className='calendar-picker-label'> { selectedDate && arrivalTime ? `${selectedDate.getUTCDate()}, ${months[selectedDate.getMonth()]}, ${availableReservationTimes[arrivalTime].time}` : dateAndTime } </label>
            </div>
            {
                isPickerOpen ? 
                <div className='date-and-time-picker__container'>
                    <div className='date-and-time-picker__header'>
                        <ArrowBackIosIcon className='calendar__picker__icon calendar-picker__icon-arrow' onClick={() => {setIsPickerOpen(false)}} />
                        <div className='date-and-time-picker__name' onClick={() => {setIsPickerOpen(true)}}>
                            <CalendarTodayIcon className='calendar-picker__icon'/>
                            <label className='calendar-picker-label'> { dateAndTime } </label>
                        </div>
                        <CloseIcon className='calendar__picker__icon calendar-picker__icon-close' onClick={() => {setIsPickerOpen(false)}} />
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            autoOk
                            variant="static"
                            clearable
                            value={selectedDate}
                            onChange={setNewDate}
                        />
                    </MuiPickersUtilsProvider>
                    <div className='arrival-time__container'>
                        <label className='arrival-time__label'> Arrival Time </label>
                        <div className='arrival-time__options-container' ref={arrivalTimeRef}>
                            <hr className='arrival-time__options-line-break line-break__top'key={Math.random()}/>
                        {
                            availableReservationTimes.map((option, index) => {return(
                                <div className={`arrival-time__option ${arrivalTime === index + 1 ? 'arrival-time__option-chosen' : ''}`} key={index}>
                                    { option.time }
                                </div>
                            )})
                        }
                            <hr className='arrival-time__options-line-break line-break__bottom'key={Math.random()}/>
                        </div>
                    </div>
                    <div className='arrival-time-buttons__before'></div>
                    <div className='arrival-time-buttons__container'>
                        <label className='arrival-time-button__clear' onClick={() => {setIsPickerOpen(false)}} >Clear</label>
                        <div className='arrival-time-button__done' onClick={handleArrivalTimeSet}>Done</div>
                    </div>
                </div>
                : undefined
            }
        </Wrapper>
    )
}

export default DateAndTime;