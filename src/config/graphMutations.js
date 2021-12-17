import { gql } from "@apollo/client";

const storeSvxlinkConfigFile = gql`
  mutation storeSvxlinkConfigFile($input: FileInputDataType!) {
    storeSvxlinkConfigFile(input: $input) {
      file
    }
  }
`;

const mutations = {
  storeSvxlinkConfigFileMutation: storeSvxlinkConfigFile,
};

export default mutations;