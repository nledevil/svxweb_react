import { gql } from "@apollo/client";

const upsertSvxlinkItem = gql`
  mutation upsertSvxlinkItem($input: SvxlinkDataInputType!) {
    upsertSvxlinkItem(input: $input) {
      headerName
      settingName
      settingValue
    }
  }
`;

const mutations = {
  upsertSvxlinkItemMutation: upsertSvxlinkItem,
};

export default mutations;