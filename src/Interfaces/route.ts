/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable semi */
export default interface IRoute {
  path: string;
  exact: boolean;
  component: any;
  name: string;
  protected: boolean;
}