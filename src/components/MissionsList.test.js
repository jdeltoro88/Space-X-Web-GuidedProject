import React from 'react';
import  { render } from '@testing-library/react';
import MissionsList from './MissionsList';




const missionsFixture = [
    mission_id: 'bogusid ',
    mission_name: 'my bogus mission'

]



test ('MissionsList renders', () => {
    render (<MissionList missions = {[]} />);
});

test ('MissionsList sows data when rendered with new missions', () => {
    const { queryAllByTestId , rerender } = render (<MissionsList missions = {[]} /> );

    expect(queryAllByTestId('mission')).toStrictEqual([]);
    expect(queryAllByTestId('mission')).toHaveLength([0);

        rerender (<MissionsList missions= {missionsFixture}/>);

        expect (queryAllByTestId('mission')).toHaveLength(1);


    });