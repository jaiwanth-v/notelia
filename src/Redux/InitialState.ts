import uuid from "../Utils/randomIdGenerator";

const notebookId = uuid();
const noteId = uuid();

const markdownContent = `
# Welcome to Notelia! 🗒️

Notelia is a free, open source note taking and to-do application, which helps you write your notes. It's based on markdown language.

An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~


A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://google.com

* Lists
* [ ]  todo
* [x]  done


### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

Tables can look like this:

|keyword|text|
|-||-|
| red || Sunsets, apples, and other red or reddish things |
| green |     Leaves, grass, frogs and other things it's not easy being. |

A horizontal rule follows.

***


Here's a "line block":

| Line one
|   Line too
| Line tree

and images can be specified like so:

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, *bar*, etc.

`
 
const defaultState = {
  notebooks: [
    {
      title: "Welcome to Notelia",
      id: notebookId,
      notes: [
        {
          id: noteId,
          title: "Welcome Note",
          is_todo: false,
          todo_completed: false,
          body: markdownContent,
        },
      ],
    },
  ],
  activeNote: noteId,
  activeNotebook: notebookId,
  activeContent: markdownContent,
  activeNoteTitle: "Welcome Note",
};

export default defaultState;
