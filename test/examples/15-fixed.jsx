import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 2,
    rowHeight: 150,
    onLayoutChange: function() {},
    cols: 6,
    preventCollision: true,
    fixed: true,
    compactType: null,
    maxRows: 2,
    swipe: true
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
    console.log("init", layout);
  }

  add = () => {
    this.setState({
      layout: _.concat(this.state.layout, {
        i: "a",
        w: 2,
        h: 1,
        minW: 2,
        maxW: 6,
        minH: 1,
        maxH: 2,
        x: 0,
        y: 1
      })
    });
  };

  generateDOM() {
    return _.map(this.state.layout, function(item, i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    return [
      {
        x: 0,
        y: 0,
        w: 3,
        h: 2,
        minW: 2,
        maxW: 6,
        minH: 1,
        maxH: 2,
        i: "0"
      },
      {
        x: 3,
        y: 1,
        w: 2,
        h: 1,
        minW: 2,
        maxW: 6,
        minH: 1,
        maxH: 2,
        i: "1"
      },
      {
        x: 3,
        y: 0,
        w: 2,
        h: 1,
        minW: 2,
        maxW: 6,
        minH: 1,
        maxH: 2,
        i: "2"
      }
    ];
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <div>
        <ReactGridLayout
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>

        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

module.exports = BasicLayout;

if (require.main === module) {
  require("../test-hook.jsx")(module.exports);
}
