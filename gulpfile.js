const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const fs = require('fs');
const { exec } = require('child_process');

let autoprefixer;
let imageReduction;

async function loadModules(){
    autoprefixer = (await import('gulp-autoprefixer')).default;
    imageReduction = (await import('gulp-imagemin')).default;
}

async function sassComp(){
    await loadModules();
    return gulp.src('./source/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass(
        {
            outputStyle: 'expanded'
        }
    ))
    .pipe(autoprefixer({
        cascade: false,
        browserList: ['last 2 versions']
    }))
    .pipe(sourceMaps.write('./maps/'))
    .pipe(gulp.dest('./dist/styles'));
}

async function imageMin(){
    await loadModules();
    return gulp.src('./source/images/**/*')
    .pipe(imageReduction())
    .pipe(gulp.dest('./dist/images'));
}


function videoMin(cb){
    const hideFiles = ['.DS_Store', 'list.txt']

    fs.readdir('./source/videos', (_, files) =>{
        const filteredFiles = files.filter(file => !hideFiles.includes(file));
        const data = filteredFiles.map(file => `file '${file}'`).join('\n')

        fs.writeFile('./source/videos/list.txt', data, (err) => {
            if(err) throw err;
            console.log('The list has been created')
            checkOutput();
        })
    })

    function checkOutput(){
        const outputFile = './dist/videos/output.webm';

        fs.access(outputFile, (err) =>{
            if(!err){
                fs.unlink(outputFile, (err) => {
                    if (err) throw err;
                    console.log('The previous file was deleted');
                    mergeVideos();
                });
            }else{
                mergeVideos();
            }
        })
    }

    function mergeVideos(){
        const command = 'ffmpeg -f concat -safe 0 -i ./source/videos/list.txt -c:v libvpx-vp9 -c:a libvorbis -crf 20 -preset fast -s 1920x1080 -an ./dist/videos/output.webm'
        exec(command, (err, stdout, stderr) => {
            if (err){
                console.error(`exec error: ${err}`)
            }else {
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                console.log('The video was merged');
            }
            cleanUp();
        })
    }

    function cleanUp(){
        fs.unlink('./source/videos/list.txt', (err) => {
            if (err) throw err;
            console.log('list.txt was deleted');
            cb();
        });
    }
}


function jsConcat(){
    return gulp.src('./source/scripts/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourceMaps.write("./maps/"))
    .pipe(gulp.dest('./dist/scripts/'))
}


function gulpWatch(){
    gulp.watch('./source/styles/**/*.scss', sassComp);
    gulp.watch('./source/scripts/**/*.js', jsConcat);
    gulp.watch('./source/images/**/*', imageMin);
    gulp.watch('./source/videos/**/*', videoMin);
}

exports.build = gulp.parallel(sassComp, imageMin, videoMin, jsConcat);
exports.default = gulp.parallel(gulpWatch);