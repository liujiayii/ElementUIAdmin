import user from './allApi/user';
import file from './allApi/file';
import permissions from './allApi/permissions'

let allApi = Object.assign(
  user,
  file,
  permissions
);

export default allApi;
