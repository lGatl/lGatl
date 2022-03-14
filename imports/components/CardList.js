import React, { Component } from "react";

import { Img, Button, Checkbox, Dropdown, Popup, Segment } from "gat-ui-react";
import { cap } from "../8_libs/string";

const default_style = { marginLeft: 5, minWidth: 40, textAlign: "center" };

export default class CardList extends Component {
    render() {
        const {
            beDoner,
            openInfo,
            button_label,
            children,
            control,
            data,
            filterData,
            only_one,
            open,
            order,
            title,
            total,
            user_logged,
        } = this.props;
        const DATA = filterData ? data.filter(filterData) : data;
        return (
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 350,
                    minHeight: 500,
                    margin: 5,
                    alignItems: "center",
                    boxShadow: "1px 1px 5px 1px grey",
                    borderRadius: "10px",
                    paddingTop: 0,
                    overflow: "hidden",
                    backgroundColor: "rgb(245, 245, 250)",
                }}
            >
                {title ? (
                    <span
                        style={{
                            fontWeight: "bold",
                            backgroundColor: "rgba(0, 173, 193,1)",
                            color: "white",
                            width: "100%",
                            textAlign: "center",
                            padding: 5,
                        }}
                    >
                        {title}
                    </span>
                ) : (
                    ""
                )}
                {!children ? (
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingLeft: 2,
                            paddingRight: 82,
                            paddingTop: 5,
                            paddingBottom: 5,
                            boxSizing: "border-box",

                        }}
                    >
                        {order.map((ord, i) => (
                            <span
                                style={ord.style ? ord.style : default_style}
                                key={i}
                            >
                                {cap(ord.label || ord.name || ord)}
                            </span>
                        ))}
                    </div>
                ) : (
                    ""
                )}
                {children ? (
                    children
                ) : (
                    <div style={{ position: "relative", width: "100%" }}>
                        <div
                            style={{
                                boxShadow: "inset 1px 1px 5px 1px grey",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "100%",
                                pointerEvents: "none",
                            }}
                        ></div>
                        <div
                            style={{
                                overflow: "auto",
                                position: "relative",
                                height: !isNaN(total)?390:410,
                                width: "100%",
                            }}
                        >
                            {DATA.map((dat, i) => {
                                const the_doner = only_one&&dat.doner?Object.keys(dat.doner).reduce((total,don)=>{
                                    if(dat.doner&&dat.doner[don]===true){
                                        total = don
                                    }
                                    return total
                                },""):""
                                return (
                                    <div
                                    
                                        key={i}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            paddingLeft: 2,
                                            paddingRight: 5,
                                            paddingTop: 5,
                                            paddingBottom: 5,
                                            boxSizing: "border-box",
                                        }}
                                    >   
                                    <div
                                        onClick = {openInfo.bind(this,dat._id)}
                                        key={i}
                                        style={{
                                            cursor:'pointer',
                                            flex:1,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >   
                                        {order.map((ord, j) => {
                                            if (typeof ord === "string") {
                                                let val = dat[ord];
                                                const fund = control?.find(
                                                    (ctr) => ctr.name === ord
                                                );
                                                if (fund?.options) {
                                                    const fundOpt =
                                                        fund.options?.find(
                                                            (fo) =>
                                                                fo.value ===
                                                                dat[ord]
                                                        );
                                                    if (fundOpt) {
                                                        val = fundOpt.text;
                                                    }
                                                }
                                                switch (typeof val) {
                                                    case "number":
                                                        return (
                                                            <span
                                                                key={j}
                                                                style={
                                                                    default_style
                                                                }
                                                            >
                                                                {val}
                                                            </span>
                                                        );
                                                    case "string":
                                                        return (
                                                            <span
                                                                key={j}
                                                                style={
                                                                    default_style
                                                                }
                                                            >
                                                                {cap(val)}
                                                            </span>
                                                        );
                                                    default:
                                                        return (
                                                            <span key={j}>
                                                                {val?val:""}
                                                            </span>
                                                        );
                                                }
                                            } else {
                                                let val = dat[ord.name];
                                                const fund = control?.find(
                                                    (ctr) =>
                                                        ctr.name === ord.name
                                                );
                                                if (fund?.options) {
                                                    const fundOpt =
                                                        fund.options.find(
                                                            (fo) =>
                                                                fo.value ===
                                                                dat[ord.name]
                                                        );
                                                    if (fundOpt) {
                                                        val = fundOpt.text;
                                                    }
                                                }
                                                val = ord.calcul
                                                    ? ord.calcul(val)
                                                    : val;
                                                return (
                                                    <span
                                                        key={j}
                                                        style={
                                                            ord.style
                                                                ? ord.style
                                                                : default_style
                                                        }
                                                    >
                                                        {val}
                                                    </span>
                                                );
                                            }
                                        })}
                                        </div>
                                        {user_logged?.username ? 
                                            the_doner &&the_doner !==user_logged?.username?<span style={{ marginLeft: 5, width:82 }}>{cap(the_doner)}</span>:<Button
                                                style={{ marginLeft: 5, width:82 }}
                                                onClick={beDoner.bind(this, {
                                                    _id: dat._id,
                                                    [`doner.${user_logged.username}`]:
                                                        dat.doner &&
                                                        typeof dat.doner[
                                                            user_logged.username
                                                        ] === "boolean"
                                                            ? !dat.doner[
                                                                  user_logged
                                                                      .username
                                                              ]
                                                            : true,
                                                })}
                                            >
                                                {dat?.doner &&
                                                      dat.doner[
                                                          user_logged.username
                                                      ] === true
                                                    ? "Se retirer"
                                                    : "J'm'y colle"}
                                           </Button>
                                     : (
                                           the_doner?<span style={{marginLeft: 5,width:82, textAlign:'end'}}>{cap(the_doner)}</span>:<span style={{marginLeft: 5,width:82 }}></span>
                                        )}
                                    </div>

                                );
                            })}
                        </div>
                    </div>
                )}
                {!isNaN(total)?`Dépenses totales: ${total.toFixed(2)} €`:""}
                <Button style={{ width: "100%" }} onClick={open.bind(this)}>
                    {button_label}
                </Button>
            </div>
        );
    }
}
