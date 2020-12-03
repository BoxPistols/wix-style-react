import React, { useCallback, useMemo } from 'react';
import AddressInput from '../AddressInput';
import { addressInputOptionBuilder } from '../AddressInputOption/AddressInputOption';
import usePlacesAutocomplete from '../hooks/usePlacesAutocomplete';
import useAtlasClient from '../hooks/usePlacesAutocomplete/useAtlasClient';

const AtlasAddressInput = ({ onChange, ...props }) => {
  const client = useAtlasClient();
  const { predictions, updatePredictions } = usePlacesAutocomplete({ client });
  const options = useMemo(
    () =>
      predictions.map(prediction =>
        addressInputOptionBuilder({
          id: prediction.placeId,
          mainLabel: prediction.textStructure.mainText,
          secondaryLabel: prediction.textStructure.secondaryText,
          displayLabel: prediction.description,
        }),
      ),
    [predictions],
  );
  const _onChange = useCallback(
    value => {
      updatePredictions(value);
      if (onChange) {
        onChange(value);
      }
    },
    [updatePredictions, onChange],
  );

  return <AddressInput options={options} onChange={_onChange} {...props} />;
};

export default AtlasAddressInput;
