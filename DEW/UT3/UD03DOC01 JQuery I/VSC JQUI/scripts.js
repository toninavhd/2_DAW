"use strict";

const $j = jQuery.noConflict();

function inicializaComponentes(){
    initAcordion();
    initTabs();
    initDialog();
}

function initAcordion(){
    $j("#accordion").accordion();
}

function initDialog(){
    $j("#dialog").dialog();
}

function initTabs(){
    $j("#tabs").tabs();
}

$j(function(){
    inicializaComponentes();
});
