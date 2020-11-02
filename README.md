# Assignment

This assignment should be considered time-slotted. You should try to get as far as possible within approximately three hours.

The assignment consists of the following tasks:

1. Your TypeScript skills will be evaluated by your ability to transform one data structure into another
2. Your UI skills are evaluated by your ability to turn a very rough web page into something that looks like the supplied comp

The tasks has been designed to challenge even the most experienced frontend developer, and we do not expect anyone to produce
something 100% identical to the comp within the given timeframe.

We do however expect you to be able to produce something that works and looks nice and polished.

Your solution will be evaluated based on the quality of the produced code, as much as the finished result.

Aim towards producing production grade code, rather than maximising the amount of features.

## Tasks

### 1. Transforming the data

Open `./src/api/github-events.api.ts` and complete the TODOs

```

// TODO:
//   1. Remove the hardcoded data below
//   2. Transform the GithubEvent[] data passed in as a parameter, to the expected GithubIssue[] return type
//      Transformation guidelines:
//      a. Filter the input data to contain only events of type `IssueCommentEvent`
//      b. Transform the data from each GithubEvent to a GithubIssue as follows:
//         GithubIssue.id = GithubEvent.payload.issue.id
//         GithubIssue.created_at = GithubEvent.payload.issue.created_at
//         GithubIssue.title = GithubEvent.payload.issue.title
//         GithubIssue.body = GithubEvent.payload.issue.body
//         GithubIssue.user.id = GithubEvent.payload.issue.user.id
//         GithubIssue.user.login = GithubEvent.payload.issue.user.login
//      d. Aggregate all the comments in the GithubEvent.payload.comment fields, into the GithubIssue.comments arrays, so
//         that each GithubIssue contains an array of related comments.
//         The mapping is as follows:
//         GithubIssue.comments[n].id = GithubEvent.payload.comment.id
//         GithubIssue.comments[n].created_at = GithubEvent.payload.comment.created_at
//         GithubIssue.comments[n].body = GithubEvent.payload.comment.body
//         GithubIssue.comments[n].user.id = GithubEvent.payload.comment.user.id
//         GithubIssue.comments[n].user.login = GithubEvent.payload.comment.user.login
//   5. Verify that all tests pass, by running `npm test`
//   6. Once the tests pass, verify that the app runs in a browser by running `npm start`
//      Note that the data will look different in the browser, as the browser will render live data from Github.

```

### 2. Submitting data with a form

Open `./src/app.tsx` and add a form with a `user` and a `repo` text field, and a submit button.

Modify the code, so that the events returned by `./src/api/github-events.api.ts` reflects what has been submitted through the form, i.e. `microsoft`
should be replaced by the value of the `user` field, and `TypeScript` should be replaced by the value of the `repo` field.

### 3. Rendering a nice user experience

Open the comp at https://www.sketch.com/s/f40d714d-b01d-4bdd-8099-e89386416560 and start changing the code in `./src/app.tsx` to be as close as possible to the comp.

Hints:

1. You can use the inspector in the comp, to view css properties
2. You can format the markup in the body fields, by using the `react-markdown` module, which is available here: https://github.com/remarkjs/react-markdown

# Available Scripts

In the project directory, you can run:

## `npm install`

Installs the project dependencies. A prerequisite for tasks below.

## `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
