/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

WebPayPayment.combo.Resource = function (config) {
    config = config || {};

    Ext.applyIf(config, {
        name: 'resource',
        hiddenName: 'resource',
        displayField: 'pagetitle',
        valueField: 'id',
        fields: ['id', 'pagetitle'],
        pageSize: 20,
        typeAhead: true,
        preselectValue: false,
        value: 0,
        editable: true,
        hideMode: 'offsets',
        url: WebPayPayment.ms2Connector,
        baseParams: {
            action: 'mgr/system/element/resource/getlist',
            combo: true
        }
    });

    WebPayPayment.combo.Resource.superclass.constructor.call(this, config);
};

Ext.extend(WebPayPayment.combo.Resource, MODx.combo.ComboBox);
Ext.reg('webpay-combo-resource', WebPayPayment.combo.Resource);
