/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

msPaymentProps.window.PaymentProperty = function (config) {
    config = config || { new: false };

    if (!config.id) {
        config.id = 'mspp-window-payment-property'
    }

    Ext.applyIf(config, {
        url: msPaymentProps.ownConnector,
        layout: 'anchor',
        cls: 'modx-window',
        modal: true,
        width: 400,
        autoHeight: true,
        allowDrop: false,
        baseParams: {
            action: 'mgr/properties/' + (config.new ? 'create' : 'update'),
            payment: config.payment
        },
        fields: this.getFields(config),
        keys: this.getKeys(config),
        buttons: this.getButtons(config),
        closeAction: 'close'
    });

    msPaymentProps.window.PaymentProperty.superclass.constructor.call(this, config);

    this.on('hide', function () {
        var self = this;
        window.setTimeout(function () {
            self.close();
        }, 200);
    });
};

Ext.extend(msPaymentProps.window.PaymentProperty, MODx.Window, {

    dynamicValueField: function dynamicValueField(xtype, value) {
        var form = Ext.getCmp('mspp-window-payment-property-form');
        var field = Ext.getCmp('mspp-property-value');

        form.remove(field);
        form.add({
            name: 'value',
            fieldLabel: _('value'),
            xtype: xtype,
            value: value,
            anchor: '100%',
            id: 'mspp-property-value'
        });
        form.doLayout();
    },

    getFields: function getFields(config) {
        return [{
            layout: 'form',
            defaults: { msgTarget: 'under', autoHeight: true },
            id: 'mspp-window-payment-property-form',
            items: [{
                fieldLabel: _('property'),
                xtype: 'mspp-combo-settings',
                name: 'key',
                anchor: '100%',
                readOnly: !config.new,
                url: MODx.config.connector_url,
                baseParams: {
                    action: 'system/settings/getList',
                    namespace: 'minishop2',
                    area: config.suffix === 'paypal'
                        ? 'ms2_payment'
                        : 'ms2_payment_' + config.suffix
                },
                listeners: {
                    loaded: {
                        fn: function (combo) {
                            var record = combo.getStore().getAt(0);
                            this.dynamicValueField(record.get('xtype'), record.get('value'));
                        }, scope: this
                    },
                    select: {
                        fn: function (combo, record) {
                            this.dynamicValueField(record.data.xtype, record.data.value);
                        }, scope: this
                    }
                }
            }, {
                fieldLabel: _('value'),
                xtype: 'textarea',
                name: 'value',
                anchor: '100%',
                id: 'mspp-property-value'
            }]
        }];
    },

    getKeys: function getKeys() {
        return [{
            key: Ext.EventObject.ENTER,
            shift: true,
            fn: function () {
                this.submit();
            }, scope: this
        }];
    },

    getButtons: function getButtons(config) {
        return [{
            scope: this,
            text: _('cancel'),
            handler: function () {
                config.closeAction !== 'close'
                    ? this.hide()
                    : this.close();
            }
        }, {
            scope: this,
            text: _('save'),
            handler: this.submit,
            cls: 'primary-button'
        }]
    }

});
Ext.reg('mspp-window-payment-property', msPaymentProps.window.PaymentProperty);
