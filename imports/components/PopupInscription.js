import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cap } from "../8_libs/string";
import { genForm } from "../8_libs/genForm";

import { Img, Button, Checkbox, Dropdown, Segment } from "gat-ui-react";
import { InputV2 } from "./InputV2";
import PopupV2 from "./PopupV2";

import { ACTIONS } from "../6_actions/actions";

const default_style = { marginLeft: 5, width: 50, textAlign:"center" }

class PopupInscription extends Component {
	render() {
		const {
			resize,
			admin,
			username,
			titre,
			//Control
			control,
			//Data
			data,
			filterData,
			order,
			//Fnt
			change,
			close,
			removeMessage,
			updateMessage,
		} = this.props;
		// todo limit height
		const DATA = filterData ? data.filter(filterData) : data;
		return (
			<PopupV2
				style={{
						overflowY:resize.windowwidth<580?'scroll':'visible'
				}}
				stylecont={{}}
				open={true}
			>
			<div style={{display:"flex", flexDirection:"column"}}>
					<span
					style={{
						boxSizing:"border-box",
						fontWeight: "bold",
						backgroundColor: "rgba(0, 173, 193,1)",
						color: "white",
						width: "100%",
						textAlign: "center",
						borderRadius: "10px 10px 0px 0px",
						padding: 10,
					}}
				>
					{titre}
				</span>
				<div
					style={{
						flex: 1,
						padding: 5,
						paddingLeft:15,
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					<div
						style={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							flexWrap:"wrap",
							alignItem:"center",
							justiifyContent:"center"

						}}
					>
						{genForm(control,change)}
					</div>
					<div style={{ flex: 2 }}>
						<div style={{ margin: 5, minWidth: 200, display:"flex" }}>
							{order.map((ord, i) => (
								<span
									style={ord.style ? ord.style : default_style}
									key={i}
								>
									{cap(ord.label||ord.name || ord)}
								</span>
							))}
						</div>
					  <div style={{
								position:"relative"
							}}>
					  	<div style={{boxShadow: "inset 1px 1px 5px 1px grey", position:'absolute',top:0,left:0,height:'100%',width:'100%', pointerEvents:'none'}}></div>
					  
						<div
						id={this.props.id_liste}
							style={{
								overflow: "scroll",
								minHeight: 100,
								maxHeight:300,
								margin: 5,
								minWidth: 200,
								position:"relative"
							}}
						>
							{DATA.map((dat, i) => (
								<div key={i} style={{ display: "flex", alignItems: "center" }}>
									{order.map((ord, j) => {
										let val = dat[ord];
										const fund = control.find((ctr) => ctr.name === ord);
										if (fund?.options) {
											const fundOpt = fund.options.find(
												(fo) => fo.value === dat[ord]
											);
											if (fundOpt) {
												val = fundOpt.text;
											}
										}
										if(fund?.elt==="checkbox"){
											return <Checkbox
															key={j}
															name={ord}
															checked={val ?? false}
															onChange={
																updateMessage
																	? updateMessage.bind(this, {
																			_id: dat._id,
																			[ord]: !val,
																	  })
																	: () => {}
															}
														/>
										}
										if (typeof ord === "string") {
											switch (typeof val) {
												
												case "number":
													return (
														<span key={j} style={default_style}>
															{val}
														</span>
													);
												case "string":
													return (
														<span key={j} style={default_style}>
															{cap(val)}
														</span>
													);
												default:
													return <span key={j}>{val?val:""}</span>;
											}
										} else {
											let val = dat[ord.name];
											const fund = control.find((ctr) => ctr.name === ord.name);
											if (fund?.options) {
												const fundOpt = fund.options.find(
													(fo) => fo.value === dat[ord.name]
												);
												if (fundOpt) {
													val = fundOpt.text;
												}
											}
											return (
												<span key={j} style={ord.style?ord.style:default_style}>
													{cap(val)}
												</span>
											);
										}
									})}
									{admin && dat._id ? (
										<Button
											style={{
												backgroundColor: "rgba(198, 0, 57,1)",
											}}
											onClick={removeMessage.bind(this, dat._id)}
										>
											X
										</Button>
									) : (
										""
									)}
								</div>
							))}
						</div>
						</div>
					</div>
				</div>
				<div style={{ flexDirection: "column", display: "flex" }}></div>

				<Button onClick={close.bind(this)}>Fermer</Button>
			</div>
			
			</PopupV2>
		);
	}
}

function mapStateToProps(state) {
	return {
		// UsersPaques
		mail: state.userspaque.controle.mail,
		all_users_paque: state.userspaque.all,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			//usersMail
			controleUsersPaque: ACTIONS.UsersPaque.controle,
			addUsersPaque: ACTIONS.UsersPaque.add_state,
			rmUsersPaque: ACTIONS.UsersPaque.rm_state,
			getUsersPaque: ACTIONS.UsersPaque.get_state,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupInscription);
