# SCI-SPK

_(/sʌɪ-spi:k/ pronounced "psy-speak")_

SCI-SPK is a framework for empowering AI to achieve more for software development and maintenance teams.

## Idea

There is not yet a successful autonomous or semi-autonomous AI for software teams. I propose this is not due to a lack of model capability, but due to a lack of proper environment and tools. Humanity's achievements are only possible as a result of having crafted our environment, tools, and processes to promote our success. AI's achievements will be due to the same. Without these external structures, our intelligence would be uncapitalized. Such is the case with AI currently.

> **TL;DR**
>
> Semantic Codebase Intelligence (SCI) is foreground, situational, and rapidly changing information that should be made accessible and interactive to a model(s). It is also a method that produces this data.
>
> Semantic Project Knowledge (SPK) is background, contextual, and slowly moving information making it ideal for fine-tuning into a model(s). It is also the method that produces this data.

## Semantic Codebase Intelligence (SCI)

Semantic Codebase Intelligence (SCI) is both data a method that involves understanding and interpreting a codebase at a deep, meaningful level, beyond the mere syntactic structure of the code. This involves extracting and using high-level concepts, relationships, and patterns from the codebase, as well as inferring the intentions, strategies, and design patterns of the programmers who wrote the code.

Semantic Codebase Intelligence employs various techniques, such as machine learning, natural language processing, and formal methods, to analyze and reason about the codebase. The insights gained from SCI can be used for a variety of purposes, such as improving code quality, facilitating code reviews, guiding refactoring efforts, detecting bugs, and supporting software maintenance and evolution.

### Developing SCI

[TODO: define a process which uses SCI-SPK to accomplish a task. Why existing (AutoGPT, SuperAGI, BabyAGI, etc.) models are not successful and how they could be.]

When a team member opens a code file, they perceive vastly more information than what is represented in the syntax of the file. The act of opening the file triggers all sorts of contextual awareness and memories. They are aware of the file's purpose, it's history, where it sits in the project, what is does in the system, individuals they can reach out to for assistance, etc. GPTs do not have the opportunity or ability to access this information, leading to their limitation in successfully completing tasks autonomously.

One first step to enabling an AI system to successfully complete tasks in a codebase could be for humans to open various files and begin building a labeled syntactic description of this context. Once the process and required items are known, it is likely we can automate some of the information generation through scripting and use of LLMs when applied to repos and corporate systems to gather and organize this information.

### Information Composition

SCI is developed from:

1. Repository Information
2. Source Code
3. Git History
4. PRs & Issues
5. Documentation

#### Repository Information

- Project Structure
- Workflows
- Scripts
- Tools
- Configuration Files
- Project Dependencies
- README
- CONTRIBUTING
- Style Guide, etc.

#### Source Code

On a per-file and per-package basis:

- Static Analysis
  - path
  - imports
  - exports
  - definitions
  - used by
  - contributors
- Natural Language Analysis
  - Purpose
  - Description
  - Summary of logic
  - Meaningful contributors
- Churn

Source code files include:

- Product Code
- Documentation Code
- Tests & Fixtures
- Images & Assets
- Data Files

#### Git History

- Users
- Commit Messages
- Ownership Areas
- Changed together

#### PRs & Issues

- Users
- Purpose or Initiative (OKR)
- Description & Comments
- Labels

**PRs**

- File List
- Diffs
- Status (merged, open, closed)
- Age
- Size
- Complexity

## Semantic Project Knowledge (SPK)

Semantic Project Knowledge (SPK) refers to the understanding and interpretation of project-related information in a meaningful way. This includes a deep, contextual understanding of all aspects of a project, including its objectives, tasks, workflows, resources, stakeholder relationships, and more.

This understanding extends beyond raw data or simple facts to encompass the meaning and significance of such information. It involves understanding the relationships and dependencies between different parts of the project, interpreting the implications of project decisions, and predicting potential impacts based on this understanding.

In a software development project, Semantic Project Knowledge includes understanding the codebase, the software architecture, the project timeline, the team's skills and roles, the project's requirements and constraints, the user's of the project, and how all these elements interact with each other. This knowledge is used to manage the project more effectively, make better decisions, and predict and mitigate potential problems.

SPK is developed from:

2. OKRs
3. Customer List
4. Customer Feedback
5. Marketing Materials
6. Slides & Documents
7. Reports
8. Roadmaps & Timelines
9. Communication Channels
10. News & Posts

## [TODO: Dynamic Project Information]

1. Ongoing Work

## Out of Scope

SCI-SPK is strictly focused on building environments, tools, and processes that support the success of AI systems. AI development it self is out of scope. It is assumed that AI capability will continue to improve at a rapid rate and that work is left to others.
