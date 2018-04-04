import React from 'react';


const Search = ({searchField, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--blue bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={searchChange} 
			/>
		</div>
	);
}


export default Search;