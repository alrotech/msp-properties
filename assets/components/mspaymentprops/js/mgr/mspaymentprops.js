/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

var msPaymentProps = function(config) {
    config = config || {};
    msPaymentProps.superclass.constructor.call(this, config);
};
Ext.extend(msPaymentProps, Ext.Component, { combo: {}, grid: {}, window: {} });
Ext.reg('mspp', msPaymentProps);

msPaymentProps = new msPaymentProps();
