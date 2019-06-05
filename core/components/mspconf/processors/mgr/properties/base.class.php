<?php
/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

/**
 * Class mspConfPaymentPropertiesBaseProcessor
 */
class mspConfPaymentPropertiesBaseProcessor extends modProcessor
{
    const PROPERTY_PAYMENT = 'payment';
    const PROPERTY_KEY = 'key';
    const PROPERTY_VALUE = 'value';

    /** @var msPayment */
    protected $payment;

    /**
     * @return msPayment|object
     */
    protected function getPayment()
    {
        if (!$this->payment) {
            $this->payment = $this->modx->getObject('msPayment', $this->getProperty(self::PROPERTY_PAYMENT));
        }

        return $this->payment;
    }

    /**
     * @return mixed
     */
    protected function getPaymentProperties()
    {
        return $this->getPayment()->get('properties');
    }

    /**
     * @param array $properties
     * @return bool
     */
    protected function savePaymentProperties(array $properties = [])
    {
        $this->payment->set('properties', $properties);

        return $this->payment->save();
    }

    public function process() {}
}
