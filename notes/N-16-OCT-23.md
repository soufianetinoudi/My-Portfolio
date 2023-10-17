# My notes

This is where I'll add all my notes throughout my development journey.

## October 16th 2023

On this day, I searched topics regarding Git and GitHub, the differences between the two, how to use them, and their usefulness.

### Git and GitHub

Git and Git are different.

Git is a software, a memomry card for codes, used to save all your coding progress locally on your PC.

GitHub is a website, used to store all your coding saved progress from your PC on the internet.

### Git commands

Git has so many commands, most notably:

**git init: It initializes your project, basically starting a new repository where your project will be located.

**git add: It adds new or changed files in your project to Git, saving your progress, you cann save everything by typing "git add .".

**git commut: It commits these changes to memory with a message describing their implementation "git commit -m 'change description'".

**git push: It is used to upload local repository content to a remote repository, transferring your commits from your local repository to a remote repo, with this all your progress is stored in GitHub.

#### GitHub features

GitHub has so many features, most notably the branches.

**Branche: A copied version of your repository where you can modify, fix bugs, and experiment without the risk of altering your main code.
With branches, multiple people can access and use your project, as well as modify it without altering the original version, making it very easy to share the code with others without losing track.

### Git and GitHub with Visuel Studio Code

#### Porting your folder from GitHub to VS code

After creating a GitHub account, you can see a section that stores all your project folders, aka repositories, an option called New is also available, and once pressed, it will direct you to start a new repository.

Once the repository is created, go to VS Code, open a new window, choose the folder created in GitHub and add it, once added, install Git on your OS.

In order to use Git and GitHub on VS Code, you need to install Git first on your system, this will let you to have access to Git commands, allowing you to commit and push all the changes made to your code in VS to GitHub.
In my case, I installed the 64-bit version.

Once Git is installed, open the terminal and sign in with your GitHub account by writing the following:
" git config user.name "your GitHub name" 
  git config user.email "your GitHub email adress" "

You will be connected to your account, it's a one-and-done operation that doesn't need to be repeated each time you open VS code.

If all the setup has been done successfully so far, you can start coding.

Every time you want to save your progress, you will need to commit all the changes you've made to your project and push them, in order to do so, go to Source Control.

##### Source Control

Committing and pushing to your GitHub repository is straightforward, On the left side of the screen on VS Code, the Source Control option can be visible, and once clicked, you will be directed to a new page.

On the new page, you will find a message bar and a commit button, once you add new modifications, whether it is a brand new file, or folder added, or a change to your existing files, you will get a new section called Changes.

In the Changes section, all modifications and additions are found, you will also notice symbols on each change like M for modified and U for untracked, they are self-explanatory, press the + icon next to them and they will go to a new section named Staged Changes.

When all changes chosen are added to Staged Changes, add a detailed message on the message bar and click on either Commit or the valid icon above, once this is done, a new Sync Changes button appears, you can click to finally push all your commits, or click the 3 dots and press the Push option, both are the same.
