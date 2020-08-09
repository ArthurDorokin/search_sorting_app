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
                    ageListUser: 28,
                    phoneListUser: '8 (629) 653-9041',
                    textUser: 'Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.',
                    id: 1
                },
                {
                    img: '../img/cat.svg',
                    nameListUser: 'Milton Warner',
                    ageListUser: 11,
                    phoneListUser: '8 (435) 653-9041',
                    textUser: 'In the beginning there was Kyiv. Long before Ukraine and Russia existed.',
                    id: 2
                },
                {
                    img: '../img/fox.svg',
                    nameListUser: 'Viola Hale',
                    ageListUser: 22,
                    phoneListUser: '8 (543) 653-9041',
                    textUser: 'East Slavic civilisation spread all the way to Alaska.',
                    id: 3
                },
                {
                    img: '../img/koala.svg',
                    nameListUser: 'Tyler Herrera',
                    ageListUser: 34,
                    phoneListUser: '8 (656) 653-9041',
                    textUser: 'Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.',
                    id: 4
                },
                {
                    img: '../img/lion.svg',
                    nameListUser: 'Gabriel Howell',
                    ageListUser: '15',
                    phoneListUser: '8 (123) 653-9041',
                    textUser: 'In the beginning there was Kyiv. Long before Ukraine and Russia existed.',
                    id: '5'
                },
                {
                    img: '../img/penguin.svg',
                    nameListUser: 'Adelaide Jacobs',
                    ageListUser: 34,
                    phoneListUser: '8 (543) 653-9041',
                    textUser: 'East Slavic civilisation spread all the way to Alaska.',
                    id: 6
                },
                {
                    img: '../img/pig.svg',
                    nameListUser: 'James Diaz',
                    ageListUser: 76,
                    phoneListUser: '8 (875) 653-9041',
                    textUser: 'Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.',
                    id: 7
                },
                {
                    img: '../img/raccoon.svg',
                    nameListUser: 'Vincent Sparks',
                    ageListUser: 54,
                    phoneListUser: '8 (986) 653-9041',
                    textUser: 'In the beginning there was Kyiv. Long before Ukraine and Russia existed.',
                    id: 8
                },
                {
                    img: '../img/sheep.svg',
                    nameListUser: 'Mark Rhodes',
                    ageListUser: 12,
                    phoneListUser: '8 (467) 653-9041',
                    textUser: 'East Slavic civilisation spread all the way to Alaska.',
                    id: 9
                },
                {
                    img: '../img/fox.svg',
                    nameListUser: 'Gordon Daniels',
                    ageListUser: 32,
                    phoneListUser: '8 (978) 653-9041',
                    textUser: 'Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.',
                    id: 10
                },
                {
                    img: '../img/koala.svg',
                    nameListUser: 'Ella Parks',
                    ageListUser: 43,
                    phoneListUser: '8 (232) 653-9041',
                    textUser: 'In the beginning there was Kyiv. Long before Ukraine and Russia existed.',
                    id: 11
                },
                {
                    img: '../img/lion.svg',
                    nameListUser: 'Luis Jacobs',
                    ageListUser: 45,
                    phoneListUser: '8 (547) 653-9041',
                    textUser: 'East Slavic civilisation spread all the way to Alaska.',
                    id: 12
                },
                {
                    img: '../img/penguin.svg',
                    nameListUser: 'Phillip Daniels',
                    ageListUser: 65,
                    phoneListUser: '8 (629) 653-9041',
                    textUser: 'Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.',
                    id: 13
                },
                {
                    img: '../img/cat.svg',
                    nameListUser: 'Hettie Soto',
                    ageListUser: 67,
                    phoneListUser: '8 (123) 653-9041',
                    textUser: 'In the beginning there was Kyiv. Long before Ukraine and Russia existed.',
                    id: 14
                }
            ],
            term: '',

            selectUser: null
        };

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByAge = this.sortByAge.bind(this);
        //this.reset = this.reset.bind(this);
    }

    searchPost(items, term) {

        if (term.length === 0) {
            const data = items.sort((a, b) => a.id > b.id ? 1: -1);
            return this.setState({data})
        }


        const data =  items.filter((item) => {
            return (
                item.nameListUser.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                item.ageListUser.indexOf(term) > -1 ||
                item.phoneListUser.indexOf(term) > -1

            )
        })
        this.setState({data})

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

    reset = () => {
        this.setState({term: ''})
        const {data, term} = this.state;
        this.searchPost(data, term);
    }

    onUpdateSearch(term) {
        this.setState({term})

    }

    onCharSelected = id => {
        this.setCharacter(id)
    }

    setCharacter = (id = 1) => {
        const {data} = this.state
        const res = data.filter(item => item.id === id)
        const [char] = res
        this.setState({selectUser: {...char}})
    }


    UNSAFE_componentWillMount() {
        this.setCharacter()
    }

    render() {
        const {data, selectUser} = this.state;

        return (
            <div className="app">
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                <ControlPanel
                    reset={this.reset}
                    sortByAge={this.sortByAge}
                    sortByName={this.sortByName}/>
                <div className="main-content">
                    <SelectUser character={selectUser} />
                    <UserList lists={data} showChar={this.onCharSelected} />
                </div>
            </div>
        )
    }
}


