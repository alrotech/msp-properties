<?php
/**
 * The MIT License
 * Copyright (c) 2019 Ivan Klimchuk. https://klimchuk.com
 * Full license text placed in the LICENSE file in the repository or in the license.txt file in the package.
 */

include_once 'base.class.php';

/**
 * Class mspConfPaymentPropertiesCreateProcessor
 */
class mspConfPaymentPropertiesCreateProcessor extends mspConfPaymentPropertiesBaseProcessor
{
    public function process()
    {
        $properties = $this->getPaymentProperties();

        $key = $this->getProperty(self::PROPERTY_KEY);
        $value = $this->getProperty(self::PROPERTY_VALUE);

        if (array_key_exists($key, $properties)) {
            return $this->failure($this->modx->lexicon('mspconf_duplicated_props_err'));
        }

        $properties[$key] = $value;

        return $this->savePaymentProperties($properties)
            ? $this->success()
            : $this->failure($this->modx->lexicon('mspconf_save_props_err'));
    }
}

return mspConfPaymentPropertiesCreateProcessor::class;
