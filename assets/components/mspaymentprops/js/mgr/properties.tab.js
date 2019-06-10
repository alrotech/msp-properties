/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

Ext.ComponentMgr.onAvailable('minishop2-window-payment-update', function () {
    this.on('beforerender', function (paymentWindow) {
        var tabs = this.findByType('modx-tabs').pop();
        tabs.add({
            title: _('properties'),
            items: [{
                xtype: 'mspp-grid-payment-properties',
                payment: paymentWindow.record.id
            }]
        });
    });
});
