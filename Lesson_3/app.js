// var amount = Number(prompt("Enter amount"));
// var currency = prompt("Enter currency");

// var convertedAmount = 0;

// switch (currency) {
//   case "USD":
//   case "dollars":
//   case "доллары":
//   case "доллары США":
//     convertedAmount = amount / 89;
//     break;
//   case "EUR":
//     convertedAmount = amount / 102;
//     break;
//   case "RUB":
//     convertedAmount = amount / 0.9;
//     break;
//   default:
//     console.warn("INVALID CURRENCY");
// }

// console.log(convertedAmount + " " + currency);

// var trafficColor = "red";

// switch (trafficColor) {
//   case "red":
//   case "красный":
//   case "кызыл":
//     console.log("STOP");
//     break;
//   case "yellow":
//   case "желтый":
//   case "сары":
//     console.log("WAIT");
//     break;
// }

// var number = Number(prompt("Enter number 1-3"));

// switch (Number(number)) {
//   case 1: // ===
//     console.log("I");
//     break;
//   case 2:
//     console.log("II");
//     break;
//   case 3:
//     console.log("III");
//     break;
//   default:
//     console.warn("INVALID NUMBER");
// }

var cardType = "VISA";
var cardBalance = 0;

switch (cardType) {
  case "VISA":
    var visaResponse = {
      balance: 1500,
    };
    cardBalance = visaResponse.balance;
    break;
  case "MasterCard":
  case "Maestro":
    var masterCardResponse = {
      balance: {
        amount: 1500,
      },
    };
    cardBalance = masterCardResponse.balance.amount;
    break;
  case "ELCARD":
    var ipcResponse = {
      CARD_BALANCE: 1500,
    };
    cardBalance = ipcResponse.CARD_BALANCE;
    break;
}

// 1) string
// 2) number
// 3) boolean
// 4) undefined

var someVar; // undefined

console.log(someVar);

// 5) null

var clientBirthDate = null;

console.log("typeof null = ", typeof null); // Баг JS

// 6) object

var clientPassport = {
  INN: "20101199012345", //string
  Series: "ID",
  Number: 1234567, // number
  IssueDate: "01-01-1991",
  ExpireDate: null, // null
  IssueAuthority: "MVD Bishkek",
  IsUnlimited: true, // boolean
};

console.log("client passport", typeof clientPassport);

var client = {
  Surname: "Kiselev",
  Name: "Evgeniy",
  Patronimyc: "Dmitrievich",
  Id: 145,
  Passport: {
    INN: "20101199012345", //string
    Series: "ID",
    Number: 1234567, // number
    IssueDate: "01-01-1991",
    ExpireDate: null, // null
    IssueAuthority: "MVD Bishkek",
    IsUnlimited: true, // boolean
  },
  IsIP: false,
  contactPhones: ["+996 500 11 22 33", "+996 555 11 22 33"],
};

var client2 = {
  Surname: "Ibraev",
  Name: "Asyl",
  Patronimyc: "Bekovich",
  Id: 160,
  Passport: {
    INN: "20101199512345", //string
    Series: "AN",
    Number: 789654, // number
    IssueDate: "01-01-1996",
    ExpireDate: "01-01-2006",
    IssueAuthority: "MVD Bishkek",
    IsUnlimited: false, // boolean
  },
  IsIP: true,
};

console.log(client.Surname + "\n" + client["Name"]);
console.log(client.Passport.Series + client.Passport.Number);

var clients = [client, client2, {}, null, null, {}];
//                0        1     2   3      4    5
var clientIP = clients[1];

var clientsCount = clients.length;

console.log(clientIP.Passport.Series + clientIP.Passport.Number);

// Evgeniy K.

function generateReceiverName(clientName, clientSurname) {
  // body
  var receiverName = "";
  receiverName = clientName + " " + clientSurname[0] + ".";
  return receiverName;
}

function sum(a, b) {
    console.log(a+b);
  return a + b;
}

console.log("100 + 50 = ", sum(100, 50));

// Finalize lesson:
//    - save stream in youtube -> link
//    - write lesson card
//    - write homework
//    - send archive

// 7) bigint
// 8) symbol

var children = [
  1994, 2001, 2007, 2005, 2012, 2014, 2023, 2021, 2019, 2021, 2014, 1991, 2013,
];

// loops - циклы

var currentYear = 2023;
var giftsTotal = 0;

for (var childYear of children) {
    var childAge = currentYear - childYear;
    if(childAge >= 6 && childAge <= 11){
        // giftsTotal = giftsTotal + 1;
        // giftsTotal += 1;
        giftsTotal++;
    }
}

console.log("Gift total: " + giftsTotal + " of " + children.length);
