import { gql } from 'apollo-server-express';

export default gql`
  """
  A date-time string at UTC, such as 2007-12-03T10:15:30Z
  """
  scalar DateTime

  """
  Integers that will have a value of 0 or more
  """
  scalar NonNegativeInt
`;
