import React from 'react'
import { Segment, Header, Grid, Button,Input } from 'semantic-ui-react'
import App from '../connection/app';
class SegmentExampleRaisedSegments extends React.Component{

    state={
        sale:{},
        industry:{}
      }

    handleChangesale=(field,e)=>{
        let sale={...this.state.sale};
        sale[field]=e.target.value;
        this.setState({sale});
    }
    handleChangeindustry=(field,e)=>{
        let industry={...this.state.industry};
        industry[field]=e.target.value;
        this.setState({industry});
    }
    onSubmitToSale = () => {
      var sale = this.state.sale;
      // console.log(sale.number);
      App.transferToSale(sale.address,sale.number)
    }

    onSubmitToIndustry = () => {
      var industry = this.state.industry;
      console.log(industry.address);
      App.transferToIndustry(industry.address,industry.number)

    }
    render(){
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                    <Segment.Group raised>
                        <Header textAlign='center' size='huge'>Token Transfer</Header>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12} textAlign='center'>
                                    <Header textAlign='center' size='large'>Transfer token to sale</Header>
                                    <Input style={{margin:'10px'}} fluid placeholder='Sale contract Address' onChange={(e)=>this.handleChangesale('address',e)} />
                                    <Input style={{margin:'10px'}} fluid placeholder='Number of Tokens' onChange={(e)=>this.handleChangesale('number',e)} />
                                    <Button style={{margin:'10px'}} onClick={this.onSubmitToSale} secondary inverted>Make Transaction</Button>
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12} textAlign='center'>
                                    <Header textAlign='center' size='large'>Transfer token to industry</Header>
                                    <Input style={{margin:'10px'}} fluid placeholder='Industry contract Address' onChange={(e)=>this.handleChangeindustry('address',e)} />
                                    <Input style={{margin:'10px'}} fluid placeholder='Number of Tokens' onChange={(e)=>this.handleChangeindustry('number',e)} />
                                    <Button style={{margin:'10px'}} onClick={this.onSubmitToIndustry} secondary inverted>Make Transaction</Button>
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
            </Grid>

          );

    }
}

export default SegmentExampleRaisedSegments
