import React from 'react';
import Radium from 'radium';

@Radium
export class Item extends React.Component {
    displayName = 'A fluid container'
    getStyles = () => {
      return {
            base: {
                paddingTop: '10px',
                paddingBottom: '10px',
                lineHeight: '20px',
                color: '#777',

                ':hover': {
                    color: '#333',
                    backgroundColor: 'transparent'
                },

                ':focus': {
                    color: '#333',
                    backgroundColor: 'transparent'
                }
            },
            fixed: {
                '@media (min-width: 768px)': {
                    paddingTop: '15px',
                    paddingBottom: '15px'
                }
            }
        };
    }
    render() {
      const defStyle = this.getStyles();
      return (
            <a style= {[defStyle.base, defStyle.fixed]} href={this.props.link}>
                {this.props.title}
            </a>
        );
    }
}
