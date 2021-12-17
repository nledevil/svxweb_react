/* eslint-disable react-hooks/rules-of-hooks */
import { useLazyQuery, useMutation } from '@apollo/client';
import queries from '../config/graphQueries';
import mutations from '../config/graphMutations';

const {
  getOSStatsQuery,
  getSvxlinkConfigFileQuery,
  getSvxlinkLogFileQuery,
  getSvxlinkStatusQuery,
} = queries;
const { storeSvxlinkConfigFileMutation } = mutations;

export const getOSStatsHook = () => useLazyQuery(getOSStatsQuery);
export const getSvxlinkConfigFileHook = () => useLazyQuery(getSvxlinkConfigFileQuery);
export const getSvxlinkLogFileHook = () => useLazyQuery(getSvxlinkLogFileQuery);
export const getSvxlinkStatusHook = () => useLazyQuery(getSvxlinkStatusQuery);
export const storeSvxlinkConfigFileHook = () => useMutation(storeSvxlinkConfigFileMutation);
