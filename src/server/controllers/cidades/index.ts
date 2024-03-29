import * as create from './Create'
import * as getAll from './GeaAll';
import * as deleteById from './DeletebyId'
import * as getById from './GetbyId'
import * as updateById from './UpdateByID'


export const CidadesController ={
    ...create,
    ...getAll,
    ...deleteById,
    ...getById,
    ...updateById
}

