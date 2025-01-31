export const environment = {
    production: false,
    MARVEL_API: {
        URL: 'https://gateway.marvel.com:443',
        PUBLIC_KEY: '440b56c3c3f4b9e649e306f325425486',
        PRIVATE_KEY: '3869c56f247e09407708fc1ffe7a2269c8d6ba2d',
    },
};

if (environment.MARVEL_API.PUBLIC_KEY === 'INSERT YOUR KEY FIRST') {
    /**
     * To get access to the marvel API, you need to go to their site and sign up for an account.
     * Go Here: https://developer.marvel.com/
     *
     * Once you have done that, in their portal, you will need to add http://localhost to their
     * whitelisted domains. If you don't do this, it will fail for you.
     */
    document.body.innerHTML =
        'INSERT YOUR KEY FIRST<BR>See <code>environments.ts</code> for instructions';
    throw new Error('You must setup a public and private API key first.');
}
