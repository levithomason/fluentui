#### Docs Usability

- Next/prev buttons in storybook concepts to page through set up and learning

#### Concepts

- How to deal with plurality? Multiple buttons  side-by-side, for example. Or, multiple avatars.

#### Separate react-components and react-types?

The majority of imports from our library are for components.
The intellisense is very crowded with typings.
It may be a better dev experience if we separate the two so that
users can import components from `-components` and types from `-types`.

![intellisense.png](intellisense.png)

#### No info on icons

There are no icons in the package, where do I get them?

There are no icons mentioned in the docs, what's going on?

I expect an icon explorer and examples in the docs.

#### Menu Confusion

Having been involved in development, I thought I could use a Menu.
I could not get items to render content "test".

**Docs**
I checked the docs and the menu and menu list docs could use some work.
They have descriptions that assume a certain level of understanding already exists.

Menu doc description assumes the user knows what MenuList & MenuTrigger are and how they work.
These concepts need explained before we can explain that Menu manages the state of those two things.

MenuList explanation immediately invokes the use of `useMenuList` hook without context on what the hooks are or how they work.
Seems this needs to be also broken down to a more simplistic definition.

Images might help at the top of doc pages also.
Illustrations of what the component structures are, skeleton-like examples.

**Horizontal**
We have no horizontal menu or toolbar :/ Like top of Teams calling screen.

#### Button

**color**
There is a color prop that is not documented and I could not guess its usage.

**Hang Up**
I needed a red button for the hang up. We have no "danger" / "negative" / "red" button.
I used a themed style for red background, but borders are wrong.

#### Design Help?
It might be good to pair with a designer and improve the CSS of the layout and nav styles.

It would also be great to pair on visual skeletons for each component page to better and more quickly understand what a component scope is.
Example, Menu could show a trigger and list anatomy and a manager pointing to the two called "Menu" or similar.
Then, there could be a one sentence description of what the "Menu" means and does in Fluent. 