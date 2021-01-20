import { test, Page, TextField } from 'bigtest';
import { Button, Dropdown } from '@folio/stripes-testing';

export default test("Basic Stuff")
  .step(Page.visit('/inventory'))
  .step(Login("diku_admin", "admin"))
  .step(Dropdown("Actions").choose("New"))


function Login(username, password) {
  return {
    description: "Log in to FOLIO",
    action: async () => {
      await TextField("Username").fillIn(username);
      await TextField("Password").fillIn(password);
      await Button("Log in").click();
    }
  }
}
