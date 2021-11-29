import React from 'react'

// components
import MainLayout from '../../layouts/MainLayout'
import TopHeader from '../../components/Headers/TopHeader'
import DebitCard from '../../components/Cards/DebitCard'
import BudgetCard from '../../components/Cards/BudgetCard'
import PaymentMethodCard from '../../components/Cards/PaymentMethodCard'
import Invoice from '../../components/ImageAndTexts/Invoice'
import Button from '../../components/Buttons/SidenavButton'
import BillingInfoCard from '../../components/Cards/BillingInfoCard'
import TransactionCard from '../../components/Cards/TransactionCard'

// styles
import {
  StyledPaymentsContainer,
  StyledPayments,
  StyledInvoices,
  StyledBillingInformationContainer,
  StyledBillingInformation,
  StyledTransactions,
  StyledTransactionsTitle,
} from './styles/StyledBilling'
import { colors } from '../../GlobalStyles'
import { StyledTopHeader } from '../../components/Headers/styles/TopHeader'

// utils
import { DebitCardContent } from '../../assets/contents/Billings/DebitCardContent'
import { BudgetCardContent } from '../../assets/contents/Billings/BudgetCardContent'
import { PaymentCardContent } from '../../assets/contents/Billings/PaymentCardContent'
import { InvoiceContent } from '../../assets/contents/Billings/InvoiceContent'
import { BillingInformationContent } from '../../assets/contents/Billings/BillingInformationContent'
import { TransactionsNew, TransactionsOld } from '../../assets/contents/Billings/TransactionsContent'
import { MdDateRange } from 'react-icons/md'

const Billing = () => {
  return (
    <MainLayout>
      <StyledTopHeader>
        <TopHeader page='Billing' />
      </StyledTopHeader>

      <StyledPaymentsContainer>
        <StyledPayments>
          <div className='budget_cards'>
            <DebitCard card={DebitCardContent} />
            {BudgetCardContent.map((budget, index) => (
              <BudgetCard budget={budget} key={budget.title + index} />
            ))}
          </div>
          <PaymentMethodCard paymentMethods={PaymentCardContent} />
        </StyledPayments>

        <StyledInvoices>
          <div className='invoice_title'>
            <h4>Invoices</h4>
            <Button title='View All' bgColor='#fff' color={colors.lightBlue} borderColor={colors.lightBlue} />
          </div>

          <div>
            {InvoiceContent.map((invoice, index) => (
              <Invoice invoice={invoice} key={invoice.id + index} />
            ))}
          </div>
        </StyledInvoices>
      </StyledPaymentsContainer>

      <StyledBillingInformationContainer>
        <StyledBillingInformation>
          <h4>Billing Information</h4>

          {BillingInformationContent.map((info) => (
            <BillingInfoCard info={info} key={info.emailAddress} />
          ))}
        </StyledBillingInformation>

        <StyledTransactions>
          <StyledTransactionsTitle>
            <h4>Your Transactions</h4>
            <p>
              <MdDateRange />
              23 - 30 March 2020
            </p>
          </StyledTransactionsTitle>

          <h4 className='transaction_day'>Newest</h4>
          {TransactionsNew.map((transaction, index) => (
            <TransactionCard transaction={transaction} key={transaction.title + index} />
          ))}

          <h4 className='transaction_day'>Yesterday</h4>
          {TransactionsOld.map((transaction, index) => (
            <TransactionCard transaction={transaction} key={transaction.title + index} />
          ))}
        </StyledTransactions>
      </StyledBillingInformationContainer>
    </MainLayout>
  )
}

export default Billing
