/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Component } from 'react';
import { Table, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class TableContent extends Component {

    rememberLastRestaurant(restaurantName,currentRestaurantId) {
        sessionStorage.setItem('currentRestaurant',restaurantName);
        sessionStorage.setItem('currentRestaurantId',currentRestaurantId);
    }

    render() {
        const { loading } = this.props;
        return (
            <div>
                {loading &&  <Loader active inline='centered' />}
                {!loading && (
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Meal</Table.HeaderCell>
                            <Table.HeaderCell>Units</Table.HeaderCell>
                            <Table.HeaderCell>Calories</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.tableData.map((data, idx) =>
                            <Table.Row key={idx}>
                                <Table.Cell className="load-button"
                                    onClick={() => this.rememberLastRestaurant(data.food, data.id)}>
                                    <Link to={'/main/menus/' + data.id}>{data.food}</Link>
                                </Table.Cell>
                                <Table.Cell>{data.meal}</Table.Cell>
                                <Table.Cell>{data.units}</Table.Cell>
                                <Table.Cell>{data.calories}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                )}
            </div>
        );
    }
}
