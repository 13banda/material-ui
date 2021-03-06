// @flow

import React from 'react';
import { assert } from 'chai';
import { getClasses, createMount } from '../test-utils';
import Radio from './Radio';
import RadioButtonCheckedIcon from '../svg-icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '../svg-icons/RadioButtonUnchecked';

describe('<Radio />', () => {
  let classes;
  let mount;

  before(() => {
    classes = getClasses(<Radio />);
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  describe('styleSheet', () => {
    it('should have the classes required for SwitchBase', () => {
      assert.strictEqual(typeof classes.default, 'string');
      assert.strictEqual(typeof classes.checked, 'string');
      assert.strictEqual(typeof classes.disabled, 'string');
    });
  });

  describe('default Radio export', () => {
    it('should be a SwitchBase with the displayName set for debugging', () => {
      assert.strictEqual(Radio.displayName, 'withStyles(Radio)');
    });
  });

  describe('prop: unchecked', () => {
    it('should render an unchecked icon', () => {
      const wrapper = mount(<Radio />);
      assert.strictEqual(wrapper.find(RadioButtonUncheckedIcon).length, 1);
    });
  });

  describe('prop: checked', () => {
    it('should render a checked icon', () => {
      const wrapper = mount(<Radio checked />);
      assert.strictEqual(wrapper.find(RadioButtonCheckedIcon).length, 1);
    });
  });
});
