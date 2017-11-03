import sanityCheck from './sanity_check';

test('it confirms you are sane', () => {
  expect(sanityCheck()).toBe('you are sane-ish');
});
