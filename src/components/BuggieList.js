import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBuggy } from '../actions/index';
import axiosWithAuth from "../utils/axiosWithAuth";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import disney_castle from "../imgs/disney_castle.png";
        

function BuggieList(props) {

/////////////////////////////////////////////////////////////////////////////////////////////////
    const[buggies, setBuggies] = useState([]);
    const [ upBuggy, setUpBuggy ] = useState({is_double: 0, is_available: 1, location: ''});
    const { id } = useParams();


    useEffect(() => {
        const selectedBuggy = props.buggies.find(buggy => 
            `${buggy.id}` === id);
            if(selectedBuggy){
                setUpBuggy(selectedBuggy)};
    }, [props.buggies, id]);

    const editBuggy = (buggy, upBuggy) => {

        setUpBuggy({ ...buggy, [buggy.is_available]: 1});

        axiosWithAuth()
        .put(`https://obscure-scrubland-65975.herokuapp.com/api/buggies/${buggy.id}`, upBuggy)
        .then(response => {
            props.setBuggies(response.data);
            props.history.push(`/welcome`);
        })
        .catch(error => console.log('could not edit', error))
    };

///////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() =>{
        axiosWithAuth().get("https://obscure-scrubland-65975.herokuapp.com/api/buggies")
            .then((response) =>{
                console.log(response)
                setBuggies(response.data)    
        })
    }, []);

    
    const ifCheck = (item) =>{
        if(item === 1){
            return "Yes"
        } else {
            return "No"
        }
    }

    const sizeCheck = (item) =>{
        if(item === 1){
            return "Double"
        } else {
            return "Single"
        }
    }

    const ifLocation = (item) =>{
        if(item === "jungleCruise"){
            return "Jungle Cruise"
        } else if(item === "bigThunder"){
            return "Big Thunder"
        } else if(item === "splashMountain"){
            return "Splash Mountain"
        } else if(item === "smugglersRun"){
            return "Smuggler's Run"
        } else if(item === "minniesHouse"){
            return "Minnies House"
        } else if(item === "smallWorld"){
            return "It's A Small World"
        } else if(item === "peterPansFlight"){
            return "Peter Pan's Flight"
        } else if(item === "spaceMountain"){
            return "Space Mountain"
        } else{
            return "Test"
        }
    }

    const infoStyle = {
        textAlign: 'center',
        padding: '2%'
    }

    const buttonStyle = {
        width: '55%',
        borderRadius: '10px',
        padding: '2%',
        margin: '2%'    
    }

    const imgStyle= {
        display: 'grid',
        minHeight: '100%',
        alignItems: 'center',
        backgroundImage: `url(${disney_castle})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        //backgroundAttachment: 'fixed'
    }

    return (
        <div style={imgStyle}>
            {buggies.map(buggy => {
                // const {id, available, is_double, location} = buggy;
                return (
                    <Card key={buggy.id} style={{margin: '0 auto', padding: '2%'}}>
                        <CardBody style={{backgroundColor: "gold", borderRadius: '10px'}}>
                            <CardText style={infoStyle}>Available: {ifCheck(buggy.available)}</CardText>
                            <CardText style={infoStyle}>Size: {sizeCheck(buggy.is_double)}</CardText>
                            <CardText style={infoStyle}>Location: {ifLocation(buggy.location)}</CardText>
                            <CardBody style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Button style={buttonStyle} onClick={() => editBuggy(buggy)}>Borrow</Button>
                                <Button style={buttonStyle} onClick={() => props.deleteBuggy(buggy.id)}>Delete</Button>
                            </CardBody>
                        </CardBody>
                    </Card>
                )
            })}

        </div>
    )
}
const mapStateToProps = state => {
	return {
        buggies: state.buggies,
        buggy: state.buggy
	};
};

export default connect(
	mapStateToProps,
	{ deleteBuggy }
)(BuggieList);

