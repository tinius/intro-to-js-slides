const basicCols = {

	newsRed: '#c70000',
	featureRed: '#880105',
	invertedRed: '#ff4e36',
	livePink: '#ffbac8',
	liveRed: '#ad0006',
	opinionOrange: '#e05e00',
	featureOrange: '#bd5318',
	invertedOrange: '#ff7f0f',
	backgroundOrange: '#fef9f5',
	sportBlue: '#0084c6',
	featureBlue: '#005689',
	invertedBlue: '#00b2ff',
	liveBlue: '#90dcff',
	cultureGold: '#a1845c',
	featureGold: '#6b5840',
	invertedGold: '#eacca0',
	liveGold: '#e7d4b9',
	lifestylePink: '#bb3b80',
	featurePink: '#7d0068',
	invertedPink: '#ffabdb',
	livePink: '#ffbac8',
	neutral7: '#121212',
	neutral20: '#333333',
	neutral46: '#767676',
	neutral60: '#999999',
	neutral86: '#dcdcdc',
	neutral92: '#eaeaea',
	neutral96: '#f6f6f6',
	neutral100: '#ffffff',
	highlightYellow: '#ffe500',
	guNews: '#ff4e36',
	guNewsKicker: '#cc0a11',
	guNewsHeadline: '#ff1921',
	guNewsBackground: '#f6f6f6',
	guSport: '#00b2ff',
	guSportKicker: '#056da1',
	guSportHeadline: '#1896d7',
	guSportBackground: '#e6f5ff',
	guLifestyle: '#ffabdb',
	guLifestyleKicker: '#951d7a',
	guLifestyleHeadline: '#df2770',
	guLifestyleBackground: '#ffe6ec',
	guOpinion: '#ff7f0f',
	guOpinionKicker: '#ed6300',
	guOpinionHeadline: '#f5be2c',
	guOpinionBackground: '#efefec',
	guArts: '#eacca0',
	guArtsKicker: '#9c835f',
	guArtsHeadline: '#ab8958',
	guArtsBackground: '#f2ebdc',
	guGrey1: '#676767',
	guGrey2: '#929297',
	guGrey3: '#b3b3b4',
	guGrey4: '#f6f6f6'
}

const chartCols = {
	guRed: basicCols.guNews,
	guDarkred: basicCols.guNewsKicker,
	guBlue: basicCols.guSport,
	guDarkblue: basicCols.guSportKicker,
	guOrange: basicCols.guOpinionHeadline,
	guDarkorange: basicCols.guOpinion
}

const aliases = {
	red : chartCols.guRed,
	darkred : chartCols.guDarkred,
	blue : chartCols.guBlue,
	darkblue : chartCols.guDarkblue,
	orange : chartCols.guOrange,
	darkorange : chartCols.guDarkorange
}


export default Object.assign({}, basicCols, chartCols, aliases)