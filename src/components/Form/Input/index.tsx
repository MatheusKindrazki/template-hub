import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  Input as ChakraInput,
  FormControl,
  FormHelperText,
  InputGroup,
  InputProps,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useField } from '@unform/core';

type InputElement = InputProps;

interface InputAddIcons extends InputElement {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Input: React.FC<InputAddIcons> = ({
  name,
  iconLeft,
  iconRight,
  mb,
  ...rest
}) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(
    name as string,
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <FormControl mb={mb}>
      <InputGroup>
        {iconLeft && (
          <InputLeftElement children={iconLeft} width="3rem" height="3rem" />
        )}
        <ChakraInput
          ref={inputRef}
          rounded="md"
          height="3rem"
          backgroundColor="gray.200"
          borderWidth="1px"
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          borderColor="gray.400"
          isInvalid={!!error && !isFocused}
          _placeholder={{
            color: '#7A7A7A',
            fontSize: '14px',
          }}
          _hover={{
            borderColor: 'blue.500',
          }}
          _focus={{
            borderColor: 'blue.500',
            boxShadow: '0 0 0 1px var(--hub-base-color)',
          }}
          defaultValue={defaultValue}
          errorBorderColor="red.300"
          {...rest}
        />
        {iconRight && (
          <InputRightElement children={iconRight} width="3rem" height="3rem" />
        )}
      </InputGroup>
      {!!error && <FormHelperText color="red.300">{error}</FormHelperText>}
    </FormControl>
  );
};

export default Input;
