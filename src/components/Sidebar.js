import React from 'react'
import ScrollArea from 'react-scrollbar';

class Sidebar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            itemsCount : 11
        };
    }
    render() {
        var itemElements = [];

        for( var i = 0; i< this.state.itemsCount; i++){
            itemElements.push(<div className="item" key={i}>item {i}</div>);
        }

        let scrollbarStyles = {borderRadius: 5};

        return (
            <div>
                <ScrollArea
                  className="area"
                  contentClassName="content"
                  verticalScrollbarStyle={scrollbarStyles}
                  verticalContainerStyle={scrollbarStyles}
                  horizontalScrollbarStyle={scrollbarStyles}
                  horizontalContainerStyle={scrollbarStyles}
                  smoothScrolling= {true}
                  minScrollSize={40}
                  >

                    {itemElements}

                </ScrollArea>

            </div>
        );
    }	

}

export default Sidebar;
