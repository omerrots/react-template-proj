const { useState, useEffect } = React;

export function AnimalList({ animals }) {
	console.log(animals);
	return (
		<section className="animal-list">
			<h2>Rare animals</h2>
			<table>
				<tbody>
					{animals.map((animal, idx) => {
						return (
							<tr key={idx}>
								<td>{animal.type}</td>
								<td>{animal.count}</td>
								<td>
									<a href={`https://www.google.com/search?q=${animal.type}`}>Search</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}
