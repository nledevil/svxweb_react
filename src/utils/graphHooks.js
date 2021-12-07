/* eslint-disable react-hooks/rules-of-hooks */
import { useLazyQuery, useMutation } from '@apollo/client';
import queries from '../config/graphQueries';
import mutations from '../config/graphMutations';

const { getOSStatsQuery, getSvxlinkConfigQuery } = queries;
const { upsertSvxlinkItemMutation } = mutations;

export const getOSStatsHook = () => useLazyQuery(getOSStatsQuery);
export const getSvxlinkConfigHook = () => useLazyQuery(getSvxlinkConfigQuery);
export const upsertSvxlinkItemHook = () => useMutation(upsertSvxlinkItemMutation);
