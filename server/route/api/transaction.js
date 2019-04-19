import { Router } from 'express';

// controllers
import TransactionController from '../../controller/transactionController';
import AccountValidation from '../../middleaware/validation/accountValidation';

// helpers
import AuthMiddleware from '../../middleaware/authMiddleware/authMiddleware';

// account routes
const transactionRoutes = Router();

transactionRoutes.post('/:accountNumber/debit',
  AuthMiddleware.checkIfUserIsAuthenticated,
  AccountValidation.checkIfAccountExist,
  AccountValidation.staffChecker,
  TransactionController.debitAccount);

transactionRoutes.post('/:accountNumber/credit',
  AuthMiddleware.checkIfUserIsAuthenticated,
  AccountValidation.checkIfAccountExist,
  AccountValidation.accountStatusChecker,
  AccountValidation.staffChecker,
  TransactionController.creditAccount);
export default transactionRoutes;
