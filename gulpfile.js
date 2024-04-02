const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const fs = require('fs');
const cheerio = require('gulp-cheerio');
const { exec } = require('child_process');
const spriteSvg = require('gulp-svg-sprite');

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
        const outputFile = './dist/videos/output.mp4';

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
        const command = 'ffmpeg -f concat -safe 0 -i ./source/videos/list.txt -c:v libx264 -crf 25 -preset fast -s 1920x1080 -an ./dist/videos/output.mp4'
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

function svgSprite(){
    return gulp.src('./source/icons/**/*.svg')
    .pipe(spriteSvg(config))
    .pipe(cheerio({
        run: ($) => {
            $('[fill]').removeAttr('fill');
        },
        parserOptions: {xmlMode: true}
    }))
    .pipe(gulp.dest('./dist/icons'));
}

exports.sprite = svgSprite;


function gulpWatch(){
    gulp.watch('./source/styles/**/*.scss', sassComp);
    gulp.watch('./source/scripts/**/*.js', jsConcat);
    gulp.watch('./source/images/**/*', imageMin);
    gulp.watch('./source/videos/**/*', videoMin);
    gulp.watch('./source/icons/**/*.svg', svgSprite);
}

exports.build = gulp.parallel(sassComp, imageMin, videoMin, jsConcat);
exports.default = gulp.parallel(gulpWatch);

exports.sass = sassComp;
exports.js = jsConcat;
exports.image = imageMin;
exports.video = videoMin;
exports.sprite = svgSprite;