const parse = require('../lib');

var svg = `
        <svg width="828" height="128" class="js-calendar-graph-svg">
					<g transform="translate(10, 20)"
						data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:24511162,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/users/Cipher-Coder/contributions&quot;}}"
						data-hydro-click-hmac="a936b5f9afb917cc3e38789f909b25b84bb1ca8fbb08e7a6b19644970c6c3fef">
						<g transform="translate(0, 0)">
							<rect width="11" height="11" x="16" y="0" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="2" data-date="2020-02-02" />
							<rect width="11" height="11" x="16" y="15" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="1" data-date="2020-02-03" />
							<rect width="11" height="11" x="16" y="30" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="1" data-date="2020-02-04" />
							<rect width="11" height="11" x="16" y="45" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="2" data-date="2020-02-05" />
							<rect width="11" height="11" x="16" y="60" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="0" data-date="2020-02-06" />
							<rect width="11" height="11" x="16" y="75" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="1" data-date="2020-02-07" />
							<rect width="11" height="11" x="16" y="90" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="2" data-date="2020-02-08" />
						</g>
						<g transform="translate(16, 0)">
							<rect width="11" height="11" x="15" y="0" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="0" data-date="2020-02-09" />
							<rect width="11" height="11" x="15" y="15" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="1" data-date="2020-02-10" />
							<rect width="11" height="11" x="15" y="30" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="1" data-date="2020-02-11" />
							<rect width="11" height="11" x="15" y="45" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="2" data-date="2020-02-12" />
							<rect width="11" height="11" x="15" y="60" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="1" data-date="2020-02-13" />
							<rect width="11" height="11" x="15" y="75" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="0" data-date="2020-02-14" />
							<rect width="11" height="11" x="15" y="90" fill="var(--color-calendar-graph-day-bg)" class="day" data-count="0" data-date="2020-02-15" />
						</g>
            </g>
        </svg>
`;

console.log(parse(svg));
// {
//     "last_year": 5,
//     "longest_streak": 1,
//     "longest_streak_range": ["2019-11-11T00:00:00.000Z", "2019-11-11T00:00:00.000Z"],
//     "current_streak": 0,
//     "current_streak_range": ["2019-11-16T00:00:00.000Z", "2019-11-13T00:00:00.000Z"],
//     "weeks": [
//         [{
//             "fill": "#eee",
//             "date": "2019-11-03T00:00:00.000Z",
//             "count": 0,
//             "level": 0
//         },
//         ...
//         {
//             "fill": "#eee",
//             "date": "2019-11-09T00:00:00.000Z",
//             "count": 0,
//             "level": 0
//         }]
//     ],
//     "days": [{
//         "fill": "#eee",
//         "date": "2019-11-03T00:00:00.000Z",
//         "count": 0,
//         "level": 0
//     },
//     ...
//     {
//         "fill": "#eee",
//         "date": "2019-11-16T00:00:00.000Z",
//         "count": 0,
//         "level": 0
//     }],
//     "last_contributed": "2019-11-13T00:00:00.000Z"
// }
