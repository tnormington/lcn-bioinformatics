import React, { PureComponent } from 'react';

export default class Callout extends PureComponent {
    render() {
        const { title, items } = this.props
        return(
            <div className="col col-12 col-md-6 mb-5">
                <div className="shadow rounded rounded-lg card">
                    <div className="card-body">
                        <h4 className="text-center card-title">{title}</h4>
                    </div>
                    
                    <ul className="list-group list-group-flush">
                        {items.map((item, i) => {
                            const active = item.includes('25%');
                            return (
                                <li className={`list-group-item ${active ? 'active' : ''}`} key={i}>
                                    {active &&
                                        <i className="fa fa-star mr-2" />
                                    }
                                {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        )
    }
}