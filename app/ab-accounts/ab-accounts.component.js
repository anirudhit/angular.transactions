/**
 * Author - Anirudh
 */
'use strict';
angular.
  module('abAccounts').
  component('abAccounts', {
    templateUrl: 'app/ab-accounts/ab-accounts.template.html',
    controller: ['$routeParams',
      function AbAccountsController($routeParams) {
          var self  =   this;
          self.accounts =[
            {
              "type" : "Current",
              "id" : 40013,
              "statement":[{
                "date" : "2017/11/01",
                "deposit": 1000,
                "withdraw": 0
              },{
                "date" : "2017/11/02",
                "deposit": 2000,
                "withdraw": 1000
              },{
                "date" : "2017/11/03",
                "deposit": 4000,
                "withdraw": 0
              }]
            },
            {
              "type" : "Savings",
              "id" : 30078,
              "statement":[{
                "date" : "2017/11/01",
                "deposit": 5000,
                "withdraw": 0
              },{
                "date" : "2017/11/02",
                "deposit": 4000,
                "withdraw": 1000
              },{
                "date" : "2017/11/03",
                "deposit": 3000,
                "withdraw": 2000
              }]
            },
            {
              "type" : "Current",
              "id" : 40053,
              "statement":[{
                "date" : "2017/11/01",
                "deposit": 4000,
                "withdraw": 0
              },{
                "date" : "2017/11/02",
                "deposit": 3000,
                "withdraw": 2000
              },{
                "date" : "2017/11/03",
                "deposit": 8000,
                "withdraw": 3000
              }]
            }
          ];
          self.accountBalance = [];

          self.init = function(){
            angular.forEach(self.accounts,function(account){
              var balance = 0;
              var deposit = 0;
              var withdraw = 0;
              angular.forEach(account.statement,function(eStatement){
                deposit = deposit + eStatement.deposit;
                withdraw = withdraw + eStatement.withdraw;
              });
              balance = deposit - withdraw;
              self.accountBalance.push({
              "type" : account.type,
              "id" : account.id,
              "balance" : balance
            });
            })
          };

          self.showHistory = function(index){
            console.log(index);
          }

          self.withdrawObj = {
            "acoount": {},
            "copyAccount" : {},
            "excepMsg": false,
            "amountWithdrawable": 0
          };
          self.setWithdrawAmount = "";
          self.withdrawAmount = function(obj){
            self.withdrawObj.account = obj;
            self.withdrawObj.copyAccount = angular.copy(obj);
            self.withdrawObj.excepMsg = false;
            console.log(self.withdrawObj);
          }
          self.submitWithdrawAmount = function(){
            if(!self.withdrawObj.excepMsg){
              self.withdrawObj.account.balance = Number(self.withdrawObj.account.balance) - Number(self.setWithdrawAmount);
              self.withdrawObj.copyAccount = {};
              self.setWithdrawAmount = "";
            }else{
              self.setWithdrawAmount = "";
            }
          }
          self.resetWithdrawAmount = function(obj){
            self.withdrawObj.copyAccount = {};
            self.setWithdrawAmount = "";
          }
          self.checkwithdrawExceptionMessage = function(){
            var amount = self.withdrawObj.account.balance - self.setWithdrawAmount;
            if(amount < 1000){
              self.withdrawObj.excepMsg = true;
               self.withdrawObj.amountWithdrawable = self.withdrawObj.account.balance -1000;
            }else{
              self.withdrawObj.excepMsg = false;
            }
          }


          self.depositObj = {
            "acoount": {},
            "copyAccount" : {}
          };
          self.setDepositAmount = "";
          self.depositAmount = function(obj){
            self.depositObj.account = obj;
            self.depositObj.copyAccount = angular.copy(obj);
            console.log(self.depositObj);
          }
          self.submitDepositAmount = function(){
            self.depositObj.account.balance = Number(self.depositObj.account.balance) + Number(self.setDepositAmount);
            self.depositObj.copyAccount = {};
            self.setWithdrawAmount = "";
          }
          self.resetDepositAmount = function(obj){
            self.depositObj.copyAccount = {};
            self.setWithdrawAmount = "";
            console.log(self.depositObj);
          }

          self.viewObj = {
            "account" : {}
          }
          self.viewBalance = function(index){
            self.viewObj.account = angular.copy(self.accounts[index]);
          }
          self.viewBalanceReset = function(index){
            self.viewObj.account = {};
          }

          self.init();
      }
    ]
  });