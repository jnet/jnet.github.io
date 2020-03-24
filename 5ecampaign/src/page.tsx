import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

@observer
export class Page extends React.Component {
  constructor(props : Readonly<{}>) {
    super(props);
  }

  render() {
    return(
      <section className="page">
        <header>
          D and D 5E campaign
        </header>
      </section>
    );
  }
}