# Architecture Antipatterns Website

Find out more about <a href='https://architecture-antipatterns.tech/'>Architecture Antipatterns</a> (generated
via Github Pages from this repository).

## How to contribute?

#### 1. Fork this repository
#### 2. Make a feature branch on your fork
#### 3a. Develop locally
You can setup a local development environment by running the following commands in your locally cloned repository:

```shell
bundle install
bundle exec jekyll serve
```

You will need a local Ruby installation for that. 
After that you can look at your changes at: [http://localhost:4000](http://localhost:4000)

#### 3b. Develop locally with docker
Alternativly you can use docker to develop locally. 
```shell
docker compose up
```
The local directory is mounted in the docker-container, so that jekyll will "hot-reload" any changes on the site.
The site should also be available on [http://localhost:4000](http://localhost:4000)

#### 4. Make your changes

New antipatterns can be saved in `_patterns` and new case studies in `_case_studies` as markdown files.

New antipatterns are only published with a related case study.

For comments and other contributions please use the [issue tracker on github](https://github.com/innoq/architecture-antipatterns/issues).

#### 5. Commit your changes
_Bonus_: Choose a [good commit message](https://chris.beams.io/posts/git-commit/) 🏆

#### 6. Open a pull-request
Provide a good title and describe what you want to change and why.

#### 7. Review
The current authors of the website meet every two weeks and will review your PR.

#### 8. You get mentioned
When your PR is accepted, you will get mentioned as author/contributor. Contributors will get mentioned in this README. Authors will have a picture on the site.

#### 9. Become a member 🏆🏆
_Bonus_: When you are a regular author, you can join our review meetings.

## Structure of a pattern
* Name of the pattern
* Description: What is it, and what are the bad consequences?
* What are some examples?
* Why does this happen?
* How can we avoid getting into the situation in the first place?
* What are suggestions to get out of the situation if we ended up in it?

## Structure of a case study
* Name of the case study
* Description
* What is the system’s background (possibly shared by more than one example)?
* What was the good idea?
* (optional: What happened, was there a turning or tipping point?)
* What were the bad consequences, why was everything bad?
* Which patterns were encountered? (optional: How was the situation resolved or if we had a suggestion for a solution, which was not implemented, what was it?)
* What happened, was there a turning or tipping point?
* How was the situation resolved





# Contributors
Thank you for your contribution:
[Maik Toepfer](https://github.com/samba2)
[Patrick Gebert](https://github.com/pgebert)
[Till Lorentzen](https://github.com/soneyworld)