# BookByte Docs

Official documentation of BookByte. 

Check BookByte [official Repository](https://github.com/Book-Byte/book-byte) for more information.

## What is BookByte

`book-byte` is an open-source web app where a user can Sell, Buy, Rent, Lend a book.It is made by [next.js 14](https://nextjs.org).

 A normal user can hold two different type of role.One is seller and the other is buyer. On seller role he/she can sell or rent a book, on buyer mood he/she can buy or lend a book and track his/her order on track-order route. 
 
 User can see his/her books and books status on his dashboard. Books will present on a table. A book can have three different status `For sell`, `For Rent`, `For Sell/For Rent`. 
 
 On selling role user can set there book price, description, how many books he/she have and he/she can also able to update those information. 
 
 User can send and accept friend requests like facebook. His/her friends list will show on his dashboard. From there he/she can remove or block a friend. He/she will also able to chat with other friends.  


## How to contribute to this repo?

You can contribute to this repo in several ways:

    1. Write documentation for the various parts of BookByte
    2. Suggest changes to the existing docs
    3. Improve the documentation website

To contribute, you must set up this repository on your local machine. Here is a brief guide on setting up the repo on your local machine:

### 🍴 Fork and Clone the Repo

First, you need to fork the `book-byte` repo. You can do this by clicking the `Fork` button on the top right corner of the repo. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to get started.

Once forked, you can clone the repo by clicking the `Clone or Download` button on the top right corner of the forked repo.

Please change the directory after cloning the repository using the `cd <folder-name>` command.

> **Note:** Please do not remove the `.env` file from the root folder. It contains all the environment variables required for development.

### ⬇️ Install Dependencies

Next, install the dependencies by running the following command in the `book-byte` repo. we recommend using `yarn` but you can install using `npm` too

```bash
yarn
#or
npm install
```

if you don't have `yarn` installed on your PC, follow the steps below to install it..

**Windows**
1. open your command prompt as administrator.
2. write `corepack enable` and hit enter.
3. then `npm install --global yarn`

**Linux**
1. open terminal and hit `npm install --global yarn`

**MacOS**
1. open terminal and hit `npm install --global yarn`
or
`brew install yarn`

**Or Download Package**
If you are unable to install yarn following the above-mentioned process, then you can simply download the package and install it. Visit the official website of Yarn; there you can just expand the "Alternative" section and it will ask for the version to download for Windows, Linux, or Mac.
`https://classic.yarnpkg.com/en/docs/install#windows-stable`


> **Note**: `BookByte` runs on next 14. However, some of our dependencies are yet to upgrade to version 14. So please use the following command when you face difficulties installing the dependencies. Also, ensure to use Node.js version >= 16.x

```
npm install --legacy-peer-deps
```

### 🦄 Start the Development Mode

Use the following command to start the app in the development mode:

```bash
yarn dev
```
or if you installed dependencies using ``npm`` use below command

``` bash
npm run dev
```

It runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### 🧱 Build the App for Production

You don't need to build the app cause BookByte made by next.js 14 and it linked with vercel by github repository. You just need to commit and push it to the remote repository. After review and test it will merge with main branch. Then vercel will automatically build and deploy the app.

## 🤝 Contributing to `BookByte`

Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can,

- Suggest a Feature
- Test the app, and help it improve.
- Improve the app, fix bugs, etc.
- Improve documentation.
- Create content about BookByte and share it with the world.

> Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

🆕 New to Open Source? 💡 Follow this [guide](https://opensource.guide/how-to-contribute/) to jumpstart your Open Source journey 🚀.

## 🙏 Support

We all need support and motivation. `BookByte` is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

If you found the app helpful, consider supporting us with a coffee.

<a href="https://www.buymeacoffee.com/greenroots">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50px">
</a>

---

<h3 align="center">
A ⭐️ to <b>BookByte</b> is to make us more 💪 stronger and motivated.
</h3>

