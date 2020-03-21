# gulp
- Gulp is really easy to use. This is a very basic overview of the most important features of the library, ripped directly from Travesty Media's [video](#link) on the subject.
- Gulp is a task manager used to run tasks such as compiling css preprocessor code into actual css, minifying javascript and concatonating them, compressing images, running tests and many other types of tasks.
- It is _stream based_ and asynchronous.

## General Workflow and Essential Functions:
- It follows a unixy philosophy where it takes an input, runs it through a pipe of single purpose plugins/functions and before outputing that to a specified destination.
- Important gulp functions include:
	* **`gulp.task()`** allows you to create a gulp task.
	* **`gulp.src()`** points to source files
	* **`gulp.dist()`** points to a destination directory
	* **`gulp.watch`** runs a task when a source file changes.
	* **`*gulp.series()`**runs a series of tasks in order.

## Examples:
- To log a simple message you'd use
```javascript
const gulp = require('gulp');

gulp.task('helloWorld', () => {
	return console.log('Hello, world!');
});
```

- To run a gulp task, use `gulp` followed with the first argument you gave `gulp.task()`. The above example would be run in the terminal as:
```
gulp helloWorld
```
- To run a task using just `gulp`, the first argument to task is `'default'`.
- to compile a sass file into css, you'd use:
```javascript
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', async () => {
	gulp.src('sth.scss')
	.pipe(sass())
	.pipe(
	gulp.dest('dest')); // dumps a file with the same name specified in src in the dest directory
});
```

## Running a series of tasks:
- You can run multiple tasks using the following construct:
```javascript
gulp.task('default', gulp.series('helloWorld', 'sass'));
````