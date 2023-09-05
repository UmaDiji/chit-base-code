import moment from 'moment';

export const sampleFunction = data => {
  return data;
};

const MaxRateVal = 5
export function getRandomRate() 
{
	return Math.ceil(Math.random() * MaxRateVal);
}

export let getDspIsoDateTime=(dbDate)=>{
	return dbDate ? moment(dbDate * 1000).format("YYYY-MM-DDTHH:mm:ss") : ""	
}

export let getDspDateTime=(dbDate)=>{
	return dbDate ? moment(dbDate * 1000).format("DD/MM/YY h.mm a") : ""	
}

export let getDspDate=(dbDate)=>{
	return dbDate ? moment(dbDate * 1000).format("DD/MM/YYYY") : ""	
}

export let getDspTime=(dbDate)=>{
	return dbDate ? moment(dbDate * 1000).format("h.mm a") : ""	
}

export let getDspInputDate=(dspDate)=>{
	return dspDate ? moment(dspDate, "DD/MM/YYYY").format("YYYY-MM-DD") : ""	
}

export let getIsoInputDate=(dspDate)=>{
	return dspDate ? moment(dspDate).format("YYYY-MM-DD HH:mm") : ""	
}

export let getDbTimeNum = (dspDate) =>
{
	return dspDate ? (new Date(dspDate).getTime()/1000).toString() : ""
}

export let chkAge = (date)=>{
	return moment().diff(moment(date), "years") >= 18
}
