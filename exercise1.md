# Language

Let's assume the project is written in `Ruby`.

## Linting

I found that for linting, `Rubocop` is a useful library because it not only lints (analyzes) the code but also formats it.

## Testing

For testing, `RSpec` is a good choice, as it is widely used and has sub-libraries for different purposes.

## Building

Since Ruby is an interpreted language, there isn't a traditional compilation process, but `Rake` is a strong candidate for so-called "building." It can install dependencies, compile assets if needed, set up the configuration, and also implement linting and testing stages.

## CI/CD

If we consider alternatives to `Jenkins` and `GitHub Actions` for setting up CI, the top three would likely be `GitLab CI/CD`, `CircleCI`, and `Travis CI`.

## Environment

Since the team is small, _a cloud-based environment would be more suitable_. This way, there is no need for a person or even a team to **maintain the environment**, and a cloud-based option is **affordable for a small team like ours**. However, a small team doesn’t always mean there are no special requirements for the project, such as heavy processes or unusual needs. In such cases, a self-hosted option could be a better fit. So, apart from team size, **the choice really depends on the project's specific requirements and needs.**
