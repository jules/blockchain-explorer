import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default ()=>{
	return(
		<Menu style={{ marginTop:'30px' }}>
			<Link route="/">
				 <a className="item">
				 	Eth block explorer
				 </a>
			</Link>
			<Menu.Menu position="right">
				<Link route="/">
				 	<a className="item">
				 		
				 	</a>
				</Link>
				<Link route="/">
				 	<a className="item">
				 		+
				 	</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};