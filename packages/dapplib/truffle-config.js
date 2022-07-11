require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name renew mad snake good kangaroo army gas'; 
let testAccounts = [
"0x62017489cabf727fe2994c85ef176bf5f1342bc1f523352e0ced85a564cfb087",
"0x8de6b7d2efaf728d819c156fa38621107bfa3b7e84ec05856a9a00b9d92cc1dc",
"0x53328d41eb4e60522bc4a35c167743bdcf7b478dcfa58fe03cc4b1a086289b4e",
"0x6c860f5c4ce4f054628002ab9986020ed3f69411f82ff17081ab20bc2fe1a269",
"0x305ec1b8e34bb31e10dffd4989021a4f4bf8cbed6e561f6b5af3cf54070c7a50",
"0xb48a697eaf186a1182856e3e6a25ec35c734ffb8cf4add0a6b524f3b659d8c55",
"0xf1ed7e5ba489f6f7319cbdc9f6c72a22bb76450aada3c307f94db4de4fc8b0a0",
"0x9e92e5f750dcf168a5e260769eeee0fbcbdbc662de551a5c3b62e08a47cf76ec",
"0x3276b66b121536e8a864df02e1d84bcc42f4e2a9120691f6fadc25e9758a8736",
"0x9731ccc69d34051b75a1a896353a1e318d5d9baa412caf1a5f259c2ad3d5015a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


