import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Coinlist from '../Components/Coinlist';
import './Coins.css'




const Coins = (props) => {
  return (
    <div>
<div className="container">
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: "#0000FF" }}>
              <TableRow>
                {["Rank", "Coin", "Price", "24hr Change", " Total Volume", "Market Cap" ].map((head) => (
                  <TableCell
                    style={{ color: "black", fontWeight: "700", fontFamily: "Montserrat",
                    }}
                    key={head}
                    align={head === "Coin" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
         
          <div>
            {props.coins.map(coins => {
              return (
                <Coinlist coins={coins} key={coins.id}/>
              )
            }
              )}
          </div>
    </div>      
    </div>
  );
};

export default Coins