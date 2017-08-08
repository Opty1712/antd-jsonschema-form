import React, { Component } from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DatePicker } from 'antd';

import Form from '../form/index.jsx';
import TestTabs from './tabtest/TabTest'

const schema = {

  "type": "object",
  "properties": {


  }

}


const uiSchema = {
  "xType": "grid",
  "children": [{
    "xType": "row",
    "gutter": 16,
    "children": [{
      "xType": "col",
      "span": 18
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "date-range",
        "fieldPath": "/fields/dateRange"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/groupNo"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/empNo"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/empName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/beforeName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/enName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/zhName"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/pinYin"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/enName2"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/IDNumber"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/sex"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "date-time",
        "fieldPath": "/fields/birthDay"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "updown",
        "fieldPath": "/fields/age"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/country"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/maritalStatus"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/nation"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/political"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/joinDate"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "text",
        "fieldPath": "/fields/household"
      }
    }, {
      "xType": "col",
      "span": 6,
      "children": {
        "xType": "field",
        "widget": "textarea",
        "fieldPath": "/bloodType"
      }
    }]

  }]

}


function sleep(time) {

  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve();
    }, time)

  })

}

/**
 * Demo
 */
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        "/fields/birthDay": "2017-07-19 10:10:10",
        "/fields/dateRange": {
          beginDate: "2017-07-07",
          endDate: "2017-07-07"
        }
      },
      edit: true
    }
  }


  async changeFormData() {
    await sleep(1000);
    this.setState({
      formData: {

      }
    }, () => {
      console.log(this.state.formData, "setFormData");
    })
  }

  render() {
    const { edit, formData } = this.state;
    console.log('test', 'test');
    return <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        edit={edit}
        formData={formData}
        onChange={(e, newValue, newData, fieldPath) => {
          this.setState({
            formData: newData
          }, () => {
            console.log(this.state.formData, "change");
          });
        }}
        onBlur={(e, newValue, newData, fieldPath) => {
          console.log(newData, 'blur');
        }}
      />
      {edit ? <div>
        <input type="button" onClick={() => {
          this.setState({
            edit: false
          })
        }} value="ok" />
        <input type="button" onClick={() => {
          this.setState({
            formData: (this.formDataCache || {}),
            edit: false
          })
        }} value="cancel" />
      </div> : <div>
          <input type="button" onClick={() => {
            this.formDataCache = this.state.formData;
            this.setState({
              edit: true
            })
          }} value="edit" />
        </div>}
      <div>
        <input type="button" onClick={() => {
          this.changeFormData();
        }} value="setEmptyValueAsync" />
      </div>
      <TestTabs />
    </div>
  }

}

render((
  <div>
    <div>test</div>
    <Demo />
  </div>
), document.getElementById("main"));