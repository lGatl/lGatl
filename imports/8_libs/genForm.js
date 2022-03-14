import React, { Component, Fragment } from "react";
import { Img, Button, Checkbox, Dropdown, Popup, Segment } from "gat-ui-react";
import {InputV2 } from "../components/InputV2";
import { DropdownV2 } from "../components/DropdownV2";
export const genForm = (arr,change) => arr.map((ctrl, i) => {
							if(typeof ctrl === "object" && ctrl instanceof Array){
							return <div key={i} style={{display:"flex"}}>{genForm(ctrl,change)}	</div>
							}else{
								switch (ctrl.elt) {
								case "dropdown":
									return (
										<DropdownV2 key={i} {...ctrl} onChange={change.bind(this)} />
									);

								case "input":
									return (
										<InputV2 key={i} {...ctrl} onChange={change.bind(this)} />
									);
								case "checkbox":
									return (
										<Checkbox key={i} {...ctrl} onChange={change.bind(this)} />
									);
								case "button":
									return <Button key={i} {...ctrl}></Button>;
								default:
									return <div key={i}>mauvais type</div>;
							}
							}
						})

