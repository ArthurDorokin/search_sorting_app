import React, {Component} from 'react';
import SearchPanel from '../search-panel';
import ControlPanel from '../control-panel';
import SelectUser from '../select-user';
import UserList from '../user-list';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    img: '../img/owl.svg',
                    nameListUser: 'Chad Snyder',
                    ageListUser: '28',
                    phoneListUser: '8 (629) 653-9041',
                    id: '1'
                },
                {
                    img: '../img/cat.svg',
                    nameListUser: 'Milton Warner',
                    ageListUser: '11',
                    phoneListUser: '8 (435) 653-9041',
                    id: '2'
                },
                {
                    img: '../img/fox.svg',
                    nameListUser: 'Viola Hale',
                    ageListUser: '22',
                    phoneListUser: '8 (543) 653-9041',
                    id: '3'
                },
                {
                    img: '../img/koala.svg',
                    nameListUser: 'Tyler Herrera',
                    ageListUser: '34',
                    phoneListUser: '8 (656) 653-9041',
                    id: '4'
                },
                {
                    img: '../img/lion.svg',
                    nameListUser: 'Gabriel Howell',
                    ageListUser: '12',
                    phoneListUser: '8 (123) 653-9041',
                    id: '5'
                },
                {
                    img: '../img/penguin.svg',
                    nameListUser: 'Adelaide Jacobs',
                    ageListUser: '34',
                    phoneListUser: '8 (543) 653-9041',
                    id: '6'
                },
                {
                    img: '../img/pig.svg',
                    nameListUser: 'James Diaz',
                    ageListUser: '76',
                    phoneListUser: '8 (875) 653-9041',
                    id: '7'
                },
                {
                    img: '../img/raccoon.svg',
                    nameListUser: 'Vincent Sparks',
                    ageListUser: '54',
                    phoneListUser: '8 (986) 653-9041',
                    id: '8'
                },
                {
                    img: '../img/sheep.svg',
                    nameListUser: 'Mark Rhodes',
                    ageListUser: '12',
                    phoneListUser: '8 (467) 653-9041',
                    id: '9'
                },
                {
                    img: '../img/fox.svg',
                    nameListUser: 'Gordon Daniels',
                    ageListUser: '32',
                    phoneListUser: '8 (978) 653-9041',
                    id: '10'
                },
                {
                    img: '../img/koala.svg',
                    nameListUser: 'Ella Parks',
                    ageListUser: '43',
                    phoneListUser: '8 (232) 653-9041',
                    id: '11'
                },
                {
                    img: '../img/lion.svg',
                    nameListUser: 'Luis Jacobs',
                    ageListUser: '45',
                    phoneListUser: '8 (547) 653-9041',
                    id: '12'
                },
                {
                    img: '../img/penguin.svg',
                    nameListUser: 'Phillip Daniels',
                    ageListUser: '65',
                    phoneListUser: '8 (629) 653-9041',
                    id: '13'
                },
                {
                    img: '../img/cat.svg',
                    nameListUser: 'Hettie Soto',
                    ageListUser: '67',
                    phoneListUser: '8 (123) 653-9041',
                    id: '14'
                }
            ],
            term: ''
        };

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByAge = this.sortByAge.bind(this);
        this.reset = this.reset.bind(this);
    }

    searchPost(items, term) {

        if (term.length === 0) {
            return items;

        }

        return items.filter((item) => {
            return (
                item.nameListUser.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                item.ageListUser.indexOf(term) > -1 ||
                item.phoneListUser.indexOf(term) > -1

            )
        })

    }

    sortByName() {
        const ByNameData = this.state.data;
        const sortNameData = ByNameData.sort((a, b) => a.nameListUser > b.nameListUser ? 1: -1);
        this.setState({data : sortNameData})
    }

    sortByAge() {
        const ByAgeData = this.state.data;
        const sortAgeData = ByAgeData.sort((a, b) => a.ageListUser > b.ageListUser ? 1 : -1);
        this.setState({data : sortAgeData});
    }

    reset() {
        console.log('rest');
    }

    onUpdateSearch(term) {
        this.setState({term})

    }

    render() {
        const {data, term} = this.state;

        const visiblePosts = this.searchPost(data, term);

        return (
            <div className="app">
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                <ControlPanel
                    reset={this.reset}
                    sortByAge={this.sortByAge}
                    sortByName={this.sortByName}/>
                <div className="main-content">
                    <SelectUser/>
                    <UserList lists={visiblePosts}/>
                </div>
            </div>
        )
    }
}


