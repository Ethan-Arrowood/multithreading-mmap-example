# Multithreading MMap Example

A stand alone example of modifying the contents of a file using memory mapping and multithreading.
This project is currently set up to *only run on Unix based operating systems.* I have only tested this on macOS.

It uses Node.js experimental feature `worker-threads`

Run this project with:
```
git clone https://github.com/Ethan-Arrowood/multithreading-mmap-example
cd multithreading-mmap-example
npm install
npm run start
```
Works best on Node `v10.8.0` as this was the latest version of node the `mmap-io` package was update for. It will work with all Node version after that one though (I've tried it myself on `v11.2.0`). I plan on contributing back to `mmap-io` at the conclusion of this project so that it builds without warnings on `v11.*`.

Many hours were spent achieving this example. It is not the best representation of multithreading capabilities; however, it is the foundation for a more complex program I am working on.

*Why* = I am currently working on a final project submission for a university course. To no surprise, it requires the use of multithreading and memory mapping. I decided to complete this project in JavaScript instead of C because I wanted to see what the low-level possibilities are of a high-level language. Processing speed was not a project requirement, only proper use of multithreading and memory mapping. 