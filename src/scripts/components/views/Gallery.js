import React    from 'react';
import axios    from 'axios';

class Gallery extends React.Component {
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
            {this.state.content ?
                <div>
                    <h4>Gallery Template</h4>
                    <h1>{page.title.rendered}</h1>
                    <p>{page.acf.content}</p>
                </div>      
            :''}
            </div>
        );
    }

    getContent(){
        axios.get('http://andreypokrovskiy.com/projects/wp-api/wp-json/wp/v2/pages').then((response) => {
            response.data.map((page, i)=>{
                if(`/${page.slug}`== this.props.location.pathname){
                    this.setState({content: page});
                }
            })
        }).catch((error) => {
            console.dir(error);
        });
    }
}

export default Gallery;
