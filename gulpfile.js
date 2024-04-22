const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const fs = require('fs');
const cheerio = require('gulp-cheerio');
const { exec } = require('child_process');
const spriteSvg = require('gulp-svg-sprite');
const path = require('path');

let autoprefixer;
let imageReduction;

const config = {
    mode: {
        symbol: {
            sprite: 'sprite.svg',
            example: false
        },
        svg:{
            xmlDeclaration: false,
            doctypeDeclaration: false
        }
    }
}

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

async function imageMin(cb){
    const command = 'find ./dist/images/* ! \\( -name "*.svg" -o -name "*.webp" \\) -exec bash -c \'cwebp -q 25 "$1" -o "$(dirname "$1")/$(basename "$1" .jpg).webp"\' _ {} \\;';
    await loadModules();
    return gulp.src('./source/images/**/*')
    .pipe(imageReduction())
    .pipe(gulp.dest('./dist/images'))
    .on('end', () => {
        (exec(command, (err, stdout, stderr) => {
            if (err){
                console.error(`exec error: ${err}`)
            }else {
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                console.log('The images were converted to webp');
                cb();
            }
        }))
    })
}


function mergeVideo(cb){
    const hideFiles = ['.DS_Store', 'list.txt']

    fs.readdir('./source/videos/hero', (_, files) =>{
        const filteredFiles = files.filter(file => !hideFiles.includes(file));
        const data = filteredFiles.map(file => `file '${file}'`).join('\n')

        fs.writeFile('./source/videos/hero/list.txt', data, (err) => {
            if(err) throw err;
            console.log('The list has been created')
            checkOutput();
        })
    })

    function checkOutput(){
        const outputFile = './dist/videos/hero/output.mp4';

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
        const command = 'ffmpeg -f concat -safe 0 -i ./source/videos/hero/list.txt -c:v libx264 -crf 25 -preset fast -s 1920x1080 -an ./dist/videos/hero/output.mp4'
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
        fs.unlink('./source/videos/hero/list.txt', (err) => {
            if (err) throw err;
            console.log('list.txt was deleted');
            cb();
        });
    }
}

function minVideo(cb){
    const outputDir = './dist/videos/login/';

    fs.readdir(outputDir, (err, files) => {
        if (err) throw err;
    
        if (files.length > 0) {
            for (const file of files) {
                fs.unlink(path.join(outputDir, file), err => {
                    if (err) throw err;
                });
            }
        }
    
        minimizeVideos();
    });

    function minimizeVideos(){
        const command = `for i in ./source/videos/login/*.mp4; do ffmpeg -i "$i" -vf "scale=-1:1920,crop=1080:1920:1150:0" -c:v libx264 -crf 20 -preset fast -an ./dist/videos/login/$(basename "$i"); done`;
        exec(command, (err, stdout, stderr) => {
            if (err){
                console.error(`exec error: ${err}`);
                cb();
            } else {
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                console.log('The videos were compressed');
                cb();
            }
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

function svgSprite(){
    return gulp.src('./source/icons/normal/*.svg')
    .pipe(spriteSvg(config))
    .pipe(cheerio({
        run: ($) => {
            $('[fill]').removeAttr('fill');
        },
        parserOptions: {xmlMode: true}
    }))
    .pipe(gulp.dest('./dist/icons/normal'));
}

exports.sprite = svgSprite;

function svgSpritePayment(){
    return gulp.src('./source/icons/payment/*.svg')
    .pipe(spriteSvg(config))
    .pipe(gulp.dest('./dist/icons/payment'));
}

exports.spritePayment = svgSpritePayment;


function gulpWatch(){
    gulp.watch('./source/styles/**/*.scss', sassComp);
    gulp.watch('./source/scripts/**/*.js', jsConcat);
    gulp.watch('./source/images/**/*', imageMin);
    gulp.watch('./source/videos/hero/*', mergeVideo);
    gulp.watch('./source/icons/normal/*.svg', svgSprite);
    gulp.watch('./source/videos/login/*', minVideo);
    gulp.watch('./source/icons/payment/*.svg', svgSpritePayment);
}

exports.build = gulp.parallel(sassComp, imageMin, mergeVideo, jsConcat);
exports.default = gulp.parallel(gulpWatch);

exports.sass = sassComp;
exports.js = jsConcat;
exports.image = imageMin;
exports.mergeVideo = mergeVideo;
exports.sprite = svgSprite;
exports.minVideo = minVideo;