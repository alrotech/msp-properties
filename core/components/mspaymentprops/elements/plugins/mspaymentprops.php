<?php
/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

class msPaymentProps
{
    public static function loadExtraJs($modx, $files)
    {
        $ms2connector = $modx->getOption('minishop2.assets_url', null, $modx->getOption('assets_url') . 'components/minishop2/') . 'connector.php';
        $ownConnector = $modx->getOption('assets_url') . 'components/mspaymentprops/connector.php';

        $modx->controller->addLexiconTopic('minishop2:default');
        $modx->controller->addLexiconTopic('core:propertyset');
        $modx->controller->addJavascript(MODX_ASSETS_URL . 'components/mspaymentprops/js/mgr/mspaymentprops.js');
        $modx->controller->addHtml('<script>msPaymentProps.ms2Connector = "' . $ms2connector . '";</script>');
        $modx->controller->addHtml('<script>msPaymentProps.ownConnector = "' . $ownConnector . '";</script>');

        foreach ($files as $file) {
            $modx->controller->addLastJavascript(MODX_ASSETS_URL . 'components/mspaymentprops/js/mgr/' . $file);
        }
    }
}

switch ($modx->event->name) {
    case 'OnManagerPageBeforeRender':

        switch ($_GET['a']) {
            case 'system/settings':
                msPaymentProps::loadExtraJs($modx, [
                    'language.combo.js',
                    'status.combo.js',
                    'resource.combo.js'
                ]); break;
            case 'mgr/settings':
                msPaymentProps::loadExtraJs($modx, [
//                    'language.combo.js',
//                    'status.combo.js',
//                    'resource.combo.js',
                    'settings.combo.js',
                    'property.window.js',
                    'properties.grid.js',
                    'properties.tab.js'
                ]);
                break;
        }
        break;
}
