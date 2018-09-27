import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
	id = 3;

	// id값은 리렌더링 필요없기 때문에 state에 넣을 필요 없음
	state = {
		information: [
			{
				id: 0,
				name: 'person1',
				phone: '010-0000-0001',
			},
			{
				id: 1,
				name: 'person2',
				phone: '010-0000-0002',
			},
			{
				id: 2,
				name: 'person3',
				phone: '010-0000-0003',
			},
		],
		keyword: '',
	};

	handleChange = (e) => {
		this.setState({
			keyword: e.target.value,
		})
	}

	handleCreate = data => {
		const { information } = this.state;
		this.setState({ // -> rerendering
			// information: information.concat({
			//   ...data,
			//   id: this.id++
			// })
			information: information.concat(
				Object.assign({}, data, {
					id: this.id++,
				})
			),
		});
	};

	handleRemove = id => {
		const { information } = this.state;
		this.setState({
			information: information.filter(info => info.id !== id),
		});
	};

	handleUpdate = (id, data) => {
		const { information } = this.state;
		this.setState({
			information: information.map(info => {
				if (info.id === id) {
					return {
						id,
						...data,
					};
				}
				return info;
			}),
		});
	};

	render() {
		return (
			<div>
				<PhoneForm onCreate={this.handleCreate} />
				<input
					value={this.state.keyword}
					onChange={this.handleChange}
					placeholder="이름 검색 하기"
				/>
				<PhoneInfoList
					data={this.state.information.filter(
						info=>info.name.indexOf(this.state.keyword)>-1
					)}
					onRemove={this.handleRemove}
					onUpdate={this.handleUpdate}
				/>
			</div>
		);
	}
}

export default App;
