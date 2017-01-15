import React    from 'react';
import axios    from 'axios';
import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }
    }

    componentDidMount(){
        this.getContent();     
    }

    render() {
        let page = this.state.content;
       
        return (
            <div>
            {page ?
                <div>
                    <h4>Homepage Template</h4>
                    <h1>{page.title.rendered}</h1>
                    <p>{page.acf.content}</p>

                    <Link activeClassName='active' to='/about'>About</Link> <br />
                    <Link activeClassName='active' to='/gallery'>Gallery</Link> 
                </div>      
            :''}
            </div>
        );
    }

    getContent(){
        axios.get('http://andreypokrovskiy.com/projects/wp-api/wp-json/wp/v2/pages').then((response) => {
            response.data.map((page, i)=>{
                console.log(page.slug)
                if(page.slug == 'homepage'){
                    this.setState({content: page});
                }
            })
        }).catch((error) => {
            console.dir(error);
        });
    }
}

export default Home;
