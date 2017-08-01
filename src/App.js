import React, {
    Component
} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{
                    id: "idr1",
                    image: "",
                    caption: "row1"
                },
                {
                    id: "idr2",
                    image: "",
                    caption: "row2"
                },
                {
                    id: "idr3",
                    image: "",
                    caption: "row3"
                },
                {
                    id: "idr4",
                    image: "",
                    caption: "row4"
                }
            ],
            columns: [{
                    id: "idc1",
                    image: "",
                    caption: "col1",
                },
                {
                    id: "idc2",
                    image: "",
                    caption: "col2"
                },
                {
                    id: "idc3",
                    image: "",
                    caption: "col3",
                },
                {
                    id: "idc4",
                    image: "",
                    caption: "col4",
                }
            ]
        }
    }

    handleImageAdd(e, rows, cell) {
        // e.preventDefault();
        // console.log("handleImageAdd",e,rows, cell);
    }
    handleRowAdd(e, rows, cell) {
        var rowLenght = this.state.rows.length + 1;
        var rows_prev = this.state.rows;
        rows_prev.push({
            id: "idr" + rowLenght,
            image: "",
            caption: "row" + rowLenght
        })
        var rows_new = rows_prev
        this.setState({
            rows: rows_new
        });
        // console.log(rows_prev, rows_new, this.state);
        this.render()
    }
    handleColumnAdd(e, column, cell) {
        var columnLenght = this.state.columns.length + 1;
        var columns_prev = this.state.columns;
        columns_prev.push({
            id: "idc" + columnLenght,
            image: "",
            caption: "col" + columnLenght
        })
        var columns_new = columns_prev
        this.setState({
            columns: columns_new
        });
        this.render()
    }
    debug() {
        console.log(this.state);
    }
    render() {
        console.log(this.state.rows,this.state.columns);
        var columnsHTML = "";
        for (var i = 0; i < this.state.columns.length; i++) {
          columnsHTML = columnsHTML + '<td><input type="radio" id=""/></td>';
        }
        columnsHTML = columnsHTML.substring(0,columnsHTML.length-5)
        columnsHTML = columnsHTML.substring(4)
        console.log(columnsHTML);
        let row = this.state.rows.map(cell => {
            return <Table
            key = {cell.id}
            rows = {cell  }
            columnsHTML = {  columnsHTML  }
            onClick = {  this.handleImageAdd.bind(this, cell)  }
            />
        })
        return <div>
              <table>
                <tbody>{row}</tbody>
              </table>
              <button onClick = {this.handleRowAdd.bind(this)} > ++ </button>
              <button onClick = {this.handleColumnAdd.bind(this)} > ++c </button>
              <button onClick = {this.debug.bind(this)} > debug </button>
            </div>
    }
}
const TableInputRow = (props) => {
  console.log(props);
  var inputLayout =(<td> {'ee'} </td>)
return inputLayout
}
const Table = (props) => {
    // console.log(this.handleRowAdd, props);
    var inputRow = this.state.columns.map(cell => {
        return <TableInputRow
        key = {cell.id}
        rows = {cell}
        />
    })
    var rowLayout = ( <tr>
        <td><input type = "button"  onClick = {props.onClick}value = "+" / > </td>
        <td> {props.rows.id} </td>
        <td> {props.rows.caption} </td>
        {inputRow}
      </tr>
    );
    console.log(rowLayout)
    return rowLayout;
}

export default App;
