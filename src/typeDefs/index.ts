import { gql, concatenateTypeDefs } from 'apollo-server-express';
import Currency from './currency';
import Account from './account';
import Entry from './entry';
import Transaction from './transaction';
import scalars from './scalars';
import AccountType from './accountType';
import Operation from './operation';
import AccountMutations from './accountMutations';
import DepositMutations from './depositMutations';
import PurchaseMutations from './purchaseMutations';
import WithdrawMutations from './withdrawMutations';

const rootSchema = gql`
  """
  API queries
  """
  type Query {
    """
    Healthcheck endpoint
    """
    health: String!
  }

  """
  API mutations
  """
  type Mutation {
    """
    Unused field to let extend this type
    """
    _: Boolean
  }
`;

export default concatenateTypeDefs(
  [
    rootSchema,
    scalars,
    Currency,
    Account,
    Entry,
    Transaction,
    AccountType,
    Operation,
    AccountMutations,
    DepositMutations,
    // PurchaseMutations,
    // WithdrawMutations
  ]
);
