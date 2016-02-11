export default function() {
  this.namespace = 'api/v1';
  this.get('/rates');
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
