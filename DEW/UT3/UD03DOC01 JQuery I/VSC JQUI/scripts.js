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

//function initDialog(){
//  $j('#dialog').dialog({
//        autoOpen:false,
//        buttons: [{
//            Text: 'Cerrar',
//            click: function(){
//                $j(this).dialog('close')
//            }
//        }]
//    });
//}

//function initButton(){
//    $j("button").button().on('click', function(){
//        $j('#dialog').dialog('open')
//    });

//}
$j(function(){
    inicializaComponentes();
});
