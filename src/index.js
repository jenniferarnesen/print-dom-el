import FileSaver from 'file-saver';
import html2canvas from 'html2canvas';
// import Puppeteer from 'puppeteer';
// const puppeteer = require('puppeteer');
// const CDP = require('chrome-remote-interface');
// import CDP from 'chrome-remote-interface';

// console.log('Puppeteer', puppeteer);

// console.log('CDP', CDP);



document.addEventListener('DOMContentLoaded', () => {

    const saveBtn = document.getElementById('save-btn');
    const divEl = document.getElementById("div-el");

    const canvasEl = document.getElementById('canvas-el');
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);

    // const xmlSerializer = new XMLSerializer();

    saveBtn.addEventListener('click', () => {
        console.log('button clicked');

        html2canvas(divEl).then(canvas => {
            canvas.toBlob(blob => FileSaver.saveAs(blob, "theimage.png"));
            // document.body.appendChild(canvas)
        });
        // const serializedDiv = xmlSerializer.serializeToString(divEl);
        // const theBlob = new Blob([serializedDiv], {type: "image/png"});
        // FileSaver.saveAs(theBlob, "theimage.png");


        // canvasEl.toBlob(function(blob) {
        //     FileSaver.saveAs(blob, "theimage.png");
        // });
    })

    // const host = '10.10.10.10';
    // const port = 9955;

    // console.log('host', host);

    // console.log('CDP.New', CDP.New);



    // CDP.New({url: 'http://example.com', host, port}).then((target) => {
    //     console.log('yo');

    //     return CDP({target});
    // }).then((client) => {
    //     console.log('show');

    //     return client.Runtime.evaluate({
    //         expression: 'alert("Closing this tab...")'
    //     }).then(() => {
    //         const id = client.target.id;
    //         console.log('id', id);

    //         return CDP.Close({id, host, port});
    //     });
    // }).catch((err) => {
    //     console.error(err);
    // });

    // CDP(async function(client) {
    //     // Extract used DevTools domains.
    //     const { Page } = client;
    // })
    // .on('error', (err) => {
    //     console.error(err);
    // });;



}, false);

