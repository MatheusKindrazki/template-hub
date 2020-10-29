export default (name: string): void => {
  document.title = `${name} - ${process.env.REACT_APP_APP_NAME || 'PSD'}`;
};
