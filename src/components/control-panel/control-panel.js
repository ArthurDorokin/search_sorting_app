import React, {Component} from 'react';
import './control-panel.css';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.sortByName = this.sortByName.bind(this);
        this.sortByAge = this.sortByAge.bind(this);
        this.reset = this.reset.bind(this);
    }

    sortByName(e) {
        const term = e.target;
        this.setState({term: term});
        this.props.sortByName(term);

    }

    sortByAge(e) {
        const term = e.target;
        this.setState({term: term});
        this.props.sortByAge(term);
    }

    reset(e) {
        const term = e.target;
        this.setState({term: term});
        this.props.reset(term);
    }

    render() {
        return (
            <div className="groupBtn">
                <button className="sortByName" onClick={this.sortByName}>
              <span><img src="../img/sort-name.png" alt=""/>
              </span> Sort by name
                </button>
                <button className="sortByAge" onClick={this.sortByAge}>
              <span><img src="../img/sort-age.svg" alt=""/>
              </span> Sort by age
                </button>
                <button className="reset" onClick={this.reset}>
              <span><img src="../img/reset.png" alt=""/>
              </span> Reset
                </button>
            </div>
        )
    }
}