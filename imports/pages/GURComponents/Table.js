import React, {Component} from "react";
import { Table } from "gat-ui-react";

import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class TableComponent extends Component {
	render(){
		return (
			<div>
				<Titre2>Table</Titre2><br/>
				Compact Table easy to generate and change style. <br/>
				<Titre3>Exemple :</Titre3>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}	
					</PCode>
					<Table
						style = {{flex:1}}
						ligne1sur2
						border_line
						border_table

						s_col = {[
							{col:0,style:{flex:2,color:"green"}},
							{col:1,style:{flex:1}},
							{col:2,style:{flex:1}},
						]}
						donnees={[
							{ thead:[
								["Header Col 1","Header Col 2","Header Col 3"]
								]
							},
							{ tbody:[
								["Row 1 Col 1","Row 1 Col 2","Row 1 Col 3"],
								["Row 2 Col 1","Row 2 Col 2","Row 2 Col 3"],
								["Row 3 Col 1","Row 3 Col 2","Row 3 Col 3"],
								[<div>Row 4 Col 1 in div</div>,"Row 4 Col 2","Row 4 Col 3"]
								]
							}
						]}
					/>
				</ExampleFrame>
				<Titre3>Parameter</Titre3><br/>
				<Code>donnees</Code> : array of objects with the key thead or tbody <br/>
				<ul>
					<li><Code>thead</Code> : 2 dimensions array -  Each array in the first is a row and each elements in this row is the content of the cell.(it can be string or component)</li>
					<li><Code>tbody</Code> : 2 dimensions array -  Each array in the first is a row and each elements in this row is the content of the cell.(it can be string or component)</li>
				</ul>
				<Titre3>Optional Parameter</Titre3><br/>
				<Code>style</Code> : object - Change the style of this Table, it will crush the default. <br/>
				<Code>ligne1sur2</Code> : boolean - grew on background of one in two rows <br/>
				<Code>border_line</Code> : boolean - display rows border.<br/>
				<Code>border_table</Code> : boolean - display tables border.<br/>
				<Code>border_cell</Code> : boolean - display cells border.<br/>
				<Code>s_col</Code> : array of object of 2 parameters :
				<ul>
					<li><Code>col</Code> : integer -  choose a column.</li>
					<li><Code>style</Code> : object - you can precise the style of choosen column.</li>
				</ul>
				
				
			</div>	
		)
		
	}
}

const EXEMPLE = `import React, {Component} from "react";
import { Table } from "gat-ui-react";

export default class TableExemple extends Component {
  render(){
    return (
      <Table
        style = {{flex:1}}
        ligne1sur2
        border_line
        border_table
        s_col = {[
              {col:0,style:{flex:2,color:"green"}},
              {col:1,style:{flex:1}},
              {col:2,style:{flex:1}},
            ]}
        donnees={[
          { thead:[
            ["Header Col 1","Header Col 2","Header Col 3"]
            ]
          },
          { tbody:[
            ["Row 1 Col 1","Row 1 Col 2","Row 1 Col 3"],
            ["Row 2 Col 1","Row 2 Col 2","Row 2 Col 3"],
            ["Row 3 Col 1","Row 3 Col 2","Row 3 Col 3"],
            [<div>Row 4 Col 1</div>,"Row 4 Col 2","Row 4 Col 3"]
            ]
          }
        ]}
      />
    );
  }
}`
