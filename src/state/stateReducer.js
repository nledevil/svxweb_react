
const actionTypeFunctions = {
  SvxlinkConfigFile: (state, action) => ({
    ...state,
    svxlinkConfigFile: action.file,
  }),
  SvxlinkLogFile: (state, action) => ({
    ...state,
    svxlinkLogFile: action.file,
  }),
  OSStats: (state, action) => ({
    ...state,
    osStats: action.osStats,
  }),
  SvxlinkStatus: (state, action) => ({
    ...state,
    svxlinkStatus: action.svxlinkStatus,
  }),
};

export const stateReducer = (state, action) => actionTypeFunctions[action.type](state, action);
