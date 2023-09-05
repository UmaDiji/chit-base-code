import httpService from './axios';

export const getData = async (page, id) =>
{
	const url = `/${process.env.SERVICE}/${page}/${id}`;
	try
	{
		const response = await httpService.get(url);
		return response.data;
	} catch (error)
	{
		console.log(`error occured in getData: ${page} - ${error}`);
		return { error: 1 };
	}
};

export const getParamData = async (page, config) =>
{
	let url = `/${process.env.SERVICE}/${page}?`;
	Object.keys(config).map(key =>
	{
		url += `${key}=${config[key]}&`
	})
	if (url.endsWith("&"))
		url = url.slice(0, -1)
	try
	{
		const response = await httpService.get(url);
		return response.data;
	} catch (error)
	{
		console.log(`error occured in getData: ${page} - ${error}`);
		return { error: 1 };
	}
};


