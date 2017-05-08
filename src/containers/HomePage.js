import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getList} from '../actions/list'
import { Dimmer, Loader, Card, Rating } from 'semantic-ui-react'
import _ from 'lodash'
import moment from 'moment'
import ReactAudioPlayer from 'react-audio-player';

class HomePage extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(getList())
  }

  get items() {
    const {list} = this.props
    const {items} = list

    if(_.isEmpty(items)) {
      return null
    }

    return items.map((item) => {
      const duration =  parseInt(moment.duration(item.duration, 'seconds').asMinutes())
      const created = moment(item.created).from(new Date)

      return (
        <Card key={item.created}>
          <Card.Content>
            <Card.Header>
              <ReactAudioPlayer src={item.url} />
            </Card.Header>
            <Card.Meta>
              Duration: {duration} minutes | Created: {created}
            </Card.Meta>
            <Card.Description>
              {item.final_script}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={item.rating} maxRating={5} />
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    const {list} = this.props

    if(list.isFetching) {
      return (
        <Dimmer active>
          <Loader size="massive"/>
        </Dimmer>
      )
    }

    return (
      <div>
        <h3>Audio Recordings</h3>
        <Card.Group itemsPerRow={2}>
          {this.items}
        </Card.Group>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const mapStateToProps = (state) => {

  return {
    list: state.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
