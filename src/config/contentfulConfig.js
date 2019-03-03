const client = contentful.createClient({
  space: 'w7qayaxgvtbf',
  environment: 'master', // defaults to 'master' if not set
  accessToken:
    '89920bb55647070de973bbff6554a38e7e95e8c2f65bbc2fa868476bc2d488e9',
});

export default client;