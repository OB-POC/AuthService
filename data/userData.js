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
                                "accountNumber": "XXXXXX XXXX6789",
                                "accountTitle": "Every Day Saver",
                                "standingInst": '2,000',
                                "balance": '4,000',
                                "minBalance": '1,000',
                                "interestRate": 0.2 ,
                                "availableBalance":'1,000'
                            }
                        ]
                    },
                    {
                        "bankName": "HSBC",
                        "bankId": "HHSSBBCC",
                        "accounts": [
                            {
                                "accountType": "PCA",
                                "accountNumber": "XXXXXX XXXX6123",
                                "accountTitle": "HSBC Advance Bank Account",
                                "standingInst": '1,200',
                                "balance": '4,000',
                                "minBalance": 200,
                                "interestRate": 0.1,
                                "availableBalance":'2,600'
                            }
                        ]
                    },
                    {
                        "bankName": "Barclays",
                        "bankId": "BBaarrccllaayyss",
                        "accounts": [
                            {
                                "accountType": "SB",
                                "accountNumber": "XXXXXX XXXX3222",
                                "accountTitle": "Easy Saver",
                                "standingInst": 800,
                                "balance": '6,000',
                                "minBalance": 200,
                                "interestRate": 0.25,
                                "availableBalance":'5,000'
                            }
                        ]
                    }
            
            ],
            creditBankAccountDetails: [
                {
                    bankName: 'NatWest',
                    bankId: 'NNaattWWeesstt',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: 'XXXXXX XXXXXX6789',
                            accountTitle: 'Reward Black Credit Card',
                            creditLimit: '3,000',
                            availableCredit: '1,200',
                            totalBalanceDue: '1,800',
                            minBalanceDue: 30,
                            apr: 37.10,
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
                            accountNumber: 'XXXXXX XXXXXX7890',
                            accountTitle: 'RBS Unlimited Credit Card',
                            creditLimit: '4,000',
                            availableCredit: '2,800',
                            totalBalanceDue: '1,200',
                            minBalanceDue: 100,
                            apr: 19.94,
                            dueDate: new Date().setDate(new Date().getDate()+5)                          
                        }
                    ]
                },
                {
                    bankName: 'Barclays',
                    bankId: 'BBaarrccllaayyss',
                    accounts: [
                        {
                            accountType: 'M',
                            accountNumber: 'XXXXXX XXXXXX7890',
                            accountTitle: '2 Years Fixed Reward',
                            minMonthlyPayment: '800',
                            remainingFullTerm: '5Y 3M',
                            totalBalanceDue: '50,000',
                            interestRate: 3.3,
                            dueDate: new Date().setDate(new Date().getDate()+5)                         
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
                                "accountNumber": "XXXXXX XXXX6789",
                                "accountTitle": "Every Day Saver",
                                "standingInst": '100',
                                "balance": '2,100',
                                "minBalance": 100,
                                "interestRate": 0.20 ,
                                "availableBalance":'1,900'
                            }
                        ]
                    },
                    {
                        "bankName": "HSBC",
                        "bankId": "HHSSBBCC",
                        "accounts": [
                            {
                                "aaccountType": "PCA",
                                "accountNumber": "XXXXXX XXXX2345",
                                "accountTitle": "HSBC Advance Bank Account",
                                "standingInst": '1,100',
                                "balance": '4,000',
                                "minBalance": 200,
                                "interestRate": 0.10,
                                "availableBalance":'2,700'
                            }
                        ]
                    },
                    {
                        "bankName": "Barclays",
                        "bankId": "BBaarrccllaayyss",
                        "accounts": [
                            {
                                "accountType": "SB",
                                "accountNumber": "XXXXXX XXXX3456",
                                "accountTitle": "Easy Saver",
                                "standingInst": '1,100',
                                "balance": '1,500',
                                "minBalance": 200,
                                "interestRate": 0.25,
                                "availableBalance":'200'
                            }
                        ]
                    }
            
            ],
            creditBankAccountDetails: [
                {
                    bankName: 'NatWest',
                    bankId: 'NNaattWWeesstt',
                    accounts: [
                        {
                            accountType: 'CC',
                            accountNumber: 'XXXXXX XXXXXX6789',
                            accountTitle: 'Reward Credit card',
                            creditLimit: '3,000',
                            availableCredit: 100,
                            totalBalanceDue: '2,900',
                            minBalanceDue: 50,
                            apr: 23.70,
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
                            accountNumber: 'XXXXXX XXXXXX7890',
                            accountTitle: 'Classic Credit Card',
                            creditLimit: '4,000',
                            availableCredit: '2,000',
                            totalBalanceDue: '2,000',
                            minBalanceDue: 100,
                            apr: 27.10,
                            dueDate: new Date().setDate(new Date().getDate()+5)                          
                        }
                    ]
                },
                {
                    bankName: 'Barclays',
                    bankId: 'BBaarrccllaayyss',
                    accounts: [
                        {
                            accountType: 'M',
                            accountNumber: 'XXXXXX XXXXXX7890',
                            accountTitle: '2 Years Fixed Reward',
                            minMonthlyPayment: '800',
                            remainingFullTerm: '5Y 3M',
                            totalBalanceDue: '50,000',
                            interestRate: 3.3,
                            dueDate: new Date().setDate(new Date().getDate()+5)                         
                        }
                    ]
                }
            ]
        }
    ]   
}