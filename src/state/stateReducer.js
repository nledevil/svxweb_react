
const actionTypeFunctions = {
  SvxlinkConfig: (state, action) => ({
    ...state,
    svxlinkConfig: action.svxlinkConfig,
  }),
  OSStats: (state, action) => ({
    ...state,
    osStats: action.osStats,
  }),
};

export const stateReducer = (state, action) => actionTypeFunctions[action.type](state, action);
