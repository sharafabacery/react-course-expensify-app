import moment from 'moment'

export const filter={
    text:'',
    sortDate:'date',
    startDate:undefined,
    endDate:undefined
}
export const altfilter={
    text:'bills',
    sortDate:'amount',
    startDate:moment(0),
    endDate:moment().add(3,'days')
}