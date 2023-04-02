# <p align = "center"> JurisHand Challange </p>

<p align="center">
  <img src="https://jurishand.com/_next/static/media/logo-jurishand-black.7fffda40.svg" width="150"/>
</p>

## :computer: Technologies

- TypeScript
- Node.js
- Eslint, Prettier
- CommitLint
- Husky
- Prisma
- Joi
- Docker

---

## Description

<p>
Challenge proposed by the company jurisHand, in order to save legal articles in the database and filter them by category, content and title.
</p>

## 🏁 running the application with docker

<h3 style="color:#ef4444; font-weight: bolder">Notice</h3>

<p>
  To run the step below to run the application you must have docker and docker-compose installed on your machine you can get more information here <a href="https://docs.docker.com/engine/install/">install docker.</a>
</p>
<br />

```
npm run up
```

```
app running by default on port 3001 🚀🚀🚀🚀🚀
```

## :rocket: Router article

```yml
GET /
    - route to list all article ordered by date and filter by category, content and title
    - headers: {},
    - query: {
      category: 'name of category'   --- optional --
      key: 'key of content or title' --- optional --
    }
```

```yml
POST /
    - route to list add new article
    - headers: {}
    - body: {
        title: "Direitos trabalhista",
        author: "Vitor shermon",
        content: "Direito do funcionario ...",
        date: "2023-04-01",
        category: "Trabalhista"
    }
```

## 📄 To view more detailed application documentation visit the url

```json
http:localhost:3001/docs
```

## 🧪🧪 Running tests with jest
```
  npm run test
````
## 🛠️🛠️ Running scripts of reports

<br />


### First Step

<p>
  To generate the reports with the scripts you need to have installed the pyton pandas library you can get more information here <a href="https://pandas.pydata.org/docs/getting_started/install.html">pandas install</a>
</p>

<br />


### Second Step

<p>
Then you must navigate through your terminal to the app's script folder and run the script.
</p>