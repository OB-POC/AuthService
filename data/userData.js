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
                                "accountType": "SB",
                                "accountNumber": "123456 78901234",
                                "accountTitle": "Every Day Saver",
                                "standingInst": 2000,
                                "balance": 4000,
                                "minBalance": 1000,
                                "interestRate": 0.2 ,
                                "availableBalance":1000
                            }
                        ]
                    },
                    {
                        "bankName": "HSBC",
                        "bankId": "HHSSBBCC",
                        "accounts": [
                            {
                                "accountType": "PCA",
                                "accountNumber": "234567 89012345",
                                "accountTitle": "HSBC Advance Bank Account",
                                "standingInst": 1200,
                                "balance": 4000,
                                "minBalance": 200,
                                "interestRate": 0.5,
                                "availableBalance":2600
                            }
                        ]
                    },
                    {
                        "bankName": "Barclays",
                        "bankId": "BBaarrccllaayyss",
                        "accounts": [
                            {
                                "accountType": "SB",
                                "accountNumber": "345678 90123456",
                                "accountTitle": "Easy Saver",
                                "standingInst": 800,
                                "balance": 6000,
                                "minBalance": 200,
                                "interestRate": 0.25,
                                "availableBalance":5000
                            }
                        ]
                    }
            
            ],
            creditBankAccountDetails: [
                {
                    bankName: 'JP Morgan Chase',
                    bankId: 'JJPP  MMoorrggaann  CChhaassee',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: '456789 0123456789',
                            accountTitle: 'Chase Freedom Unlimited Credit Card',
                            creditLimit: 3000,
                            availableCredit: 1200,
                            totalBalanceDue: 1800,
                            minBalanceDue: 30,
                            apr: 25.49,
                            dueDate: new Date().setDate(new Date().getDate()+5)                         
                        }
                    ]
                },
                {
                    bankName: 'RBS',
                    bankId: 'RRBBSS',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: '567890 1234567890',
                            accountTitle: 'RBS Unlimited Credit Card',
                            creditLimit: 4000,
                            availableCredit: 3800,
                            totalBalanceDue: 200,
                            minBalanceDue: 100,
                            apr: 19.94,
                            dueDate: new Date().setDate(new Date().getDate()+12)                          
                        }
                    ]
                },
                {
                    bankName: 'Monzo',
                    bankId: 'MMoonnzzoo',
                    accounts: [
                        {
                            accountType: 'M',
                            accountNumber: '567890 1234567890',
                            accountTitle: 'Home Loan',
                            minMonthlyPayment: 900,
                            remainingFullTerm: '0Y 5M',
                            totalBalanceDue: 6000,
                            interestRate: 2.90,
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
                        "bankName": "Halifax",
                        "bankId": "HHaalliiffaaxx",
                        "accounts": [
                            {
                                "accountType": "SB",
                                "accountNumber": "678901 23456789",
                                "accountTitle": "Every Day Saver",
                                "standingInst": 1000,
                                "balance": 4000,
                                "minBalance": 500,
                                "interestRate": 0.20 ,
                                "availableBalance":2500
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
                                "accountTitle": "HSBC Advance Bank Account",
                                "standingInst": 600,
                                "balance": 3000,
                                "minBalance": 300,
                                "interestRate": 0.5,
                                "availableBalance":2100
                            }
                        ]
                    },
                    {
                        "bankName": "Barclays",
                        "bankId": "BBaarrccllaayyss",
                        "accounts": [
                            {
                                "accountType": "SB",
                                "accountNumber": "345678 90123456",
                                "accountTitle": "Easy Saver",
                                "standingInst": 400,
                                "balance": 4000,
                                "minBalance": 100,
                                "interestRate": 0.25,
                                "availableBalance":3500
                            }
                        ]
                    }
            
            ],
            creditBankAccountDetails: [
                {
                    bankName: 'JP Morgan Chase',
                    bankId: 'JJPP  MMoorrggaann  CChhaassee',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: '456789 0123456789',
                            accountTitle: 'Chase Freedom Unlimited Credit Card',
                            creditLimit: 3000,
                            availableCredit: 200,
                            totalBalanceDue: 2800,
                            minBalanceDue: 30,
                            apr: 25.49,
                            dueDate: new Date().setDate(new Date().getDate()+12)                         
                        }
                    ]
                },
                {
                    bankName: 'Bank of Scotland',
                    bankId: 'BBaannkk  ooff  SSccoottllaanndd',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: '567890 1234567890',
                            accountTitle: 'Classic Credit Card',
                            creditLimit: 1200,
                            availableCredit: 800,
                            totalBalanceDue: 400,
                            minBalanceDue: 100,
                            apr: 27.9,
                            dueDate: new Date().setDate(new Date().getDate()+5)                          
                        }
                    ]
                },
                {
                    bankName: 'Monzo',
                    bankId: 'MMoonnzzoo',
                    accounts: [
                        {
                            accountType: 'M',
                            accountNumber: '567890 1234567890',
                            accountTitle: 'Home Loan',
                            minMonthlyPayment: 900,
                            remainingFullTerm: '0Y 5M',
                            totalBalanceDue: 6000,
                            interestRate: 2.9,
                            dueDate: new Date().setDate(new Date().getDate()+20)                         
                        }
                    ]
                }
            ]
        }
    ]   
}