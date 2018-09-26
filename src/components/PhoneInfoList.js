import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }
    
    render() {
        const { data, onRemove, onUpdate} = this.props;
        // if(!data) return null;
        // info들의 데이터를 가지고 PhoneInfo데이터들로 바꿔 줌

        console.log('rendering list');

        const list = data.map(
            info => (
                <PhoneInfo
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    info={info}
                    key={info.id}
                />
            )
        );
        
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;