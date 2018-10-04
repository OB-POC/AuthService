module.exports = {
    userData: [
        {
            username: 'alice',
            password: 'wonderland',
            UIN: 'UIN-xxxx',
            creditScore: 700,
            debitBankAccountDetails: [
                    {
                        "bankName": "Halifax",
                        "bankId": "HHaalliiffaaxx",
                        "accounts": [
                            {
                                "accountType": "PCA",
                                "accountNumber": "123456 78901234",
                                "accountTitle": "Classic Account",
                                "standingInst": 300,
                                "balance": 1500,
                                "minBalance": 300,
                                "interestRate": 0 ,
                                "availableBalance":900
                            }
                        ]
                    },
                    {
                        "bankName": "Barclays",
                        "bankId": "Barclays",
                        "accounts": [
                            {
                                "aaccountType": "PCA",
                                "accountNumber": "234567 89012345",
                                "accountTitle": "Platinum Account",
                                "standingInst": 1000,
                                "balance": 5000,
                                "minBalance": 300,
                                "interestRate": 0,
                                "availableBalance":3700
                            }
                        ]
                    },
                    {
                        "bankName": "Monzo",
                        "bankId": "Monzo",
                        "accounts": [
                            {
                                "accountType": "Savings",
                                "accountNumber": "345678 90123456",
                                "accountTitle": "Easy Saver",
                                "standingInst": 700,
                                "balance": 5000,
                                "minBalance": 400,
                                "interestRate": 1,
                                "availableBalance":3900
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
                            accountNumber: '456789 0123456789',
                            accountTitle: 'Low Rate',
                            creditLimit: 20000,
                            availableCredit: 15000,
                            totalBalanceDue: 5000,
                            minBalanceDue: 500,
                            apr: 30,
                            dueDate: new Date()                         
                        }
                    ]
                },
                {
                    bankName: 'Citi Bank',
                    bankId: 'CCiittii  BBaannkk',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: '567890 1234567890',
                            accountTitle: 'No Fee 0% Balance Transfer',
                            creditLimit: 15000,
                            availableCredit: 7000,
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
                            accountNumber: '567890 1234567890',
                            accountTitle: 'Home Loan',
                            creditLimit: 15000,
                            availableCredit: 8000,
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