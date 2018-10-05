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
                                "standingInst": 500,
                                "balance": 2500,
                                "minBalance": 100,
                                "interestRate": 0 ,
                                "availableBalance":1900
                            }
                        ]
                    },
                    {
                        "bankName": "Barclays",
                        "bankId": "Barclays",
                        "accounts": [
                            {
                                "accountType": "PCA",
                                "accountNumber": "234567 89012345",
                                "accountTitle": "Platinum Account",
                                "standingInst": 500,
                                "balance": 2000,
                                "minBalance": 100,
                                "interestRate": 0,
                                "availableBalance":1400
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
                                "standingInst": 500,
                                "balance": 5000,
                                "minBalance": 100,
                                "interestRate": 1,
                                "availableBalance":4400
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
                            creditLimit: 3000,
                            availableCredit: 1000,
                            totalBalanceDue: 2000,
                            minBalanceDue: 500,
                            apr: 35,
                            dueDate: new Date().setDate(new Date().getDate()+5)                         
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
                            creditLimit: 4000,
                            availableCredit: 1500,
                            totalBalanceDue: 2500,
                            minBalanceDue: 400,
                            apr: 25,
                            dueDate: new Date().setDate(new Date().getDate()+12)                          
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
                            minMonthlyPayment: 150,
                            remainingFullTerm: '2Y 3M',
                            totalBalanceDue: 2000,
                            minBalanceDue: 2000,
                            interestRate: 2.5,
                            apr: 30,
                            dueDate: new Date().setDate(new Date().getDate()+20)                         
                        }
                    ]
                }
            ]
        },
        {
            username: 'john',
            password: 'doe',
            UIN: 'UIN-xxxxx',
            creditScore: 650,
            debitBankAccountDetails: [
                    {
                        "bankName": "BOS",
                        "bankId": "BBOOSS",
                        "accounts": [
                            {
                                "accountType": "PCA",
                                "accountNumber": "678901 23456789",
                                "accountTitle": "Classic Account",
                                "standingInst": 300,
                                "balance": 2300,
                                "minBalance": 100,
                                "interestRate": 0 ,
                                "availableBalance":1900
                            }
                        ]
                    },
                    {
                        "bankName": "HHSSBBCC",
                        "bankId": "HHSSBBCC",
                        "accounts": [
                            {
                                "aaccountType": "PCA",
                                "accountNumber": "234567 89012345",
                                "accountTitle": "Platinum Account",
                                "standingInst": 500,
                                "balance": 2000,
                                "minBalance": 100,
                                "interestRate": 0,
                                "availableBalance":1400
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
                                "standingInst": 1700,
                                "balance": 5000,
                                "minBalance": 300,
                                "interestRate": 1,
                                "availableBalance":3000
                            }
                        ]
                    }
            
            ],
            creditBankAccountDetails: [
                {
                    bankName: 'Capital One',
                    bankId: 'CCaappiittaall  OOnnee',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: '456789 0123456789',
                            accountTitle: 'Low Rate',
                            creditLimit: 4000,
                            availableCredit: 2000,
                            totalBalanceDue: 2000,
                            minBalanceDue: 500,
                            apr: 35,
                            dueDate: new Date().setDate(new Date().getDate()+12)                         
                        }
                    ]
                },
                {
                    bankName: 'Barclays',
                    bankId: 'BBaarrccllaayyss',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: '567890 1234567890',
                            accountTitle: 'No Fee 0% Balance Transfer',
                            creditLimit: 4000,
                            availableCredit: 1500,
                            totalBalanceDue: 2500,
                            minBalanceDue: 400,
                            apr: 30,
                            dueDate: new Date().setDate(new Date().getDate()+5)                          
                        }
                    ]
                },
                {
                    bankName: 'Citi Bank',
                    bankId: 'CCiittii  BBaannkk',
                    accounts: [
                        {
                            accountType: 'M',
                            accountNumber: '567890 1234567890',
                            accountTitle: 'Home Loan',
                            minMonthlyPayment: 150,
                            remainingFullTerm: '1Y 10M',
                            totalBalanceDue: 2000,
                            minBalanceDue: 2000,
                            interestRate: 2.5,
                            apr: 25,
                            dueDate: new Date().setDate(new Date().getDate()+20)                         
                        }
                    ]
                }
            ]
        }
    ]   
}