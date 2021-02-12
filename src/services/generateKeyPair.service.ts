import { generateKeyPair } from 'crypto';

generateKeyPair('rsa', {
    modulusLength: 4096, // key in bit size
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'keep this strong - top secret'
      }
    }, (err, publicKey, privateKey) => {
      // Handle errors and use the generated key pair.
      console.log(publicKey + '...Public Key');
      console.log(privateKey + '...Private Key');
    });