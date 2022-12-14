import request, { Resp } from './index'
import * as GroupApiType from './../types/api/group'

export async function listAllGroups(): Promise<Resp<GroupApiType.ListAllGroupsResp[]>> {
	return await request.post('http://127.0.0.1:3000/administrate/group/listAllGroups', {})
}
