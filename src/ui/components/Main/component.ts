import Component, { tracked } from '@glimmer/component';

export default class Main extends Component {
  @tracked clientName;

  constructor() {
    super(arguments);

    const dataElement = document.getElementById('data');
    const json = dataElement.innerText;
    const data = JSON.parse(json).data;

    this.clientName = data.clientName;
  }
}
