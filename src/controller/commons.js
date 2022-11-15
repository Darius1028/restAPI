export const querySerch = (objs, fields) => {
  const search = [];

  for (const [key, value] of Object.entries(objs)) {
    if (value !== undefined && fields.includes(key)) {
      search.push({ [key]: new RegExp(value, 'i') });
    }
  }

  if(search.length === 0)
    return {};

  return { $and: search };
}

export const querySelect = (strSelected) => {
  const selectObj = { _id: 0 };

  if (strSelected === undefined)
    return selectObj;

  strSelected.split(',').forEach(item => {
    selectObj[item] = 1;
  })

  return selectObj;
} 