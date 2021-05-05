require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give narrow frown ski story riot noble minor industry light army gas'; 
let testAccounts = [
"0x77c3c3ca2ea659f093de9d659553572c335f8d760808358edf334556ffd08e9c",
"0xb54d4197723e429e96fc95ff24d65b25f923d0ca5ec23a2eefd0a1eedc6d4281",
"0x9493e0ed68f93358fa40fec4b70bc4a50f60ce01b02efb17dc7f961df4cf322d",
"0x56d439936bde6d2d0b56cc9463b233cd532afc41fddc2b5c252352b9e2de409f",
"0x2149a95ded5a4d23e44a95e8ef56b70fd3b97ff4c271f05c4e0e5de13989050d",
"0x398d57fd0f9f7885d271eff6ba446a99fc3dc9538f30f01ea0bd078ff46294a1",
"0x1794baa399089d647188e43acddebe92af4940ad356c893dd9c85581d226fa89",
"0x9ed439fa3db9588fcd2a8c0cbd4fe456a96068b6eba231763ba3f45b21654798",
"0x59239001320f83dd5f99abbd39e833f58eed0ac7d150cb758e338df2af533a7a",
"0xd7da94fdeee82a12b158970cb68d7292b23105cfd7c8f4330b3f4c8ef88a0c36"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

