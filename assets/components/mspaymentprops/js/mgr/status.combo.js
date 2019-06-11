/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

msPaymentProps.combo.Status = function (config) {
    config = config || {};

    Ext.applyIf(config, {
        name: 'status',
        hiddenName: 'status',
        displayField: 'name',
        valueField: 'id',
        fields: ['id', 'name'],
        pageSize: 10,
        typeAhead: true,
        preselectValue: false,
        value: 0,
        editable: true,
        hideMode: 'offsets',
        url: msPaymentProps.ms2Connector,
        baseParams: {
            action: 'mgr/settings/status/getlist',
            combo: true
        }
    });

    msPaymentProps.combo.Status.superclass.constructor.call(this, config);
};

Ext.extend(msPaymentProps.combo.Status, MODx.combo.ComboBox);
Ext.reg('mspp-combo-status', msPaymentProps.combo.Status);
