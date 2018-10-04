module.exports = {
    userData: [
        {
            username: 'alice',
            password: 'wonderland',
            UIN: 'UIN-xxxx',
            creditScore: 700,
            debitBankAccountDetails: [
                {
                    bankName: 'Halifax',
                    bankId: 'HHaalliiffaaxx',
                    accounts: [
                        {
                            accountType: 'PCA',
                            balance: 15000,
                            minBalance: 3000,
                            interestRate: 0                        
                        }
                    ]
                },
                {
                    bankName: 'HDFC',
                    bankId: 'HHDDFFCC',
                    accounts: [
                        {
                            accountType: 'PCA',
                            balance: 5000,
                            minBalance: 3000,
                            interestRate: 0                       
                        }
                    ]
                },
                {
                    bankName: 'HSBC',
                    bankId: 'HHSSBBCC',
                    accounts: [
                        {
                            accountType: 'Savings',
                            balance: 5000,
                            minBalance: 4000,
                            interestRate: 1                        
                        }
                    ]
                }
            ],
            creditBankAccountDetails: [
                {
                    bankName: 'Barclays',
                    bankId: 'BBaarrccllaayyss',
                    accounts: [
                        {
                            accountType: 'CC',
                            totalBalanceDue: 5000,
                            minBalanceDue: 500,
                            apr: 30,
                            dueDate: new Date()                         
                        }
                    ]
                },
                {
                    bankName: 'Capital One',
                    bankId: 'Ccaappiittaall  OOnnee',
                    accounts: [
                        {
                            accountType: 'CC',
                            totalBalanceDue: 8000,
                            minBalanceDue: 3000,
                            apr: 26,
                            dueDate: new Date()                         
                        }
                    ]
                },
                {
                    bankName: 'HSBC',
                    bankId: 'HHSSBBCC',
                    accounts: [
                        {
                            accountType: 'M',
                            totalBalanceDue: 7000,
                            minBalanceDue: 2000,
                            apr: 24,
                            dueDate: new Date()                         
                        }
                    ]
                }
            ]
        }
    ]   
}