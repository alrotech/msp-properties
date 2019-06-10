<?php
/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

include_once 'base.class.php';

/**
 * Class PaymentPropertiesDeleteProcessor
 */
class PaymentPropertiesDeleteProcessor extends PaymentPropertiesBaseProcessor
{
    public function process()
    {
        $properties = $this->getPaymentProperties();

        $key = $this->getProperty(self::PROPERTY_KEY);

        if (!array_key_exists($key, $properties) && $key !== 'all') {
            $this->failure('mspp_props_key_nf');
        }

        if ($key === 'all') {
            $properties = [];
        } else {
            unset($properties[$key]);
        }

        return $this->savePaymentProperties($properties)
            ? $this->success()
            : $this->failure($this->modx->lexicon('mspp_save_props_err'));
    }
}

return PaymentPropertiesDeleteProcessor::class;
