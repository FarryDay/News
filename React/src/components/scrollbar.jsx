import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

function ScrollBar({ from, to, step, changeSize }) {
	function valuetext(value) {
		return `${value}`
	}

	return (
		<Box sx={{ width: 300 }}>
			<Slider
				aria-label='Quantity'
				defaultValue={4}
				getAriaValueText={valuetext}
				onChange={(event, value) => changeSize(value)}
				valueLabelDisplay='auto'
				step={step}
				marks
				min={from}
				max={to}
			/>
		</Box>
	)
}

export default ScrollBar
