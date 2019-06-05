/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

var msPaymentConfiguration = function(config) {
    config = config || {};
    msPaymentConfiguration.superclass.constructor.call(this, config);
};
Ext.extend(msPaymentConfiguration, Ext.Component, { combo: {}, grid: {}, window: {} });
Ext.reg('mspconf', msPaymentConfiguration);

msPaymentConfiguration = new msPaymentConfiguration();
